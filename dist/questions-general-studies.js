const generalStudiesTopics = [
  {
    id: 'ap-history-culture', name: 'Andhra Pradesh History & Culture', icon: '◫', tone: 'gold',
    description: 'Satavahanas, Vijayanagara, the Andhra movement, social reformers, art, literature and cultural movements',
    questions: [
      ['Which Satavahana ruler is praised in the Nashik inscription of Gautami Balashri?', ['Simuka', 'Vasishthiputra Pulumavi', 'Gautamiputra Satakarni', 'Yajna Sri Satakarni'], 2, 'Gautami Balashri’s inscription records the achievements of her son, Gautamiputra Satakarni.', 'https://ignca.gov.in/Asi_data/17076.pdf'],
      ['In which language did the Vijayanagara ruler Krishnadevaraya write Amuktamalyada?', ['Telugu', 'Kannada', 'Tamil', 'Sanskrit'], 0, 'Amuktamalyada is a Telugu poem attributed to Krishnadevaraya.', 'https://cuap.ac.in/assets/docs/2021_01/MA-Telugu-Syllabus.pdf'],
      ['What was the immediate objective of Potti Sriramulu’s 1952 fast?', ['To abolish the zamindari system', 'To establish a university in Andhra', 'To reorganise the princely state of Hyderabad', 'To form a separate Andhra State from Madras State'], 3, 'Sriramulu fasted for a separate Andhra State for Telugu-speaking areas of Madras State. Andhra State was formed in 1953.'],
      ['Which reform was championed by Kandukuri Veeresalingam?', ['Cooperative banking', 'Widow remarriage', 'The abolition of salt duties', 'The creation of linguistic provinces'], 1, 'Veeresalingam promoted widow remarriage and women’s education in Andhra.', 'https://rmc.ap.gov.in/about/prominent_people_in_rajahmundry'],
      ['Which classical dance takes its name from a village in Andhra Pradesh’s Krishna region?', ['Mohiniyattam', 'Sattriya', 'Kuchipudi', 'Manipuri'], 2, 'Kuchipudi developed in the Telugu-speaking region and is named for the village associated with its dance-drama tradition.', 'https://krishna.ap.gov.in/about_district/history/']
    ]
  },
  {
    id: 'ap-geography', name: 'Andhra Pradesh Geography', icon: '◎', tone: 'blue',
    description: 'Districts, rivers, irrigation projects, climate, soils, agriculture, minerals and natural resources',
    questions: [
      ['On which river is the Prakasam Barrage at Vijayawada?', ['Penna', 'Godavari', 'Vamsadhara', 'Krishna'], 3, 'The Prakasam Barrage crosses the Krishna and diverts water to canals serving the delta.', 'https://krishna.ap.gov.in/engineering-tourism/'],
      ['Kolleru Lake lies between the deltas of which two rivers?', ['Krishna and Godavari', 'Godavari and Vamsadhara', 'Penna and Palar', 'Krishna and Tungabhadra'], 0, 'Kolleru is a freshwater wetland in the low-lying area between the Krishna and Godavari deltas.', 'https://www.moef.gov.in/uploads/2021/01/Ramsaar-Factsheets_2020_Low-3_compressed-2.pdf'],
      ['Mangampeta in Annamayya district is known for deposits of which mineral?', ['Bauxite', 'Mica', 'Barytes', 'Copper ore'], 2, 'Mangampeta contains a large deposit of barytes, a mineral composed chiefly of barium sulfate.', 'https://apsac.ap.gov.in/wp-content/uploads/2025/09/DSR-Reports/Annamayya.pdf'],
      ['What is the principal origin of alluvial soils in the Krishna and Godavari deltas?', ['Weathering of exposed granite', 'Deposition of river-borne sediment', 'Accumulation of wind-blown desert sand', 'Leaching under hill forests'], 1, 'As rivers slow across a delta, they deposit sediment that builds alluvial soils. The flat delta plains support irrigated agriculture.'],
      ['Which Andhra Pradesh district is part of the drier interior of Rayalaseema?', ['Eluru', 'Srikakulam', 'Kakinada', 'Ananthapuramu'], 3, 'Ananthapuramu is an inland Rayalaseema district with relatively low rainfall. Dryland crops and dependable irrigation are important there.', 'https://ananthapuramu.ap.gov.in/tbphlc-circle-ananthapuramu-profile/']
    ]
  },
  {
    id: 'indian-society', name: 'Indian Society & Social Issues', icon: '◎', tone: 'violet',
    description: 'Population, poverty, unemployment, women, children, caste, tribes, urbanisation and welfare',
    questions: [
      ['Which change directly increases the share of people living in urban areas?', ['A shift from manufacturing to services within a city', 'A district changes its name', 'More people move from villages to towns than from towns to villages', 'Two neighbouring villages merge and remain rural'], 2, 'Net rural-to-urban migration moves people into the urban population. Natural growth and reclassification can also affect urbanisation.'],
      ['Eight family members work on a farm, but six could produce the same output. What does this illustrate?', ['Disguised unemployment', 'Seasonal unemployment', 'Frictional unemployment', 'Cyclical unemployment'], 0, 'In disguised unemployment, some workers appear employed but add little or no output at the margin.'],
      ['Which indicator adds a health dimension to an assessment of household poverty?', ['Distance to the district boundary', 'Number of registered vehicles statewide', 'Total value of the district’s exports', 'Whether children in the household are undernourished'], 3, 'Multidimensional approaches to poverty consider deprivations such as nutrition alongside education and living standards.'],
      ['A landlord refuses a tenancy solely because of a prospective tenant’s caste. What does this illustrate?', ['Occupational mobility', 'Caste-based discrimination', 'Population ageing', 'Regional migration'], 1, 'The denial of housing on the basis of caste is an example of unequal treatment in access to a service.'],
      ['Which design change would most directly improve access to a welfare camp for women and children in remote tribal hamlets?', ['Move all appointments to the district headquarters', 'Accept appointments only through a web portal', 'Hold outreach camps near the hamlets and offer assistance in local languages', 'Require each household to make multiple eligibility visits'], 2, 'Nearby outreach and language support address travel and communication barriers that otherwise limit access.']
    ]
  },
  {
    id: 'current-affairs', name: 'Current Affairs', icon: '▣', tone: 'blue',
    description: 'Dated 2025–26 questions on Andhra Pradesh, India, world events, sports, awards, appointments, reports and schemes',
    questions: [
      ['In which Andhra Pradesh city did the Prime Minister inaugurate and lay foundation stones for development works on 2 May 2025?', ['Tirupati', 'Amaravati', 'Kurnool', 'Rajamahendravaram'], 1,
        'The event was held in Amaravati and included works related to the capital city and wider state infrastructure.', 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2126248&lang=2&reg=48'],
      ['What milestone did ISRO’s SpaDeX satellites achieve on 16 January 2025?', ['A lunar landing', 'An interplanetary flyby', 'A successful docking in orbit', 'A crewed re-entry'], 2,
        'ISRO successfully joined two spacecraft in orbit in the Space Docking Experiment.', 'https://www.isro.gov.in/ISRO_EN/spadex_undocking_successful.html'],
      ['Which country hosted the 2025 UN climate conference COP30 in Belém?', ['Brazil', 'Colombia', 'Portugal', 'South Africa'], 0,
        'Belém, Brazil, hosted the UN Framework Convention on Climate Change conference in November 2025.', 'https://unfccc.int/cop30'],
      ['Which team won the ICC Men’s T20 World Cup final in Ahmedabad on 8 March 2026?', ['New Zealand', 'South Africa', 'England', 'India'], 3,
        'India defeated New Zealand in the final in Ahmedabad.', 'https://www.icc-cricket.com/tournaments/mens-t20-world-cup-2026/news/live-india-new-zealand-chase-world-cup-glory'],
      ['Which book won the 2026 International Booker Prize?', ['Heart Lamp', 'Taiwan Travelogue', 'Kairos', 'Time Shelter'], 1,
        'Taiwan Travelogue won in 2026. Heart Lamp was the 2025 winner.', 'https://thebookerprizes.com/the-booker-library/prize-years/international/2026'],
      ['Who was sworn in as Chief Justice of India on 24 November 2025?', ['Justice B. R. Gavai', 'Justice Sanjiv Khanna', 'Justice Surya Kant', 'Justice D. Y. Chandrachud'], 2,
        'Justice Surya Kant took the oath at Rashtrapati Bhavan on that date.', 'https://www.presidentofindia.gov.in/node/25008'],
      ['What was the focus of UNDP’s 2025 Human Development Report, A Matter of Choice?', ['People and human development in the age of AI', 'The digitisation of land records', 'Changes in ocean freight rates', 'Voting behaviour in national elections'], 0,
        'The report examines how choices about artificial intelligence shape human capabilities and opportunities.', 'https://hdr.undp.org/content/human-development-report-2025'],
      ['How many districts did the Union Cabinet approve for coverage under the PM Dhan-Dhaanya Krishi Yojana in July 2025?', ['50', '75', '150', '100'], 3,
        'The approval covered 100 districts from 2025–26, with interventions aimed at agricultural productivity and related challenges.', 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2145146&lang=2&reg=48'],
      ['Which country hosted the Milano Cortina Olympic Winter Games in February 2026?', ['France', 'Italy', 'Switzerland', 'Austria'], 1,
        'The 2026 Winter Games took place in Italy from 6 to 22 February, with Milan and Cortina d’Ampezzo among the host locations.', 'https://support.olympics.com/hc/en-gb/articles/43002165477267-Where-and-when-will-the-2026-Olympic-Winter-Games-take-place']
    ]
  },
  {
    id: 'environment-ecology', name: 'Environment & Ecology', icon: '❋', tone: 'green',
    description: 'Biodiversity, pollution, climate change, conservation, environmental laws and protected areas',
    questions: [
      ['Which is an example of conserving a species in situ?', ['Storing its seeds in a seed bank', 'Breeding it in a zoological park', 'Protecting its wild population in a national park', 'Maintaining its tissues in a laboratory'], 2, 'In situ conservation protects species in their natural habitats. Seed banks and captive breeding are forms of ex situ conservation.'],
      ['Runoff rich in nitrates and phosphates enters a lake. Which process is most likely to follow?', ['Desalination', 'Eutrophication', 'Ozone depletion', 'Desertification'], 1, 'Nutrient enrichment can trigger algal blooms. When the algae decompose, oxygen levels can fall and harm aquatic life.'],
      ['Which of these gases is a greenhouse gas emitted by decomposing waste in landfills?', ['Argon', 'Nitrogen', 'Oxygen', 'Methane'], 3, 'As organic waste decomposes with little oxygen, microbes can produce methane, which traps heat in the atmosphere.'],
      ['Which Indian law gives the central government broad powers to take measures to protect and improve the environment?', ['Environment (Protection) Act, 1986', 'Indian Forest Act, 1927', 'Biological Diversity Act, 2002', 'Public Liability Insurance Act, 1991'], 0, 'Section 3 of the Environment (Protection) Act empowers the central government to take measures for environmental protection and improvement.', 'https://www.indiacode.nic.in/bitstream/123456789/4316/1/ep_act_1986.pdf'],
      ['Which ecosystem both provides nursery habitat for many fish and helps buffer coastal storm waves?', ['Alpine meadows', 'Mangrove forests', 'Inland thorn scrub', 'Temperate conifer plantations'], 1, 'Mangrove roots provide shelter for young fish and the vegetation can absorb some wave energy along the coast.']
    ]
  },
  {
    id: 'disaster-management', name: 'Disaster Management', icon: '△', tone: 'rose',
    description: 'Cyclones, floods, droughts, earthquakes, disaster authorities and preparedness',
    questions: [
      ['Which agency issues official tropical cyclone warnings for India?', ['Central Water Commission', 'Geological Survey of India', 'National Disaster Response Force', 'India Meteorological Department'], 3, 'IMD monitors tropical cyclones and issues warnings. Response agencies use these alerts to coordinate protective measures.', 'https://mausam.imd.gov.in/imd_latest/contents/pdf/cyclone_sop.pdf'],
      ['Who chairs the National Disaster Management Authority under the Disaster Management Act, 2005?', ['Prime Minister', 'Union Home Secretary', 'Cabinet Secretary', 'Chief of Defence Staff'], 0, 'The Disaster Management Act provides for the Prime Minister to chair the NDMA.', 'https://www.indiacode.nic.in/bitstream/123456789/2045/1/A200553.pdf'],
      ['A road is covered by moving floodwater. What is the safest response?', ['Follow a larger vehicle through the water', 'Cross on foot to check how deep it is', 'Turn back and use a route confirmed safe', 'Drive slowly along the centre line'], 2, 'Floodwater can hide damaged road surfaces and sweep away people or vehicles. Follow official advice and avoid flooded routes.', 'https://sachet.ndma.gov.in/DosDont'],
      ['What distinguishes agricultural drought from meteorological drought?', ['It is measured solely by river discharge', 'It concerns too little soil moisture for crop needs', 'It occurs only when a reservoir is full', 'It depends on ocean temperatures alone'], 1, 'Agricultural drought is about water available to crops. Meteorological drought is defined by unusually low precipitation over a period.'],
      ['What should a person indoors do first during earthquake shaking?', ['Head for the lift', 'Stand near a window to judge the shaking', 'Run down the stairs at once', 'Drop, cover and hold on'], 3, 'Get low, protect your head and neck under sturdy cover if possible, and hold on until the shaking stops.', 'https://sachet.ndma.gov.in/DosDont']
    ]
  },
  {
    id: 'science-technology', name: 'Science & Technology', icon: '⚛', tone: 'teal',
    description: 'Space technology, information technology, artificial intelligence, biotechnology, defence and energy',
    questions: [
      ['Why does a geostationary satellite appear fixed over the same point on Earth’s equator?', ['Its orbital period matches Earth’s rotation and it orbits eastward in the equatorial plane', 'It stays motionless above the atmosphere', 'It orbits from pole to pole once per day', 'Its orbit is synchronised with Earth’s orbit around the Sun'], 0, 'A circular, eastward equatorial orbit with the same period as Earth’s rotation gives a constant apparent position from the ground.'],
      ['Why evaluate a machine-learning model on examples withheld from its training?', ['To reduce the number of input features', 'To guarantee that all training labels are correct', 'To estimate performance on data the model has not already seen', 'To replace the need for training'], 2, 'A held-out test set gives evidence of how well a model generalises beyond the examples used to fit it.'],
      ['What is a common agricultural application of plant tissue culture?', ['Measuring sunlight intensity', 'Producing many plants from a small amount of plant material', 'Detecting earthquakes in real time', 'Separating salt from irrigation water'], 1, 'Tissue culture can multiply selected plants under controlled conditions, which is useful for large-scale propagation.'],
      ['What does a photovoltaic cell convert directly into electricity?', ['Heat from steam', 'Mechanical energy from wind', 'Chemical energy from fuel', 'Energy from light'], 3, 'Photovoltaic cells use light to create electrical current in semiconductor material.'],
      ['What kind of waves does conventional radar transmit to detect objects?', ['Radio waves', 'Seismic waves', 'Ultrasonic sound waves', 'Ocean waves'], 0, 'Radar detects objects by transmitting radio waves and analysing reflected signals. The same principle is used in weather monitoring and air surveillance.']
    ]
  },
  {
    id: 'governance-public-policy', name: 'Governance & Public Policy', icon: '§', tone: 'green',
    description: 'E-governance, transparency, RTI, citizen charters, public services and welfare administration',
    questions: [
      ['Under the RTI Act, within what time must information concerning a person’s life or liberty be provided?', ['24 hours', '72 hours', '48 hours', '30 days'], 2, 'Section 7(1) sets a 48-hour deadline for life-or-liberty requests. The ordinary deadline is generally 30 days.', 'https://www.indiacode.nic.in/indiacode/handle/123456789/17520?col=123456789%2F2510&view_type=search'],
      ['Which information belongs in a citizen charter for a municipal service?', ['Staff members’ private financial details', 'Service standards, expected timelines and grievance contacts', 'The text of all Supreme Court judgments', 'A list of campaign promises'], 1, 'A citizen charter states what users can expect from services and explains where to raise a grievance.'],
      ['Residents compare official public-works spending records with completed work at a public meeting. What process is this?', ['A secret ballot', 'A fiscal transfer', 'A procurement tender', 'A social audit'], 3, 'A social audit lets the public scrutinise records and check whether expenditure produced the work or benefits reported.'],
      ['Which is an example of proactive disclosure by a public authority?', ['Publishing service procedures and decision-making rules without waiting for individual requests', 'Sharing records only when a court directs it', 'Referring every routine query to a separate department', 'Deleting records after a service is completed'], 0, 'Section 4 of the RTI Act provides for proactive publication of specified information by public authorities.', 'https://www.indiacode.nic.in/indiacode/handle/123456789/17520?col=123456789%2F2510&view_type=search'],
      ['Which design makes a digital public service easier to use and track?', ['Require a new application to check its status', 'Accept requests only by personal email to an officer', 'Provide an application receipt, status tracking and an assisted access channel', 'Remove every in-person support option once the portal opens'], 2, 'Receipts and status tracking make the process traceable. Assisted channels help people who face digital access barriers.']
    ]
  },
  {
    id: 'ap-economy-development', name: 'AP Economy & Development', icon: '▥', tone: 'violet',
    description: 'Andhra Pradesh budget, agriculture, industries, infrastructure, welfare programmes and development indicators',
    questions: [
      ['Which Andhra Pradesh budget document connects departmental spending with measurable targets?', ['A treasury cash book', 'The Outcome Budget', 'A loan repayment schedule', 'An electoral roll'], 1, 'The Outcome Budget relates allocations to outputs and outcomes. Andhra Pradesh lists it separately among its budget volumes.', 'https://apfinance.gov.in/budget'],
      ['Which expenditure is ordinarily classified as capital expenditure in the state budget?', ['Pension payments', 'Interest on outstanding debt', 'Salary payments to teachers', 'Construction of a new state-owned irrigation canal'], 3, 'New construction creates a durable public asset. Salaries, pensions and interest are generally revenue expenditure.'],
      ['Which measure best compares Andhra Pradesh’s growth in economic output across years while removing the effect of price changes?', ['GSDP at constant prices', 'GSDP at current prices', 'Total tax revenue at current prices', 'The state’s outstanding debt'], 0, 'Gross State Domestic Product at constant prices measures changes in output using a common price base.'],
      ['Which investment would most directly add value to a district’s mango crop near its source?', ['A toll plaza at a highway interchange', 'A coastal wind farm', 'A fruit sorting and pulp-processing facility', 'An inland bus depot'], 2, 'Processing and grading create higher-value products from local crops and can reduce losses where the harvest is perishable.'],
      ['Two districts have different population sizes. Which measure best compares their average economic output per resident?', ['Total district product at current prices', 'Per capita district product', 'Number of mandals', 'Total public expenditure'], 1, 'Per capita district product divides economic output by population. It measures an average and does not show how income is distributed.']
    ]
  },
  {
    id: 'ap-reorganisation', name: 'AP Reorganisation and Bifurcation', icon: '◧', tone: 'gold',
    description: 'AP Reorganisation Act 2014, institutional division, revenue issues and post-bifurcation development',
    questions: [
      ['What was the appointed day for Andhra Pradesh’s bifurcation in 2014?', ['1 January 2014', '1 November 2014', '2 June 2014', '15 August 2014'], 2, 'The reorganisation took effect on 2 June 2014, when Telangana became a separate state.'],
      ['What maximum period did Section 5 of the AP Reorganisation Act originally set for Hyderabad to serve as the common capital?', ['Ten years', 'Five years', 'Fifteen years', 'Twenty years'], 0, 'Section 5 provided for Hyderabad to serve as the common capital of both states for a period not exceeding ten years.', 'https://upload.indiacode.nic.in/showfile?actid=AC_CEN_5_5_00058_201406_1517807327989&filename=a2014-6.pdf&type=actfile'],
      ['Which project did Section 90 of the Act declare a national project?', ['Somasila', 'Pulichintala', 'Telugu Ganga', 'Polavaram Irrigation Project'], 3, 'Section 90 gives national-project status to the Polavaram Irrigation Project on the Godavari.', 'https://upload.indiacode.nic.in/showfile?actid=AC_CEN_5_5_00058_201406_1517807327989&filename=a2014-6.pdf&type=actfile'],
      ['Which schedule lists the companies and corporations covered by Section 68 of the Act?', ['Sixth Schedule', 'Ninth Schedule', 'Eighth Schedule', 'Eleventh Schedule'], 1, 'Section 68 refers to the companies and corporations specified in the Ninth Schedule.', 'https://upload.indiacode.nic.in/showfile?actid=AC_CEN_5_5_00058_201406_1517807327989&filename=a2014-6.pdf&type=actfile'],
      ['In assessing a successor state’s finances, which situation represents a revenue deficit?', ['Capital receipts exceed capital expenditure', 'Exports are less than imports', 'Revenue expenditure exceeds revenue receipts', 'Capital outlay exceeds interest payments'], 2, 'A revenue deficit is the amount by which revenue expenditure exceeds revenue receipts. It is distinct from the wider fiscal deficit.']
    ]
  },
  {
    id: 'government-schemes', name: 'Government Schemes', icon: '▤', tone: 'teal',
    description: 'Central and Andhra Pradesh schemes for education, health, agriculture, employment and social welfare',
    questions: [
      ['What is the main purpose of PM-KISAN?', ['Income support for eligible farmer families', 'Interest subsidies on urban housing loans', 'Accident insurance for construction workers', 'Funding irrigation canals directly'], 0, 'PM-KISAN provides direct financial support to eligible farmer families.', 'https://pmkisan.gov.in/'],
      ['Which Andhra Pradesh scheme provides financial support linked to children’s schooling?', ['NTR Bharosa', 'PM-KISAN', 'PM-JAY', 'Talliki Vandanam'], 3, 'Talliki Vandanam is an education support initiative for eligible families with school-going children.', 'https://markapuram.ap.gov.in/education/'],
      ['What type of assistance is Ayushman Bharat PM-JAY designed to provide?', ['Crop insurance against flood loss', 'Health coverage for eligible hospitalisation expenses', 'Loans for rural housing construction', 'Scholarships for vocational training'], 1, 'PM-JAY is the hospitalisation coverage component of Ayushman Bharat. Covered treatment is available through empanelled providers.', 'https://rmlh.mohfw.gov.in/Contents.aspx?langid=1&lev=2&lid=3621&lsid=2568&pid=1234'],
      ['Which Andhra Pradesh scheme is associated with social security pensions?', ['Talliki Vandanam', 'PM Vishwakarma', 'NTR Bharosa Pension Scheme', 'PM Dhan-Dhaanya Krishi Yojana'], 2, 'NTR Bharosa provides social security pensions across categories including eligible older people and widows.', 'https://sspensions.ap.gov.in/'],
      ['Which central scheme supports traditional artisans and craftspeople with skills and enterprise assistance?', ['PM Vishwakarma', 'PM-KISAN', 'Ayushman Bharat PM-JAY', 'PMAY-Gramin'], 0, 'PM Vishwakarma is designed for eligible artisans and craftspeople in traditional trades and offers support such as training and access to credit.', 'https://pmvishwakarma.gov.in/']
    ]
  },
  {
    id: 'computer-awareness', name: 'Computer Awareness', icon: '▣', tone: 'blue',
    description: 'Computer basics, internet, cybersecurity, MS Word, Excel, PowerPoint and digital governance',
    questions: [
      ['Which component normally holds the data and instructions a computer is actively using and loses its contents when power is removed?', ['SSD', 'RAM', 'USB flash drive', 'Optical disc'], 1, 'RAM is the computer’s working memory. Ordinary RAM is volatile, whereas drives are designed to retain stored data without power.'],
      ['An email claims to be from a government portal and asks you to enter your password through an unexpected link. What is the safest response?', ['Reply with the password to confirm your account', 'Open the link and enter only your username', 'Forward the email to colleagues for them to try', 'Open the portal separately using its known address and report the message if suspicious'], 3, 'Unexpected requests for credentials can be phishing. Go directly to the service using a known address and use official reporting channels.'],
      ['In Microsoft Word, which feature records insertions and deletions for a reviewer to accept or reject?', ['Track Changes', 'Mail Merge', 'Word Count', 'AutoCorrect'], 0, 'Track Changes marks edits in a document so a reviewer can accept or reject them individually.'],
      ['Which Excel formula counts the numeric entries in cells B2 through B11?', ['=SUM(B2:B11)', '=AVERAGE(B2:B11)', '=COUNT(B2:B11)', '=MAX(B2:B11)'], 2, 'COUNT returns how many cells contain numbers. SUM adds the values and AVERAGE computes their mean.'],
      ['Which PowerPoint view displays thumbnails of the entire presentation so you can quickly reorder slides?', ['Slide Show', 'Slide Sorter', 'Notes Page', 'Presenter View'], 1, 'Slide Sorter displays a grid of slides and lets you drag them into a new order.']
    ]
  }
];
