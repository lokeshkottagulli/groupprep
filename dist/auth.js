const accountGuest = document.querySelector('#account-guest');
const accountMember = document.querySelector('#account-member');
const accountName = document.querySelector('#account-name');
const accountLogout = document.querySelector('#account-logout');
const accountHeaderError = document.querySelector('#account-header-error');
let accountUser;

async function requestAccount(action, fields) {
  const options = fields ? {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fields)
  } : {};
  let response;
  try {
    response = await fetch(`/api/auth/${action}`, { ...options, cache: 'no-store' });
  } catch {
    throw new Error('Could not reach the account server. Try again.');
  }
  if (!response.headers.get('content-type')?.includes('application/json')) {
    throw new Error('Sign-in and registration are unavailable on this server.');
  }
  const data = await response.json();
  if (!response.ok) throw new Error(data.error);
  return data.user;
}

function updateAccount(user) {
  accountUser = user;
  accountGuest.hidden = Boolean(user);
  accountMember.hidden = !user;
  accountName.textContent = user?.name ?? '';
  accountName.title = accountName.textContent;
  accountHeaderError.textContent = '';
}

async function initializeAccount(refreshPage) {
  accountLogout.addEventListener('click', async () => {
    accountLogout.disabled = true;
    accountHeaderError.textContent = '';
    try {
      updateAccount(await requestAccount('logout', {}));
      if (location.hash === '#signin') refreshPage();
      else location.hash = 'signin';
    } catch (error) {
      accountHeaderError.textContent = error.message;
    } finally {
      accountLogout.disabled = false;
    }
  });

  try {
    updateAccount(await requestAccount('session'));
  } catch {
    updateAccount(null);
  }
  refreshPage();
}

function accountPage(action) {
  const registering = action === 'signup';
  const title = registering ? 'Create your account' : 'Sign in to GroupPrep';
  return `<section class="account-page" aria-labelledby="account-title">
    <aside class="account-intro">
      <p class="account-eyebrow">GroupPrep</p>
      <p class="account-intro-title">Prepare for your<br> <span>APPSC exams.</span></p>
      <p>Build a study plan, practise by topic, and take timed mock tests.</p>
    </aside>
    <div class="account-panel">
      <h1 id="account-title">${accountUser ? 'Your account' : title}</h1>
      ${accountUser === undefined ? '<p class="account-status" role="status">Checking your session…</p>' : accountUser ? `
        <p class="account-status" id="account-identity"></p>
        <a class="button" href="#home">Continue to GroupPrep</a>` : `
        <form class="account-form" method="post" action="/api/auth/${action}" data-action="${action}">
          ${registering ? `<div class="account-field">
            <label for="account-form-name">Full name</label>
            <input id="account-form-name" name="name" autocomplete="name" maxlength="80" required>
          </div>` : ''}
          <div class="account-field">
            <label for="account-email">Email address</label>
            <input type="email" id="account-email" name="email" autocomplete="username" maxlength="254" required>
          </div>
          <div class="account-field">
            <label for="account-password">Password</label>
            <div class="account-password-wrap">
              <input type="password" id="account-password" name="password" autocomplete="${registering ? 'new-password' : 'current-password'}" maxlength="128" ${registering ? 'minlength="15" aria-describedby="account-password-hint"' : ''} required>
              <button class="account-password-toggle" type="button" aria-controls="account-password">Show</button>
            </div>
            ${registering ? '<p class="account-hint" id="account-password-hint">Use at least 15 characters.</p>' : ''}
          </div>
          <p class="account-error" role="alert"></p>
          <button class="button account-submit" type="submit">${registering ? 'Create account' : 'Sign in'}</button>
        </form>
        <p class="account-switch">${registering ? 'Already have an account? <a href="#signin">Sign in</a>' : 'New to GroupPrep? <a href="#signup">Create an account</a>'}</p>`}
    </div>
  </section>`;
}

function bindAccountPage(container) {
  const identity = container.querySelector('#account-identity');
  if (identity) identity.textContent = `${accountUser.name} · ${accountUser.email}`;
  const form = container.querySelector('.account-form');
  if (!form) return;

  const password = form.elements.password;
  const toggle = form.querySelector('.account-password-toggle');
  toggle.addEventListener('click', () => {
    const visible = password.type === 'password';
    password.type = visible ? 'text' : 'password';
    toggle.textContent = visible ? 'Hide' : 'Show';
  });

  const feedback = form.querySelector('.account-error');
  const submit = form.querySelector('.account-submit');
  const label = submit.textContent;
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (submit.disabled) return;
    const fields = Object.fromEntries(new FormData(form));
    submit.disabled = true;
    submit.textContent = form.dataset.action === 'signup' ? 'Creating account…' : 'Signing in…';
    feedback.textContent = '';
    try {
      updateAccount(await requestAccount(form.dataset.action, fields));
      if (form.isConnected) location.hash = 'home';
    } catch (error) {
      feedback.textContent = error.message;
    } finally {
      submit.disabled = false;
      submit.textContent = label;
    }
  });
}
