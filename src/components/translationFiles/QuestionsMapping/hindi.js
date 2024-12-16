const hindi= {
  Section1: {
    "1.1": {
      "number": 1.1,
      "question": "पूरे किए गए सालों में उम्र?",
      "type": "input",
      "section": "सेक्‍शन 1: रेस्‍पांडेंट की प्रोफ़ाइल",
      "inputType": "number",
      "label": "पूरे हुए सालों में "
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
      "question": "प्राप्‍त की गई शिक्षा?",       type:"radio",
      "options": [
        {
          "label": "अशिक्षित",
          "code": "1"
        },
        {
          "label": "प्राइमरी से कम",
          "code": "2"
        },
        {
          "label": "प्राइमरी स्कूल पूरा किया",
          "code": "3"
        },
        {
          "label": "मिडिल स्कूल पूरा किया",
          "code": "4"
        },
        {
          "label": "हाई स्कूल/मैट्रिकुलेशन पूरा किया",
          "code": "5"
        },
        {
          "label": "हायर सेकेंडरी/इंटरमीडिएट पूरा किया",
          "code": "6"
        },
        {
          "label": "ग्रैज्‍युएशन पूरा किया",
          "code": "7"
        },
        {
          "label": "पोस्ट ग्रेजुएशन और उससे ज्‍यादा की पढ़ाई पूरी की",
          "code": "8"
        }
      ]
    },
    "1.4": {
      "number": 1.4,
      "question": "कृपया बताएं कि आजकल आप क्‍या काम/ व्‍यवसाय करते हैं?  ",
      "type": "radio",
      "options": [
        {
          "label": "ट्रक ड्राईवर",
          "code": "1"
        },
        {
          "label": "हेल्पर",
          "code": "2"
        },
        {
          "label": "(चाय-दुकान/ढाबा मालिक,नाई,सड़क किनारे मैकेनिक)",
          "code": "3"
        },
       
        
        {
          "label": "साइट पर दुकान पर काम करते हैं",
          "code": "3"
        },
        {
          "label": "कोई अन्य (कृपया बताएं)--- --------",
          "code": "9"
        }
      ]
    },
    "1.5": {
      "number": 1.5,
      "question": "आप पहले कितनी बार इस सेंटर (क्लीनिक) पर आए हैं? ",
      "type": "radio",
      "options": [
        {
          "label": "यह पहली बार है",
          "code": "1"
        },
        {
          "label": "कुछ बार विजिट किया है",
          "code": "2"
        },
        {
          "label": "कई बार विजिट किया है",
          "code": "3"
        }
      ]
    },
    "1.6": {
      "number": 1.6,
      "question": "आप पहली बार इस सेंटर (क्लीनिक) पर कब आए थे?",
      "type": "input",
      "inputType": "number",
      "inputLimit": 4,  checkAsk:true,
      nextStep:2,
    },
    "1.7": {
      "number": 1.7,
      "question": "क्या आपने कभी इस क्‍लीनिक में आकर अपने खून की जांच करवाई है?",
      "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    }, "1.8":{
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
      "question": "आपने इस क्‍लीनिक में आने का निर्णय क्यों लिया/चुना था?",
      "type": "radio",
      "options": [
        {
          "label": "कीमत कम है",
          "code": "1"
        },
        {
          "label": "मेरे अड्डे के पास",
          "code": "2"
        },
        {
          "label": "अपोलो के ब्रांड नाम के कारण",
          "code": "3"
        },
        {
          "label": "पहले की विजिट में अच्छा प्रभाव रहा है",
          "code": "4"
        },
        {
          "label": "कोई अन्य (कृपया बताएं)----------------------",
          "code": "5"
        }
      ]
    },
    "1.1_0": {
      "number": "1.1_0",
      "question": "इस बार इस सेंटर (क्लीनिक) में आने का कारण क्या है? ",
      "type": "multi",
      "options": [
        {
          "label": "सामान्य बुखार,सर्दी और खांसी",
          "code": "1"
        },
       
       
        {
          "label":  "पीठ दर्द,पेट दर्द,सिर दर्द",
          "code": "2"
        },
        
        {
          "label": "जोड़ों का दर्द,मांसपेशियों का दर्द",
          "code": "3"
        },
        {
          "label": "देखने संबंधी समस्या",
          "code": "4"
        },
        {
          "label": "बलगम की जांच",
          "code": "5"
        },
        {
          "label": "हायपरटेंशन संबंधी समस्या",
          "code": "6"
        },
        {
          "label": "डायबिटीज संबंधी समस्या",
          "code": "7"
        },
        {
          "label": "खून की जांच/एचआईवी की जांच",
          "code": "8"
        },
        {
          "label": "कोई अन्य (कृपया बताएं)----------------------",
          "code": "9"
        }
      ]
    },
    "1.11": {
      "number": 1.11,
      "question": "अपनी मौजूदा विजिट में आप कितने लोगों से मिले थे? ",
      "type": "multi",
      "options": [
        {
          "label": "वह व्यक्ति जो रजिस्‍ट्रेशन कर रहा है",
          "code": "1"
        },
        {
          "label": "डॉक्टर",
          "code": "2"
        },
        {
          "label": "वह व्यक्ति जिसने आई टेस्‍ट किया था",
          "code": "4"
        },
        {
          "label": "वह व्यक्ति जिसने रैंडम ब्‍लड शुगर की जाँच की थी",
          "code": ""
        },
        {
          "label": "यदि डॉक्टर के द्वारा जाँच नहीं की गई",
          "code": "5"
        },
        {
          "label": "वह व्यक्ति जिसने ब्‍लड प्रेशर की जाँच की थी यदि डॉक्टर के द्वारा जाँच नहीं की गई",
          "code": "7"
        },
        {
          "label": "वह व्यक्ति जिसने एचआईवी जांच के लिए खून लिया है यदि डॉक्टर के द्वारा जांच नहीं की गई है",
          "code": "8"
        },
        {
          "label": "वह व्यक्ति जिसने दवा दी",
          "code": "9"
        },
        {
          "label": "वह व्यक्ति जिसने बलगम का सैम्‍पल एकत्र किया",
          "code": "10"
        },
        {
          "label": "कोई अन्य (कृपया बताएं)----------------------",
          "code": "11"
        }
      ]
    },
    "2.1": {
      "number": 2.1,
      "question": "रजिस्‍ट्रेशन के लिए आपको कितने समय तक इंतजार करना पड़ा था?",
      "type": "radio",
      "options": [
        {
          "label": "इंतजार नहीं करना पड़ा",
          "code": "1"
        },
        {
          "label": "लगभग 5 मिनट तक इंतजार किया",
          "code": "2"
        },
        {
          "label": "करीब 5-10 मिनट तक इंतजार किया",
          "code": "3"
        },
        {
          "label": "करीब 10-15 मिनट तक इंतजार किया",
          "code": "4"
        },
        {
          "label": "15 मिनट से ज्‍यादा तक इंतजार किया",
          "code": "5"
        }
      ],
      "section": "सेक्‍शन 2: रजिस्‍ट्रेशन "
    },
    "2.2": {
      "number": 2.2,
      "question": "क्या उसने आपका कार्ड बनाया या रिन्‍यू किया था?",
      "type": "radio",
      "options": [
        {
          "label": "एक नया कार्ड बनाया",
          "code": "1"
        },
        {
          "label": "पुराना कार्ड रिन्‍यू किया",
          "code": "2"
        },
        {
          "label": "कोई कार्ड नहीं बनाया या रिन्‍यू नहीं किया",
          "code": "3"
        }
      ]
    },
    "2.3": {
      "number": 2.3,
      "question": "रजिस्ट्रेशन करने वाले व्यक्ति का व्यवहार कैसा था?",
      "type": "radio",
      "options": [
        {
          "label": "यह ठीक था",
          "code": "1"
        },
        {
          "label": "यह काफी दोस्‍ताना था",
          "code": "2"
        },
        {
          "label": "यह असभ्य था",
          "code": "3"
        }
      ]
    },
    "2.4": {
      "number": 2.4,
      "question": "क्या आपको डॉक्टर/काउंसलर से मिलने से पहले अपने हाथ साफ करने के लिए कहा गया था?",
      "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    },
    "2.5": {
      "number": 2.5,
      "question": "क्या आपको डॉक्टर/काउंसलर से मिलने से पहले मास्क पहनने के लिए कहा गया था?",
      "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    },
    "2.6": {
      "number": 2.6,
      "question": "आपको रजिस्‍ट्रेशन के बाद जिस व्यक्ति से मिलना है क्या उसने इसके बारे में आपका सही मार्गदर्शन किया था?",
      "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    },
    "4.1": {
      "number": 4.1,
      "question": "क्या क्‍लीनिक के अंदर डॉक्टर ने खुद का आपकी जांच, डायग्‍नोज़ किया था",
      "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ],
      "section": "सेक्‍शन 4: डॉक्टर के द्वारा जांच और इलाज"
    },
    "4.2": {
      "number": 4.2,
      "question": "क्या डॉक्टर ने आपकी जांच करने से पहले आपके साथ तालमेल बैठाने की कोशिश की थी?",
      "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    },
    "4.3": {
      "number": 4.3,
      "question": "क्या जांच होने से पहले आपको डॉक्टर से गोपनीयता का आश्वासन मिला था?",
      "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    },
    "4.4": {
      "number": 4.4,
      "question": "डॉक्टर को दिखाने से पहले आपको कितने समय तक इंतजार करना पड़ा था?",
      "options": [
        {
          "label": "10 मिनट से कम",
          "code": "1"
        },
        {
          "label": "10-15 मिनट",
          "code": "2"
        },
        {
          "label": "15-30 मिनट",
          "code": "3"
        },
        {
          "label": "30-45 मिनट",
          "code": "4"
        },
        {
          "label": "45 मिनट – 1 घंटा",
          "code": "5"
        },
        {
          "label": "1 घंटे से ज्‍यादा",
          "code": "6"
        }
      ]
    },
    "4.5": {
      "number": 4.5,
      "question": "क्या आपको बातचीत के दौरान अपने डाउब्‍ट्स/प्रश्न पूछने का मौका दिया गया था?",
      "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    },
    "4.6": {
      "number": 4.6,
      "question": "क्या आपने अपनी स्वास्थ्य समस्या के संबंध में कोई प्रश्न पूछा था?",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    },
    "4.7": {
      "number": 4.7,
      "question": "क्या डॉक्टर आपके प्रश्नों/डाउब्‍ट्स का जवाब दे (या स्पष्ट कर) पाया था?",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    },
    "4.8": {
      "number": 4.8,
      "question": "बातचीत के दौरान क्या आपके और डॉक्टर के अलावा कमरे में कोई और मौजूद था, जो बातचीत को सुन सकता था?",
      "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    },
    "4.9": {
      "number": 4.9,
      "question": "क्या क्लीनिक में जांच के लिए एक अलग जगह थी?  ",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    },
    "4.1_0": {
      "number": "4.1_0",
      "question": "क्या डॉक्टर से हुई बातचीत आपकी समझ में आयी थी?",
      "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    },
    "4.11": {
      "number": 4.11,
      "question": "आपके अनुसार डॉक्टर का कुलमिलाकर व्यवहार कैसा था?",
      "options": [
        {
          "label": "धैर्यवान था और सब कुछ ठीक से समझाया",
          "code": "1"
        },
        {
          "label": "जल्दी में था और संक्षेप में बताया",
          "code": "2"
        },
        {
          "label": "असभ्य था और ठीक से समझाया नहीं",
          "code": "3"
        }
      ],
      "instruction": "एक- एक करके विकल्‍पों को पढें"
    },
    "4.12": {
      "number": 4.12,
      "question": "डॉक्टर ने आपके साथ लगभग कितना समय (मिनटों में) बिताया था?",
      "type": "radio",
      "options": [
        {
          "label": "10 मिनट से कम",
          "code": "1"
        },
        {
          "label": "10-15 मिनट",
          "code": "2"
        },
        {
          "label": "15-30 मिनट",
          "code": "3"
        },
        {
          "label": "30-45 मिनट",
          "code": "4"
        },
        {
          "label": "45 मिनट – 1 घंटा",
          "code": "5"
        },
        {
          "label": "1 घंटे से ज्‍यादा",
          "code": "6"
        }
      ]
    },
    "4.13": {
      "number": 4.13,
      "question": "आपको दिए गए परामर्श/जांच/डायग्‍नोसिस की क्‍वालिटी के संबंध में आप डॉक्टर को कैसा रेट करेंगे?",
      "options": [
        {
          "label": "अच्छा",
          "code": "1"
        },
        {
          "label": "ठीक- ठाक",
          "code": "2"
        },
        {
          "label": "अच्छा नहीं",
          "code": "3"
        }
      ]
    },
    "4.14": {
      "number": 4.14,
      "question": "क्या डॉक्टर ने जांच/डायग्‍नोसिस के दौरान ग्‍लव्‍स (दस्ताने) पहने थे?",
      "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    },
    "4.15": {
      "number": 4.15,
      "question": "क्या डॉक्टर ने जांच/बातचीत के दौरान मास्क लगाया हुआ था?",     "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    },
    "4.16": {
      "number": 4.16,
      "question": "क्या डॉक्टर ने जांच/डायग्‍नोसिस के दौरान स्‍टेरीलाईज्‍ड इंस्‍ट्रूमेंट्स का इस्‍तेमाल किया था?",
      "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        },
        {
          "label": "पता नहीं",
          "code": "3"
        }
      ]
    },
    "4.17": {
      "number": 4.17,
      "question": "डॉक्टर ने क्या प्रेस्‍क्राईब किया/ लिखा था ? एक से ज्‍यादा कोड",   
      type:"multi",
      "options": [
        {
          "label": "मेडिसिन",
          "code": "1"
        },
        {
          "label": "बिना कुछ खाए ब्‍लड शुगर टेस्‍ट",
          "code": "2"
        },
        {
          "label": "खून की जांच",
          "code": "3"
        },
        {
          "label": "आई साईट का टेस्‍ट",
          "code": "4"
        },
        {
          "label": "बलगम की जांच / छाती का एक्स-रे",
          "code": "5"
        },
        {
          "label": "कोई अन्य (कृपया बताएं________)",
          "code": "6"
        }
      ]
    },
    "4.19": {
      "number": 4.19,
      "question": "क्या आप दूसरों को इस डॉक्टर/सुविधा की सिफारिश करेंगे?",
      "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    },
    "5.1": {
      "number": 5.1,
      "question": "ऑप्टोमेट्रिस्ट को दिखाने से पहले आपको कितने समय तक इंतजार करना पड़ा था?",
      "options": [
        {
          "label": "10 मिनट से कम",
          "code": "1"
        },
        {
          "label": "10-15 मिनट",
          "code": "2"
        },
        {
          "label": "15-30 मिनट",
          "code": "3"
        },
        {
          "label": "30-45 मिनट",
          "code": "4"
        },
        {
          "label": "45 मिनट – 1 घंटा",
          "code": "5"
        },
        {
          "label": "1 घंटे से ज्‍यादा",
          "code": "6"
        }
      ]
    },
    "5.2": {
      "number": 5.2,
      "question": "क्या ऑप्टोमेट्रिस्ट ने खुद आपकी जांच की थी?",
      "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    },
    "5.3": {
      "number": 5.3,
      "question": " क्या आई साईट की जांच की गई थी?",     "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    },
    "5.4": {
      "number": 5.4,
      "question": "आई साईट की जांच के बाद क्या सिफ़ारिश की गई है?",
      "type": "radio",
      "options": [
        {
          "label": "चश्मे की सिफारिश की",
          "code": "1"
        },
        {
          "label": "आई ड्रॉप की सिफारिश की",
          "code": "2"
        },
        {
          "label": "मोतियाबिंद ऑपरेशन की सिफारिश की",
          "code": "3"
        },
        {
          "label": "सर्जरी की सिफारिश की",
          "code": "4"
        },
        {
          "label": "किसी दवा की सिफारिश की",
          "code": "5"
        },
        {
          "label": "बताया कि सब कुछ ठीक है",
          "code": "6"
        },
        {
          "label": "कोई अन्य (कृपया बताएं____________)",
          "code": "7"
        }
      ]
    },
    "5.5": {
      "number": 5.5,
      "question": "क्या ऑप्टोमेट्रिस्ट के साथ हुई बातचीत आपको समझ में आई थी?",
      "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    },
    "5.6": {
      "number": 5.6,
      "question": "आपके अनुसार ऑप्टोमेट्रिस्ट का कुलमिलाकर व्यवहार कैसा था?",
      "type": "radio",
      "options": [
        {
          "label": "धैर्यवान था और सब कुछ ठीक से समझाया",
          "code": "1"
        },
        {
          "label": "जल्दी में था और संक्षेप में बताया",
          "code": "2"
        },
        {
          "label": "असभ्य था और ठीक से समझाया नहीं",
          "code": "3"
        }
      ],
      "instruction": "एक- एक करके विकल्‍पों को पढें"
    },
    "5.7": {
      "number": 5.7,
      "question": "ऑप्टोमेट्रिस्ट ने आपके साथ लगभग कितना समय (मिनटों में) बिताया था?",
      "type": "radio",
      "options": [
        {
          "label": "10 मिनट से कम",
          "code": "1"
        },
        {
          "label": "10-15 मिनट",
          "code": "2"
        },
        {
          "label": "15-30 मिनट",
          "code": "3"
        },
        {
          "label": "30-45 मिनट",
          "code": "4"
        },
        {
          "label": "45 मिनट – 1 घंटा",
          "code": "5"
        },
        {
          "label": "1 घंटे से ज्‍यादा",
          "code": "6"
        }
      ]
    },
    "5.8": {
      "number": 5.8,
      "question": "आपको दिए गए परामर्श/जांच/डायग्‍नोसिस की क्‍वालिटी के संबंध में आप ऑप्टोमेट्रिस्ट को कैसा रेट करेंगे?",
      "type": "radio",
      "options": [
        {
          "label": "अच्छा",
          "code": "1"
        },
        {
          "label": "ठीक- ठाक",
          "code": "2"
        },
        {
          "label": "अच्छा नहीं",
          "code": "3"
        }
      ]
    },
    "5.9": {
      "number": 5.9,
      "question": "क्या डॉक्टर ने जांच/डायग्‍नोसिस के दौरान ग्‍लव्‍स (दस्ताने) पहने थे?",
      "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    },
    "5.1_0": {
      "number": "5.1_0",
      "question": "क्या डॉक्टर ने जांच/बातचीत के दौरान मास्क लगाया हुआ था?",
      "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    },
    "6.1": {
      "number": 6.1,
      "question": "लैब टेकनीशियन से मिलने से पहले आपको कितने समय तक इंतजार करना पड़ा था?",
      "type": "radio",
      "options": [
       
        {
          "label": "10 मिनट से कम",
          "code": "1"
        },
        {
          "label": "10-15 मिनट",
          "code": "2"
        },
        {
          "label": "15-30 मिनट",
          "code": "3"
        },
        {
          "label": "30-45 मिनट",
          "code": "4"
        },
        {
          "label": "45 मिनट – 1 घंटा",
          "code": "5"
        },
        {
          "label": "1 घंटे से ज्‍यादा",
          "code": "6"
        }
      ],
      "section": "खून की जांच: यह सेक्‍शन केवल उन लोगों से पूछा जाएगा जिन्हें डॉक्टर के द्वारा खून की जांच या बलगम की जांच करवाने के लिए कहा गया है। "
    },
    "6.2": {
      "number": 6.2,
      "question": "क्या क्लीनिक में लैब टेस्टिंग के लिए एक अलग जगह थी?  ",      "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    },
    "6.3": {
      "number": 6.3,
      "question": "आपके अनुसार लैब टेकनीशियन का कुलमिलाकर व्यवहार कैसा था?",
      "type": "radio",
      "options": [
        {
          "label": "धैर्यवान था और सब कुछ ठीक से समझाया",
          "code": "1"
        },
        {
          "label": "जल्दी में था",
          "code": "2"
        },
        {
          "label": "असभ्य और टेस्‍ट की प्रक्रिया को ठीक से नहीं समझाया",
          "code": "3"
        }
      ],
      "instruction": "एक- एक करके विकल्‍पों को पढें"
    },
    "6.4": {
      "number": 6.4,
      "question": "क्या फार्मासिस्ट/लैब टेकनीशियन ने खून की जांच के दौरान अपने हाथ धोये थे?",      "type": "radio",
      "options": [
        {
          "label": "टेस्‍ट से पहले हाथ धोये",
          "code": "1"
        },
        {
          "label": "टेस्‍ट के बाद हाथ धोये",
          "code": "2"
        },
        {
          "label": "टेस्‍ट से पहले और बाद में हाथ धोएं",
          "code": "3"
        },
        {
          "label": "हाथ नहीं धोये",
          "code": "4"
        },
        {
          "label": "ऑब्‍जर्व नहीं किया",
          "code": "5"
        }
      ]
    },
    "6.5": {
      "number": 6.5,
      "question": "खून की जांच की प्रक्रिया में कितना समय लगा था?",
      "type": "radio",
      "options": [
        {
          "label": "10 मिनट से कम",
          "code": "1"
        },
        {
          "label": "10-15 मिनट",
          "code": "2"
        },
        {
          "label": "15-30 मिनट",
          "code": "3"
        },
        {
          "label": "30-45 मिनट",
          "code": "4"
        },
        {
          "label": "45 मिनट – 1 घंटा",
          "code": "5"
        },
        {
          "label": "1 घंटे से ज्‍यादा",
          "code": "6"
        }
      ]
    },
    "6.6": {
      "number": 6.6,
      "question": "क्या आपको लैब टेकनीशियन के द्वारा टेस्‍ट का परिणाम बताया गया था?",
      "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        },
        {
          "label": "काउंसलर के पास भेजा गया",
          "code": "3"
        },
        {
          "label": "डॉक्टर के पास भेजा गया",
          "code": "4"
        },
        {
          "label": "बाद में आने को कहा",
          "code": "5"
        }
      ]
    },
    "7.1": {
      "number": 7.1,
      "question": "फार्मासिस्ट से मिलने से पहले आपको कितने समय तक इंतजार करना पड़ा था?",
      "type": "radio",
      "options": [
        {
          "label": "10-15 मिनट",
          "code": "1"
        },
        {
          "label": "15-30 मिनट",
          "code": "2"
        },
        {
          "label": "30-45 मिनट",
          "code": "3"
        },
        {
          "label": "45 मिनट – 1 घंटा",
          "code": "4"
        },
        {
          "label": "1 घंटे से ज्‍यादा",
          "code": "5"
        }
      ],
      "section": "सेक्‍शन 7: दवा वितरण: यह सेक्‍शन केवल उन लोगों से पूछा जाएगा जिन्हें डॉक्टर द्वारा दवा लिखी गई है"
    },
    "7.2": {
      "number": 7.2,
      "question": "आपके अनुसार फार्मासिस्ट का कुलमिलाकर व्यवहार कैसा था?",      "type": "radio",
      "options": [
        {
          "label": "धैर्यवान था और दवाएँ ठीक तरह से दी थी",
          "code": "1"
        },
        {
          "label": "जल्दी में था",
          "code": "2"
        },
        {
          "label": "अभद्र व्यवहार किया और बताए गए तरीके से दवाइयां ठीक से नहीं दीं थी",
          "code": "3"
        },
        {
          "label": "दवा उपलब्ध नहीं थी",
          "code": "4"
        }
      ]
    },
    "7.3": {
      "number": 7.3,
      "question": "यदि दवा उपलब्ध नहीं थी तो फार्मासिस्ट ने आपको क्या बताया था?",
      "type": "radio",
      "options": [
        {
          "label": "बाद में आने को कहा",
          "code": "1"
        },
        {
          "label": "किसी केमिस्ट की दुकान से दवा खरीदने के लिए कहा",
          "code": "2"
        },
        {
          "label": "कुछ नहीं बताया गया",
          "code": "3"
        },
        {
          "label": "लागू नहीं होता",
          "code": ""
        },
        {
          "label": "दवा उपलब्ध थी",
          "code": "4"
        },
        {
          "label": "अन्य (कृपया बताएं…………………………)",
          "code": "9"
        }
      ]
    },
    "7.4": {
      "number": 7.4,
      "question": "क्या आपको दवा की खुराक के बारे में बताया गया था? ", "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        }
      ]
    },
    "8.1": {
      "number": 8.1,
      "question": "क्या क्‍लीनिक/काउंसलर/डॉक्टर के चैम्‍बर के अंदर एसटीआई, एचआईवी/एड्स पर कोई ग्लो साइन बोर्ड/पोस्टर/अन्य पीओपी दिखाई दे रहे थे? ",
      "type": "radio",
      // "options": [
      //   {
      //     "label": "चश्मे की सिफारिश की",
      //     "code": "1"
      //   },
      //   {
      //     "label": "आई ड्रॉप की सिफारिश की",
      //     "code": "2"
      //   },
      //   {
      //     "label": "मोतियाबिंद ऑपरेशन की सिफारिश की",
      //     "code": "3"
      //   },
      //   {
      //     "label": "सर्जरी की सिफारिश की",
      //     "code": "4"
      //   },
      //   {
      //     "label": "किसी दवा की सिफारिश की",
      //     "code": "5"
      //   },
      //   {
      //     "label": "बताया कि सब कुछ ठीक है",
      //     "code": "6"
      //   },
      //   {
      //     "label": "कोई अन्य (कृपया बताएं____________)",
      //     "code": "7"
      //   }
      // ],
      "section": "सेक्‍शन 8: आईईसी मैटेरियल और अन्य सुविधाओं का डिस्‍प्‍ले (सभी से पूछें)",
      "options": [
       
        {
          "label": "हाँ ",
          "code": "1"
        },
        {
          "label": "नहीं ",
          "code": "2"
        },
        {
          "label": "ऑब्‍जर्व नहीं किया",
          "code": "3"
        }
      ]
    },
    "8.2": {
      "number": 8.2,
      "question": "क्या क्‍लीनिक के परिसर के अंदर वॉशरूम/बाथरूम/शौचालय था?", 
      "type": "radio",
      "options": [
       
        {
          "label": "हाँ ",
          "code": "1"
        },
        {
          "label": "नहीं ",
          "code": "2"
        },
        {
          "label": "ऑब्‍जर्व नहीं किया",
          "code": "3"
        }
      ]
    },
    "8.3": {
      "number": 8.3,
      "question": "क्या क्‍लीनिक के परिसर के अंदर वॉश बेसिन था?",
      "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        },
        {
          "label": "ऑब्‍जर्व नहीं किया",
          "code": "3"
        }
      ]
    },
    "8.4": {
      "number": 8.4,
      "question": "क्या क्‍लीनिक के परिसर के अंदर मरीजों के लिए बैठने की व्यवस्था/वेटिंग रूम था ",     "type": "radio",
      "options": [
        {
          "label": "हाँ",
          "code": "1"
        },
        {
          "label": "नहीं",
          "code": "2"
        },
        {
          "label": "ऑब्‍जर्व नहीं किया",
          "code": "3"
        }
      ]
    },
    "8.5": {
      "number": 8.5,
      "question": "इस क्‍लीनिक की कुलमिलाकर सेवाओं से आप कितना संतुष्ट हैं?",
      "type": "radio",
      "options": [
        {
          "label": "संतुष्ट",
          "code": "1"
        },
        {
          "label": "सामान्‍य रूप से संतुष्ट",
          "code": "2"
        },
        {
          "label": "संतुष्ट नहीं",
          "code": "3"
        }
      ]
    },
    "9.1": {
      "number": 9.1,
      "question": "ऐसी कई प्रक्रियाएं हैं जिनसे आप एटीएफ क्‍लीनिक के अंदर गुजरे होंगे, आप नीचे दिए गए पहलुओं के बारे में अपनी कुलमिलाकर राय को कैसा रेट करेंगे? कृपया टिक मार्क करें",
      "type": "rate",
      "section": "सेक्‍शन 9: सुविधा और सेवाओं के साथ कुलमिलाकर संतुष्टि (सभी से पूछें)",
      "STATEMENTS": [
        {
          "label": "डॉक्टर के द्वारा जांच/डायग्‍नोसिस",
        "id": "9.1A"
        },
        {
          "label": "खून की जांच",
            "id": "9.1B"
        },
        {
          "label": "दवाओं का वितरण",
      "id": "9.1C"
        },
        {
          "label": "स्‍टॉफ का व्यवहार",
                  "id": "9.1D"
        },
        {
          "label": "वेटिंग एरिया/ रूम",
        "id": "9.1E"
        },
        {
          "label": "क्लीनिक के भीतर साफ- सफाई",
       "id": "9.1F"
        },
        {
          "label": "प्रमोशनल मैटेरियल",
 "id": "9.1G"
        }
      ],
      "FREQUENCIES": [
        {
          "label": "बेहद अच्छा",
          "value": "5"
        },
        {
          "label": "अच्छा",
          "value": "4"
        },
        {
          "label": "ठीक - ठाक",
          "value": "3"
        },    {
          "label": "ख़राब",
          "value": "2"
        },
        {
          "label": "बहुत ख़राब",
          "value": "1"
        },
        {
          "label": "कह नहीं सकते",
          "value": "8"
        }
      ]
    },
    "9.2": {
      "number": 9.2,
      "question": "क्या ऐसी कोई अन्य अपेक्षा/अपेक्षाएं हैं जो क्‍लीनिक में आपकी विजिट के दौरान पूरी नहीं हुई थीं?",
      "type": "input"
    },
    "9.3": {
      "number": 9.3,
      "question": "क्‍या आप सुधार के लिए कोई और सुझाव देना चाहेंगे",
      "type": "input"
    }
  },
  
}

export default hindi;
