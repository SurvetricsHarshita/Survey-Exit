
const products = {
  Section1: {


    Q1:
    {
      number: "QH",
      question: "Please select the appropriate option from the list. This household is located in …",
      instruction: "Please check that the residence is not used for commercial purposes based on observation. Survey can be conducted with a householder or CWE for identifying Premium. Before knocking the door select the correct option  from  below",
      response: "",
      options: [
        { label: "A gated community with 24 hours security", code: "1" },
        { label: "A gated community with 24 hours security and amenities like swimming pool / gym /play area etc.", code: "2" },
        { label: "No 24 hours security but in a premium locality", code: "3" },
        { label: "Individual row house or bungalow", code: "4" },
        { label: "No 24 hours security and no premium locality", code: "5" },
        { label: "Other specify ……….", code: "6" },

      ],
      termination: "true",
      terminationCodes: ["3", "5"],
      type: "radio",
      first: true,
      // audio:true
    },

   

    Q2_a:
    {
      number: "Introduction",
      question: " ",
      label: "The survey is very short and will only take about 5 minutes. May I please proceed? ",
      response: " ",
      instruction: "Hello! I am __from _____(Agency name) and we are conducting a brief survey to gather information for empanelment to study TV viewing behaviour.  ",
// subInstruction:""

Label:" Since we get an idea of TV viewing from overall lifestyle and education, we'll be asking a few questions on ownership of household items, education, and languages spoken in your home.",
      options: [
        { label: "Yes", code: "1" },
        { label: "No", code: "2" }

      ],
      type: "radio",
      termination: true,
      terminationCodes: ["2"],
      // audio:true


    },

    Q2: {
      number: "QConsent",
      question: "Before we start with the survey, may I request your consent to use your contact details (e.g., email or phone) to follow up on your survey responses. Your information will be kept confidential and used only for this purpose. ",
      response: "",
      instruction: "Proceed only if selected yes",


      label: "Do you consent to share your contact details?",
      options: [
        { label: "Yes, I consent.", code: "1" },
        { label: "No, I do not consent.", code: "2" },

      ],
      type: "radio",
      termination: true,
      terminationCodes: ["2"],
      // audio:true

    },

    QRes:
    {
      number:"QRes1",
      question: "Can you please tell me your name",
      response: "",
      type: "input",
      "placeHolder": "",
      "label": "Name",

    },
    QRes2:
    {
      number:"QRes2",
      question: "Can you please tell me your age",
      response: "",
     "inputType": "number",
      type: "input",
      "placeHolder": "",
      "label": "Age",
      inputLimit:2

    },
    QRes3:{
      number:"QRes3",
      question: "select the gender",
      response: "",
      type: "radio",
      "placeHolder": "",
      "label": "Gender",
      options: [
        { label: "Male", code: "1" },
        { label: "Female", code: "2" },
        { label: "other", code: "3" },
      ],

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
          "label": "Whether part of any TV/Media panel in last 2 years e.g. BARC TV Panel",
          "code": "6"
        },
        {
          "label": "None of the above",
          "code": "7"
        }],
      termination: true,
      terminationCodes: ["1", "2", "3", "4", "5", "6"],
    },


    Q4:
    {
      number: "Q2_a",
      question: " Can you please tell me the name of Chief Wage Earner of your household. By this, I mean the person who contributes the most to the household expenditure.",
      response: "",
      type: "input",
      "placeHolder": "please mention name",
      "label": "Name",

    },




    Q6:
    {
      "number": "Q2_b",
      "question": "Please select correct response for education of ",
      //  "question": "Please select correct response for education of (add name from Q2.1) ",
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
      audio:true
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

      termination: true,
      autoCodeQuestion: true,
      autoCodeQuestionVar: "NCCS",
      audio:true
    },

    Q7_a:
    {
      "number": "Q2_d1",
      "question": "You mentioned you own a car. Can you please tell me if all the cars are used predominantly for commercial purpose?",
      // instruction:"Terminate if the HH has just one car which is predominantly used for commercial purpose",
      "type": "radio",
    
      
      options: [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        }
      ],
      termination: true,
      terminationCodes:["1"],
    },
    
    Q7_b:
    {
      "number": "Q2_d2",
      "question": "What was the approximate cost of the car (the one used for your travel i.e. non-commercial purpose) at the time of purchase?",
      label:"Price Range",
      "type": "radio",
      
      
      options: [
        { label: "Below INR 15 Lakhs", code: "1" }, 
        { label: "15 to 20 Lakhs", code: "2" },
        { label: "21 to 30 Lakhs", code: "3" },
        { label: "31 to 40 Lakhs", code: "4" },
        { label: "41 to 50 Lakhs", code: "5" },
        { label: "50 Lakhs +", code: "6" }
      ]
      ,
    },


    Q8:
    {
      "number": "Q2_e",
      "question": "Please tell me which of these durables / items do you have at home?",

      "type": "rate",


      heading: "Lifestyle",
      "options": "",
      "lableoptions": "",
      "STATEMENTS": [
        {
          "label": "Air cooler",
          "id": "Q2_e_1"
        },
        {
          "label": "Tablet computer (example: Tab OR iPad etc…and must not be a pure reader such as kindle)",
          "id": "Q2_e_2"
        },
        {
          "label": "Smart TV",
          "id": "Q2_e_3"
        },
        {
          "label": "Non-smart TV which is connected to internet/ WIFI / Fiber via set-top box or device such as chrome cast or Amazon fire stick",
          "id": "Q2_e_4"
        },
        {
          "label": "Modular Kitchen",
          "id": "Q2_e_5"
        },
        {
          "label": "Microwave",
          "id": "Q2_e_6"
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
      termination: true,
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
          "label": "DD Direct/DD Freedish OR Pay DTH (Tata Play, Dish TV, Sun Direct, Zing Digital, Airtel Xstream set top box) ",
          "code": "1"
        },
        {
          "label": "Normal Antenna",
          "code": "2"
        },
        {
          "label": "Local cable operator(with set top box)",
          "code": "3"
        },
        {
          "label": "None",
          "code": "4"
        },
        {
          "label": "IPTV / Internet-based streaming devices/ WIFI or Jio Fiber or Airtel Xstream Fiber any other device that is used for watching YouTube or OTT APPs on TV",
          "code": "5"
        },
      
      ],

      termination: true,
      terminationCodes: ["4"]
    },

    Q10:
    {
      "number": "Q4_a",
      "question": "Please select correct option from the list for this house. ",
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

    Q4b: {
      "number": "Q4_b",
      "question": "Please select correct option for each statement for you or any member from your family   ",
      "instruction": "",
      " inputType": "",
      "  inputLimit": "",
      "type": "rate",
      "    placeHolder": "",
      // "label": "Lifestyle",
      heading: "Lifestyle",
      "options": "",
      "lableoptions": "",
      "STATEMENTS": [
        {
          "label": "Membership of a privileged Club or Gymkhana (e.g., The Club, Recreation Club, Club Millennium).",
          "id": "Q4_b_1"
        },
        {
          "label": "Premium Gym membership ",
          "id": "Q4_b_2"
        },
        {
          "label": "Stayed in a 4*/5* hotel in last 2 years",
          "id": "Q4_b_3"
        },
        {
          "label": "Purchased a mobile handset costing more than ₹ 60,000 in the past two years.",
          "id": "Q4_b_4"
        },
        {
          "label": "The monthly electricity bill is above ₹10,000.",
          "id": "Q4_b_5"
        },
        {
          "label": "Is a regular golf player OR in Horse riding OR Scuba diving ",
          "id": "Q4_b_6"
        }, {
          "label": "Visits Pubs/ Clubs / Restaurant for eating out at least once every week with individual expenditure exceeding INR 3000+ per visit",
          "id": "Q4_b_7"
        },
        {
          "label": "Travelled outside Asia in the past 2 years for leisure.",
          "id": "Q4_b_8"
        },
        {
          "label": "Own home gaming consoles (PS 5 OR Xbox series X)",
          "id": "Q4_b_9"
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
    Q5a: {
      "number": "Q5",
      "question": "Please select correct option for each from the list  for ",
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
        { label: "Retired", code: "15" },
        { label: "Other specify ……….", code: "98" },

      ],


    }
    ,
    Q6_a: {
      "number": "Q6_a",
      "question": "Please tell me number of members in the household, which means who share food from the same kitchen. Please also include guests, full-time house help, or any other members sharing food from the same kitchen in the HH. ",
      "instruction": "",
      "inputType": "number",
      "inputLimit": 2,
      "type": "input",
      "    placeHolder": "",
      "label": "The number of members currently staying in this house",

      "termination": true,

    },
    

    Q32: {
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

      "depend on": "Q7_a",
      "labels": "",
      optionsDependOn: "Q7_a",
      optionsRemove: [],
    },

    Q3A: {
      "number": "Q8_a",
      "question": "Please share your contact details - mobile",
      "instruction": "",
      "inputType": "number",
      inputLimit: 10,

      // "label": "Mobile number",

      field:1,
      "type": "multiInput",
      "  placeHolder": "",

      formFieldsStep1: [
        { name: "Q8_a_1", placeholder: "Mobile Number 1", type: "number" ,inputLimit:"10"},
        { name: "Q8_a_2", placeholder: "Mobile Number -2 (optional)", type: "number" ,inputLimit:"10"},

      ],


      languageText: {

        en: {
          Q8_a1: "Mobile Number1",
          Q8_a2: "Mobile Number2"

        },

      },
    },
    Q34: {
      "number": "Q8_b",
      "question": "Please share your contact details - Landline /Fixed line",
      "instruction": "",
      " inputType": "",
      "  inputLimit": "",
      "type": "multiInput",
      "  placeHolder": "",

      formFieldsStep1: [
        { name: "Q8_b_1", placeholder: "Landline / Fixed line 1" },
        { name: "Q8_b_2", placeholder: "Landline / Fixed line 2" },

      ],

      field:0,
      languageText: {

        en: {

          Q8_b_1: "Landline / Fixed line 1",
          Q8_b_2: "Landline / Fixed line 2"


        },

        // isCompulsory: true,
      }
    },
    Q34_a: {
      field:0,
      "number": "Q8_cc",
      "question": "Please share your Email ID",
      "instruction": "",
      " inputType": "",
      "  inputLimit": "",
      "type": "multiInput",
      "  placeHolder": "",
// label:"Email ID",
      formFieldsStep1: [
        { name: "Q8_cc", placeholder: "Email ID" },

      ],


      languageText: {

        en: {

          Q8_cc: "Email ID",

// 
        },

      //   // isCompulsory: true,
      }
    },

    Q35: {
      "number": "Q8_c",
      "question": "Detailed address",
      "instruction": "",
      " inputType": "",
      "  inputLimit": "",
      "type": "multiInput",
      "  placeHolder": "",
      field:5,
      formFieldsStep1: [
        { name: "Q8_c_1", placeholder: "Address line 1 - House number" },
        { name: "Q8_c_2", placeholder: "Address line 2 - Building number/name" },
        { name: "Q8_c_3", placeholder: "Address line 3 - Lane/street/ward number/name",  label: "" },
        { name: "Q8_c_4", placeholder: "Address line 4 - Area /locality name",  },
        { name: "Q8_c_5", placeholder: "Address line 5 - Town name" },
        { name: "Q8_c_6", placeholder: "Address line 6 - PIN code" ,type: "number"},
        { name: "Q8_c_7", placeholder: "Address line 7 - Landmark 1" },
        { name: "Q8_c_8", placeholder: "Address line 8 - Landmark 2" },
      ],


      languageText: {

        en: {
          // title: "Respondent Demographic",
          name: "Address line 1 - House number",

          address: "Address line 2 - Building number/name",
          contact: "Address line 3 - Lane/street/ward number/name",
          doorNo: "Address line 4 - Area /locality name",
          floorNo: "Floor No.",
          houseName: "Address line 5 - Town name",
          streetName: "Address line 6 - PIN code",
          areaName: "Address line 7 - Landmark 1",
          townName: "Address line 8 - Landmark 2",


        },

        isCompulsory: true,
        // anwerNeed:all
      },
     
    },
Q36:{
  "number": "Q9Consent",
  "question": "Broadcast Audience Research Council India (BARC India), a Joint Industry Body registered with the Ministry of Information & Broadcasting (MIB) manages the world's largest TV panel as a TV Viewership Measurement agency and generates authentic TV audience estimates - What India WatchesTM. ",
  subLabel:"As a token of appreciation for their participation, the panel household also receives an incentive.Please request respondent to scan QR code in case they need more information.",
  type:"Q9Consent",
  // label:"As a token of appreciation for their participation, the panel household also receives an incentive.Please request respondent to scan QR code in case they need more information."
},
    Q43: {
      "number": "Q9",
      "question": "Would you like to be part of the panel?",
      "instruction": "If selected yes, inform the respondent that he/she would receive a call/visit for next steps. Thank the respondent for participating in the survey before leaving the household ",
      " inputType": "",
      "  inputLimit": "",
      options: [
        { label: "Yes", code: "1" },
        { label: "No", code: "2" }

      ],
      type: "radio",



    }



  },
  Section2: {}
}

export default products
