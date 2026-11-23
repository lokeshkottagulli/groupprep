const main = document.querySelector('main');
const navLinks = [...document.querySelectorAll('[data-page]')];
const questionBank = topics.flatMap(topic => topic.questions);
const storageKey = 'groupprep-history-v1';
let attempt = null;
let result = null;
let timer = null;
let activePage = '';
let studyHistory = readHistory();

function readHistory() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function dateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function stats() {
  const answered = studyHistory.reduce((sum, entry) => sum + entry.answered, 0);
  const correct = studyHistory.reduce((sum, entry) => sum + entry.correct, 0);
  return { answered, accuracy: answered ? `${Math.round(correct / answered * 100)}%` : '—' };
}

function statStrip(entries) {
  return `<div class="stats">${entries.map(([icon, value, label]) => `
    <div class="stat"><span class="stat-icon" aria-hidden="true">${icon}</span><div><strong>${value}</strong><small>${label}</small></div></div>`).join('')}</div>`;
}

function topicCards(items) {
  return items.map(topic => `
    <a class="card" href="#topic/${topic.id}">
      <div class="card-heading"><span class="topic-icon" data-tone="${topic.tone}" aria-hidden="true">${topic.icon}</span><h3>${topic.name}</h3></div>
      <p>${topic.description}</p><span class="meta">${topic.questions.length} questions</span>
    </a>`).join('');
}

function homePage() {
  const { answered, accuracy } = stats();
  const dailyDone = studyHistory.some(entry => entry.kind === 'daily' && entry.day === dateKey());
  return `
    <section class="hero" aria-labelledby="home-title">
      <div>
        <span class="eyebrow">Group exam preparation</span>
        <h1 id="home-title">Prepare for your<br><span>Group exam.</span></h1>
        <p>Practice topic-wise MCQs, review every answer, and build confidence with timed mock tests.</p>
        <div class="button-row"><a class="button lime" href="#practice">Explore topics</a><a class="button hero-secondary" href="#mocks">Take a mock test</a></div>
      </div>
      <div class="hero-art" aria-hidden="true"><div class="orbit"></div><span class="spark one">✦</span><span class="spark two">✦</span><span class="spark three">✧</span><div class="art-sheet"><i></i><i></i><i></i><i></i></div><div class="art-book">Study<br>notes</div></div>
    </section>
    ${statStrip([['▤', questionBank.length, 'Practice questions'], ['✓', answered, 'Questions answered'], ['◎', accuracy, 'Your accuracy']])}
    <section class="section" aria-labelledby="topics-title">
      <div class="section-heading"><div><h2 id="topics-title">Practice by topic</h2><p>Pick a subject to start a short practice set.</p></div><a class="text-link" href="#practice">All topics</a></div>
      <div class="grid">${topicCards(topics)}</div>
    </section>
    <section class="section daily" aria-labelledby="daily-title"><div><h2 id="daily-title">Daily question</h2><p>One question to keep your preparation moving.</p></div><a class="button" href="#daily">${dailyDone ? 'Revisit today’s question' : 'Try today’s question'}</a></section>`;
}

function practicePage() {
  return `<header class="page-heading"><h1>Topic-wise practice</h1><p>Choose a topic and get an explanation after each answer.</p></header>
    <input class="search" id="topic-search" type="search" placeholder="Search topics" aria-label="Search topics" autocomplete="off">
    <div class="grid" id="topic-list">${topicCards(topics)}</div>`;
}

function filterTopics() {
  const search = document.querySelector('#topic-search');
  const list = document.querySelector('#topic-list');
  search.addEventListener('input', () => {
    const query = search.value.trim().toLowerCase();
    const items = topics.filter(topic => `${topic.name} ${topic.description}`.toLowerCase().includes(query));
    list.innerHTML = items.length ? topicCards(items) : '<p class="empty" role="status">No matching topics.</p>';
  });
}

function mockPage() {
  return `<header class="page-heading"><h1>Mock tests</h1><p>Practice answering questions under a time limit.</p></header>
    <section class="surface"><h2>Mixed mini mock</h2><p>12 questions across all six subjects. You have 10 minutes. Skip questions if you need to and review every answer at the end.</p><div class="button-row"><a class="button" href="#mock">Start timed test</a></div></section>`;
}

function progressPage() {
  const { answered, accuracy } = stats();
  return `<header class="page-heading"><h1>Your progress</h1><p>Completed sessions are saved in this browser.</p></header>
    ${statStrip([['▤', studyHistory.length, 'Completed sessions'], ['✓', answered, 'Questions answered'], ['◎', accuracy, 'Accuracy on answered questions']])}
    <section class="section surface"><h2>Recent activity</h2>${studyHistory.length ? `<ul class="history">${studyHistory.slice(0, 15).map(entry => `
      <li><div><strong>${titleFor(entry.kind)}</strong><small>${new Date(entry.finished).toLocaleDateString(undefined, { dateStyle: 'medium' })}</small></div><strong>${entry.correct} / ${entry.total}</strong></li>`).join('')}</ul>` : '<p>Finish a practice set or mock test to see your scores here.</p><div class="button-row"><a class="button" href="#practice">Explore topics</a></div>'}</section>`;
}

function titleFor(kind) {
  if (kind === 'mock') return 'Mixed mini mock';
  if (kind === 'daily') return 'Daily question';
  return topics.find(topic => topic.id === kind)?.name ?? 'Practice';
}

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[other]] = [shuffled[other], shuffled[index]];
  }
  return shuffled;
}

function startAttempt(kind, topic) {
  let questions;
  const day = dateKey();
  if (kind === 'mock') {
    questions = shuffle(topics.flatMap(item => shuffle(item.questions).slice(0, 2)));
  } else if (kind === 'daily') {
    const dayNumber = Date.parse(day) / 86400000;
    questions = [questionBank[dayNumber % questionBank.length]];
  } else {
    questions = topic.questions;
  }
  attempt = { kind, day, questions, index: 0, answers: new Array(questions.length).fill(null), deadline: kind === 'mock' ? Date.now() + 600000 : null };
  renderQuiz();
  if (kind === 'mock' && attempt) timer = setInterval(updateTimer, 250);
}

function renderQuiz(focus = true) {
  const { kind, questions, index, answers } = attempt;
  const [prompt, options, correct, explanation] = questions[index];
  const chosen = answers[index];
  const timed = kind === 'mock';
  const revealed = !timed && chosen !== null;
  main.innerHTML = `<section class="quiz surface" aria-labelledby="question-title">
    <div class="quiz-top"><div><span class="quiz-title">${titleFor(kind)}</span><div class="meta">Question ${index + 1} of ${questions.length}</div></div>${timed ? '<span id="timer" class="timer" aria-label="Time remaining">10:00</span>' : ''}</div>
    <progress value="${index + 1}" max="${questions.length}" aria-label="Question position"></progress>
    <h1 id="question-title" tabindex="-1">${prompt}</h1>
    <div class="options" role="group" aria-label="Answer options">${options.map((option, position) => {
      const grading = revealed && position === correct ? ' correct' : revealed && position === chosen ? ' incorrect' : '';
      return `<button class="option${grading}" type="button" data-answer="${position}" aria-pressed="${chosen === position}" ${revealed ? 'disabled' : ''}><span class="letter" aria-hidden="true">${'ABCD'[position]}</span>${option}${revealed && position === correct ? ' <span aria-label="Correct answer">✓</span>' : ''}</button>`;
    }).join('')}</div>
    ${revealed ? `<div class="feedback" id="feedback" tabindex="-1"><strong>${chosen === correct ? 'Correct' : 'Incorrect'}</strong><p>${explanation}</p></div>` : ''}
    <div class="quiz-actions"><a class="text-link" href="#${timed ? 'mocks' : kind === 'daily' ? 'home' : 'practice'}">Exit ${timed ? 'test' : 'practice'}</a><div class="quiz-buttons">
      ${timed && index > 0 ? '<button class="button secondary" type="button" id="previous">Previous</button>' : ''}
      <button class="button" type="button" id="next" ${!timed && !revealed ? 'disabled' : ''}>${index + 1 === questions.length ? (timed ? 'Finish test' : 'See results') : timed && chosen === null ? 'Skip question' : 'Next question'}</button>
    </div></div>
  </section>`;

  if (timed) updateTimer();
  if (!attempt) return;
  if (focus) document.querySelector('#question-title')?.focus();
  main.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => {
    if (timed && Date.now() >= attempt.deadline) return finishAttempt(true);
    attempt.answers[index] = Number(button.dataset.answer);
    renderQuiz(false);
    main.querySelector(timed ? `[data-answer="${button.dataset.answer}"]` : '#feedback')?.focus();
  }));
  main.querySelector('#previous')?.addEventListener('click', () => {
    attempt.index--;
    renderQuiz();
  });
  main.querySelector('#next')?.addEventListener('click', () => {
    if (timed && Date.now() >= attempt.deadline) return finishAttempt(true);
    if (index + 1 === questions.length) return finishAttempt();
    attempt.index++;
    renderQuiz();
  });
}

function updateTimer() {
  const display = document.querySelector('#timer');
  if (!display || !attempt) return;
  const seconds = Math.max(0, Math.ceil((attempt.deadline - Date.now()) / 1000));
  const remainder = String(seconds % 60).padStart(2, '0');
  display.textContent = `${Math.floor(seconds / 60)}:${remainder}`;
  display.classList.toggle('urgent', seconds <= 60);
  if (!seconds) finishAttempt(true);
}

function finishAttempt(expired = false) {
  clearInterval(timer);
  const { kind, questions, answers, day } = attempt;
  const answered = answers.filter(answer => answer !== null).length;
  const correct = questions.filter((question, index) => question[2] === answers[index]).length;
  const entry = { kind, day, finished: Date.now(), answered, correct, total: questions.length };
  if (kind !== 'daily' || !studyHistory.some(previous => previous.kind === 'daily' && previous.day === day)) {
    studyHistory = [entry, ...studyHistory];
    try {
      localStorage.setItem(storageKey, JSON.stringify(studyHistory));
    } catch {
      // Keep the current session's progress available when storage is blocked.
    }
  }
  result = { ...entry, questions, answers, expired };
  attempt = null;
  location.hash = 'result';
}

function resultPage() {
  const { kind, correct, total, answered, questions, answers, expired } = result;
  const retry = kind === 'mock' || kind === 'daily' ? kind : `topic/${kind}`;
  return `<section class="quiz surface">
    <header class="page-heading"><div class="eyebrow">${titleFor(kind)}</div><h1>${expired ? 'Time is up' : 'Your results'}</h1><p>${correct} of ${total} correct${answered < total ? ` · ${total - answered} skipped` : ''}</p></header>
    <div class="button-row"><a class="button" href="#${retry}">Try again</a><a class="button secondary" href="#progress">View progress</a></div>
    <div class="review"><h2>Review answers</h2>${questions.map(([prompt, options, answer, explanation], index) => `
      <details><summary>${index + 1}. ${prompt}</summary><p>Your answer — ${options[answers[index]] ?? 'Skipped'}</p><p>Correct answer — ${options[answer]}</p><p>${explanation}</p></details>`).join('')}</div>
  </section>`;
}

function render() {
  const route = location.hash.slice(1);
  if (route === 'main') return;
  clearInterval(timer);
  attempt = null;
  const topic = topics.find(item => route === `topic/${item.id}`);
  const quizKind = topic?.id ?? (['mock', 'daily'].includes(route) ? route : null);
  const pages = { home: homePage, practice: practicePage, mocks: mockPage, progress: progressPage };
  activePage = topic ? 'practice' : route === 'mock' ? 'mocks' : Object.hasOwn(pages, route) ? route : 'home';
  if (route === 'result' && result) activePage = 'progress';
  navLinks.forEach(link => {
    if (link.dataset.page === activePage) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  window.scrollTo(0, 0);
  if (quizKind) {
    startAttempt(quizKind, topic);
    return;
  }
  main.innerHTML = route === 'result' && result ? resultPage() : pages[activePage]();
  if (activePage === 'practice') filterTopics();
  if (route) main.focus({ preventScroll: true });
}

document.querySelector('.skip').addEventListener('click', event => {
  event.preventDefault();
  main.focus();
});
window.addEventListener('hashchange', render);
render();
