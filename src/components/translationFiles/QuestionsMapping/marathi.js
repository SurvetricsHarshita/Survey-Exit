const marathi = {
  Section1: {
    "1.1": {
      "number": 1.1,
      "question": "वय (पूर्ण वर्षामध्ये) किती आहे?",
      "type": "input",
      "section": "विभाग 1: रिस्पॉडंट प्रोफाइल",
      "inputType": "number",
      "label": "पुर्ण वर्षात"
    },
    "1.2": {
      "number": 1.2,
      "question": "लिंग",
      "type": "radio",
      "options": [
        {
          "label": "पुरुष",
          "code": "1"
        },
        {
          "label": "महिला",
          "code": "2"
        }
      ]
    },
    "1.3": {
      "number": 1.3,
      "question": "पुर्ण केलेले शिक्षण?",
      "type": "radio",
      "options": [
        {
          "label": "अशिक्षित",
          "code": "1"
        },
        {
          "label": "प्राथमिक पेक्षा कमी",
          "code": "2"
        },
        {
          "label": "पूर्ण केलेले प्राथमिक शाळा",
          "code": "3"
        },
        {
          "label": "पूर्ण केलेले माध्यमिक शाळा",
          "code": "4"
        },
        {
          "label": "हायस्कूल / मॅट्रिक पूर्ण केलेले",
          "code": "5"
        },
        {
          "label": "उच्च माध्यमिक/बारावी",
          "code": "6"
        },
        {
          "label": "ग्रॅज्युएशन पूर्ण",
          "code": "7"
        },
        {
          "label": "पोस्ट ग्रॅज्युएशन पूर्ण केलेले आणि वरील",
          "code": "8"
        }
      ]
    },
    "1.4": {
      "number": 1.4,
      "question": "तुमचा सध्याचा व्यवसाय काय आहे?",
      "type": "radio",
      "options": [
        {
          "label": "ट्रकचालक",
          "code": "1"
        },
        {
          "label": "मदतनीस",
          "code": "2"
        },
       
       
        {
          "label": "(चहा-शॉप/ढाबा मालक,नाव्ही )दुकान येथे काम करणे,रस्त्याच्या कडेला मेकॅनिक,साइटवर",
          "code": "3"
        },
        {
          "label": "इतर कोणतेही (स्पष्ट करा)------------ -----------",
          "code": "9"
        },
        
      ]
    },
    "1.5": {
      "number": 1.5,
      "question": "यापूर्वी तुम्ही या केंद्राला (क्लिनिक) किती वेळा भेट दिली आहे?",
      "type": "radio",
      "options": [
        {
          "label": "ही पहिलीच वेळ आहे",
          "code": "1"
        },
        {
          "label": "काही वेळा भेट दिली आहे",
          "code": "2"
        },
        {
          "label": "अनेक वेळा भेट दिली आहे",
          "code": "3"
        }
      ]
    },
    "1.6": {
      "number": 1.6,
      "question": "तुम्ही या केंद्राला (क्लिनिक) पहिल्यांदा कधी भेट दिली होती?",
      "type": "input",
      "inputType": "number",
      "inputLimit": 4
    },
    "1.7": {
      "number": 1.7,
      "question": "या दवाखान्याच्या इतर कोणत्याही भेटीत, तुम्ही कधी तुमच्या रक्ताची तपासणी केली आहे का?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },   "1.8":{
      number:"1.8",
      question:"Who referred/told you about this center (clinic) for the first time?",
      type:"radio",
      options:[
        {label:"Who referred/told you about this center (clinic) for the first time?",
          code:"1"
        },
        {label:"Peer educator",
          code:"2"
        },
        {label:"Other colleagues ",
          code:"3"
        },
        {label:"Member of allied population(Tea-shop/Dhaba owners, barbers, roadside mechanics etc) ",
          code:"4"
        },
        {label:"Visited on my own (saw advertisement, IEC material, etc)",
          code:"5"
        },
        {label:"Don’t Remember",
          code:"6"
        },

      ]
    },
    "1.9": {
      "number": 1.9,
      "question": "तुम्ही या क्लिनिकमध्ये येण्याचे का ठरवले/निवडले आहे?",
      "type": "radio",
      "options": [
        {
          "label": "खर्च कमी आहे",
          "code": "1"
        },
        {
          "label": "माझ्या अड्ड्याजवळ",
          "code": "2"
        },
        {
          "label": "अपोलोच्या ब्रँड नावामुळे",
          "code": "3"
        },
        {
          "label": "सुरुवातीच्या भेटींमध्ये चांगली छाप पडली",
          "code": "4"
        },
        {
          "label": "इतर कोणतेही (निर्दिष्ट करा) -----------------------",
          "code": "5"
        }
      ]
    },
    "1.1_0": {
      "number": "1.1_0",
      "question": "यावेळी या केंद्राला (क्लिनिक) भेट देण्याचे कारण काय?",
      "type": "multi",
    "options": [
    {
      "label": "सामान्य ताप, सर्दी आणि खोकला",
      "code": "1"
    },
    {
      "label": "पाठदुखी, पोटदुखी, डोकेदुखी",
      "code": "2"
    },
    {
      "label": "सांधेदुखी, स्नायू दुखणे",
      "code": "3"
    },
    {
      "label": "दृष्टी संबंधित समस्या",
      "code": "4"
    },
    {
      "label": "थुंकी चाचणी",
      "code": "5"
    },
    {
      "label": "उच्च रक्तदाब संबंधित समस्या",
      "code": "6"
    },
    {
      "label": "मधुमेह संबंधित समस्या",
      "code": "7"
    },
    {
      "label": "रक्त चाचणी/एचआयव्ही चाचणी",
      "code": "8"
    },
    {
      "label": "इतर कोणतेही (निर्दिष्ट करा)-----------------------",
      "code": "9"
    }
]

    },
    "1.11": {
      "number": 1.11,
      "question": "तुमच्या सध्याच्या भेटीत तुम्ही किती व्यक्तींना भेटलात?",
      "type": "multi",
      "options": [
        {
          "label": "नोंदणी करत असलेली व्यक्ती",
          "code": "1"
        },
        {
          "label": "डॉक्टर",
          "code": "2"
        },
        {
          "label": "ज्या व्यक्तीने नेत्र तपासणी केली",
          "code": "4"
        },
      
        {
          "label": "ज्या व्यक्तीने यादृच्छिक रक्तातील साखर तपासली,जर डॉक्टरांनी तपासणी केली नसेल",
          "code": "5"
        },
        {
          "label": "डॉक्टरांनी तपासले नसल्यास रक्तदाब तपासणारी व्यक्ती",
          "code": "7"
        },
        {
          "label": "डॉक्टरांनी तपासले नसल्यास एचआयव्ही चाचणीसाठी रक्त घेतलेली व्यक्ती",
          "code": "8"
        },
        {
          "label": "औषध देणारी व्यक्ती",
          "code": "9"
        },
        {
          "label": "ज्या व्यक्तीने थुंकीचा नमुना गोळा केला",
          "code": "10"
        },
        {
          "label": "इतर कोणतेही (निर्दिष्ट करा)----------",
          "code": "11"
        }
      ]
    },
    "2.1": {
      "number": 2.1,
      "question": "नोंदणीसाठी तुम्हाला किती वेळ वाट पाहावी लागली?",
      "type": "radio",
      "options": [
        {
          "label": "वाट पहावी लागली नाही",
          "code": "1"
        },
        {
          "label": "सुमारे ५ मिनिटे वाट पाहिली",
          "code": "2"
        },
        {
          "label": "सुमारे 5-10 मिनिटे वाट पाहिली",
          "code": "3"
        },
        {
          "label": "सुमारे 10-15 मिनिटे वाट पाहिली",
          "code": "4"
        },
        {
          "label": ">15 मिनिटे वाट पाहिली",
          "code": "5"
        }
      ],
      "section": "विभाग 2: नोंदणी"
    },
    "2.2": {
      "number": 2.2,
      "question": "त्याने तुमचे कार्ड बनवले का किंवा नूतनीकरण केले का?",
      "type": "radio",
      "options": [
        {
          "label": "नवीन कार्ड बनवले",
          "code": "1"
        },
        {
          "label": "जुने कार्ड नूतनीकरण केले",
          "code": "2"
        },
        {
          "label": "कोणतेही कार्ड बनवले किंवा नूतनीकरण केले नाही",
          "code": "3"
        }
      ]
    },
    "2.3": {
      "number": 2.3,
      "question": "नोंदणी करणाऱ्या व्यक्तीची वागणूक  कशी होती?",
      "type": "radio",
      "options": [
        {
          "label": "ते ठीक होते",
          "code": "1"
        },
        {
          "label": "ते खूप मैत्रीपूर्ण होते",
          "code": "2"
        },
        {
          "label": "ते असभ्य होते",
          "code": "3"
        }
      ]
    },
    "2.4": {
      "number": 2.4,
      "question": "डॉक्टर/समुपदेशकाला भेटण्यापूर्वी तुम्हाला तुमचे हात स्वच्छ करण्यास सांगितले होते का?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },
    "2.5": {
      "number": 2.5,
      "question": "डॉक्टर/समुपदेशकाला भेटण्यापूर्वी तुम्हाला मास्क घालण्यास सांगितले होते का?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },
    "2.6": {
      "number": 2.6,
      "question": "नोंदणीनंतर ज्या व्यक्तीला भेटायचे आहे त्याबद्दल त्याने तुम्हाला योग्य मार्गदर्शन केले का?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },
    "4.1": {
      "number": 4.1,
      "question": "तुमची शारीरिक तपासणी केली गेली होती का, क्लिनिकमध्ये डॉक्टरांनी निदान केले होते का?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ],
      "section": "विभाग 4: डॉक्टरांद्वारे तपासणी आणि उपचार"
    },
    "4.2": {
      "number": 4.2,
      "question": "तुमची तपासणी करण्यापूर्वी डॉक्टरांनी तुमच्याशी विश्वासाचे नाते निर्माण करण्याचा प्रयत्न केला का?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },
    "4.3": {
      "number": 4.3,
      "question": "शारीरिक तपासणीपूर्वी तुम्हाला डॉक्टरांकडून गोपनीयतेचे आश्वासन दिले होते का?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },
    "4.4": {
      "number": 4.4,
      "question": "डॉक्टरांना भेटण्यापूर्वी तुम्हाला किती वेळ थांबावे लागले?","type": "radio",
      "options": [
        {
          "label": "10 मिनिटांपेक्षा कमी",
          "code": "1"
        },
        {
          "label": "10-15 मिनिटे",
          "code": "2"
        },
        {
          "label": "15-30 मिनिटे",
          "code": "3"
        },
        {
          "label": "30-45 मिनिटे",
          "code": "4"
        },
        {
          "label": "45 मिनिटे – 1 तास",
          "code": "5"
        },
        {
          "label": "1 तासापेक्षा जास्त",
          "code": "6"
        }
      ]
    },
    "4.5": {
      "number": 4.5,
      "question": "चर्चेदरम्यान तुम्हाला तुमच्या शंका/प्रश्न विचारण्याची संधी देण्यात आली होती का?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },
    "4.6": {
      "number": 4.6,
      "question": "तुम्ही तुमच्या आरोग्याच्या समस्येबाबत काही प्रश्न विचारले होते का?",   "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },
    "4.7": {
      "number": 4.7,
      "question": " डॉक्टर तुमच्या प्रश्नांची/शंकेची उत्तरे (किंवा स्पष्टीकरण) देऊ शकले का?",   "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },
    "4.8": {
      "number": 4.8,
      "question": "चर्चेदरम्यान खोलीत तुमच्या आणि डॉक्टरांच्या बाजूला अजून कोणी उपस्थित होते, ज्याला चर्चा ऐकू आली?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },
    "4.9": {
      "number": 4.9,
      "question": "तपासणीसाठी क्लिनिकमध्ये खाजगी एरीया आहे का?",   "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },
    "4.1_0": {
      "number": "4.1_0",
      "question": "डॉक्टरांशी केलेली चर्चा तुम्हाला समजली का?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },
    "4.11": {
      "number": 4.11,
      "question": "तुमच्या मते डॉक्टरांची एकूण वागणूक कशी होती?",   "type": "radio",
      "options": [
        {
          "label": "संयमी आणि सर्वकाही व्यवस्थित समजावून सांगितले",
          "code": "1"
        },
        {
          "label": "घाईत होती आणि थोडक्यात चर्चा केली",
          "code": "2"
        },
        {
          "label": "असभ्य आणि योग्यरित्या स्पष्ट केले नाही",
          "code": "3"
        }
      ],
      "instruction": "एक एक करून पर्याय वाचा"
    },
    "4.12": {
      "number": 4.12,
      "question": "डॉक्टरांनी तुमच्यासोबत घालवलेला अंदाजे वेळ (मिनिटांमध्ये)?",
      "type": "radio",
      "options": [
        {
          "label": "10 मिनिटांपेक्षा कमी",
          "code": "1"
        },
        {
          "label": "10-15 मिनिटे",
          "code": "2"
        },
        {
          "label": "15-30 मिनिटे",
          "code": "3"
        },
        {
          "label": "30-45 मिनिटे",
          "code": "4"
        },
        {
          "label": "45 मिनिटे – 1 तास",
          "code": "5"
        },
        {
          "label": "1 तासापेक्षा जास्त",
          "code": "6"
        }
      ]
    },
    "4.13": {
      "number": 4.13,
      "question": "तुम्हाला दिलेल्या समुपदेशन/तपासणी/निदानाच्या गुणवत्तेनुसार तुम्ही डॉक्टरांना कसे रेट कराल?",   "type": "radio",
      "options": [
        {
          "label": "चांगले",
          "code": "1"
        },
        {
          "label": "ठिक",
          "code": "2"
        },
        {
          "label": "चांगले नाही",
          "code": "3"
        }
      ]
    },
    "4.14": {
      "number": 4.14,
      "question": "तपासणी/निदान करताना डॉक्टरांनी हातमोजे घातले होते का?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },
    "4.15": {
      "number": 4.15,
      "question": "तपासणी/चर्चेदरम्यान डॉक्टरांनी मास्क घातला होता का?",   "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },
    "4.16": {
      "number": 4.16,
      "question": "तपासणी/निदान करताना डॉक्टर निर्जंतुकीकरण साधने वापरत होते का?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        },
        {
          "label": "माहित नाही",
          "code": "3"
        }
      ]
    },
    "4.17": {
      "number": 4.17,
      "question": "डॉक्टरांनी काय लिहून दिले? एकाधिक कोड",
      "type": "multi",
      "options": [
        {
          "label": "औषध",
          "code": "1"
        },
        {
          "label": "फास्टिंग ब्लड शुगर टेस्ट",
          "code": "2"
        },
        {
          "label": "रक्त तपासणी",
          "code": "3"
        },
        {
          "label": "नेत्रदृष्टी चाचणी",
          "code": "4"
        },
        {
          "label": "थुंकीची चाचणी / छातीचा एक्स-रे",
          "code": "5"
        },
        {
          "label": "इतर कोणतेही (________ निर्दिष्ट करा)",
          "code": "6"
        }
      ]
    },
    "4.19": {
      "number": 4.19,
      "question": "तुम्ही इतरांना या डॉक्टर/सुविधेची शिफारस कराल का?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },
    "5.1": {
      "number": 5.1,
      "question": "डोळ्याच्या डॉक्टरला भेटण्यापूर्वी तुम्हाला किती वेळ थांबावे लागले?",   "type": "radio",
      "options": [
        {
          "label": "10 मिनिटांपेक्षा कमी",
          "code": "1"
        },
        {
          "label": "10-15 मिनिटे",
          "code": "2"
        },
        {
          "label": "15-30 मिनिटे",
          "code": "3"
        },
        {
          "label": "30-45 मिनिटे",
          "code": "4"
        },
        {
          "label": "45 मिनिटे – १ तास",
          "code": "5"
        },
        {
          "label": "1 तासापेक्षा जास्त",
          "code": "6"
        }
      ]
    },
    "5.2": {
      "number": 5.2,
      "question": "तुमची डोळ्याच्या डॉक्टरने तुमची शारीरीक तपासणी केली का?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },
    "5.3": {
      "number": 5.3,
      "question": "डोळ्यांची दृष्टी तपासली का?",   "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },
    "5.4": {
      "number": 5.4,
      "question": "डोळ्यांची दृष्टी तपासल्यानंतर काय शिफारस केली आहे?",
      "type": "radio",
      "options": [
        {
          "label": "चष्म्याची शिफारस केली",
          "code": "1"
        },
        {
          "label": "आय ड्रॉप टाकयला सांगितले",
          "code": "2"
        },
        {
          "label": "मोतीबिंदूचे ऑपरेशन करायला सांगितले",
          "code": "3"
        },
        {
          "label": "शस्त्रक्रिया करायला लागेल असे सांगितले",
          "code": "4"
        },
        {
          "label": "काही औषधाची लिहून दिली",
          "code": "5"
        },
        {
          "label": "सर्व काही ठीक आहे असे सांगितले",
          "code": "6"
        },
        {
          "label": "इतर कोणतेही (____________ स्पष्ट करा)",
          "code": "7"
        }
      ]
    },
    "5.5": {
      "number": 5.5,
      "question": "डोळ्याच्या डॉक्टरशी केलेली चर्चा तुम्हाला समजली होती का?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },
    "5.6": {
      "number": 5.6,
      "question": "तुमच्या मते डोळ्याच्या डॉक्टरची एकूण वागणूक कशी होती?",
      "type": "radio",
      "options": [
        {
          "label": "संयमी आणि सर्वकाही व्यवस्थित समजावून सांगितले",
          "code": "1"
        },
        {
          "label": "घाईत होती आणि थोडक्यात चर्चा केली",
          "code": "2"
        },
        {
          "label": "असभ्य आणि योग्यरित्या स्पष्ट केले नाही",
          "code": "3"
        }
      ],
      "instruction": "एक एक करून पर्याय वाचा"
    },
    "5.7": {
      "number": 5.7,
      "question": "तुम्हाला दिलेल्या समुपदेशनाच्या/तपासणीच्या/निदानांच्या गुणवत्तेनुसार तुम्ही डोळ्याच्या डॉक्टरला कसे रेट कराल?",
      "type": "radio",
      "options": [
        {
          "label": "10 मिनिटांपेक्षा कमी",
          "code": "1"
        },
        {
          "label": "10-15 मिनिटे",
          "code": "2"
        },
        {
          "label": "15-30 मिनिटे",
          "code": "3"
        },
        {
          "label": "30-45 मिनिटे",
          "code": "4"
        },
        {
          "label": "45 मिनिटे – १ तास",
          "code": "5"
        },
        {
          "label": "1 तासापेक्षा जास्त",
          "code": "6"
        }
      ]
    },
    "5.8": {
      "number": 5.8,
      "question": "तुम्हाला दिलेल्या समुपदेशनाच्या/तपासणीच्या/निदानांच्या गुणवत्तेनुसार तुम्ही ऑप्टोमेट्रिस्ट डॉक्टरला कसे रेट कराल?",
      "type": "radio",
      "options": [
        {
          "label": "चांगले",
          "code": "1"
        },
        {
          "label": "ठिक",
          "code": "2"
        },
        {
          "label": "चांगले नाही",
          "code": "3"
        }
      ]
    },
    "5.9": {
      "number": 5.9,
      "question": "तपासणी/निदान करताना डॉक्टरांनी हातमोजे घातले होते का?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },
    "5.1_0": {
      "number": "5.1_0",
      "question": "तपासणी/चर्चेदरम्यान डॉक्टरांनी मास्क घातला होता का?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },
    "6.1": {
      "number": 6.1,
      "question": "लॅब टेक्निशियनला भेटण्यापूर्वी तुम्हाला किती वेळ थांबावे लागले?",
      "type": "radio",
      "options": [
        {
          "label": "10 मिनिटे पेक्षा कमी",
          "code": "1"
        },
        {
          "label": "10-15 मिनिटे",
          "code": "2"
        },
        {
          "label": "15-30 मिनिटे",
          "code": "3"
        },
        {
          "label": "30-45 मिनिटे",
          "code": "4"
        },
        {
          "label": "45 मिनिटे – 1 तास",
          "code": "5"
        },
        {
          "label": "1 तासापेक्षा जास्त",
          "code": "6"
        }
      ],
      "section": "रक्त तपासणी: हा विभाग फक्त त्यांनाच विचारला जाईल ज्यांना डॉक्टरांनी रक्त तपासणी किंवा स्पूटम संकलन लिहून दिले आहे"
    },
    "6.2": {
      "number": 6.2,
      "question": "प्रयोगशाळेच्या चाचणीसाठी क्लिनिकमध्ये खाजगी एरीया आहे का?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },
    "6.3": {
      "number": 6.3,
      "question": "तुमच्या मते लॅब टेक्निशियनचे एकंदरीत वागणूक कशी होती?",
      "type": "radio",
      "options": [
        {
          "label": "रुग्ण आणि सर्वकाही व्यवस्थित समजावून सांगितले",
          "code": "1"
        },
        {
          "label": "घाईत होती",
          "code": "2"
        },
        {
          "label": "असभ्य आणि चाचणीची प्रक्रिया योग्यरित्या समजावून सांगितली नाही",
          "code": "3"
        }
      ],
      "instruction": "एक एक करून पर्याय वाचा"
    },
    "6.4": {
      "number": 6.4,
      "question": "रक्त तपासणी दरम्यान फार्मासिस्ट/लॅब टेक्निशियनने हात धुतले का?",   "type": "radio",
      "options": [
        {
          "label": "चाचणीपूर्वी हात धुतले",
          "code": "1"
        },
        {
          "label": "चाचणीनंतर हात धुतले",
          "code": "2"
        },
        {
          "label": "चाचणीपूर्वी आणि नंतर हात धुतले",
          "code": "3"
        },
        {
          "label": "हात धुतले नाहीत",
          "code": "4"
        },
        {
          "label": "निरीक्षण केले नाही",
          "code": "5"
        }
      ]
    },
    "6.5": {
      "number": 6.5,
      "question": "रक्त तपासणीच्या प्रक्रियेसाठी किती वेळ लागला?",
      "type": "radio",
      "options": [
        {
          "label": "10-15 मिनिटे",
          "code": "2"
        },
        {
          "label": "15-30 मिनिटे",
          "code": "3"
        },
        {
          "label": "30-45 मिनिटे",
          "code": "4"
        },
        {
          "label": "45 मिनिटे – 1 तास",
          "code": "5"
        },
        {
          "label": "1 तासापेक्षा जास्त",
          "code": "6"
        }
      ]
    },
    "6.6": {
      "number": 6.6,
      "question": "चाचणीचा निकाल तुम्हाला लॅब टेक्निशियनने सांगितला होता का?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        },
        {
          "label": "समुपदेशकाकडे पाठवले",
          "code": "3"
        },
        {
          "label": "दुस-या डॉक्टरांकडे पाठवले",
          "code": "4"
        },
        {
          "label": "नंतर येण्यास सांगितले",
          "code": "5"
        }
      ]
    },
    "7.1": {
      "number": 7.1,
      "question": "फार्मासिस्टला भेटण्यापूर्वी तुम्हाला किती वेळ थांबावे लागले?",
      "type": "radio",
      "options": [
        {
          "label": "10-15 मिनिटे",
          "code": "2"
        },
        {
          "label": "15-30 मिनिटे",
          "code": "3"
        },
        {
          "label": "30-45 मिनिटे",
          "code": "4"
        },
        {
          "label": "45 मिनिटे – 1 तास",
          "code": "5"
        },
        {
          "label": "1 तासापेक्षा जास्त",
          "code": "6"
        }
      ],
      "section": "विभाग 7: औषधोपचार: हा विभाग फक्त त्यांनाच विचारला जाईल ज्यांना डॉक्टरांनी औषधे लिहून दिली आहेत"
    },
    "7.2": {
      "number": 7.2,
      "question": "तुमच्या मते फार्मासिस्टची एकूण वागणूक कशी होती?",
      "type": "radio",
      "options": [
        {
          "label": "संयमी आणि औषधे योग्यरित्या दिली",
          "code": "1"
        },
        {
          "label": "घाईत होते",
          "code": "2"
        },
        {
          "label": "उद्धट आणि लिहून दिल्याप्रमाणे औषधे दिली नाहीत",
          "code": "3"
        },
        {
          "label": "औषध उपलब्ध नव्हते",
          "code": "4"
        }
      ]
    },
    "7.3": {
      "number": 7.3,
      "question": "औषध उपलब्ध नसल्यास, तुम्हाला फार्मासिस्टने काय सांगितले?",
      "type": "radio",
      "options": [
        {
          "label": "नंतर येण्यास सांगितले",
          "code": "1"
        },
        {
          "label": "केमिस्ट दुकानातून औषध खरेदी करण्यास सांगितले",
          "code": "2"
        },
        {
          "label": "काहीही सांगितले नाही",
          "code": "3"
        },
        {
          "label": "लागू नाही",
          "code": ""
        },
        {
          "label": "औषध उपलब्ध होते",
          "code": "4"
        },
        {
          "label": "इतर (स्पष्ट करा………………………)",
          "code": "9"
        }
      ]
    },
    "7.4": {
      "number": 7.4,
      "question": "तुम्हाला औषधाच्या डोसबद्दल सांगितले होते का?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        }
      ]
    },
    "8.1": {
      "number": 8.1,
      "question": "क्लिनिक / समुपदेशक / डॉक्टरांच्या चेंबरमध्ये STI, HIV/AIDS वर काही ग्लो साइन बोर्ड/पोस्टर/इतर साहित्य दिसत होते का?",
      "type": "radio",
      "options": [
        {
          "label": "चष्म्याची शिफारस केली",
          "code": "1"
        },
        {
          "label": "आय ड्रॉप टाकयला सांगितले",
          "code": "2"
        },
        {
          "label": "मोतीबिंदूचे ऑपरेशन करायला सांगितले",
          "code": "3"
        },
        {
          "label": "शस्त्रक्रिया करायला लागेल असे सांगितले",
          "code": "4"
        },
        {
          "label": "काही औषधाची लिहून दिली",
          "code": "5"
        },
        {
          "label": "सर्व काही ठीक आहे असे सांगितले",
          "code": "6"
        },
        {
          "label": "इतर कोणतेही (____________ स्पष्ट करा)",
          "code": "7"
        }
      ],
      "section": "विभाग 8: IEC साहित्य आणि इतर सुविधांचे डिस्प्ले  (सर्वांना विचारा)"
    },
    "8.2": {
      "number": 8.2,
      "question": "क्लिनिकच्या आवारात वॉशरूम/बाथरूम/टॉयलेट/शौचालय होते का?",   "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        },
        {
          "label": "निरीक्षण केले नाही",
          "code": "3"
        }
      ]
    },
    "8.3": {
      "number": 8.3,
      "question": "क्लिनिकच्या आवारात वॉश बेसिन होते का?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        },
        {
          "label": "निरीक्षण केले नाही",
          "code": "3"
        }
      ]
    },
    "8.4": {
      "number": 8.4,
      "question": "क्लिनिकच्या आवारात रुग्णांसाठी बसण्याची व्यवस्था/प्रतीक्षालय  होते का?",
      "type": "radio",
      "options": [
        {
          "label": "होय",
          "code": "1"
        },
        {
          "label": "नाही",
          "code": "2"
        },
        {
          "label": "निरीक्षण केले नाही",
          "code": "3"
        }
      ]
    },
    "8.5": {
      "number": 8.5,
      "question": "या क्लिनिकच्या एकूण सेवांबद्दल तुमची समाधान पातळी किती आहे?",
      "type": "radio",
      "options": [
        {
          "label": "समाधानी",
          "code": "1"
        },
        {
          "label": "माफक प्रमाणात समाधानी",
          "code": "2"
        },
        {
          "label": "समाधानी नाही",
          "code": "3"
        }
      ]
    },
    "9.1": {
      "number": 9.1,
      "question": "एटीएफ क्लिनिकमध्ये तुम्ही अनेक प्रक्रिया पार पाडल्या आहेत, तुम्ही खालील निर्देशकांबद्दलची तुमची एकूण समज कशी रेट कराल? कृपया खूण करा",
      "type": "rate",
      "section": "विभाग 9: सुविधा आणि सेवांबद्दल एकूण समाधान (सर्वांना विचारा)",
      "STATEMENTS": [
        {
          "label": "डॉक्टरांकडून तपासणी/निदान",
          "id": "9.1A"
        },
        {
          "label": "रक्त तपासणी",
          "id": "9.1B"
        },
        {
          "label": "औषधे देणे",
          "id": "9.1C"
        },
        {
          "label": "कर्मचाऱ्यांची वागणूक",
          "id": "9.1D"
        },
        {
          "label": "प्रतीक्षालय /खोली",
          "id": "9.1E"
        },
        {
          "label": "क्लिनिकमधील स्वच्छता",
          "id": "9.1F"
        },
        {
          "label": "प्रमोशन मटेरीयल",
          "id": "9.1G"
        }
      ],
      "FREQUENCIES": [
        {
          "label": "खरोखर छान",
          "value": "5"
        },
        {
          "label": "चांगले",
          "value": "4"
        },
        {
          "label": "ठीक आहे",
          "value": "3"
        }, {
          "label": "वाईट",
          "value": "2"
        },
        {
          "label": "खूप वाईट",
          "value": "1"
        },
        {
          "label": "काहीही सांगू शकत नाही",
          "value": "8"
        }
      ]
    },
    "9.2": {
      "number": 9.2,
      "question": "तुमच्या दवाखान्याच्या भेटीदरम्यान/आणखी काही अपेक्षा/आकांक्षा पूर्ण झाल्या/झाल्या नाहीत का?",
      "type": "input"
    },
    "9.3": {
      "number": 9.3,
      "question": "सुधारणेसाठी कोणत्याही सूचना सांगा",
      "type": "input"
    }
  },
  
  
}

export default marathi