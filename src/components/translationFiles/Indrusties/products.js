const products = {
Section1 : {

  
  Q1: 
  {
    number: "Q1",
    question: "Standard non compliance and industry termination questions",
    response: "",
    type: "input",
    placeHolder: "",
    inputType: "text",
  },
  
  Q2_a: 
  {
    number: "Q2_a",
    question: "Selection criteria ",
    response: "",
    options: [
      { label: "Ownership of Car - Brand and model/variant", code: "1" }, 
      { label: "Microwave", code: "2" },
      { label: "AC/Air cooler", code: "3" },
      { label: "PC/Laptop/Table", code: "4" },
      { label: "modular kitchen", code: "5" },
      { label: "smart TY", code: "6" },
      { label: "club or gym membership", code: "7" },
    ],
    type: "radio",
    // termination: true,
    // terminationCodes: ["1", "2"],
    
  },

  Q2_b: 
  {
    number: "Q2_b",
    question: "Selection criteria- whether owns ",
    response: "",
    options: [
      { label: "2BHK", code: "1" }, 
      { label: "Bigger house than 2 BHK", code: "2" },
      
    ],
    type: "radio",
    
  },
  
  Q3:
  {
    number: "Q3",
    question: "If stayed at a 4*/5* hotel in last 2 years when on holiday or work",
    response: "",
    type: "radio",
    options: [
      { label: "yes", code: "1" }, 
      { label: "no", code: "2" },]
  },
  
  Q4: 
  {
    number: "Q4",
    question: "MOSR – whether has DTH/cable/Internet WIFI/FIBER connection",
    response: "",
    type: "radio",
    options: [
      { label: "yes", code: "1" }, 
      { label: "no", code: "2" },]
  },
  
  Q5: 
  {
    number: "Q5",
    question: "Number of family members staying in the household",
    response: "",
    type: "number",
    placeHolder: "",
    inputType: "number",
  },
  
  Q6: 
  {
    number: "Q6",
    question: "Highest education Male and Female",
    response: "",
    type: "input",
    placeHolder: "",
    inputType: "text",
  },
  
  Q7: 
  {
    number: "Q7",
    question: "Languages known, spoken at home and language most often spoken",
    response: "",
    type: "input",
    placeHolder: "",
    inputType: "text",
  },
  
  Q8: 
  {
    number: "Q8",
    question: "Contact details (mobile number and address)",
    response: "",
    type: "input",
    placeHolder: "",
    inputType: "text",
  },
  
  Q9: 
  {
    number: "Q9",
    question: "Consent to share data and contact details for future use",
    response: "",
    options: [
      { label: "yes", code: "1" }, 
      { label: "no", code: "2" },
      
    ],
    type: "radio",
  },
  
  Q10: 
  {
    number: "Q10",
    question: "Willingness to participate in the panel",
    response: "",
    options: [
      { label: "yes", code: "1" }, 
      { label: "no", code: "2" },
      
    ],
    type: "radio",
  },
  
}
}
  
  export default products;


