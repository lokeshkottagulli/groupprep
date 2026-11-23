const STUDY_TOPIC_MINUTES = 45;
const STUDY_REVIEW_MINUTES = 20;
const STUDY_PLAN_MAX_DAYS = 731;
const STUDY_DAY_MS = 86400000;

function parseStudyDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return NaN;
  const timestamp = Date.parse(`${value}T00:00:00Z`);
  if (!Number.isFinite(timestamp)) return NaN;
  return new Date(timestamp).toISOString().slice(0, 10) === value ? timestamp : NaN;
}

function orderStudyTopics(papers) {
  // Take one topic per paper before starting the next round.
  const maxTopics = Math.max(...papers.map(paper => paper.topics.length));
  const topics = [];
  for (let index = 0; index < maxTopics; index++) {
    for (const paper of papers) {
      const topic = paper.topics[index];
      if (!topic) continue;
      topics.push({
        id: `topic:${paper.id}:${topic.id}`,
        kind: 'topic',
        name: topic.name,
        paperId: paper.id,
        paperName: paper.name,
        topicId: topic.id,
        minutes: STUDY_TOPIC_MINUTES
      });
    }
  }
  return topics;
}

function assignStudyTopics(days, topics, firstPassDays) {
  if (topics.length < firstPassDays) {
    // Leave room between sessions when the learner has a generous date range.
    topics.forEach((topic, index) => {
      const dayIndex = topics.length === 1 ? 0 : Math.floor(index * (firstPassDays - 1) / (topics.length - 1));
      days[dayIndex].tasks.push(topic);
    });
    return;
  }

  for (let index = 0; index < firstPassDays; index++) {
    const from = Math.floor(index * topics.length / firstPassDays);
    const to = Math.floor((index + 1) * topics.length / firstPassDays);
    days[index].tasks.push(...topics.slice(from, to));
  }
}

function assignStudyReviews(days, minutesPerDay) {
  const ready = [];
  let reviewed = 0;
  for (let index = 0; index < days.length; index++) {
    const day = days[index];
    const topics = [...day.tasks];
    const reviewSlots = Math.floor((minutesPerDay - topics.length * STUDY_TOPIC_MINUTES) / STUDY_REVIEW_MINUTES);
    // A one-day plan can still use spare time for recall at the end of the session.
    if (days.length === 1) ready.push(...topics);
    const end = Math.min(ready.length, reviewed + reviewSlots);
    for (; reviewed < end; reviewed++) {
      const topic = ready[reviewed];
      day.tasks.push({ ...topic, id: `review:${topic.paperId}:${topic.topicId}`, kind: 'review', minutes: STUDY_REVIEW_MINUTES });
    }
    if (days.length > 1) ready.push(...topics);
  }
  return reviewed;
}

function buildStudyPlan({ papers, startDate, endDate, weekdays, minutesPerDay }) {
  const start = parseStudyDate(startDate);
  const end = parseStudyDate(endDate);
  if (!Number.isFinite(start) || !Number.isFinite(end) || end < start) {
    return { error: 'Choose a valid start date and a target date on or after it.' };
  }
  if ((end - start) / STUDY_DAY_MS + 1 > STUDY_PLAN_MAX_DAYS) {
    return { error: `Choose a date range of ${STUDY_PLAN_MAX_DAYS} days or less.` };
  }
  if (!Array.isArray(weekdays) || !weekdays.length || weekdays.some(day => !Number.isInteger(day) || day < 0 || day > 6)) {
    return { error: 'Choose at least one study day of the week.' };
  }
  if (!Number.isInteger(minutesPerDay) || minutesPerDay < STUDY_TOPIC_MINUTES || minutesPerDay > 1440) {
    return { error: `Enter a whole number between ${STUDY_TOPIC_MINUTES} and 1440 minutes per study day.` };
  }
  if (!Array.isArray(papers) || !papers.some(paper => paper.topics.length)) {
    return { error: 'Choose at least one paper with study topics.' };
  }

  // ISO dates represent calendar days. Using UTC arithmetic keeps weekday selection consistent through clock changes.
  const selectedWeekdays = new Set(weekdays);
  const days = [];
  for (let timestamp = start; timestamp <= end; timestamp += STUDY_DAY_MS) {
    const date = new Date(timestamp);
    if (selectedWeekdays.has(date.getUTCDay())) days.push({ date: date.toISOString().slice(0, 10), tasks: [] });
  }
  if (!days.length) return { error: 'Your chosen weekdays do not occur in this date range.' };

  const topics = orderStudyTopics(papers);
  const topicSlotsPerDay = Math.floor(minutesPerDay / STUDY_TOPIC_MINUTES);
  const availableDayCount = days.length;
  const scheduledTopicCount = Math.min(topics.length, availableDayCount * topicSlotsPerDay);
  const unscheduledTopics = topics.slice(scheduledTopicCount);
  const neededTopicDays = Math.ceil(scheduledTopicCount / topicSlotsPerDay);
  const reviewSlotsPerDay = Math.floor(minutesPerDay / STUDY_REVIEW_MINUTES);
  const reviewDays = Math.min(
    availableDayCount - neededTopicDays,
    Math.max(1, Math.round(availableDayCount * 0.15)),
    Math.ceil(scheduledTopicCount / reviewSlotsPerDay)
  );
  assignStudyTopics(days, topics.slice(0, scheduledTopicCount), availableDayCount - reviewDays);
  const reviewCount = unscheduledTopics.length ? 0 : assignStudyReviews(days, minutesPerDay);

  return {
    error: null,
    days: days.filter(day => day.tasks.length).map(day => ({
      ...day,
      minutes: day.tasks.reduce((total, task) => total + task.minutes, 0)
    })),
    topicCount: topics.length,
    scheduledTopicCount,
    unscheduledTopics,
    estimatedStudyMinutes: topics.length * STUDY_TOPIC_MINUTES,
    studyMinutes: scheduledTopicCount * STUDY_TOPIC_MINUTES,
    reviewMinutes: reviewCount * STUDY_REVIEW_MINUTES,
    availableMinutes: availableDayCount * minutesPerDay,
    availableDayCount,
    extraStudyDays: Math.ceil(unscheduledTopics.length / topicSlotsPerDay),
    reviewCount
  };
}
