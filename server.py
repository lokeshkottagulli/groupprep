import argparse
from contextlib import closing
import hashlib
import hmac
from http.cookies import CookieError, SimpleCookie
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import json
from pathlib import Path
import re
import secrets
import sqlite3
import time
from urllib.parse import urlsplit


ROOT = Path(__file__).resolve().parent
SESSION_COOKIE = 'groupprep_session'
SESSION_AGE = 7 * 24 * 60 * 60
PASSWORD_ITERATIONS = 600_000
EMAIL_PATTERN = re.compile(r'[^@\s]+@[^@\s]+\.[^@\s]+')
TOKEN_PATTERN = re.compile(r'[A-Za-z0-9_-]{43}')


class AccountError(Exception):
    def __init__(self, status, message):
        super().__init__(message)
        self.status = status


def password_hash(password, salt):
    return hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt, PASSWORD_ITERATIONS)


def token_hash(token):
    return hashlib.sha256(token.encode('ascii')).digest()


def initialize_database(path):
    path.parent.mkdir(parents=True, exist_ok=True)
    with closing(sqlite3.connect(path)) as db:
        db.executescript('''
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                salt BLOB NOT NULL,
                password_hash BLOB NOT NULL
            );
            CREATE TABLE IF NOT EXISTS sessions (
                token_hash BLOB PRIMARY KEY,
                user_id INTEGER NOT NULL REFERENCES users(id),
                expires_at INTEGER NOT NULL
            );
        ''')


class GroupPrepHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT / 'dist'), **kwargs)

    def end_headers(self):
        self.send_header('X-Content-Type-Options', 'nosniff')
        super().end_headers()

    def respond(self, status, data, cookie=None):
        payload = json.dumps(data).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Cache-Control', 'no-store')
        self.send_header('Content-Length', str(len(payload)))
        if cookie is not None:
            self.send_header('Set-Cookie', cookie)
        self.end_headers()
        self.wfile.write(payload)

    def is_local_host(self):
        port = self.server.server_port
        return self.headers.get('Host', '').lower() in {f'127.0.0.1:{port}', f'localhost:{port}'}

    def do_GET(self):
        if not self.is_local_host():
            self.send_error(403)
            return
        route = urlsplit(self.path).path
        if not route.startswith('/api/'):
            super().do_GET()
            return
        if route != '/api/auth/session':
            self.respond(404, {'error': 'Account endpoint not found.'})
            return
        with closing(sqlite3.connect(self.server.database)) as db:
            user = self.current_user(db)
        self.respond(200, {'user': user})

    def do_HEAD(self):
        if not self.is_local_host():
            self.send_error(403)
            return
        super().do_HEAD()

    def do_POST(self):
        routes = {
            '/api/auth/signup': self.signup,
            '/api/auth/login': self.login,
            '/api/auth/logout': self.logout,
        }
        handler = routes.get(urlsplit(self.path).path)
        if not handler:
            self.respond(404, {'error': 'Account endpoint not found.'})
            return
        try:
            origin = self.headers.get('Origin')
            if not self.is_local_host() or (origin and origin != f"http://{self.headers['Host']}"):
                raise AccountError(403, 'Open GroupPrep on the local server to manage your account.')
            data = self.read_json()
            with closing(sqlite3.connect(self.server.database)) as db, db:
                status, user, cookie = handler(db, data)
        except AccountError as error:
            self.respond(error.status, {'error': str(error)})
        else:
            self.respond(status, {'user': user}, cookie)

    def read_json(self):
        if self.headers.get_content_type() != 'application/json':
            raise AccountError(415, 'Send account details as JSON.')
        try:
            length = int(self.headers.get('Content-Length', '0'))
            if not 0 < length <= 8192:
                raise ValueError
            data = json.loads(self.rfile.read(length).decode('utf-8'))
            if not isinstance(data, dict) or any(not isinstance(value, str) for value in data.values()):
                raise ValueError
            for value in data.values():
                value.encode('utf-8')
            return data
        except (ValueError, RecursionError) as exc:
            raise AccountError(400, 'Enter valid account details.') from exc

    def session_token(self):
        try:
            cookie = SimpleCookie(self.headers.get('Cookie', ''))
        except CookieError:
            return None
        session = cookie.get(SESSION_COOKIE)
        return session.value if session and TOKEN_PATTERN.fullmatch(session.value) else None

    def current_user(self, db):
        token = self.session_token()
        if not token:
            return None
        row = db.execute('''
            SELECT users.name, users.email FROM users
            JOIN sessions ON sessions.user_id = users.id
            WHERE sessions.token_hash = ? AND sessions.expires_at > ?
        ''', (token_hash(token), int(time.time()))).fetchone()
        return {'name': row[0], 'email': row[1]} if row else None

    def clear_session(self, db):
        token = self.session_token()
        if token:
            db.execute('DELETE FROM sessions WHERE token_hash = ?', (token_hash(token),))

    def start_session(self, db, user_id):
        self.clear_session(db)
        token = secrets.token_urlsafe(32)
        now = int(time.time())
        db.execute('DELETE FROM sessions WHERE expires_at <= ?', (now,))
        db.execute('INSERT INTO sessions VALUES (?, ?, ?)', (token_hash(token), user_id, now + SESSION_AGE))
        return self.session_cookie(token, SESSION_AGE)

    @staticmethod
    def session_cookie(token, max_age):
        return f'{SESSION_COOKIE}={token}; Path=/; Max-Age={max_age}; HttpOnly; SameSite=Strict'

    def signup(self, db, data):
        name = data.get('name', '').strip()
        email = data.get('email', '').strip().lower()
        password = data.get('password', '')
        if not 1 <= len(name) <= 80:
            raise AccountError(400, 'Enter a name between 1 and 80 characters.')
        if len(email) > 254 or not EMAIL_PATTERN.fullmatch(email):
            raise AccountError(400, 'Enter a valid email address.')
        if not 15 <= len(password) <= 128:
            raise AccountError(400, 'Use a password between 15 and 128 characters.')
        salt = secrets.token_bytes(16)
        cursor = db.execute('''
            INSERT INTO users (name, email, salt, password_hash) VALUES (?, ?, ?, ?)
            ON CONFLICT(email) DO NOTHING
        ''', (name, email, salt, password_hash(password, salt)))
        if not cursor.rowcount:
            raise AccountError(409, 'That email already has an account. Sign in to continue.')
        return 201, {'name': name, 'email': email}, self.start_session(db, cursor.lastrowid)

    def login(self, db, data):
        email = data.get('email', '').strip().lower()
        password = data.get('password', '')
        if not 1 <= len(password) <= 128 or len(email) > 254:
            raise AccountError(401, 'The email or password is incorrect.')
        row = db.execute('SELECT id, name, salt, password_hash FROM users WHERE email = ?', (email,)).fetchone()
        salt, expected = row[2:] if row else (bytes(16), bytes(32))
        matches = hmac.compare_digest(password_hash(password, salt), expected)
        if not row or not matches:
            raise AccountError(401, 'The email or password is incorrect.')
        return 200, {'name': row[1], 'email': email}, self.start_session(db, row[0])

    def logout(self, db, _data):
        self.clear_session(db)
        return 200, None, self.session_cookie('', 0)


def main():
    parser = argparse.ArgumentParser(description='Run the GroupPrep site and account API locally.')
    parser.add_argument('--port', type=int, default=8000)
    parser.add_argument('--database', type=Path, default=ROOT / '.groupprep' / 'accounts.sqlite3')
    options = parser.parse_args()
    with ThreadingHTTPServer(('127.0.0.1', options.port), GroupPrepHandler) as server:
        server.database = options.database.resolve()
        initialize_database(server.database)
        print(f'GroupPrep is running at http://127.0.0.1:{server.server_port}/', flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass


if __name__ == '__main__':
    main()
