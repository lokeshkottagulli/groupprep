const studySettingsKey = 'groupprep-study-settings-v1';
const studyProgressKey = 'groupprep-study-progress-v1';
const studyWeekdays = [[1, 'Mon', 'Monday'], [2, 'Tue', 'Tuesday'], [3, 'Wed', 'Wednesday'], [4, 'Thu', 'Thursday'], [5, 'Fri', 'Friday'], [6, 'Sat', 'Saturday'], [0, 'Sun', 'Sunday']];
const studyDayFormatter = new Intl.DateTimeFormat('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
const studyRangeFormatter = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
const studyDaysPerPage = 7;

function studyPage() {
  const weekdayChoices = studyWeekdays.map(([number, short, full]) => `
    <label class="study-day-choice"><input type="checkbox" name="weekday" value="${number}" aria-label="${full}"><span>${short}</span></label>`).join('');
  return `
    <section class="study-intro" aria-labelledby="study-title">
      <div class="eyebrow">APPSC Groups I–IV</div>
      <h1 id="study-title">Study by syllabus</h1>
      <p>Find topics by group, stage and paper. Build a daily plan around the time you have before your exam.</p>
      <div class="button-row">
        <button type="button" class="button lime" data-study-scroll="study-settings-heading">Build a plan</button>
        <button type="button" class="button hero-secondary" data-study-scroll="study-syllabus-heading">Browse syllabus</button>
      </div>
    </section>
    <section class="study-workspace section" aria-labelledby="study-settings-heading">
      <div class="surface study-panel">
        <h2 id="study-settings-heading" tabindex="-1">Plan settings</h2>
        <p class="study-note">Choose what to cover and when you can study.</p>
        <form class="study-form" id="study-form">
          <div class="study-fields">
            <label class="study-field"><span>Exam group</span><select name="groupId">${appscSyllabus.map(group => `<option value="${group.id}">${studyText(group.name)}</option>`).join('')}</select></label>
            <label class="study-field"><span>Exam stage</span><select name="stage"></select></label>
            <label class="study-field study-field-wide"><span>Paper coverage</span><select name="paperId"></select></label>
            <label class="study-field"><span>Start date</span><input type="date" name="startDate" required></label>
            <label class="study-field"><span>Finish by</span><input type="date" name="endDate" required></label>
            <label class="study-field study-field-wide"><span>Minutes per study day</span><input type="number" name="minutesPerDay" min="${STUDY_TOPIC_MINUTES}" max="1440" step="1" required></label>
          </div>
          <fieldset class="study-weekdays"><legend>Study days</legend><div class="study-weekday-options">${weekdayChoices}</div></fieldset>
          <div class="study-toolbar"><button class="button" type="submit">Generate study plan</button></div>
          <p class="study-form-message" id="study-form-message" role="status"></p>
        </form>
      </div>
      <section class="surface study-panel study-schedule" aria-labelledby="study-schedule-heading">
        <div id="study-schedule"></div>
      </section>
    </section>
    <section class="section study-syllabus" aria-labelledby="study-syllabus-heading">
      <div class="section-heading">
        <div><h2 id="study-syllabus-heading" tabindex="-1">Topic-wise syllabus</h2><p>Expand a topic to see what it covers.</p></div>
        <button type="button" class="button secondary" data-study-scroll="study-settings-heading">Change group or stage</button>
      </div>
      <div id="study-syllabus-content"></div>
    </section>
    <details class="section surface study-source">
      <summary>Quick revision notes and quizzes</summary>
      <div class="grid study-grid">${topics.map(topic => `
        <details class="surface study-topic">
          <summary>${studyText(topic.name)}</summary>
          <ul>${topic.questions.map(([, , , explanation]) => `<li>${studyText(explanation)}</li>`).join('')}</ul>
          <a class="text-link" href="#topic/${topic.id}">Practice ${studyText(topic.name)}</a>
        </details>`).join('')}</div>
    </details>`;
}

function initializeStudy() {
  const form = document.querySelector('#study-form');
  const schedule = document.querySelector('#study-schedule');
  const syllabus = document.querySelector('#study-syllabus-content');
  const message = document.querySelector('#study-form-message');
  const controls = form.elements;
  const saved = readStudyStorage(studySettingsKey);
  const completed = readStudyStorage(studyProgressKey);
  const done = new Set(Array.isArray(completed) ? completed.filter(id => typeof id === 'string') : []);
  const fallbackDeadline = new Date();
  fallbackDeadline.setDate(fallbackDeadline.getDate() + 55);
  const today = dateKey();
  const dates = [saved?.startDate || today, saved?.endDate || dateKey(fallbackDeadline)];
  const minutes = saved?.minutesPerDay ?? 90;
  const weekdays = Array.isArray(saved?.weekdays) ? saved.weekdays : [1, 2, 3, 4, 5, 6];
  let plan;
  let planLabel;
  let visibleDays = studyDaysPerPage;
  let dayView = 'upcoming';

  function group() {
    return appscSyllabus.find(entry => entry.id === controls.groupId.value) ?? appscSyllabus[0];
  }

  function stagePapers() {
    return group().papers.filter(paper => controls.stage.value === 'all' || paper.stage === controls.stage.value);
  }

  function updateStages(preferred) {
    const stages = [...new Set(group().papers.map(paper => paper.stage))];
    controls.stage.innerHTML = `${stages.map(stage => `<option value="${studyText(stage)}">${studyText(stage)}</option>`).join('')}${stages.length > 1 ? '<option value="all">All stages</option>' : ''}`;
    if ((preferred === 'all' && stages.length > 1) || stages.includes(preferred)) controls.stage.value = preferred;
  }

  function updatePapers(preferred) {
    const papers = stagePapers().filter(paper => paper.topics.length);
    const hasOptional = papers.some(paper => paper.optional);
    controls.paperId.innerHTML = `<option value="required">${hasOptional ? 'All required papers' : 'All papers'}</option>
      ${hasOptional ? '<option value="all">All papers, including optionals</option>' : ''}
      ${papers.map(paper => `<option value="${paper.id}">${studyText(controls.stage.value === 'all' ? `${paper.stage} · ${paper.name}` : paper.name)}${paper.optional ? ' (optional)' : ''}</option>`).join('')}`;
    if (papers.some(paper => paper.id === preferred) || (hasOptional && preferred === 'all')) controls.paperId.value = preferred;
  }

  function applySettings(save = false) {
    const settings = {
      groupId: group().id,
      stage: controls.stage.value,
      paperId: controls.paperId.value,
      startDate: controls.startDate.value,
      endDate: controls.endDate.value,
      weekdays: [...form.querySelectorAll('[name="weekday"]:checked')].map(input => Number(input.value)),
      minutesPerDay: Number(controls.minutesPerDay.value)
    };
    const papers = stagePapers().filter(paper => settings.paperId === 'all' || (settings.paperId === 'required' ? !paper.optional : paper.id === settings.paperId));
    const nextPlan = buildStudyPlan({ ...settings, papers });
    if (nextPlan.error && plan) {
      message.textContent = nextPlan.error;
      return;
    }
    plan = nextPlan;
    const paper = papers.find(entry => entry.id === settings.paperId);
    planLabel = [group().name, settings.stage === 'all' ? 'All stages' : settings.stage, paper?.name].filter(Boolean).join(' · ');
    visibleDays = studyDaysPerPage;
    dayView = plan.days?.some(day => day.date >= today) ? 'upcoming' : 'all';
    message.textContent = plan.error || '';
    if (save && !plan.error && !writeStudyStorage(studySettingsKey, settings)) message.textContent = 'This browser could not save your plan. You can use it on this page.';
    renderSchedule();
  }

  function renderSchedule() {
    const heading = `<div class="study-section-heading"><div><h2 id="study-schedule-heading">Daily schedule</h2><p class="study-note">${studyText(planLabel)}</p></div></div>`;
    if (plan.error) {
      schedule.innerHTML = `${heading}<p class="study-empty">${studyText(plan.error)}</p>`;
      return;
    }
    const totalTasks = plan.scheduledTopicCount + plan.reviewCount;
    schedule.innerHTML = `${heading}
      <div class="study-plan-summary">
        ${studyStat(`${plan.scheduledTopicCount} / ${plan.topicCount}`, 'Topics scheduled')}
        ${studyStat(plan.days.length, 'Days with tasks')}
        ${studyStat(studyDuration(plan.studyMinutes + plan.reviewMinutes), 'Time scheduled')}
      </div>
      <p class="study-range">${studyFormattedDate(controls.startDate.value)} to ${studyFormattedDate(controls.endDate.value)} · ${plan.availableDayCount} available study days</p>
      ${totalTasks ? '<section class="study-plan-progress" aria-label="Plan completion" aria-live="polite"></section>' : ''}
      ${studyCapacityNote(plan)}
      ${plan.days.length ? `<label class="study-view study-field"><span>Show</span><select data-study-view><option value="upcoming">Upcoming study days</option><option value="all">All study days</option></select></label><div class="study-days"></div><div class="study-more"></div>` : ''}`;
    if (plan.days.length) schedule.querySelector('[data-study-view]').value = dayView;
    renderProgress();
    renderDays();
  }

  function renderProgress() {
    const progress = schedule.querySelector('.study-plan-progress');
    if (!progress) return;
    const tasks = plan.days.flatMap(day => day.tasks);
    const count = tasks.filter(task => done.has(task.id)).length;
    progress.innerHTML = `<div><span>Tasks completed</span><strong>${count} of ${tasks.length}</strong></div><progress value="${count}" max="${tasks.length}" aria-label="Tasks completed"></progress>`;
  }

  function renderDays() {
    const list = schedule.querySelector('.study-days');
    const more = schedule.querySelector('.study-more');
    if (!list || !more) return;
    const days = dayView === 'upcoming' ? plan.days.filter(day => day.date >= today) : plan.days;
    const firstNew = list.querySelectorAll('.study-day').length;
    const openDates = new Set([...list.querySelectorAll('.study-day[open]')].map(day => day.dataset.date));
    list.innerHTML = days.slice(0, visibleDays).map((day, index) => dailyStudyCard(day, today, done, firstNew ? openDates.has(day.date) : index === 0)).join('') || '<p class="study-empty">No upcoming study days. Choose all study days to see your earlier tasks.</p>';
    more.innerHTML = days.length > visibleDays ? `<button type="button" class="button secondary" data-study-more>Show more days</button><span class="meta">${visibleDays} of ${days.length} days</span>` : '';
    return list;
  }

  if (appscSyllabus.some(entry => entry.id === saved?.groupId)) controls.groupId.value = saved.groupId;
  updateStages(saved?.stage);
  updatePapers(saved?.paperId);
  [controls.startDate.value, controls.endDate.value] = dates;
  controls.minutesPerDay.value = minutes;
  form.querySelectorAll('[name="weekday"]').forEach(input => { input.checked = weekdays.includes(Number(input.value)); });
  syllabus.innerHTML = studySyllabus(group(), stagePapers());
  applySettings(!saved);

  form.addEventListener('change', event => {
    if (event.target === controls.groupId) updateStages();
    if (event.target === controls.groupId || event.target === controls.stage) {
      updatePapers();
      syllabus.innerHTML = studySyllabus(group(), stagePapers());
    }
    message.textContent = 'Generate the plan to apply your changes.';
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    applySettings(true);
  });
  schedule.addEventListener('change', event => {
    if (event.target.matches('[data-study-view]')) {
      dayView = event.target.value;
      visibleDays = studyDaysPerPage;
      schedule.querySelector('.study-days').replaceChildren();
      renderDays();
    }
    if (event.target.matches('[data-study-task]')) {
      const id = event.target.value;
      if (event.target.checked) done.add(id);
      else done.delete(id);
      if (!writeStudyStorage(studyProgressKey, [...done])) message.textContent = 'This browser could not save your progress.';
      renderProgress();
    }
  });
  schedule.addEventListener('click', event => {
    if (!event.target.matches('[data-study-more]')) return;
    const firstNew = visibleDays;
    visibleDays += studyDaysPerPage;
    const list = renderDays();
    list.querySelectorAll('summary')[firstNew]?.focus();
  });
  document.querySelectorAll('[data-study-scroll]').forEach(button => button.addEventListener('click', () => {
    document.getElementById(button.dataset.studyScroll).focus();
  }));
}

function studyStat(value, label) {
  return `<div class="study-stat"><strong>${value}</strong><span>${label}</span></div>`;
}

function dailyStudyCard(day, today, done, open) {
  const prefix = day.date === today ? 'Today · ' : '';
  return `<details class="study-day" data-date="${day.date}" ${open ? 'open' : ''}>
    <summary><span class="study-day-label">${prefix}${studyFormattedDate(day.date, studyDayFormatter)}</span><span class="study-day-meta">${day.tasks.length} ${day.tasks.length === 1 ? 'task' : 'tasks'} · ${studyDuration(day.minutes)}</span></summary>
    <ul class="study-task-list">${day.tasks.map(task => `<li><label class="study-task">
      <input type="checkbox" data-study-task value="${studyText(task.id)}" ${done.has(task.id) ? 'checked' : ''}>
      <span><strong>${task.kind === 'review' ? 'Review' : 'Study'} ${studyText(task.name)}</strong><small>${studyText(task.paperName)} · ${studyDuration(task.minutes)}</small></span>
    </label></li>`).join('')}</ul>
  </details>`;
}

function studyCapacityNote(plan) {
  if (!plan.unscheduledTopics.length) return `<p class="study-note">Allow ${STUDY_TOPIC_MINUTES} minutes for a first pass through each topic and ${STUDY_REVIEW_MINUTES} minutes for each scheduled review.</p>`;
  const count = plan.unscheduledTopics.length;
  const dayCount = plan.extraStudyDays;
  return `<details class="study-plan-warning" open>
    <summary>${count} ${count === 1 ? 'topic needs' : 'topics need'} more time</summary>
    <p>At this pace, add ${dayCount} ${dayCount === 1 ? 'study day' : 'study days'} or give yourself more time per day. Topics still to schedule:</p>
    <ul>${plan.unscheduledTopics.map(topic => `<li>${studyText(topic.name)} <span class="meta">(${studyText(topic.paperName)})</span></li>`).join('')}</ul>
  </details>`;
}

function studySyllabus(group, papers) {
  return `<div class="study-section-heading"><div><h3>${studyText(group.name)}</h3>${group.description ? `<p class="study-note">${studyText(group.description)}</p>` : ''}</div></div>
    ${group.notice ? `<p class="study-note">${studyText(group.notice)}</p>` : ''}
    <div class="study-papers">${papers.map(paper => `<article class="surface study-paper">
      <header><h3>${studyText(paper.name)}</h3><p class="study-note">${studyText(paper.stage)}${paper.optional ? ' · Optional' : ''} · ${paper.topics.length} ${paper.topics.length === 1 ? 'topic' : 'topics'}${paper.sourcePages ? ` · PDF ${String(paper.sourcePages).includes('–') ? 'pages' : 'p.'} ${studyText(paper.sourcePages)}` : ''}</p></header>
      ${paper.topics.map(topic => `<details class="study-syllabus-topic"><summary>${studyText(topic.name)}</summary><ul>${topic.subtopics.map(subtopic => `<li>${studyText(subtopic)}</li>`).join('')}</ul></details>`).join('')}
    </article>`).join('')}</div>
    ${studySource(group)}`;
}

function studySource(group) {
  const { sourceTitle, sourceNote, roadmap, mainsPractice } = appscStudyGuide;
  return `<details class="surface study-source"><summary>Source and planning guidance</summary>
    <p><strong>${studyText(sourceTitle)}</strong>${group.sourcePages ? ` · Pages ${studyText(group.sourcePages)}` : ''}</p>
    ${sourceNote ? `<p>${studyText(sourceNote)}</p>` : ''}
    <h3>Sample 12-week roadmap</h3>
    <ul class="study-roadmap-list">${roadmap.map(item => `<li><strong>Weeks ${studyText(item.weeks)}</strong><span>${studyText(item.focus)}</span></li>`).join('')}</ul>
    ${group.id === 'group-1' ? `<h3>Descriptive answer practice</h3><ul>${mainsPractice.map(item => `<li>${studyText(item)}</li>`).join('')}</ul>` : ''}
  </details>`;
}

function studyFormattedDate(date, formatter = studyRangeFormatter) {
  return formatter.format(new Date(`${date}T12:00:00`));
}

function studyDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  return hours ? `${hours} hr${remainder ? ` ${remainder} min` : ''}` : `${remainder} min`;
}

function studyText(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

function readStudyStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
}

function writeStudyStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}
