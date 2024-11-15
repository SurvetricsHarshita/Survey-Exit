const product = {
  Section1: {
    Q1: {
      number: "S1",
      question: "Please ask for the lady of the house,who should be the decision maker for purchase of  HH grocery and personal care products",
      //CODE BY OBSERVATION AND CONTINUE
      type: "radio", 
      options: ["Female ", " Male"], // todo Male = terminate
      termination: true,
      first: true,
      terminationCodes:["2"]
    },
    //? MATRIX QUESTION:
    Q2: {
      question: "INTERVIEWER: Please ask for the lady of the house , who should be the decision maker for purchase of HH grocery and personal care products CODE BY OBSERVATION AND CONTINUE ",
      response: " ",
      options: ["Female", "transgender"],
      number: "S1",
      media: true, //for audio
      type: "radio",
      instruction: "INTERVIEWER: Please ask for the lady of the house",
    },
    Q3: {
      number: "S3",
      question: "What is your current marital status ? ",
      //CODE BY OBSERVATION AND CONTINUE
      type: "radio",  //? type of questions (radio, number ,  multi(checkbox) , openEnded, slider , media , 
      //matrix , dropdown(single) , dropdown(multi) , rank , scale , upload )
      placeHolder: "",
      label: "",
      options: ["Married",
        "Single /Widow/Divorce" //todo Single /Widow/Divorce = terminate
      ],
      terminationCodes: ["2"],
      termination: true,
    },
    Q4: {
      number: "S4a",
      question: "Do you take  purchase decision for brands of personal skin  care products that are used in the household such as bathing soaps, body wash,  face creams and lotions etc ?  ",
      type: "radio",  //? type of questions (radio, number ,  multi(checkbox) , openEnded, slider , media , 
      //matrix , dropdown(single) , dropdown(multi) , rank , scale , upload )
      placeHolder: "",
      label: "",
      options: ["Yes",
        "No" //todo no = terminate
      ],
      otherSpecify: "false", //true or false
      random: "false", //true or false 
      audio: "false", //true or false
      video: "false", //true or false
      image: "false", //true or false
      termination: "true", //true or false 
      autoCodeOption: "false",//true or false
      autoCodeQuestion: "false", //true or false
      first: "false", //true or false if the question is first in the section
      maxSelections: " false", //number of selections allowed in multi type questions
      radioInput: " false" // if given radio along with input box 
    },
    Q5: {
      number: "S4b",
      question: "Have you participated in any market research surveys related to Personal Care category in the past THREE (3) months?",
      //CODE BY OBSERVATION AND CONTINUE
      type: "radio",  //? type of questions (radio, number ,  multi(checkbox) , openEnded, slider , media , 
      //matrix , dropdown(single) , dropdown(multi) , rank , scale , upload )
      placeHolder: "",
      label: "",
      options: ["Yes", //todo yes = terminate
        "No"
      ],
      otherSpecify: "false", //true or false
      random: "false", //true or false 
      audio: "false", //true or false
      video: "false", //true or false
      image: "false", //true or false
      termination: "true", //true or false 
      autoCodeOption: "false",//true or false
      autoCodeQuestion: "false", //true or false
      first: "false", //true or false if the question is first in the section
      maxSelections: " false", //number of selections allowed in multi type questions
      radioInput: " false" // if given radio along with input box 
    },
    Q6: {
      number: "S4c",
      question: "Can you please tell me your age in completed years? ",
      //CODE BY OBSERVATION AND CONTINUE
      type: "input",  //? type of questions (radio, number ,  multi(checkbox) , openEnded, slider , media , 
      //? matrix , dropdown(single) , dropdown(multi) , rank , scale , upload )
      placeHolder: "NOTE DOWN AGE IN YEARS",
      label: "(RECORD AGE IN YEARS)",
      // options: ["Yes", 
      //     "No" 
      // ],
      otherSpecify: "false", //true or false
      random: "false", //true or false 
      audio: "false", //true or false
      video: "false", //true or false
      image: "false", //true or false
      termination: "true", //true or false 
      autoCodeOption: "false",//true or false
      autoCodeQuestion: "false", //true or false
      first: "false", //true or false if the question is first in the section
      maxSelections: " false", //number of selections allowed in multi type questions
      radioInput: " false" // if given radio along with input box 
    },
    // todo  POST CODE THE AGE OF THE RESPONDENT IN THE GRID BELOW AND IN THE QUOTA SHEET
    //todo <25 = terminate
    //todo 25-30 , 31-35 , 36-40 , 41-45 ,   = continue
    //todo >45 = terminate
    //? Matrix question | matrix_single
    Q7: {
      number: "S5a", //exception need to show card 
      question: "Could you please tell me the education of the Chief Wage Earner of your household? By Chief Wage Earner, I refer to the person who contributes the maximum to your household expenditure?  ",
      //CODE BY OBSERVATION AND CONTINUE
      type: "radio",  //? type of questions (radio, number ,  multi(checkbox) , openEnded, slider , media , 
      //matrix , dropdown(single) , dropdown(multi) , rank , scale , upload )
      placeHolder: "",
      label: "",
      options: ["Illiterate",
        "Literate, but no school",
        "School (up to 4 years)",
        "School (5 to 9 years)",
        "School (10+ years (HSC)",
        "HSC+ , but not graduate",
        "Graduate / Pst Grad-Gen",
        "Graduate / Pst Grad-Prof"
      ],
      otherSpecify: "false", //true or false
      random: "false", //true or false 
      audio: "false", //true or false
      video: "false", //true or false
      image: "false", //true or false
      termination: "false", //true or false 
      autoCodeOption: "false",//true or false
      autoCodeQuestion: "false", //true or false
      first: "false", //true or false if the question is first in the section
      maxSelections: " false", //number of selections allowed in multi type questions
      radioInput: " false" // if given radio along with input box 
    },
    Q8: {
      number: "S6a",
      question: "Please look at this list and tell me which of these items do you have at home? (It could be owned by you, your family, or provided by the employer or it could be available in the house you live in; but it should be for the use of just you or your family) EXPLAIN, IF NECESSARY: We have a standard list of items that we use in all kind of cities and villages. So, don’t worry if any item appears irrelevant for you or too ordinary, just go ahead and tell me which items you do have. We need this information for survey purpose only ",
      type: "multi",
      options: ["Electricity Connection",
        "Ceiling Fan",
        "LPG Stove",
        "Two-Wheeler",
        "Colour TV",
        "Refrigerator",
        "Washing Machine",
        "Personal Computer/ Laptop",
        "Car/Jeep/Van",
        "Air Conditioner"
      ],
      response:" "
    },
    
    Q9: {
      number: "S6b",
      question: "Does your family own any agricultural land, by agricultural land I mean land that is currently under cultivation or plantation? ",
      //CODE BY OBSERVATION AND CONTINUE
      type: "input",  //? type of questions (radio, number ,  multi(checkbox) , openEnded, slider , media , 
      //matrix , dropdown(single) , dropdown(multi) , rank , scale , upload )
      placeHolder: "",
      label: "",
      options: ["need guidance"
      ],
      otherSpecify: "false", //true or false
      random: "false", //true or false 
      audio: "false", //true or false
      video: "false", //true or false
      image: "false", //true or false
      termination: "false", //true or false 
      autoCodeOption: "false",//true or false
      autoCodeQuestion: "false", //true or false
      first: "false", //true or false if the question is first in the section
      maxSelections: " false", //number of selections allowed in multi type questions
      radioInput: " false" // if given radio along with input box 
    },

   
    Q10: {
      number: "S7b",  //SHOW CARD
      question: "Have a look at the options and tell me which all beauty products  for personal skin care  are you using in your household ? ",
      //CODE BY OBSERVATION AND CONTINUE
      type: "multi",  //? type of questions (radio, number ,  multi(checkbox) , openEnded, slider , media , 
      //? matrix , dropdown(single) , dropdown(multi) , rank , scale , upload )
      placeHolder: "",
      label: "",
      options: ["Bathing soap bar",  //todo  continue only otherwise terminate
        "Bathing soap bar",
        "Beauty cream like Nivea, Charmis etc",
        "Body lotion",
        "Body Scrubber",
        "Sun Screen lotion",
        "None of above"
      ],
      otherSpecify: "false", //true or false
      random: "false", //true or false 
      audio: "false", //true or false
      video: "false", //true or false
      image: "false", //true or false
      termination: "true", //true or false 
      autoCodeOption: "false",//true or false
      autoCodeQuestion: "false", //true or false
      first: "false", //true or false if the question is first in the section
      maxSelections: " false", //number of selections allowed in multi type questions
      radioInput: " false" // if given radio along with input box 
    },

    Q11: {
      number: "S7c",
      question: "Do you use more than one bathing soap bar in your household ?",
      //CODE BY OBSERVATION AND CONTINUE
      type: "radio",  //? type of questions (radio, number ,  multi(checkbox) , openEnded, slider , media , 
      //? matrix , dropdown(single) , dropdown(multi) , rank , scale , upload )
      placeHolder: "",
      label: "",
      options: ["Only  one soap that is used by everybody",
        "Only one soap that is  used  by only me ",
        "Everybody in the family uses their own individual soap"],
      otherSpecify: "false", //true or false
      random: "false", //true or false 
      audio: "false", //true or false
      video: "false", //true or false
      image: "false", //true or false
      termination: "false", //true or false 
      autoCodeOption: "false",//true or false
      autoCodeQuestion: "false", //true or false
      first: "false", //true or false if the question is first in the section
      maxSelections: " false", //number of selections allowed in multi type questions
      radioInput: " false" // if given radio along with input box 
    }, //! Meaning: IF 1 CODED  THEN IT IS A  SINGLE HOUSEHOLD WITH SINGLE SOAP ELSE IT IS A MULTIPLE SOAP HOUSEHOLD
    Q12: {
      number: "S7d",
      question: "How many members in the family do you have . By this I mean the people who are living in this house with you ?SINGLE ",
      //CODE BY OBSERVATION AND CONTINUE
      type: "radio",  //? type of questions (radio, number ,  multi(checkbox) , openEnded, slider , media , 
      //? matrix , dropdown(single) , dropdown(multi) , rank , scale , upload )
      placeHolder: "",
      label: "",
      options: ["Me and my husband",
        "Me and my husband and our one child  ",
        "Me and my husband and our two children",
        "Me and my husband and our three children",
        "Me and my husband ,our children and other relatives"
      ],
      otherSpecify: "false", //true or false
      random: "false", //true or false 
      audio: "false", //true or false
      video: "false", //true or false
      image: "false", //true or false
      termination: "false", //true or false 
      autoCodeOption: "false",//true or false
      autoCodeQuestion: "false", //true or false
      first: "false", //true or false if the question is first in the section
      maxSelections: " false", //number of selections allowed in multi type questions
      radioInput: " false" // if given radio along with input box 
    },

    // doubt
    Q13: {
      number: "S7e",
      question: "Total  number of members living in the family",
      //CODE BY OBSERVATION AND CONTINUE
      type: "matrix_openended",  //? type of questions (radio, number ,  multi(checkbox) , openEnded, slider , media , 
      //? matrix , dropdown(single) , dropdown(multi) , rank , scale , upload )
      placeHolder: "",
      label: "",
      options: ["Number of children",
        "Number of adults"
      ],
      otherSpecify: "false", //true or false
      random: "false", //true or false 
      audio: "false", //true or false
      video: "false", //true or false
      image: "false", //true or false
      termination: "false", //true or false 
      autoCodeOption: "false",//true or false
      autoCodeQuestion: "false", //true or false
      first: "false", //true or false if the question is first in the section
      maxSelections: " false", //number of selections allowed in multi type questions
      radioInput: " false" // if given radio along with input box 
    },

    Q14: {
      number: "S7f",
      question: "How often do you purchase soap? ",
      //CODE BY OBSERVATION AND CONTINUE
      type: "radio",  //? type of questions (radio, number ,  multi(checkbox) , openEnded, slider , media , 
      //? matrix , dropdown(single) , dropdown(multi) , rank , scale , upload )
      placeHolder: "",
      label: "",
      options: ["Once a month",
        "Once a month",
        "Once in fifteen days ",
        "Once in two months",
        "Less often"
      ],
      otherSpecify: "false", //true or false
      random: "false", //true or false 
      audio: "false", //true or false
      video: "false", //true or false
      image: "false", //true or false
      termination: "false", //true or false 
      autoCodeOption: "false",//true or false
      autoCodeQuestion: "false", //true or false
      first: "false", //true or false if the question is first in the section
      maxSelections: " false", //number of selections allowed in multi type questions
      radioInput: " false"
    },
    Q15: {
      number: "S7g",
      question: "What is the pack size?  ",
      //CODE BY OBSERVATION AND CONTINUE
      type: "radio",  //? type of questions (radio, number ,  multi(checkbox) , openEnded, slider , media , 
      //? matrix , dropdown(single) , dropdown(multi) , rank , scale , upload )
      placeHolder: "",
      label: "",
      options: ["Less that 50 gms",
        "50 gms to 75 gms",
        "75 gms but <  100 gms",
        "100 gms", // todo continue only otherwise terminate
        "More than 100 gms" // todo continue only otherwise terminate
      ],
      otherSpecify: "false", //true or false
      random: "false", //true or false 
      audio: "false", //true or false
      video: "false", //true or false
      image: "false", //true or false
      termination: "true", //true or false 
      autoCodeOption: "false",//true or false
      autoCodeQuestion: "false", //true or false
      first: "false", //true or false if the question is first in the section
      maxSelections: " false", //number of selections allowed in multi type questions
      radioInput: " false"
    },
    Q16: {
      number: "S7h",
      question: "How long is your bathing ritual?",
      type: "radio",  //? type of questions (radio, number ,  multi(checkbox) , openEnded, slider , media , 
      //? matrix , dropdown(single) , dropdown(multi) , rank , scale , upload )
      placeHolder: "",
      label: "",
      options: ["Less that 5 minutes",
        "5 to 10 minutes",
        "10 to 15 minutes",
        " More than 15  minutes",
      ],
      otherSpecify: "false", //true or false
      random: "false", //true or false 
      audio: "false", //true or false
      video: "false", //true or false
      image: "false", //true or false
      termination: "true", //true or false 
      autoCodeOption: "false",//true or false
      autoCodeQuestion: "false", //true or false
      first: "false", //true or false if the question is first in the section
      maxSelections: " false", //number of selections allowed in multi type questions
      radioInput: " false"
    },
    //todo added one more option by user as if none of soap name is given in the following options
    Q17: {
      number: "S8a",
      question: "Whenever you think of bathing soap bars which brand comes to your mind first? NEED A FULL LIST OF BRANDS OF BATHING SOAPS FROM THE CLIENT",
      type: "radio", 
      options: ["Cinthol",
        "Dove",
        "Dyna",
        "Fiam",
        "Famus",
        "Godrej number 1",
        "Jo",
        "Khadee",
        "Lux",
        "Liril",
        "Medimix",
        "Margo",
        "Moti",
        "Mysore sandal soap"
      ],
      response:" "
    },
    //todo  need to append the list of brands user added in the below question
    Q18: {
      number: "S8b",
      question: "Which  are the other brands that come to your mind… AND NEXT…. AND NEXT… AND NEXT (PROBE THREE TIMES)? ",
      type: "input",  //? type of questions (radio, number ,  multi(checkbox) , openEnded, slider , media , 
      //? matrix , dropdown(single) , dropdown(multi) , rank , scale , upload )
      placeHolder: "",
      label: "",
      options: [],
      otherSpecify: "false", //true or false
      random: "false", //true or false
      audio: "false", //true or false
      video: "false", //true or false
      image: "false", //true or false
      termination: "false", //true or false
      autoCodeOption: "false",//true or false
      autoCodeQuestion: "false", //true or false
      first: "false", //true or false if the question is first in the section
      maxSelections: " false", //number of selections allowed in multi type questions
      radioInput: " false"

    },
    Q19: {
      number: "S8c",
      question: "Here is a list of few more bathing soap bars. Which ALL bathing soap bars are you  AWARE  of?",
      type: "imatrix_input",  //? type of questions (radio, number ,  multi(checkbox) , openEnded, slider , media , 
      //? matrix , dropdown(single) , dropdown(multi) , rank , scale , upload )
      placeHolder: "",
      label: "",
      options: ["Cinthol",
        "Dove",
        "Dyna",
        "Fiam",
        "Famus",
        "Godrej number 1",
        "Jo",
        "Khadee",
        "Lux",
        "Liril",
        "Medimix",
        "Margo",
        "Moti",
        "Mysore sandal soap"
      ],
      column: ["Tom", "SPONTANEOUS", "Last 3 Months", "Currently using"],
      otherSpecify: "false", //true or false
      random: "false", //true or false
      audio: "false", //true or false
      video: "false", //true or false
      image: "false", //true or false
      termination: "false", //true or false
      autoCodeOption: "false",//true or false
      autoCodeQuestion: "false", //true or false
      first: "false", //true or false if the question is first in the section
      maxSelections: " false", //number of selections allowed in multi type questions
      radioInput: " false"
    },
    Q20: {
      number: "S9a",
      question: "Please have a look at this card and let me know which all  bathing soap bars you and your family have ever used ?",
      type: "multi",
      options: ["Cinthol",
        "Dove",
        "Dyna",
        "Fiam",
        "Famus",
        "Godrej number 1",
        "Jo",
        "Khadee",
        "Lux",
        "Liril",
        "Medimix",
        "Margo",
        "Moti",
        "Mysore sandal soap"
      ],
      response:" "
    },
    Q21: {
      number: "S9b",
      question: "Please have a look at this card and let me know which all  bathing soap bars you and your family have in the last 1 Year ?",
      type: "multi",
      options: ["Cinthol",
        "Dove",
        "Dyna",
        "Fiam",
        "Famus",
        "Godrej number 1",
        "Jo",
        "Khadee",
        "Lux",
        "Liril",
        "Medimix",
        "Margo",
        "Moti",
        "Mysore sandal soap"
      ],
      response:" "
    },
    Q22: {
      number: "S9c",
      question: "Please have a look at this card and let me know which all  bathing soap bars you and your family members using most often in the last 3 Months ?",
      type: "radio",
      options: ["Cinthol",
        "Dove",
        "Dyna",
        "Fiam",
        "Famus",
        "Godrej number 1", //todo continue only otherwise terminate
        "Jo", //todo continue only otherwise terminate 
        "Khadee",
        "Lux",
        "Liril",
        "Medimix",
        "Margo",
        "Moti",
        "Mysore sandal soap"
      ],
      response:" "
    },
    Q23: {
      number: "S9d",
      question: "Please have a look at this card and let me know which all  bathing soap bars you and your family members are currently using in the household ?",
      type: "radio", 
      options: ["Cinthol",
        "Dove",
        "Dyna",
        "Fiam",
        "Famus",
        "Godrej number 1",
        "Jo",
        "Khadee",
        "Lux",
        "Liril",
        "Medimix",
        "Margo",
        "Moti",
        "Mysore sandal soap"
      ],
      response:" "
    },
    Q24: {
      number: "S9e",
      question: "May I know  how often you change your brand of  bathing soap? ",
      type: "radio",  //? type of questions (radio, number ,  multi(checkbox) , openEnded, slider , media , 
      //? matrix , dropdown(single) , dropdown(multi) , rank , scale , upload )
      placeHolder: "",
      label: "",
      options: ["Never change",
        "Change infrequently , may be once in two to three years",
        "Change  frequently , every  1-2 years",
        "Always change my brand of soap every year",
        "Always change my brand of soap every six- three months",
        "Always change my brand of soap every  three- two months",

      ],
      // column:["Ever used" , "Last 1 Year" , "Last 3 Months" , "Currently using"],
      otherSpecify: "false", //true or false
      random: "false", //true or false
      audio: "false", //true or false
      video: "false", //true or false
      image: "false", //true or false
      termination: "false", //true or false
      autoCodeOption: "false",//true or false
      autoCodeQuestion: "false", //true or false
      first: "false", //true or false if the question is first in the section
      maxSelections: " false", //number of selections allowed in multi type questions
      radioInput: " false"
    },
    Q25: {
      number: "S9f",
      question: "Why do you change your soap so frequently? ",
      type: "multi",  //? type of questions (radio, number ,  multi(checkbox) , openEnded, slider , media , 
      //? matrix , dropdown(single) , dropdown(multi) , rank , scale , upload )
      placeHolder: "",
      label: "",
      options: ["I like different fragrances  so I try a new fragrance",
        "I like value for money bathing soaps so buy the inexpensive soap that is available  ",
        "I like to try new brands",
        "I like to change my brand when I want to feel different and I don’t like the same experience ",
        "I like to change my brand of soap because my skin  starts showing a reaction if the soap is constantly the same brand",
        "Any other reason please specify ____",

      ],
      otherSpecify: "true", //true or false
      random: "false", //true or false
      audio: "false", //true or false
      video: "false", //true or false
      image: "false", //true or false
      termination: "false", //true or false
      autoCodeOption: "false",//true or false
      autoCodeQuestion: "true", //true or false // todo if choose 5 or 6 in S9e
      first: "false", //true or false if the question is first in the section
      maxSelections: " false", //number of selections allowed in multi type questions
      radioInput: " true"
    },
    Q26: {
      number: "S9g",
      question: "May I know the fragrance of your current soap? ",
      type: "radio",  //? type of questions (radio, number ,  multi(checkbox) , openEnded, slider , media , 
      //? matrix , dropdown(single) , dropdown(multi) , rank , scale , upload )
      placeHolder: "",
      label: "",
      options: ["Jasmine",
        "Lemon ",
        "Rose",
        "Sandalwood",
        "Milk/Cream/Saffron",
        "Woody/Aqua/ etc", //todo terminate
        "Mixed fragrance None of above" //todo terminate

      ],
      // column:["Ever used" , "Last 1 Year" , "Last 3 Months" , "Currently using"],
      otherSpecify: "false", //true or false
      random: "false", //true or false
      audio: "false", //true or false
      video: "false", //true or false
      image: "false", //true or false
      termination: "true", //true or false
      autoCodeOption: "false",//true or false
      autoCodeQuestion: "true", //true or false // todo if choose 5 or 6 in S9e
      first: "false", //true or false if the question is first in the section
      maxSelections: " false", //number of selections allowed in multi type questions
      radioInput: " false"
    },
    Q27: {
      number: "s10a",
      question: "Are you willing to participate in such a study by using the soap sample that we leave with you for next 15 days? ",
      type: "radio",
      options: ["Yes, i wish to participate",  // todo continue only otherwise terminate
        "No , i don't  wish  to participate"],
      termination: "true",
    },
    Q28: {
      number: "s10b",
      questions: "Will you be available at home for the next  15 days ?",
      type: "radio",
      options: ["Yes, I will be available at home for the next 15 days or so", //todo continue only otherwise terminate
        "No, I may not be at home "],
      termination: "true",
    },
    //!  SUPERVISOR OR QUALITY MANAGEMENT TEAM BEFORE PRODUCT PLACEMENT
    Q29: {
      number: "QP1",
      question: "Are you willing to participate in such a study by using the soap sample that we leave with you  for next 15 DAYS ?",
      type: "radio",
      options: [
        "Yes, I wish to participate", // todo continue only otherwise terminate
        "No, I don't wish to participate"
      ]
      ,
      termination: "true",
    },
    Q30: {
      number: "QP2",
      question: "Will you be available at home for the next 15 days?",
      type: "radio",
      options: [
        "Yes, I will be available at home for the next 15 days or so", //todo continue only otherwise terminate
        "No, I may not be at home "
      ]
      ,
      termination: "true",
    }
  },
}

export default product;