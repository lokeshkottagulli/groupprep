const appscLessons = {
  ...appscPrelimsAndGroup2Lessons,
  ...appscGroup1MainLessons,
  ...appscGroup3Lessons,
  ...appscGroup4Lessons
};

const studyTopicIndex = new Map(appscSyllabus.flatMap(group => group.papers.flatMap(paper =>
  paper.topics.map((topic, index) => [topic.id, { group, paper, topic, index }])
)));

const ncertBooks = 'https://ncert.nic.in/textbook.php';
const apBooks = ['Andhra Pradesh school textbooks', 'Browse the official English–Telugu textbook collection by class and subject.', 'https://cse.ap.gov.in/textBooksDownloadingPageTEBilingual'];
const constitutionReading = ['The Constitution of India', 'Read the constitutional text and amendments from the Legislative Department.', 'https://www.legislative.gov.in/documents'];
const apEconomyReading = ['Andhra Pradesh Socio Economic Survey', 'Use the state Finance Department’s editions to study sectors, welfare, infrastructure and public finance.', 'https://apfinance.gov.in/socio'];

const studyReadingRules = [
  [/ap-dynasties|g4-history|g3-history/, [
    ['Early state formation in the Andhra region', 'IGNOU study unit on the Ikshvakus, their inscriptions and early Andhra polities.', 'https://www.egyankosh.ac.in/bitstream/123456789/102528/1/Unit-5.pdf'],
    ['Early medieval polities in peninsular India', 'IGNOU study unit on the Deccan kingdoms and their historical sources.', 'https://egyankosh.ac.in/bitstream/123456789/21990/1/Unit-6.pdf']
  ]],
  [/ap-history|ap-statehood/, [
    ['Andhra Pradesh Reorganisation Act', 'Read the legislation for the division of the former state and its institutional arrangements.', 'https://upload.indiacode.nic.in/showfile?actid=AC_CEN_5_5_00058_201406_1517807327989&filename=a2014-6.pdf&type=actfile']
  ]],
  [/ancient|medieval|deccan|colonial|modern|history|dynasties|ap-culture|ap-statehood/, [
    ['NCERT history textbooks', 'Use the official catalogue to find Class XII Themes in Indian History, Parts I–III, or the earlier-class history books.', ncertBooks], apBooks
  ]],
  [/constitution|institutions|federal|polity|governance|ethics|constitutional-local/, [
    constitutionReading, ['NCERT political science textbooks', 'Look for Class XI Indian Constitution at Work and Class IX–X Democratic Politics.', ncertBooks]
  ]],
  [/federalism|g2-m-governance|g3-constitutional-local|g3-local-finance|g3-local-delivery|g3-ap-administration|g4-polity/, [
    ['Constitutional provisions for panchayats', 'Official reading from the Ministry of Panchayati Raj on the constitutional framework for rural local bodies.', 'https://panchayat.gov.in/constitutional-provision/']
  ]],
  [/development|public-finance|banking|economy|sectors|macro|inclusion|livelihoods|welfare|society|farms-water|rural-services/, [
    ['NCERT economics and sociology textbooks', 'Look for Class XI Indian Economic Development, Class XII Introductory Macroeconomics, or Class XI Introducing Sociology.', ncertBooks]
  ]],
  [/ap-economy|g4-economy|g3-economy|ap-districts|g3-ap-administration|g1-m-human-geography/, [apEconomyReading]],
  [/physical|geography|regional|ap-districts/, [
    ['NCERT geography textbooks', 'Look for Class XI Fundamentals of Physical Geography and India: Physical Environment, or Class XII India: People and Economy.', ncertBooks], apBooks
  ]],
  [/science|tech|environment|resilience/, [
    ['NCERT science textbooks', 'Look for the Class IX–X Science books and the relevant senior-secondary science chapters.', ncertBooks]
  ]],
  [/emerging-tech|g1-m-tech|g2-m-science/, [
    ['ISRO Earth observation satellites', 'Official reference for how satellites support mapping and monitoring.', 'https://www.isro.gov.in/ISRO_EN/EarthObservationSatellites.html']
  ]],
  [/environment|resilience/, [
    ['AP disaster management resources', 'Consult the state’s cyclone and weather monitoring resources for Andhra Pradesh examples.', 'https://apsdmagis.ap.gov.in/weather-watch/cyclone.html']
  ]],
  [/current|essay-themes/, [
    ['Press Information Bureau releases', 'Read the original dated releases for national policy and current-affairs examples.', 'https://www.pib.gov.in/allrelease.aspx?lang=1&reg=1'], apEconomyReading
  ]],
  [/arithmetic|numeracy|aptitude|(^|-)data$|logic|reasoning/, [
    ['NCERT mathematics textbooks', 'Look for the Class VII–X chapters on rational numbers, comparing quantities, data handling and mensuration.', ncertBooks], apBooks
  ]],
  [/telugu|g4-te-/, [apBooks]],
  [/english|essay-writing|g4-en-/, [
    ['NCERT English textbooks', 'Use the Class XI–XII English books for extra reading comprehension and writing practice.', ncertBooks], apBooks
  ]],
  [/computer|g4-office-|g4-science/, [
    ['NIELIT Course on Computer Concepts', 'Read and practise with the official modules on computer basics, files, word processing and spreadsheets.', 'https://lms.nielit.gov.in/course/view.php?id=21&lang=en']
  ]],
  [/g3-inclusion/, [
    ['Rural employment commencement notice', 'Government release explaining the July 2026 commencement and transition to the new rural employment framework.', 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2259703&lang=2&reg=3']
  ]],
  [/g3-local-finance/, [
    ['eGramSwaraj', 'Read the Ministry of Panchayati Raj’s overview of local planning, reporting and accounts.', 'https://panchayat.gov.in/e-gramswaraj/']
  ]],
  [/decisions|situations|ethics|g1-m-governance/, [
    ['Competency Dictionary for the Civil Services', 'Read the Department of Personnel and Training’s guidance on decision-making and public-service competencies.', 'https://dopt.gov.in/sites/default/files/Competency%20Dictionary%20for%20the%20Civil%20Services.pdf']
  ]]
];

function studyTopicHref(topicId) {
  return `#study/topic/${topicId}`;
}

function lessonReading(topicId) {
  const links = new Map();
  for (const [pattern, sources] of studyReadingRules) {
    if (!pattern.test(topicId)) continue;
    for (const source of sources) {
      if (!links.has(source[2])) links.set(source[2], source);
    }
  }
  return links.size ? [...links.values()] : [apBooks];
}

function studyReaderPage({ group, paper, topic, index }) {
  const sections = appscLessons[topic.id];
  const readings = lessonReading(topic.id);
  const previous = paper.topics[index - 1];
  const next = paper.topics[index + 1];
  return `
    <div class="study-reader">
      <a class="study-reader-back text-link" href="#study">Back to syllabus</a>
      <header class="study-reader-heading">
        <p class="eyebrow">${studyText(group.name)} · ${studyText(paper.stage)}</p>
        <h1 tabindex="-1">${studyText(topic.name)}</h1>
        <p class="study-reader-paper">${studyText(paper.name)}</p>
      </header>
      <div class="study-reader-layout">
        <article class="surface study-lesson" aria-label="Topic lesson">
          ${sections.map(([heading, ...paragraphs]) => `<section class="study-lesson-section">
            <h2>${studyText(heading)}</h2>
            ${paragraphs.map(paragraph => `<p>${studyText(paragraph)}</p>`).join('')}
          </section>`).join('')}
        </article>
        <aside class="study-reader-sidebar" aria-label="Topic coverage and reading">
          <section class="surface study-reader-card">
            <h2>Syllabus coverage</h2>
            <ul>${topic.subtopics.map(subtopic => `<li>${studyText(subtopic)}</li>`).join('')}</ul>
          </section>
          <section class="surface study-reader-card">
            <h2>Textbooks and further reading</h2>
            <ul class="study-reading-list">${readings.map(([name, description, href]) => `<li>
              <a class="text-link" href="${studyText(href)}">${studyText(name)}</a>
              <p>${studyText(description)}</p>
            </li>`).join('')}</ul>
          </section>
        </aside>
      </div>
      <div class="study-reader-pagination" role="navigation" aria-label="More topics in this paper">
        ${studyAdjacentTopic(previous, 'Previous topic')}
        ${studyAdjacentTopic(next, 'Next topic')}
      </div>
    </div>`;
}

function studyAdjacentTopic(topic, label) {
  if (!topic) return '<div></div>';
  return `<a class="surface study-reader-adjacent" href="${studyTopicHref(topic.id)}"><span class="meta">${label}</span><strong>${studyText(topic.name)}</strong></a>`;
}

function studyTopicMissing() {
  return `<section class="surface"><h1 tabindex="-1">Topic unavailable</h1><p>Choose a topic from the syllabus.</p><div class="button-row"><a class="button" href="#study">Back to syllabus</a></div></section>`;
}
