const coreTopics = [
  {
    id: 'polity', name: 'Indian Polity', icon: '§', tone: 'green',
    description: 'Constitution, rights and institutions',
    questions: [
      ['Which article guarantees equality before the law?', ['Article 12', 'Article 14', 'Article 19', 'Article 21'], 1, 'Article 14 guarantees equality before the law and equal protection of the laws.'],
      ['Which part of the Constitution contains the Directive Principles of State Policy?', ['Part II', 'Part III', 'Part IV', 'Part V'], 2, 'Part IV contains the Directive Principles of State Policy.'],
      ['Who is the ex officio Chairperson of the Rajya Sabha?', ['President', 'Prime Minister', 'Speaker of the Lok Sabha', 'Vice-President'], 3, 'The Vice-President of India is the ex officio Chairperson of the Rajya Sabha.'],
      ['Fundamental Duties are listed under which article?', ['Article 32', 'Article 44', 'Article 51A', 'Article 368'], 2, 'Article 51A lists the Fundamental Duties.'],
      ['Which amendment gave constitutional status to Panchayats?', ['42nd', '44th', '73rd', '74th'], 2, 'The 73rd Amendment added Part IX on Panchayats. The 74th Amendment dealt with municipalities.']
    ]
  },
  {
    id: 'history', name: 'Indian History', icon: '◫', tone: 'gold',
    description: 'Ancient India and the freedom movement',
    questions: [
      ['Who was the first president of the Indian National Congress?', ['Dadabhai Naoroji', 'W. C. Bonnerjee', 'Gopal Krishna Gokhale', 'Surendranath Banerjee'], 1, 'W. C. Bonnerjee presided over the first session of the Indian National Congress in 1885.'],
      ['What did the Dandi March protest?', ['The salt tax', 'The partition of Bengal', 'The Rowlatt Act', 'The Indigo system'], 0, 'In 1930, Gandhi led the march to Dandi and broke the colonial salt laws.'],
      ['The Great Bath is associated with which Harappan site?', ['Lothal', 'Kalibangan', 'Mohenjo-daro', 'Rakhigarhi'], 2, 'The Great Bath is one of the best-known structures excavated at Mohenjo-daro.'],
      ['In which year was the Quit India Movement launched?', ['1919', '1930', '1935', '1942'], 3, 'The Indian National Congress passed the Quit India resolution in August 1942.'],
      ['Which Mauryan ruler is associated with the Kalinga War?', ['Ashoka', 'Bindusara', 'Chandragupta Maurya', 'Dasharatha'], 0, 'Ashoka describes the suffering caused by the conquest of Kalinga in Major Rock Edict XIII.']
    ]
  },
  {
    id: 'geography', name: 'Geography', icon: '◎', tone: 'blue',
    description: 'Rivers, soils and physical geography',
    questions: [
      ['Which of these rivers flows west into the Arabian Sea?', ['Godavari', 'Mahanadi', 'Narmada', 'Krishna'], 2, 'The Narmada flows west into the Arabian Sea. The other three rivers flow into the Bay of Bengal.'],
      ['Which latitude passes through India?', ['Equator', 'Tropic of Cancer', 'Tropic of Capricorn', 'Arctic Circle'], 1, 'The Tropic of Cancer lies at about 23.5° north and crosses India.'],
      ['Which soil is traditionally associated with cotton cultivation in the Deccan?', ['Black soil', 'Desert soil', 'Peaty soil', 'Mountain soil'], 0, 'Black soil, also called regur, retains moisture and is commonly associated with cotton cultivation.'],
      ['The Eastern and Western Ghats meet in which hills?', ['Aravalli Hills', 'Nilgiri Hills', 'Garo Hills', 'Satpura Hills'], 1, 'The Nilgiri Hills lie at the junction of the Eastern and Western Ghats.'],
      ['Which layer of the atmosphere contains most of its ozone?', ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'], 1, 'Most atmospheric ozone is concentrated in the stratosphere, where it absorbs much of the Sun’s ultraviolet radiation.']
    ]
  },
  {
    id: 'economy', name: 'Indian Economy', icon: '▥', tone: 'violet',
    description: 'Inflation, production and public finance',
    questions: [
      ['Which institution issues most banknotes in India?', ['State Bank of India', 'Reserve Bank of India', 'NITI Aayog', 'Finance Commission'], 1, 'The Reserve Bank of India issues banknotes, with the one-rupee note issued by the Government of India.'],
      ['What is inflation?', ['A sustained rise in the general price level', 'An increase in a single commodity price', 'A fall in the general price level', 'A rise in real output'], 0, 'Inflation measures how the overall price level rises over time.'],
      ['Which activity belongs to the primary sector?', ['Software development', 'Banking', 'Wheat farming', 'Car manufacturing'], 2, 'The primary sector obtains goods directly from natural resources. Farming is a primary-sector activity.'],
      ['Which measure adjusts GDP for price changes?', ['Nominal GDP', 'Real GDP', 'Fiscal deficit', 'Trade balance'], 1, 'Real GDP measures output using constant prices, allowing comparisons across time without the effect of price changes.'],
      ['Which is an example of a direct tax?', ['Goods and Services Tax', 'Customs duty', 'Central excise duty', 'Personal income tax'], 3, 'Personal income tax is levied directly on an individual’s taxable income.']
    ]
  },
  {
    id: 'science', name: 'General Science', icon: '⚛', tone: 'teal',
    description: 'Everyday physics, chemistry and biology',
    questions: [
      ['Which is the SI unit of electric current?', ['Volt', 'Ampere', 'Ohm', 'Watt'], 1, 'The ampere is the SI base unit of electric current.'],
      ['What gas do plants take in as a raw material for photosynthesis?', ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'], 2, 'Photosynthesis uses carbon dioxide and water to form sugars using light energy.'],
      ['Which part of a human cell contains most of its DNA?', ['Cell membrane', 'Golgi apparatus', 'Nucleus', 'Ribosome'], 2, 'Most human cellular DNA is in the nucleus. Mitochondria also contain a small amount of DNA.'],
      ['At about 25°C, which pH value is neutral?', ['2', '5', '7', '10'], 2, 'Pure water is neutral at pH 7 at about 25°C.'],
      ['Which kind of heat transfer brings energy from the Sun to Earth?', ['Conduction', 'Convection', 'Radiation', 'Evaporation'], 2, 'Radiation can travel through the near-vacuum of space as electromagnetic waves.']
    ]
  },
  {
    id: 'aptitude', name: 'Aptitude & Reasoning', icon: '%', tone: 'rose',
    description: 'Percentages, ratios and logical patterns',
    questions: [
      ['What is 15% of 240?', ['24', '30', '36', '42'], 2, 'Multiply 240 by 15 and divide by 100 to get 36.'],
      ['Two quantities are in the ratio 3 to 5 and sum to 64. What is the smaller quantity?', ['16', '24', '32', '40'], 1, 'The eight equal parts are worth 8 each. The smaller quantity is three parts, or 24.'],
      ['What is the next term in the sequence 3, 6, 12, 24?', ['30', '36', '42', '48'], 3, 'Each term is twice the preceding term, so the next term is 48.'],
      ['A train covers 150 km in 2.5 hours. What is its average speed?', ['50 km/h', '55 km/h', '60 km/h', '65 km/h'], 2, 'Average speed is distance divided by time. 150 ÷ 2.5 equals 60 km/h.'],
      ['What is the mean of 8, 12, 15 and 21?', ['12', '13', '14', '15'], 2, 'The numbers sum to 56. Dividing by four gives a mean of 14.']
    ]
  }
];
