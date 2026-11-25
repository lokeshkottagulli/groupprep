const examSkillsTopics = [
  {
    id: 'general-english', name: 'General English', icon: 'A', tone: 'blue',
    description: 'Grammar, vocabulary, sentence correction, reading comprehension and idioms',
    questions: [
      ['Which sentence has the correct subject–verb agreement?', ['Neither of the statements are correct.', 'Neither of the statements is correct.', 'Neither of the statements were correct.', 'Neither of the statements have been correct.'], 1, 'In formal usage, neither of takes a singular verb in this construction. The plural noun within the phrase does not control the verb.'],
      ['Choose the verb phrase that shows an action continuing to the present. “She ___ in Vijayawada since 2020.”', ['lives', 'will live', 'had lived', 'has lived'], 3, 'The present perfect has lived connects the past starting point, marked by since 2020, to the present.'],
      ['Which sentence reports the same meaning in the active voice? “The report was issued by the district office.”', ['The district office issued the report.', 'The report issued the district office.', 'The district office will issue the report.', 'The district office has been issuing the report.'], 0, 'The district office becomes the subject, and issued retains the original simple past tense.'],
      ['A notice says, “Applications close at 5 p.m. on Friday. Applicants may correct a submitted form until the deadline.” What can a person who applied on Thursday do?', ['Submit corrections on Saturday', 'Extend the deadline by submitting a correction', 'Correct the submitted form before 5 p.m. on Friday', 'Make corrections only before submitting the form'], 2, 'The notice allows corrections after submission as long as they are made by the Friday deadline.'],
      ['What does “in the pipeline” mean in “Two new projects are in the pipeline”?', ['They have been cancelled.', 'They are being planned or developed.', 'They are already complete.', 'They have been assigned to a different district.'], 1, 'In the pipeline means something is being planned or prepared and is expected later.']
    ]
  },
  {
    id: 'general-telugu', name: 'General Telugu', icon: 'అ', tone: 'gold',
    description: 'తెలుగు వ్యాకరణం, పదజాలం, పర్యాయపదాలు, వ్యతిరేక పదాలు, సంధులు మరియు సమాసాలు',
    questions: [
      ['“పుస్తకం” పదానికి సరైన బహువచనం ఏది?', ['పుస్తకులు', 'పుస్తకానికి', 'పుస్తకాలు', 'పుస్తకము'], 2, '“పుస్తకం” ఏకవచనం. ఒకటి కంటే ఎక్కువ పుస్తకాలను సూచించడానికి “పుస్తకాలు” అంటారు.'],
      ['“విజయం” పదానికి వ్యతిరేక పదం ఏది?', ['అపజయం', 'ప్రయత్నం', 'ఆనందం', 'సాధన'], 0, '“విజయం” అంటే గెలుపు. దానికి వ్యతిరేకమైన ఓటమిని “అపజయం” అంటారు.'],
      ['“సూర్యుడు” పదానికి పర్యాయపదం ఏది?', ['శశి', 'పవనుడు', 'వరుణుడు', 'భానుడు'], 3, '“భానుడు” సూర్యుడికి పర్యాయపదం. “శశి” చంద్రుణ్ని సూచిస్తుంది.'],
      ['“దేవాలయం” పదాన్ని విడదీస్తే వచ్చే పదాలు ఏవి?', ['దేవి + ఆలయం', 'దేవ + ఆలయం', 'దేవ + నిలయం', 'దేవా + లయం'], 1, '“దేవ + ఆలయం” కలిసినప్పుడు సవర్ణదీర్ఘ సంధి వల్ల “దేవాలయం” అవుతుంది.'],
      ['“రాము వేగంగా పరుగెత్తాడు” అనే వాక్యంలో “వేగంగా” ఏ పాత్రను పోషిస్తుంది?', ['కర్త', 'కర్మ', 'క్రియావిశేషణం', 'సర్వనామం'], 2, '“వేగంగా” అనేది పరుగెత్తే చర్య ఎలా జరిగిందో తెలుపుతుంది. అందువల్ల అది క్రియావిశేషణం.']
    ]
  },
  {
    id: 'ethics-integrity', name: 'Ethics and Integrity', icon: '§', tone: 'green',
    description: 'Public-service values, impartiality, conflicts of interest, accountability and ethical case studies',
    questions: [
      ['A tender evaluator learns that a close relative owns one of the bidding firms. What should the evaluator do?', ['Score the bid informally and avoid signing the report', 'Ask the firm for an assurance that it expects no favour', 'Disclose the relationship and withdraw from the evaluation as required', 'Stay on the panel and award the firm fewer points to appear impartial'], 2, 'Disclosure and recusal allow an independent evaluation and address both actual and apparent conflicts of interest.'],
      ['An officer discovers that a report they signed contains a material error. Which response best demonstrates accountability?', ['Keep the report unchanged until an audit discovers the error', 'Inform the relevant authority, correct the report and document the change', 'Ask a junior colleague to sign the correction without explanation', 'Remove the report from the record without documenting why'], 1, 'A transparent correction limits further harm and leaves an audit trail that shows what happened and how it was addressed.'],
      ['Which practice best demonstrates impartiality when distributing a limited public benefit?', ['Use the same published eligibility criteria for every applicant', 'Prioritise applicants who know the staff', 'Choose the most vocal applicants first', 'Vary the criteria to match each application’s outcome'], 0, 'Impartial decisions apply relevant, consistent criteria without giving preferential treatment based on personal connections.'],
      ['A public report needs to show welfare results, but case files contain personal medical details. What should the team publish?', ['Complete medical files with names removed but addresses retained', 'The files as received, without checking what they contain', 'Only the names of beneficiaries so readers can contact them', 'Aggregated results with personal information protected'], 3, 'Aggregated reporting helps the public assess a programme while protecting details about identifiable people.'],
      ['A supervisor asks an employee to mark undelivered supplies as received. Which action best protects integrity?', ['Sign now and ask for delivery next week', 'Refuse to certify the delivery, document the facts and use the appropriate reporting channel', 'Ask a colleague to sign in the employee’s place', 'Leave the record blank without alerting anyone'], 1, 'Certification should reflect what actually happened. Documenting and escalating the issue protects the record and enables a response.']
    ]
  },
  {
    id: 'essay-descriptive-writing', name: 'Essay and Descriptive Writing', icon: '✎', tone: 'violet',
    description: 'Essay planning, thesis statements, command words, evidence, conclusions and précis writing',
    questions: [
      ['Which thesis best answers an essay prompt on how digital public services can improve access to welfare?', ['Digital technology is very important in the modern world.', 'This essay will discuss digital services and welfare.', 'Many countries have computers, which have changed daily life.', 'Digital services can widen access through simpler applications and tracking when assisted channels address connectivity and literacy barriers.'], 3, 'The last thesis gives a specific argument, identifies how access improves and names a condition that the essay can examine.'],
      ['A question asks you to “critically examine” a drought preparedness strategy. Which plan best follows the command?', ['List its main measures without judging them', 'Explain its measures, assess strengths and limitations against evidence, and reach a reasoned judgment', 'Define drought and repeat the definition in the conclusion', 'Present only the strategy’s strongest points'], 1, 'A critical examination tests how well a strategy works, considers limitations and reaches a justified assessment.'],
      ['Which evidence best supports a claim that an urban area’s flood exposure increased?', ['A comparison of dated flood-risk maps for the same area using a consistent method', 'A comment on a news article about a different city', 'Today’s temperature in the city', 'A general definition of flooding'], 0, 'Comparable maps can show how exposure changed over time. The evidence should match the geographic scope and the claim being made.'],
      ['Which approach is most appropriate for a précis of a passage about groundwater conservation?', ['Add new examples and your opinion at the end', 'Keep every example and remove the main claim', 'Preserve the central argument and key points in your own words within the word limit', 'Copy the opening paragraph and omit the rest'], 2, 'A précis condenses the original’s central meaning and important supporting points without introducing independent opinions.'],
      ['What should a strong conclusion in a descriptive answer do?', ['Add a new major argument that the body never discusses', 'Repeat every point word for word', 'Replace the argument with an unrelated quotation', 'Draw together the main findings and answer the question directly'], 3, 'A conclusion synthesises the evidence already discussed and gives the reader a clear answer to the prompt.']
    ]
  },
  {
    id: 'computer-proficiency-test', name: 'Computer Proficiency Test', icon: '▤', tone: 'teal',
    description: 'Task-based practice for Word, Excel, PowerPoint, file management and PDF export',
    questions: [
      ['In Word for Windows, you need a heading to begin on a new page even if text above it changes. What should you insert immediately before the heading?', ['A page break', 'Several blank paragraphs', 'A line break', 'A tab stop'], 0, 'A page break moves subsequent content to the next page. In Word for Windows, Ctrl+Enter inserts one.'],
      ['In Excel, B1 holds a fixed rate and C2 holds the first quantity. Which formula multiplies the quantity by the rate and keeps the rate cell fixed when filled down?', ['=C2*B1', '=C$2*B1', '=C2*$B$1', '=$C$2*B1'], 2, '$B$1 is an absolute cell reference, so the rate stays fixed. The relative reference C2 becomes C3, C4 and so on.'],
      ['A worksheet contains applicant names and scores. How should you rank applicants by score while preserving which score belongs to each person?', ['Sort just the score cells', 'Sort just the names alphabetically', 'Copy the scores into a separate column and sort only that column', 'Sort the entire table by the Score column in descending order'], 3, 'Sorting the entire table moves each row together, so every applicant’s score stays with their record.'],
      ['Which PowerPoint feature lets you set common title formatting and layouts for multiple slides?', ['Animation Pane', 'Slide Master', 'Presenter View', 'Slide Sorter'], 1, 'A slide master and its layouts define shared formatting that can apply across multiple slides.'],
      ['A submission portal asks for a PDF of a report you wrote in Word. What is the correct workflow?', ['Export or save a PDF copy in Word, open it to check the layout, then upload it', 'Rename the file from .docx to .pdf', 'Change the file’s icon and upload the original document', 'Copy the text into an email and submit the email as the PDF'], 0, 'Exporting converts the document into PDF format. Renaming the extension leaves the contents in the original Word format.']
    ]
  }
];
