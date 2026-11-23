// Study topics distilled from the supplied APPSC Groups 1–4 guide.
// The guide groups some subjects for study and leaves exact paper schemes to each notification.
const appscSyllabus = [
  {
    id: 'group-1',
    name: 'Group I',
    description: 'General studies and aptitude for prelims, followed by qualifying languages and descriptive mains papers.',
    notice: 'Use the applicable Group I notification annexure for the exact paper names, marks, qualifying rules, word limits, and interview scheme.',
    sourcePages: '3–6',
    papers: [
      {
        id: 'group-1-prelims-gs',
        name: 'General Studies',
        stage: 'Preliminary',
        sourcePages: '3',
        topics: [
          { id: 'g1-p-ancient', name: 'Indus civilization and Vedic society', subtopics: ['Indus civilization', 'Vedic society'] },
          { id: 'g1-p-religion-empires', name: 'Ancient Indian religions and empires', subtopics: ['Major religions and schools of thought', 'Mauryan and Gupta periods'] },
          { id: 'g1-p-medieval', name: 'Delhi Sultanate and Mughals', subtopics: ['Delhi Sultanate', 'Mughal India'] },
          { id: 'g1-p-deccan', name: 'Vijayanagara and Deccan kingdoms', subtopics: ['Vijayanagara and the Deccan', 'Medieval art, architecture and literature'] },
          { id: 'g1-p-colonial', name: 'Colonial expansion and social reform', subtopics: ['Colonial expansion and the revolt of 1857', 'Social reform movements'] },
          { id: 'g1-p-modern', name: 'Indian national movement', subtopics: ['The national movement and independence'] },
          { id: 'g1-p-ap-dynasties', name: 'Andhra dynasties and kingdoms', subtopics: ['Satavahanas, Ikshvakus and Eastern Chalukyas', 'Kakatiyas and Vijayanagara influence'] },
          { id: 'g1-p-ap-history', name: 'Colonial Andhra and state formation', subtopics: ['Colonial Andhra and the freedom movement', 'State formation and reorganization'] },
          { id: 'g1-p-ap-culture', name: 'Andhra Pradesh cultural heritage', subtopics: ['Art, architecture and literature', 'Festivals, traditions and cultural figures'] },
          { id: 'g1-p-constitution', name: 'Constitutional foundations', subtopics: ['Constitution-making, Preamble and basic structure', 'Fundamental Rights, Directive Principles and Fundamental Duties'] },
          { id: 'g1-p-institutions', name: 'Polity and constitutional institutions', subtopics: ['Union and state legislatures, executives and judiciary', 'Constitutional offices and bodies'] },
          { id: 'g1-p-federalism', name: 'Federalism, local government and elections', subtopics: ['Centre–State relations and emergency provisions', 'Local self-government and elections'] },
          { id: 'g1-p-governance', name: 'Governance and public policy', subtopics: ['Transparency, accountability and citizen charters', 'Social justice, welfare delivery and governance reforms'] },
          { id: 'g1-p-development', name: 'Indian economy and development', subtopics: ['National income, growth, development and planning', 'Poverty, inequality, employment and human development'] },
          { id: 'g1-p-sectors', name: 'Economic sectors and infrastructure', subtopics: ['Agriculture and irrigation', 'Industry, infrastructure and services'] },
          { id: 'g1-p-public-finance', name: 'Public finance and taxation', subtopics: ['Public finance, budgeting and taxation'] },
          { id: 'g1-p-banking', name: 'Banking, inflation and the external sector', subtopics: ['Money, banking, inflation and financial inclusion', 'External sector'] },
          { id: 'g1-p-ap-economy', name: 'Andhra Pradesh economy', subtopics: ['Agriculture, industry and infrastructure', 'State finance, welfare and regional development'] },
          { id: 'g1-p-physical', name: 'Physical geography', subtopics: ['Earth, landforms, climate and monsoon', 'Natural resources, soils and rivers'] },
          { id: 'g1-p-regional', name: 'Geography of India and Andhra Pradesh', subtopics: ['Physical divisions, forests, agriculture and minerals', 'Transport and disaster vulnerability'] },
          { id: 'g1-p-environment', name: 'Ecology and environment', subtopics: ['Ecosystems, biodiversity and protected areas', 'Pollution and climate change'] },
          { id: 'g1-p-science', name: 'Foundational science and everyday uses', subtopics: ['Basic physics, chemistry and biology', 'Everyday applications of science'] },
          { id: 'g1-p-emerging-tech', name: 'Health, space and digital technology', subtopics: ['Health, biotechnology and space', 'Digital technology and information systems'] },
          { id: 'g1-p-current', name: 'Current affairs', subtopics: ['AP, national and international developments', 'Governance, economy, science, environment and society'] }
        ]
      },
      {
        id: 'group-1-prelims-aptitude',
        name: 'General Aptitude and Reasoning',
        stage: 'Preliminary',
        sourcePages: '4',
        topics: [
          { id: 'g1-p-arithmetic', name: 'Number systems, percentages and ratios', subtopics: ['Number systems, percentages, ratios and proportions, and averages'] },
          { id: 'g1-p-applied-arithmetic', name: 'Applied arithmetic', subtopics: ['Profit and loss, time and work, and speed and distance'] },
          { id: 'g1-p-data', name: 'Data interpretation', subtopics: ['Interpreting numerical data'] },
          { id: 'g1-p-logic', name: 'Logical reasoning', subtopics: ['Series, analogies, classification and coding-decoding', 'Relationships, arrangements and deductions'] },
          { id: 'g1-p-decisions', name: 'Analysis and decision-making', subtopics: ['Problem-solving and analytical decision-making', 'Comprehension and communication'] },
          { id: 'g1-p-situations', name: 'Psychological and administrative aptitude', subtopics: ['Situational judgment and public-service orientation where prescribed'] }
        ]
      },
      {
        id: 'group-1-main-telugu',
        name: 'Qualifying Telugu',
        stage: 'Main',
        sourcePages: '5',
        qualifying: true,
        topics: [
          { id: 'g1-m-telugu-usage', name: 'Telugu comprehension and usage', subtopics: ['Reading comprehension, meaning, usage and vocabulary', 'Grammar and sentence correction'] },
          { id: 'g1-m-telugu-writing', name: 'Telugu composition and functional writing', subtopics: ['Translation or précis, summary and composition as prescribed', 'Official writing and language expression'] }
        ]
      },
      {
        id: 'group-1-main-english',
        name: 'Qualifying English',
        stage: 'Main',
        sourcePages: '5',
        qualifying: true,
        topics: [
          { id: 'g1-m-english-usage', name: 'English comprehension and usage', subtopics: ['Grammar, vocabulary and sentence correction', 'Comprehension and précis writing'] },
          { id: 'g1-m-english-writing', name: 'Applied English writing', subtopics: ['Essays and letter or report writing', 'Translation and other applied language tasks when prescribed'] }
        ]
      },
      {
        id: 'group-1-main-essay',
        name: 'General Essay',
        stage: 'Main',
        sourcePages: '5–6',
        topics: [
          { id: 'g1-m-essay-themes', name: 'Contemporary essay themes', subtopics: ['Social, political, economic, cultural, environmental and technology issues', 'Examples from Andhra Pradesh, India and the world'] },
          { id: 'g1-m-essay-writing', name: 'Essay structure and argument', subtopics: ['Organized argument, relevant examples and balanced conclusions'] }
        ]
      },
      {
        id: 'group-1-main-history-geography',
        name: 'History, Culture and Geography of India and Andhra Pradesh',
        stage: 'Main',
        sourcePages: '5–6',
        topics: [
          { id: 'g1-m-india-history', name: 'Ancient and medieval Indian history and culture', subtopics: ['Ancient and medieval developments in India'] },
          { id: 'g1-m-modern-history', name: 'Modern Indian history and the national movement', subtopics: ['Modern history, the national movement and developments after independence'] },
          { id: 'g1-m-ap-history', name: 'Andhra Pradesh socio-cultural history', subtopics: ['Regional developments and social and cultural history', 'State formation and restructuring'] },
          { id: 'g1-m-geography', name: 'Indian and Andhra Pradesh physical geography', subtopics: ['Physical geography of India and Andhra Pradesh'] },
          { id: 'g1-m-human-geography', name: 'Andhra Pradesh human and economic geography', subtopics: ['Human and economic geography', 'Resource use and related challenges'] }
        ]
      },
      {
        id: 'group-1-main-governance',
        name: 'Polity, Constitution, Governance, Law and Ethics',
        stage: 'Main',
        sourcePages: '5–6',
        topics: [
          { id: 'g1-m-constitution', name: 'Constitution, polity and law', subtopics: ['Constitutional framework and institutions', 'Judicial developments and legal principles relevant to governance'] },
          { id: 'g1-m-governance', name: 'Public administration and policy', subtopics: ['Citizen-centered administration and public policy', 'Transparency and accountability'] },
          { id: 'g1-m-ethics', name: 'Social justice and administrative ethics', subtopics: ['Inclusion, welfare and social justice', 'Civil-service values and administrative ethics'] }
        ]
      },
      {
        id: 'group-1-main-economy',
        name: 'Economy and Development of India and Andhra Pradesh',
        stage: 'Main',
        sourcePages: '5–6',
        topics: [
          { id: 'g1-m-macro', name: 'Macroeconomics and development', subtopics: ['Macroeconomic trends, public finance and economic reform', 'Poverty, employment and human development'] },
          { id: 'g1-m-sectors', name: 'Sectoral and sustainable development', subtopics: ['Agriculture, industry, infrastructure and the external sector', 'Sustainable development'] },
          { id: 'g1-m-ap-economy', name: 'Andhra Pradesh economy and budget', subtopics: ['Agriculture, irrigation and industrial development', 'State budget and regional disparities'] }
        ]
      },
      {
        id: 'group-1-main-science',
        name: 'Science, Technology and Environment',
        stage: 'Main',
        sourcePages: '5–6',
        topics: [
          { id: 'g1-m-tech', name: 'Science and technology developments', subtopics: ['Energy, space, IT, biotechnology and public health', 'Technology in development and public administration'] },
          { id: 'g1-m-environment', name: 'Environmental management and disasters', subtopics: ['Biodiversity, pollution and climate change', 'Natural resource management and disasters'] }
        ]
      }
    ]
  },
  {
    id: 'group-2',
    name: 'Group II',
    description: 'Screening subjects and two mains papers covering Andhra Pradesh history, the Constitution, economy, and science and technology.',
    notice: 'This outline follows the revised framework identified in the guide. Verify your Group II notification annexure for the applicable paper division.',
    sourcePages: '7–8',
    papers: [
      {
        id: 'group-2-screening',
        name: 'Screening Test',
        stage: 'Screening',
        sourcePages: '7',
        topics: [
          { id: 'g2-s-ancient', name: 'Ancient Indian history', subtopics: ['Harappan civilization, Vedic society, religions, empires and art'] },
          { id: 'g2-s-medieval', name: 'Medieval Indian history', subtopics: ['Regional dynasties, Delhi Sultanate, Mughal administration and Vijayanagara', 'Medieval cultural developments'] },
          { id: 'g2-s-modern', name: 'Modern Indian history', subtopics: ['British rule and socio-religious reform', 'Nationalist organizations, the Gandhian era and independence'] },
          { id: 'g2-s-physical', name: 'World and Indian physical geography', subtopics: ['Earth’s structure, climate, oceans, rivers and resources'] },
          { id: 'g2-s-economic-geography', name: 'Indian human and economic geography', subtopics: ['Agriculture, population, urbanization, transport and industry'] },
          { id: 'g2-s-ap-geography', name: 'Andhra Pradesh geography', subtopics: ['Physical features, rivers, climate, agriculture and natural resources'] },
          { id: 'g2-s-society', name: 'Indian social structure and diversity', subtopics: ['Diversity, caste, community, gender, family and institutions'] },
          { id: 'g2-s-welfare', name: 'Social issues and welfare', subtopics: ['Education, health, inequality, women and children, inclusion and population', 'Welfare policies and social issues in India and AP'] },
          { id: 'g2-s-current', name: 'Current affairs', subtopics: ['Major AP, national and international events and government initiatives', 'Economic indicators, technology, environment, sports, awards and important reports'] },
          { id: 'g2-s-arithmetic', name: 'Mental ability · arithmetic', subtopics: ['Percentages, ratios, averages, simple interest, time and work, and distance'] },
          { id: 'g2-s-reasoning', name: 'Mental ability · reasoning', subtopics: ['Analogies, syllogisms, sequences, arrangements, directions and data sufficiency'] },
          { id: 'g2-s-data', name: 'Mental ability · data interpretation', subtopics: ['Charts, tables, graphs, numerical interpretation and basic problem-solving'] }
        ]
      },
      {
        id: 'group-2-main-paper-1',
        name: 'Paper I · Andhra Pradesh History and Indian Constitution',
        stage: 'Main',
        sourcePages: '7–8',
        topics: [
          { id: 'g2-m-ap-dynasties', name: 'Early and medieval Andhra history', subtopics: ['Political history and regional dynasties', 'Religious and cultural development'] },
          { id: 'g2-m-ap-culture', name: 'Andhra Pradesh culture and social reform', subtopics: ['Telugu literature, arts and architecture', 'Social reform movements'] },
          { id: 'g2-m-ap-statehood', name: 'Andhra movement, formation and bifurcation', subtopics: ['Andhra movement and Andhra State in 1953', 'Formation of Andhra Pradesh in 1956, bifurcation in 2014 and subsequent issues'] },
          { id: 'g2-m-constitutional-basics', name: 'Making and principles of the Constitution', subtopics: ['Historical background and Constitution-making', 'Preamble, rights, duties and Directive Principles'] },
          { id: 'g2-m-federal', name: 'Federal system and constitutional bodies', subtopics: ['Union and state governments, Parliament and state legislatures', 'Judiciary and constitutional bodies'] },
          { id: 'g2-m-governance', name: 'Local bodies, elections and citizen rights', subtopics: ['Local bodies, elections and administration', 'Constitutional amendments, judicial review and citizen rights'] }
        ]
      },
      {
        id: 'group-2-main-paper-2',
        name: 'Paper II · Economy and Science and Technology',
        stage: 'Main',
        sourcePages: '8',
        topics: [
          { id: 'g2-m-economy', name: 'Indian economy and public finance', subtopics: ['National income, growth, development and sectoral structure', 'Poverty, employment, inflation, public finance and taxation'] },
          { id: 'g2-m-sectors', name: 'Economic sectors and infrastructure', subtopics: ['Agriculture, industry, services and banking', 'Infrastructure and trade'] },
          { id: 'g2-m-ap-economy', name: 'Andhra Pradesh economy', subtopics: ['State income, sector performance, agriculture, irrigation and industry', 'State finances and social-sector programs'] },
          { id: 'g2-m-science', name: 'Applied science and technology', subtopics: ['Everyday science and innovation policy', 'IT, digital governance, space, defense, biotechnology and health technologies'] },
          { id: 'g2-m-environment', name: 'Energy, environment and sustainable development', subtopics: ['Energy, environmental degradation and climate change', 'Disaster management and sustainable development'] }
        ]
      }
    ]
  },
  {
    id: 'group-3',
    name: 'Group III',
    description: 'Study areas for Panchayat Secretary and related posts, with a focus on Andhra Pradesh rural development and Panchayati Raj.',
    notice: 'The screening/main division and paper names vary by notification. Use the scheme for your Panchayat Secretary or related post.',
    sourcePages: '9',
    papers: [
      {
        id: 'group-3-general-studies',
        name: 'General Studies and Mental Ability',
        stage: 'Post-specific',
        sourcePages: '9',
        topics: [
          { id: 'g3-history', name: 'History and cultural heritage', subtopics: ['Indian and AP history and cultural heritage'] },
          { id: 'g3-geography', name: 'Geography', subtopics: ['Geography of India and Andhra Pradesh'] },
          { id: 'g3-current', name: 'Current affairs', subtopics: ['Current affairs for general studies'] },
          { id: 'g3-polity', name: 'Constitution and governance', subtopics: ['Indian Constitution, governance and public administration', 'Social justice and welfare'] },
          { id: 'g3-economy', name: 'Economy and rural development', subtopics: ['Indian and AP economy and rural development'] },
          { id: 'g3-science', name: 'Science, environment and sustainability', subtopics: ['General science, environment and sustainable development'] },
          { id: 'g3-aptitude', name: 'Quantitative aptitude and data interpretation', subtopics: ['Quantitative aptitude and data interpretation'] },
          { id: 'g3-reasoning', name: 'Logical reasoning and comprehension', subtopics: ['Logical reasoning and reading comprehension'] }
        ]
      },
      {
        id: 'group-3-rural-development',
        name: 'Rural Development',
        stage: 'Post-specific',
        sourcePages: '9',
        topics: [
          { id: 'g3-livelihoods', name: 'Rural society and livelihoods', subtopics: ['Rural social and economic conditions, agrarian structure and livelihoods'] },
          { id: 'g3-inclusion', name: 'Poverty, employment and financial inclusion', subtopics: ['Poverty reduction and employment', 'Microfinance, self-help groups and financial inclusion'] },
          { id: 'g3-farms-water', name: 'Agriculture, water and rural infrastructure', subtopics: ['Agricultural development, watershed and water management', 'Rural infrastructure and sanitation'] },
          { id: 'g3-rural-services', name: 'Rural public services and schemes', subtopics: ['Rural housing, drinking water, health, education and social security', 'Relevant government schemes'] }
        ]
      },
      {
        id: 'group-3-panchayati-raj',
        name: 'Panchayati Raj and Local Governance',
        stage: 'Post-specific',
        sourcePages: '9',
        topics: [
          { id: 'g3-constitutional-local', name: 'Constitutional basis and local institutions', subtopics: ['73rd Amendment, Part IX and the Eleventh Schedule', 'Gram Sabha, Gram Panchayat, Mandal Parishad and Zilla Parishad'] },
          { id: 'g3-local-finance', name: 'Local powers, finance and accountability', subtopics: ['Local functions and financial powers', 'Planning, budgeting, audits and accountability'] },
          { id: 'g3-local-delivery', name: 'Village administration and public service delivery', subtopics: ['Service delivery, grievances and community participation', 'AP Panchayat Raj institutions and relevant developments'] }
        ]
      },
      {
        id: 'group-3-andhra-focus',
        name: 'Andhra Pradesh Focus',
        stage: 'Post-specific',
        sourcePages: '9',
        topics: [
          { id: 'g3-ap-districts', name: 'District geography and rural demography', subtopics: ['District and local geography, agriculture, irrigation and rural demography'] },
          { id: 'g3-ap-administration', name: 'Local administration and development programs', subtopics: ['AP local administration and e-governance', 'AP programs and rural development indicators'] },
          { id: 'g3-ap-resilience', name: 'Village environment, preparedness and health', subtopics: ['Village environment, disaster preparedness, health and sanitation'] }
        ]
      }
    ]
  },
  {
    id: 'group-4',
    name: 'Group IV',
    description: 'Study areas for Junior Assistant and related posts, including languages and post-specific computer skills.',
    notice: 'Group IV has no single paper scheme for every post. Verify the required language, general studies and computer tests for the recruitment you select.',
    sourcePages: '10',
    papers: [
      {
        id: 'group-4-general-studies',
        name: 'General Studies and Mental Ability',
        stage: 'Post-specific',
        sourcePages: '10',
        topics: [
          { id: 'g4-history', name: 'Indian history and Andhra Pradesh culture', subtopics: ['Indian national movement and major historical developments', 'AP history and culture'] },
          { id: 'g4-polity', name: 'Constitution and governance', subtopics: ['Rights, duties and democratic institutions', 'Governance and local administration'] },
          { id: 'g4-geography', name: 'Geography and resources', subtopics: ['Indian and AP geography, resources, agriculture, industry and population'] },
          { id: 'g4-economy', name: 'Economy and society', subtopics: ['Indian and AP economy, development, public schemes and social issues'] },
          { id: 'g4-science', name: 'Everyday science and information technology', subtopics: ['Everyday science and IT'] },
          { id: 'g4-environment', name: 'Environment and disaster management', subtopics: ['Environment and disaster management'] },
          { id: 'g4-current', name: 'Current affairs', subtopics: ['Current affairs for general studies'] },
          { id: 'g4-numeracy', name: 'Mental ability · numbers, percentages and ratios', subtopics: ['Numbers, simplification, percentages, averages, ratios and proportions'] },
          { id: 'g4-applied-arithmetic', name: 'Mental ability · applied arithmetic', subtopics: ['Profit and loss, interest, time and work, speed and distance, and basic mensuration'] },
          { id: 'g4-reasoning', name: 'Mental ability · reasoning and data', subtopics: ['Analogies, classification, ordering, series, coding-decoding and directions', 'Tables, charts and basic data interpretation'] }
        ]
      },
      {
        id: 'group-4-languages',
        name: 'General English and General Telugu',
        stage: 'Post-specific',
        sourcePages: '10',
        topics: [
          { id: 'g4-en-grammar', name: 'General English · grammar and usage', subtopics: ['Parts of speech, tenses, articles, prepositions and subject–verb agreement', 'Sentence formation, error spotting, correction and fill-in-the-blanks'] },
          { id: 'g4-en-vocab', name: 'General English · vocabulary and comprehension', subtopics: ['Synonyms, antonyms, idioms, one-word substitutions and spelling', 'Reading comprehension'] },
          { id: 'g4-te-grammar', name: 'General Telugu · grammar and vocabulary', subtopics: ['Grammar, vocabulary, synonyms, antonyms and correct usage', 'Sandhi, samasam and other prescribed topics'] },
          { id: 'g4-te-writing', name: 'General Telugu · comprehension and writing', subtopics: ['Reading comprehension, sentence correction, idiomatic usage and basic writing'] }
        ]
      },
      {
        id: 'group-4-computer',
        name: 'Computer and Clerical Skills',
        stage: 'Post-specific',
        sourcePages: '10',
        optional: true,
        topics: [
          { id: 'g4-computer-basics', name: 'Computer fundamentals', subtopics: ['Operating systems, files and folders, and security awareness'] },
          { id: 'g4-office-tools', name: 'Office software and online tools', subtopics: ['Word processing, spreadsheets, presentations, internet and email'] },
          { id: 'g4-office-practice', name: 'Typing and practical office skills', subtopics: ['Typing, basic office workflow and proficiency skills specified in the notice'] }
        ]
      }
    ]
  }
];

const appscStudyGuide = {
  sourceTitle: 'APPSC All Groups Syllabus · Consolidated study guide',
  sourceNote: 'The supplied guide organizes subjects for preparation. Check the current recruitment notice and its annexures for the exact syllabus and paper requirements.',
  commonChecklist: [
    { name: 'History', topics: ['Ancient India and Andhra dynasties', 'Medieval India, the Deccan and Vijayanagara', 'Modern India and independence', 'Andhra political, social and cultural development'] },
    { name: 'Polity and governance', topics: ['Preamble, rights, duties and Directive Principles', 'Union and state institutions', 'Local government and Panchayati Raj', 'Public policy and welfare'] },
    { name: 'Geography and environment', topics: ['Physical geography of India and Andhra Pradesh', 'Rivers, soils, climate, agriculture and industry', 'Ecology, biodiversity and conservation', 'Climate change and disasters'] },
    { name: 'Economy and society', topics: ['National income and development', 'Economic sectors, banking and public finance', 'Andhra Pradesh economy and budget', 'Poverty, inequality, health, education and welfare'] },
    { name: 'Science, aptitude and language', topics: ['Basic science and technology', 'Arithmetic, reasoning and data interpretation', 'Current affairs with an Andhra Pradesh focus', 'English and Telugu where applicable'] }
  ],
  roadmap: [
    { weeks: '1–2', focus: 'Study polity and the Constitution, and spend 30 minutes daily on current affairs.' },
    { weeks: '3–4', focus: 'Study Indian and Andhra Pradesh history and build timelines.' },
    { weeks: '5–6', focus: 'Cover geography, environment and science fundamentals.' },
    { weeks: '7–8', focus: 'Study Indian and Andhra Pradesh economy, the state budget and state schemes.' },
    { weeks: '9–10', focus: 'Focus on the papers or study areas for your group.' },
    { weeks: '11–12', focus: 'Use mock tests and past papers, revise and address weak topics.' }
  ],
  mainsPractice: [
    'Practice 150–250 word answers with an introduction, analysis, examples and conclusion.',
    'Collect Andhra Pradesh examples from the budget, irrigation, disaster management, district development and social programs.',
    'Build one-page topic notes and update examples as you study.'
  ],
  references: [
    { name: 'APPSC syllabus directory', url: 'https://portal-psc.ap.gov.in/HomePages/GroupsSyllabus' },
    { name: 'Recruitment notifications', url: 'https://portal-psc.ap.gov.in/HomePages/RecruitmentNotifications' },
    { name: 'Past question papers', url: 'https://portal-psc.ap.gov.in/HomePages/QuestionPapersofVariousNotifications' }
  ]
};
