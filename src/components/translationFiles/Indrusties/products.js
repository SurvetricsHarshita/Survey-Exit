const products = {
Section1 : {

  
  Q1: 
  {
    number: "QH",
    question: "Please select the appropriate option from the list. This household is located in …",
    response: "",
    options: [
      { label: "A gated community with 24 hours security", code: "1" }, 
      { label: "A gated community with 24 hours security and amenities like swimming pool / gym /play area etc.", code: "2" },
      { label: "No 24 hours security but in a premium locality", code: "3" },
      { label: "Individual row house or bungalow", code: "4" },
      { label: "No 24 hours security and no premium locality", code: "5" },
      { label: "Other specify ……….", code: "6" },
    
    ],
    type: "radio",
    first:true,
    audio:true
  },
  
  Q2_a: 
  {
    number:"I",
    question: "May I please proceed?  ",
    response: " ",
    instruction:"Hi! I am _______from __________(Agency name) and we are conducting a survey for TV viewership. Can I please ask you a few questions. It's a very short survey and will take only around 5 minutes of your time! ",

    options:[
      { label: "Yes", code: "1" }, 
      { label: "No", code: "2" }
     
    ],
    type: "radio",
    termination: true,
    terminationCodes: ["2"],
    audio:true
   
    
  },

  Q2: {
    number: "QConsent",
    question: "Before we start with the survey, may I request your consent to use your contact details (e.g., email or phone) to follow up on your survey responses. Your information will be kept confidential and used only for this purpose. ",
    response: "",
  instruction:"Proceed only if selected yes",
  label:"Do you consent to share your contact details?",
    options: [
      { label: "Yes, I consent.", code: "1" }, 
      { label: "No, I do not consent.", code: "2" },
      
    ],
    type: "radio",
    termination: true,
    terminationCodes: ["2"],
    audio:true
    
  },
  
  Q3:
  {
    number: "Q1",
   "question": "Can you please tell me whether you or any member in your household works in any of the following types of organization?  ",
    response: "",
    type: "radio",
    options: [
      {
        "label": "Marketing/Market Research",
        "code": "1"
      },
      {
        "label": "Media ,Print & TV / Broadcasting Agency / TV Channel Network",
        "code": "2"
      },
      {
        "label": "Working with DTH / IPTV / Cable Operator",
        "code": "3"
      },
      {
        "label": "Advertising/Public Relations /Media Planning Agency",
        "code": "4"
      },
      {
        "label": "Journalist/Anchor,Full time or Part time",
        "code": "5"
      },
      {
        "label": "Whether part of any TV/Media panel in last 2 years e.g. BARCINDIA TV Panel",
        "code": "6"
      },
      {
        "label": "None of the above",
        "code": "7"
      }],
      termination: true,
      terminationCodes: ["1","2","3","4","5","6"],
  },
 
  
  Q4: 
  {
    number: "Q2_a",
    question: " Can you please tell me the name of Chief Wage Earner of this household. By this, I mean the person who contributes the most to the household expenditure.",
    response: "",
    type: "input",
    "placeHolder": "please mention name",
"label": "Name",
  },
  

 
  
  Q6: 
  {
    "number": "Q2_b",
    "question": "Please select correct response for education of (add name from Q2.1) ",
  
    "type": "radio",
    "    placeHolder": "",
    "label": "Education",
    "options": [
      {
        "label": "Illiterate",
        "code": "1"
      },
      {
        "label": "Literate but no formal education/School Upto 4 Standard",
        "code": "2"
      },
      {
        "label": "School 5th-9th Standard",
        "code": "3"
      },
      {
        "label": "SSC/HSC (10th-12th)",
        "code": "4"
      },
      {
        "label": "Some College Including Diploma but not Graduate",
        "code": "5"
      },
      {
        "label": "Graduate- General (B.A, B.SC, B. COM)/ Post-Graduate General (M. A, M.SC, M. COM, M. Phil))",
        "code": "6"
      },
      {
        "label": "Graduate- Professional (B.E., M.B.B. S, B. Tech)/ Post-Graduate- Professional (M. E, M. TECH, M.B.A)",
        "code": "7"
      },
      
    ],
  },
  
  Q7: 
  {
    "number": "Q2_c",
    "question": "Please tell me which of these durables / items do you have at home? It could be owned by you, your family, or provided by the employer or it could be available in the house you live in; but it should be for the use of just you or your household/family members. These durables should be in working condition.",
   
    "type": "multi",
   
    "label": "Durables",
    "options": [
      {
        "label": "Air-Conditioner",
        "code": "1"
      },
      {
        "label": "Fridge-Refrigerator",
        "code": "2"
      },
      {
        "label": "Washing Machine",
        "code": "3"
      },
      {
        "label": "Color TV/LCD/LED/PLASMA TV",
        "code": "4"
      },
      {
        "label": "Personal Computer / Laptop",
        "code": "5"
      },
      {
        "label": "Electricity Connection (availability of electricity)",
        "code": "6"
      },
      {
        "label": "Ceiling Fan",
        "code": "7"
      },
      {
        "label": "Gas Stove Stove/PNG stove",
        "code": "8"
      },
      {
        "label": "Two-Wheeler",
        "code": "9"
      },
      {
        "label": "Car/Jeep/Van",
        "code": "10"
      },
      {
        "label": "Agricultural Land",
        "code": "11"
      }],
      
      termination:true,
      autoCodeQuestion:true,
      autoCodeQuestionVar:"NCCS"
      },
  
  Q8: 
  {
    "number": "Q2_e",
    "question": "Please tell me which of these durables / items do you have at home?",
    
    "type": "rate",
 

    heading:"Lifestyle",
    "options": "",
    "lableoptions": "",
    "STATEMENTS": [
      {
        "label": "Air cooler",
        "id": "Q2_e_1"
      },
      {
        "label": "Tab",
        "id": "Q2_e_2"
      },
      {
        "label": "Smart TV or TV which is connected to internet/ WIFI / Fiber",
        "id": "Q2_e_3"
      },
      {
        "label": "Modular Kitchen",
        "id": "Q2_e_4"
      }
    ],
    "FREQUENCIES": [
      {
        "label": "Yes",
        "value": "1"
      },
      {
        "label": "No",
        "value": "2"
      }
    ],
    termination:true,
  },
  
  Q9: 
  {
    "number": "Q3",
    "question": "At your home, which of these TV connections are available currently? If you have multiple connections for multiple TVs, please select all types of connections.",
   
    "type": "multi",
    "    placeHolder": "",
    "label": "TV connection type",
    "options": [
      {
        "label": "DTH",
        "code": "1"
      },
      {
        "label": "Normal Antenna",
        "code": "2"
      },
      {
        "label": "Local cable operator",
        "code": "with set top box"
      },
      {
        "label": "None",
        "code": "4"
      },
      {
        "label": "IPTV / Internet-based streaming devices/ WIFI",
        "code": "5"
      },
      {
        "label": "JIO FIBER",
        "code": "6"
      },
      {
        "label": "Airtel Xstream",
        "code": "7"
      }
    ],
   
    termination: true,
    terminationCodes: ["4"]
  },
  
  Q10: 
  {
    "number": "Q4_a",
    "question": "Please select correct option from the list for this house.",
    "instruction": "",
    " inputType": "",
    "  inputLimit": "",
    "type": "radio",
    "    placeHolder": "",
    "label": "House details",
    "options": [
      {
        "label": "1 BHK (1 Bedroom Hall Kitchen) or smaller",
        "code": "1"
      },
      {
        "label": "2 BHK (2 Bedrooms Hall Kitchen)",
        "code": "2"
      },
      {
        "label": "3 BHK (3 Bedrooms Hall Kitchen)",
        "code": "3"
      },
      {
        "label": "4 BHK (4 Bedrooms Hall Kitchen) or larger",
        "code": "4"
      }
    ],
    
    
    termination: true,
    terminationCodes: ["1"]
  },

  Q4b:{
    "number": "Q4_b",
      "question": "Please select correct option for each from the list  ",
      "instruction": "",
      " inputType": "",
      "  inputLimit": "",
      "type": "rate",
      "    placeHolder": "",
      // "label": "Lifestyle",
      heading:"Lifestyle",
      "options": "",
      "lableoptions": "",
      "STATEMENTS": [
        {
          "label": "Have Club membership for you or any member in the house",
          "id": "Q4_b_1"
        },
        {
          "label": "Have Gym membership for you any member in the house",
          "id": "Q4_b_2"
        },
        {
          "label": "If any family member stayed in a 4*/5* hotel in last 2 years",
          "id": "Q4_b_3"
        }
      ],
      "FREQUENCIES": [
        {
          "label": "Yes",
          "value": "1"
        },
        {
          "label": "No",
          "value": "2"
        }
      ],
  },
  Q5a:{
    "number": "Q5",
      "question": "Please select correct option for each from the list  ",
      "instruction": "",
      " inputType": "",
      "  inputLimit": "",
      "type": "radio",
      "    placeHolder": "",
      "label": "Occupation URBAN",
      options: [
        { label: "Unskilled Worker", code: "1" }, 
        { label: "Skilled Worker", code: "2" },
        { label: "Petty Traders", code: "3" },
        { label: "Shop Owners", code: "4" },
       
      { label: "Businessman/Industrialist (No Employees)", code: "5" },
      { label: "Businessman/Industrialist (1 – 9 Employees)", code: "6" },
      { label: "Businessman/Industrialist (10+ Employees)", code: "7" },
      { label: "Self Employed Professional", code: "8" },
      { label: "Clerk / Salesman", code: "9" },
      { label: "Supervisory Level", code: "10" },
      { label: "Officer / Executive – Junior", code: "11" },
      { label: "Officer / Executive – Middle /Senior", code: "12" },
      { label: "Owner Farmer", code: "13" },
      { label: "Leased Farmer", code: "14" },
      { label: "Retired",code: "15" },
        { label: "Other specify ……….", code: "98" },
      
      ],
   
     
  }
  ,
  Q6_a:{
    "number": "Q6_a",
      "question": "Please tell me number of members in the household, which means who share food from the same kitchen. Please also include guests, full-time house help, or any other members sharing food from the same kitchen in the HH. ",
      "instruction": "",
      " inputType": "number",
      "  inputLimit": 3,
      "type": "input",
      "    placeHolder": "",
      "label": "The number of members currently staying in this house",
     
      "termination": true,

  },
  Q30:{
    "number": "Q6_b",
    "question": "Please select the highest education acquired by male member of this household.  ",
    "instruction": "",
    " inputType": "",
    "  inputLimit": "",
    "type": "radio",
    "    placeHolder": "",
    "label": "Education",
    options: [
      {
        "label": "Marketing/Market Research",
        "code": "1"
      },
      {
        "label": "Media ,Print & TV / Broadcasting Agency / TV Channel Network",
        "code": "2"
      },
      {
        "label": "Working with DTH / IPTV / Cable Operator",
        "code": "3"
      },
      {
        "label": "Advertising/Public Relations /Media Planning Agency",
        "code": "4"
      },
      {
        "label": "Journalist/Anchor,Full time or Part time",
        "code": "5"
      },
      {
        "label": "Whether part of any TV/Media panel in last 2 years e.g. BARCINDIA TV Panel",
        "code": "6"
      },
      {
        "label": "None of the above",
        "code": "7"
      }]
  },
  Q31:{
    "number": "Q6_c",
    "question": "Please select the highest education acquired by female member of this household.  ",
    "instruction": "",
    " inputType": "",
    "  inputLimit": "",
    "type": "radio",
    "    placeHolder": "",
    "label": "Education",
    options: [
      {
        "label": "Marketing/Market Research",
        "code": "1"
      },
      {
        "label": "Media ,Print & TV / Broadcasting Agency / TV Channel Network",
        "code": "2"
      },
      {
        "label": "Working with DTH / IPTV / Cable Operator",
        "code": "3"
      },
      {
        "label": "Advertising/Public Relations /Media Planning Agency",
        "code": "4"
      },
      {
        "label": "Journalist/Anchor,Full time or Part time",
        "code": "5"
      },
      {
        "label": "Whether part of any TV/Media panel in last 2 years e.g. BARCINDIA TV Panel",
        "code": "6"
      },
      {
        "label": "None of the above",
        "code": "7"
      }]
  },


  Q32:{
    "number": "Q7_a",
    "question": "When speaking amongst your family members, which all languages do you speak?  ",
    "instruction": "",
    " inputType": "",
    "  inputLimit": "",
    "type": "multi",
    "    placeHolder": "",
    "label": "Languages spoken at home",
    "options": [
      {
        "label": "Assamese",
        "code": "1"
      },
      {
        "label": "Avadhi",
        "code": "2"
      },
      {
        "label": "Bengali",
        "code": "3"
      },
      {
        "label": "Bhojpuri",
        "code": "4"
      },
      {
        "label": "Bodo",
        "code": "5"
      },
      {
        "label": "Bundelkhandi",
        "code": "6"
      },
      {
        "label": "Chhattisgariya",
        "code": "7"
      },
      {
        "label": "Dogri",
        "code": "8"
      },
      {
        "label": "English",
        "code": "9"
      },
      {
        "label": "Garhwali",
        "code": "10"
      },
      {
        "label": "Gujarati",
        "code": "11"
      },
      {
        "label": "Hindi",
        "code": "12"
      },
      {
        "label": "Kannada",
        "code": "13"
      },
      {
        "label": "Kashmiri",
        "code": "14"
      },
      {
        "label": "Khasi",
        "code": "15"
      },
      {
        "label": "Konkani",
        "code": "16"
      },
      {
        "label": "Kutchi",
        "code": "17"
      },
      {
        "label": "Lushai/Mizo",
        "code": "18"
      },
      {
        "label": "Magahi/Maghadhi",
        "code": "19"
      },
      {
        "label": "Maithili",
        "code": "20"
      },
      {
        "label": "Malayalam",
        "code": "21"
      },
      {
        "label": "Malwani",
        "code": "22"
      },
      {
        "label": "Manipuri",
        "code": "23"
      },
      {
        "label": "Marathi",
        "code": "24"
      },
      {
        "label": "Marwari",
        "code": "25"
      },
      {
        "label": "Nepali",
        "code": "26"
      },
      {
        "label": "Oriya",
        "code": "27"
      },
      {
        "label": "Other Foreign Languages",
        "code": "28"
      },
      {
        "label": "Other Indian Languages",
        "code": "29"
      },
      {
        "label": "Pahari",
        "code": "30"
      },
      {
        "label": "Punjabi",
        "code": "31"
      },
      {
        "label": "Sanskrit",
        "code": "32"
      },
      {
        "label": "Santhali",
        "code": "33"
      },
      {
        "label": "Sindhi",
        "code": "34"
      },
      {
        "label": "Tamil",
        "code": "35"
      },
      {
        "label": "Telugu",
        "code": "36"
      },
      {
        "label": "Tulu",
        "code": "37"
      },
      {
        "label": "Urdu",
        "code": "38"
      }
    ],
    "lableoptions": "",
    "STATEMENTS": "",
    "FREQUENCIES": "",
    "lastOption": "",
    "termination": "",
    " terminationCodes": "",
    "audio": "",
    "randomize": "",
    "fixedCodes": "",
    " RandomizeOnce": "",
    " maxSelections": "",
    "  checkAsk": "",
    "readout": "",
    "depend on": "",
    "labels": ""
  },
 Q324: {
    "number": "Q7_b",
    "question": "Amongst the languages mentioned above, which language do you speak most often with your family members?",
    
    " inputType": "",
    "  inputLimit": "",
    "type": "radio",
    "    placeHolder": "",
    "label": "Languages most often spoken:",
    "options": [
      {
        "label": "Assamese",
        "code": "1"
      },
      {
        "label": "Avadhi",
        "code": "2"
      },
      {
        "label": "Bengali",
        "code": "3"
      },
      {
        "label": "Bhojpuri",
        "code": "4"
      },
      {
        "label": "Bodo",
        "code": "5"
      },
      {
        "label": "Bundelkhandi",
        "code": "6"
      },
      {
        "label": "Chhattisgariya",
        "code": "7"
      },
      {
        "label": "Dogri",
        "code": "8"
      },
      {
        "label": "English",
        "code": "9"
      },
      {
        "label": "Garhwali",
        "code": "10"
      },
      {
        "label": "Gujarati",
        "code": "11"
      },
      {
        "label": "Hindi",
        "code": "12"
      },
      {
        "label": "Kannada",
        "code": "13"
      },
      {
        "label": "Kashmiri",
        "code": "14"
      },
      {
        "label": "Khasi",
        "code": "15"
      },
      {
        "label": "Konkani",
        "code": "16"
      },
      {
        "label": "Kutchi",
        "code": "17"
      },
      {
        "label": "Lushai/Mizo",
        "code": "18"
      },
      {
        "label": "Magahi/Maghadhi",
        "code": "19"
      },
      {
        "label": "Maithili",
        "code": "20"
      },
      {
        "label": "Malayalam",
        "code": "21"
      },
      {
        "label": "Malwani",
        "code": "22"
      },
      {
        "label": "Manipuri",
        "code": "23"
      },
      {
        "label": "Marathi",
        "code": "24"
      },
      {
        "label": "Marwari",
        "code": "25"
      },
      {
        "label": "Nepali",
        "code": "26"
      },
      {
        "label": "Oriya",
        "code": "27"
      },
      {
        "label": "Other Foreign Languages",
        "code": "28"
      },
      {
        "label": "Other Indian Languages",
        "code": "29"
      },
      {
        "label": "Pahari",
        "code": "30"
      },
      {
        "label": "Punjabi",
        "code": "31"
      },
      {
        "label": "Sanskrit",
        "code": "32"
      },
      {
        "label": "Santhali",
        "code": "33"
      },
      {
        "label": "Sindhi",
        "code": "34"
      },
      {
        "label": "Tamil",
        "code": "35"
      },
      {
        "label": "Telugu",
        "code": "36"
      },
      {
        "label": "Tulu",
        "code": "37"
      },
      {
        "label": "Urdu",
        "code": "38"
      }
    ],
    "lableoptions": "",
    "STATEMENTS": "",
    "FREQUENCIES": "",
    "lastOption": "",
    "termination": "",
    " terminationCodes": "",
    "audio": "",
    "randomize": "",
    "fixedCodes": "",
    " RandomizeOnce": "",
    " maxSelections": "",
    "  checkAsk": "",
    "readout": "",
    "depend on": "Q7_a",
    "labels": "",
    optionsDependOn:"Q7_a",
    optionsRemove:[],
  },
 Q33: {
    "number": "Q8_a1",
    "question": "Please share your contact details - mobile",
    "instruction": "",
    " inputType": "number",
    inputLimit: 10,
    "type": "matrix input",
    "    placeHolder": "",
    "label": "Mobile number",
   
  },
  Q3A: {
    "number": "Q8_a2",
    "question": "Please share your contact details - mobile",
    "instruction": "",
    " inputType": "number",
    inputLimit: 10,
    "type": "matrinput",
    "    placeHolder": "",
    "label": "Mobile number",
   
  },
 Q34: {
    "number": "Q8_b",
    "question": "Please share your contact details - Landline /Fixed line",
    "instruction": "",
    " inputType": "number",

label:"Landline /Fixed line",
    inputLimit: 10,
    "type": "",
    "    placeHolder": "",
    
    "options": "",
    "lableoptions": "",
    "STATEMENTS": "",
    "FREQUENCIES": "",
    "lastOption": "",
    "termination": "",
    " terminationCodes": "",
    "audio": "",
    "randomize": "",
    "fixedCodes": "",
    " RandomizeOnce": "",
    " maxSelections": "",
    "  checkAsk": "",
    "readout": "",
    "depend on": "",
    "labels": ""
  },
 Q35: {
    "number": "Q8_c_1",
    "question": "House number",
    "instruction": "",
    " inputType": "",
    "  inputLimit": "",
    "type": "input",
    "    placeHolder": "",
    "label": "",
    "options": "",
    "lableoptions": "",
    "STATEMENTS": "",
    "FREQUENCIES": "",
    "lastOption": "",
    "termination": "",
    " terminationCodes": "",
    "audio": "",
    "randomize": "",
    "fixedCodes": "",
    " RandomizeOnce": "",
    " maxSelections": "",
    "  checkAsk": "",
    "readout": "",
    "depend on": "",
    "labels": ""
  },
 Q36: {
    "number": "Q8_c_2",
    "question": "Building number/name",
    "instruction": "",
    " inputType": "",
    "  inputLimit": "",
    "type": "input",
    "    placeHolder": "",
    "label": "",
    "options": "",
    "lableoptions": "",
    "STATEMENTS": "",
    "FREQUENCIES": "",
    "lastOption": "",
    "termination": "",
    " terminationCodes": "",
    "audio": "",
    "randomize": "",
    "fixedCodes": "",
    " RandomizeOnce": "",
    " maxSelections": "",
    "  checkAsk": "",
    "readout": "",
    "depend on": "",
    "labels": ""
  },
  Q37:{
    "number": "Q8_c_3",
    "question": "Lane/street/ward number/nameLane/street/ward number/name",
    "instruction": "",
    " inputType": "",
    "  inputLimit": "",
    "type": "input",
    "    placeHolder": "",
    "label": "",
    "options": "",
    "lableoptions": "",
    "STATEMENTS": "",
    "FREQUENCIES": "",
    "lastOption": "",
    "termination": "",
    " terminationCodes": "",
    "audio": "",
    "randomize": "",
    "fixedCodes": "",
    " RandomizeOnce": "",
    " maxSelections": "",
    "  checkAsk": "",
    "readout": "",
    "depend on": "",
    "labels": ""
  },
 Q38: {
    "number": "Q8_c_4",
    "question": "Area /locality name",
    "instruction": "",
    " inputType": "",
    "  inputLimit": "",
    "type": "input",
    "    placeHolder": "",
    "label": "",
    "options": "",
    "lableoptions": "",
    "STATEMENTS": "",
    "FREQUENCIES": "",
    "lastOption": "",
    "termination": "",
    " terminationCodes": "",
    "audio": "",
    "randomize": "",
    "fixedCodes": "",
    " RandomizeOnce": "",
    " maxSelections": "",
    "  checkAsk": "",
    "readout": "",
    "depend on": "",
    "labels": ""
  },
  Q39:{
    "number": "Q8_c_5",
    "question": "Town name",
    "instruction": "",
    " inputType": "",
    "  inputLimit": "",
    "type": "input",
    "    placeHolder": "",
    "label": "",
    "options": "",
    "lableoptions": "",
    "STATEMENTS": "",
    "FREQUENCIES": "",
    "lastOption": "",
    "termination": "",
    " terminationCodes": "",
    "audio": "",
    "randomize": "",
    "fixedCodes": "",
    " RandomizeOnce": "",
    " maxSelections": "",
    "  checkAsk": "",
    "readout": "",
    "depend on": "",
    "labels": ""
  },
 Q40: {
    "number": "Q8_c_6",
    "question": "PIN code",
    "instruction": "",
    " inputType": "",
    "  inputLimit": "",
    "type": "input",
    "    placeHolder": "",
    "label": "",
    "options": "",
    "lableoptions": "",
    "STATEMENTS": "",
    "FREQUENCIES": "",
    "lastOption": "",
    "termination": "",
    " terminationCodes": "",
    "audio": "",
    "randomize": "",
    "fixedCodes": "",
    " RandomizeOnce": "",
    " maxSelections": "",
    "  checkAsk": "",
    "readout": "",
    "depend on": "",
    "labels": ""
  },
 Q41: {
    "number": "Q8_c_7",
    "question": "Landmark 1",
    "instruction": "",
    " inputType": "",
    "  inputLimit": "",
    "type": "input",
    "    placeHolder": "",
    "label": "",
    "options": "",
    "lableoptions": "",
    "STATEMENTS": "",
    "FREQUENCIES": "",
    "lastOption": "",
    "termination": "",
    " terminationCodes": "",
    "audio": "",
    "randomize": "",
    "fixedCodes": "",
    " RandomizeOnce": "",
    " maxSelections": "",
    "  checkAsk": "",
    "readout": "",
    "depend on": "",
    "labels": ""
  },
  Q42:{
    "number": "Q8_c_8",
    "question": "Landmark 2",
    "instruction": "",
    " inputType": "",
    "  inputLimit": "",
    "type": "input",
    "    placeHolder": "",
    "label": "",
    "options": "",
    "lableoptions": "",
    "STATEMENTS": "",
    "FREQUENCIES": "",
    "lastOption": "",
    "termination": "",
    " terminationCodes": "",
    "audio": "",
    "randomize": "",
    "fixedCodes": "",
    " RandomizeOnce": "",
    " maxSelections": "",
    "  checkAsk": "",
    "readout": "",
    "depend on": "",
    "labels": ""
  },
 Q43: {
    "number": "Q9",
    "question": "Would you like to be part of the panel?",
    "instruction": "",
    " inputType": "",
    "  inputLimit": "",
    options:[
      { label: "Yes", code: "1" }, 
      { label: "No", code: "2" }
     
    ],
    type: "radio",


    
  }


  
}
}
  
  export default products;


