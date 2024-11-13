

const products = {
  Section1: {
    Q1: {
      question: "FW CENTER DETAILS ",
      response: " ",
      options: [ "Indore ", "Lucknow", "Guwahati" ],
      first: true,
      number: "f1",

      type: "radio",

    },
    Q2: {
      question: "Area classification  ",
      response: " ",
      options: [ "Urban ", "	Semi urban" ],

      number: "f2", 
      type: "rank",


    },
    Q3: {
      question: "INTERVIEWER: Please ask for the lady of the house , who should be the decision maker for purchase of HH grocery and personal care products CODE BY OBSERVATION AND CONTINUE ",
      response: " ",
      options: [ "Female", "Male" ],
      first: true,
      number: "S1",
      media: true,
      termination: true,
      type: "radio",
      instruction: "INTERVIEWER: Please ask for the lady of the house",
      terminationCodes:["2"]
    },
    Q4: {
      question: "Do you or any of your family members work in the following industries?",
      response: "",
      number: "S2",
      termination: true,
      options: [ "Marketing", "Marketing / Market Research (agency and including a market research department within an organization)", "	Advertising / PR Agency", "Journalism / Print (Newspaper / Magazine)", "Working in Retail shop/ Kirana Shop/Medical Stores/Department stores ", "Working in FMCG / Retail company /personal grooming products  Industry / Personal grooming products Distribution company", "None of the above" ],
      type: "radio",
      terminationCodes: [ "1", "2", "3", "4", "5", "6" ]
    },
    Q5: {

      question: "What is your current marital status ? ",
      response: "",
      number: "S3",
      termination: true,
      options: [ "Married", "Single /Widow/Divorce" ],
      type: "radio",
      terminationCodes: [ "2" ]

    }
  },
  //?QUESTIONS-
  Section2: {


  }
};

export default products;


// Q1: {
//   number: "S1",
//   question: "Please ask for the lady of the house,who should be the decision maker for purchase of  HH grocery and personal care products",
//   //CODE BY OBSERVATION AND CONTINUE
//   type: "radio ",  //? type of questions (radio, number ,  multi(checkbox) , openEnded, slider , media ,
//   //matrix , dropdown(single) , dropdown(multi) , rank , scale , upload )
//   placeHolder: "",
//   label: "",
//   options: ["FEMALE ", " MALE"], // todo Male = terminate
//   otherSpecify: "false", //true or false
//   random: "false", //true or false
//   audio: "false", //true or false
//   video: "false", //true or false
//   image: "false", //true or false
//   termination: "true", //true or false
//   autoCodeOption: "false",//true or false
//   autoCodeQuestion: "false", //true or false
//   first: "true", //true or false if the question is first in the section
//   maxSelections: " false", //number of selections allowed in multi type questions
//   radioInput: " false" // if given radio along with input box
// },