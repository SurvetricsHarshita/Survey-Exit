const hindi= {
  Section1: {


    Q1: 
    {
      number: "QH",
      question: "कृपया सूची से उपयुक्त विकल्प चुनें। यह घर स्थित है …",
      instruction: "सर्वेक्षण परिवार के किसी भी वयस्क सदस्य (15 वर्ष से अधिक उम्र) के साथ किया जा सकता है, लेकिन प्राथमिकता गृहस्वामी या मुख्य कमाने वाले व्यक्ति को दी जानी चाहिए। दरवाजा खटखटाने से पहले QH के लिए सही विकल्प चुनें।",
      response: "",
      options: [
        { label: "24 घंटे की सुरक्षा के साथ एक गेटेड समुदाय", code: "1" }, 
        { label: "24 घंटे की सुरक्षा और स्विमिंग पूल/जिम/खेल क्षेत्र जैसी सुविधाओं के साथ एक गेटेड समुदाय", code: "2" },
        { label: "24 घंटे की सुरक्षा नहीं लेकिन एक प्रीमियम क्षेत्र में", code: "3" },
        { label: "व्यक्तिगत रो हाउस या बंगला", code: "4" },
        { label: "24 घंटे की सुरक्षा नहीं और न ही प्रीमियम क्षेत्र", code: "5" },
        { label: "अन्य, कृपया उल्लेख करें ……….", code: "6" }
      ],
      type: "radio",
      first: true,
      audio: true
    },
    
    Q2_a: 
    {
      number: "Introduction –",
      question: " ",
      label: "क्या मैं शुरू कर सकता हूँ?",
      response: " ",
      instruction: "नमस्ते! मैं ___ से ___ (एजेंसी का नाम) से हूँ और हम टीवी देखने के लिए एक सर्वेक्षण कर रहे हैं। क्या मैं आपसे कुछ प्रश्न पूछ सकता हूँ? यह एक बहुत ही छोटा सर्वेक्षण है और इसमें केवल 5 मिनट का समय लगेगा!",
      options: [
        { label: "हाँ", code: "1" }, 
        { label: "नहीं", code: "2" }
      ],
      type: "radio",
      termination: true,
      terminationCodes: ["2"],
      audio: true
    },
    
    Q2: {
      number: "QConsent",
      question: "सर्वेक्षण शुरू करने से पहले, क्या मैं आपके संपर्क विवरण (जैसे, ईमेल या फोन) का उपयोग आपके सर्वेक्षण के उत्तरों पर फॉलो-अप के लिए करने की अनुमति मांग सकता हूँ? आपकी जानकारी को गोपनीय रखा जाएगा और केवल इसी उद्देश्य के लिए उपयोग किया जाएगा।",
      response: "",
      instruction: "केवल 'हाँ' चुनने पर ही आगे बढ़ें।",
      label: "क्या आप अपने संपर्क विवरण साझा करने की सहमति देते हैं?",
      options: [
        { label: "हाँ, मैं सहमति देता हूँ।", code: "1" }, 
        { label: "नहीं, मैं सहमति नहीं देता।", code: "2" }
      ],
      type: "radio",
      termination: true,
      terminationCodes: ["2"],
      audio: true
    },
    
    Q3:
    {
      number: "Q1",
      question: "कृपया क्या आप मुझे बता सकते हैं कि क्या आप या आपके परिवार का कोई सदस्य इनमें से किसी भी प्रकार की संस्‍था में काम करता है?",
      response: "",
      type: "radio",
      options: [
        {
          "label": "मार्केटिंग/मार्केट रिसर्च",
          "code": "1"
        },
        {
          "label": "मीडिया (प्रिंट और टीवी)/ब्रॉडकास्टिंग एजेंसी/टीवी चैनल नेटवर्क",
          "code": "2"
        },
        {
          "label": "डीटीएच/आईपीटीवी/केबल ऑपरेटर के साथ काम करना",
          "code": "3"
        },
        {
          "label": "एडवर्टाइजिंग/पब्लिक रिलेशन/मीडिया प्लानिंग एजेंसी",
          "code": "4"
        },
        {
          "label": "जनर्लिस्‍ट/एंकर (फुल टाइम या पार्ट टाइम)",
          "code": "5"
        },
        {
          "label": "क्या पिछले 2 सालों में किसी टीवी/मीडिया पैनल का हिस्सा रहे हैं (जैसे बार्सइंडिया टीवी पैनल)",
          "code": "6"
        },
        {
          "label": "उपरोक्त में से कोई नहीं",
          "code": "7"
        }
      ]
      ,
      termination: true,
      terminationCodes: ["1", "2", "3", "4", "5", "6"]
    },
    
    Q4: 
    {
      number: "Q2_a",
      question: "कृपया क्या आप मुझे इस घर के मुख्य कमाने वाले का नाम बता सकते हैं। मुख्‍य कमाने वाले से  मेरा मतलब उस व्यक्ति से है जो घर के खर्च में सबसे ज्‍यादा योगदान देता है।",
      response: "",
      type: "input",
      placeHolder: "कृपया नाम दर्ज करें",
      label: "नाम"
    }
,    


      Q6: 
      {
        "number": "Q2_b",
        "question": "कृपया _____ की शिक्षा के लिए सही जवाब चुनें",
//  "question": "Please select correct response for education of (add name from Q2.1) ",
        "type": "radio",
        "    placeHolder": "",
        "label": "शिक्षा",
        "options": [
          {
            "label": "अशिक्षित",
            "code": "1"
          },
          {
            "label": "शिक्षित लेकिन कोई औपचारिक शिक्षा नहीं/4वीं कक्षा तक स्कूल",
            "code": "2"
          },
          {
            "label": "5वीं-9वीं कक्षा तक स्कूल",
            "code": "3"
          },
          {
            "label": "एसएससी/एचएससी (10वीं-12वीं)",
            "code": "4"
          },
          {
            "label": "कॉलेज गये हैं डिप्‍लोमा सहित लेकिन ग्रेजुएट नहीं",
            "code": "5"
          },
          {
            "label": "ग्रेजुएट- सामान्य (बी.ए, बी.एससी, बी.कॉम)/पोस्‍ट-ग्रेजुएट सामान्य (एम.ए, एम.एससी, एम.कॉम, एम.फिल)",
            "code": "6"
          },
          {
            "label": "ग्रेजुएट- प्रोफेशनल (बी.ई., एम.बी.बी.एस, बी.टेक)/पोस्‍ट-ग्रेजुएट- प्रोफेशनल (एम.ई, एम.टेक, एम.बी.ए)",
            "code": "7"
          }
        ]
        ,
      },

      Q7: 
      {
        "number": "Q2_c",
        "question": "कृपया मुझे बताएं कि आपके घर में इनमें से कौन सी टिकाऊ वस्तुएँ/वस्तुएँ हैं? यह आपके, आपके परिवार के स्वामित्व में हो सकती है, या नियोक्ता द्वारा प्रदान की जा सकती है या यह आपके घर में उपलब्ध हो सकती है; लेकिन यह केवल आपके या आपके घर/परिवार के सदस्यों के इस्‍तेमाल के लिए होनी चाहिए। ये टिकाऊ वस्तुएँ चालू हालत में होनी चाहिए।",

        "type": "multi",

        "label": "ड्यूरेबल्‍स/टिकाऊ",
        "options": [
          {
            "label": "एयर-कंडीशनर",
            "code": "1"
          },
          {
            "label": "फ्रिज-रेफ्रिजरेटर",
            "code": "2"
          },
          {
            "label": "वॉशिंग मशीन",
            "code": "3"
          },
          {
            "label": "कलर टीवी/एलसीडी/एलईडी/प्लाज्मा टीवी",
            "code": "4"
          },
          {
            "label": "पर्सनल कंप्यूटर/लैपटॉप",
            "code": "5"
          },
          {
            "label": "बिजली कनेक्शन (बिजली की उपलब्धता)",
            "code": "6"
          },
          {
            "label": "सीलिंग फैन",
            "code": "7"
          },
          {
            "label": "गैस स्‍टोव स्‍टोव/पीएनजी स्‍टोव",
            "code": "8"
          },
          {
            "label": "टू व्‍हीलर",
            "code": "9"
          },
          {
            "label": "कार/जीप/वैन",
            "code": "10"
          },
          {
            "label": "कृषि भूमि",
            "code": "11"
          }
        ]
        ,

          termination:true,
          autoCodeQuestion:true,
          autoCodeQuestionVar:"NCCS"
          },

      Q8: 
      {
        "number": "Q2_e",
        "question": "कृपया मुझे बताएं कि आपके घर में इनमें से कौन सी टिकाऊ वस्तुएँ/वस्तुएँ हैं?",

        "type": "rate",


        heading:"लाइफस्‍टाइल",
        "options": "",
        "lableoptions": "",
        "STATEMENTS": [
          {
            "label": "एयर कूलर",
          "id": "Q2_e_1"
          },
          {
            "label": "टैब",
            "id": "Q2_e_2"
          },
          {
            "label": "स्मार्ट टीवी या टीवी जो इंटरनेट/वाईफाई/फाइबर से जुड़ा हो",
           "id": "Q2_e_3"
          },
          {
            "label": "मॉड्यूलर किचन",
   "id": "Q2_e_4"
          }
        ],
        "FREQUENCIES": [
          {
            "label": "हां",
            "value": "1"
          },
          {
            "label": "नहीं",
            "value": "2"
          }
        ],
        termination:true,
      },

      Q9: 
      {
        "number": "Q3",
        "question": "आपके घर में, इस समय इनमें से कौन से टीवी कनेक्शन उपलब्ध हैं? यदि आपके पास कई टीवी के लिए कई कनेक्शन हैं, तो कृपया सभी प्रकार के कनेक्शन चुनें।",

        "type": "multi",
        "    placeHolder": "",
        "label": "टीवी कनेक्‍शन का प्रकार",
        "options": [
          {
            "label": "डीटीएच",
            "code": "1"
          },
          {
            "label": "नॉर्मल एंटीना",
            "code": "2"
          },
          {
            "label": "लोकल केबल ऑपरेटर (सेट टॉप बॉक्स के साथ)",
            "code": "3"
          },
          {
            "label": "कोई नहीं",
            "code": "4"
          },
          {
            "label": "आईपीटीवी / इंटरनेट-आधारित स्ट्रीमिंग डिवाइस / वाईफाई",
            "code": "5"
          },
          {
            "label": "जियो फाइबर",
            "code": "6"
          },
          {
            "label": "एयरटेल एक्सस्ट्रीम",
            "code": "7"
          }
        ],

        termination: true,
        terminationCodes: ["4"]
      },

      Q10: 
      {
        "number": "Q4_a",
        "question": "कृपया इस घर के लिए लिस्‍ट से सही विकल्प चुनें।",
        "instruction": "",
        " inputType": "",
        "  inputLimit": "",
        "type": "radio",
        "    placeHolder": "",
        "label": "घर का विवरण",
        "options": [
          {
            "label": "1 बीएचके (1 बेडरूम, हॉल, किचन) या उससे छोटा",
            "code": "1"
          },
          {
            "label": "2 बीएचके (2 बेडरूम, हॉल, किचन)",
            "code": "2"
          },
          {
            "label": "3 बीएचके (3 बेडरूम, हॉल, किचन)",
            "code": "3"
          },
          {
            "label": "4 बीएचके (4 बेडरूम, हॉल, किचन) या उससे बड़ा",
            "code": "4"
          }
        ],


        termination: true,
        terminationCodes: ["1"]
      },

      Q4b:{
        "number": "Q4_b",
          "question": "कृपया लिस्‍ट में से प्रत्येक के लिए सही विकल्प चुनें",
          "instruction": "",
          " inputType": "",
          "  inputLimit": "",
          "type": "rate",
          "    placeHolder": "",
          // "label": "Lifestyle",
          heading:"लाइफस्‍टाइल",
          "options": "",
          "lableoptions": "",
          "STATEMENTS": [
            {
              "label": "आपके या घर के किसी भी सदस्य के लिए क्लब की सदस्यता है",
                   "id": "Q4_b_1"
            },
            {
              "label": "आपके या घर के किसी भी सदस्य के लिए जिम की सदस्यता है",
         "id": "Q4_b_2"
            },
            {
              "label": "यदि परिवार का कोई सदस्य पिछले 2 सालों में 4*/5* होटल में रुका है",
         "id": "Q4_b_3"
            }
          ],
          "FREQUENCIES": [
            {
              "label": "हां",
              "value": "1"
            },
            {
              "label": "नहीं",
              "value": "2"
            }
          ],
      },
      Q5a:{
        "number": "Q5",
          "question": "कृपया ____ व्यवसाय के लिए लिस्‍ट में से सही विकल्प चुनें    ",
          "instruction": "",
          " inputType": "",
          "  inputLimit": "",
          "type": "radio",
          "    placeHolder": "",
          "label": "व्‍यवसाय शहरी",
          options: [
            {
              "label": "अकुशल कर्मचारी",
              "code": "1"
            },
            {
              "label": "कुशल कर्मचारी",
              "code": "2"
            },
            {
              "label": "छोटे व्यापारी",
              "code": "3"
            },
            {
              "label": "दुकानदार",
              "code": "4"
            },
            {
              "label": "बिजनेसमैन/इंडस्‍ट्रियलिस्‍ट (कोई कर्मचारी नहीं)",
              "code": "5"
            },
            {
              "label": "बिजनेसमैन/इंडस्‍ट्रियलिस्‍ट (1 – 9 कर्मचारी)",
              "code": "6"
            },
            {
              "label": "बिजनेसमैन/इंडस्‍ट्रियलिस्‍ट (10 से ज्‍यादा कर्मचारी)",
              "code": "7"
            },
            {
              "label": "सेल्‍फ इंप्‍लॉयड प्रोफेशनल",
              "code": "8"
            },
            {
              "label": "क्लर्क/सेल्समैन",
              "code": "9"
            },
            {
              "label": "सुपरवाइजरी लेवल",
              "code": "10"
            },
            {
              "label": "ऑफिसर/एक्‍जीक्‍यूटिव – जूनियर",
              "code": "11"
            },
            {
              "label": "ऑफिसर/एक्‍जीक्‍यूटिव – मीडिल/सीनियर",
              "code": "12"
            },
            {
              "label": "मालिक किसान",
              "code": "13"
            },
            {
              "label": "पट्टे पर किसान",
              "code": "14"
            },
            {
              "label": "रिटायर्ड",
              "code": "15"
            },
            {
              "label": "अन्य - बतायें",
              "code": "98"
            }

          ],


      }
      ,
      Q6_a:{
        "number": "Q6_a",
          "question": "कृपया मुझे घर में सदस्यों की संख्या बताएं, यानी जो एक ही रसोई में खाना खाते हैं। कृपया मेहमानों, पूर्णकालिक घरेलू सहायक, या परिवार में एक ही रसोई में खाना खाने वाले किसी अन्य सदस्य को भी शामिल करें।",
          "instruction": "",
          "inputType": "number",
          "inputLimit": 2,
          "type": "input",
          "    placeHolder": "",
          "label": "इस समय इस घर में रहने वाले सदस्‍यों की संख्‍या",

          "termination": true,

      },
      Q30:{
        "number": "Q6_b",
        "question": "कृपया इस परिवार के पुरुष सदस्य द्वारा प्राप्त उच्चतम शिक्षा को चुनें।",
        "instruction": "",
        " inputType": "",
        "  inputLimit": "",
        "type": "radio",
        "    placeHolder": "",
        "label": "शिक्षा",
        options: [
          {
            "label": "अशिक्षित",
            "code": "1"
          },
          {
            "label": "शिक्षित लेकिन कोई औपचारिक शिक्षा नहीं/4वीं कक्षा तक स्कूल",
            "code": "2"
          },
          {
            "label": "5वीं-9वीं कक्षा तक स्कूल",
            "code": "3"
          },
          {
            "label": "एसएससी/एचएससी (10वीं-12वीं)",
            "code": "4"
          },
          {
            "label": "कॉलेज गए हैं डिप्लोमा सहित लेकिन ग्रेजुएट नहीं",
            "code": "5"
          },
          {
            "label": "ग्रेजुएट- सामान्य (बी.ए, बी.एससी, बी.कॉम)/पोस्ट-ग्रेजुएट सामान्य (एम.ए, एम.एससी, एम.कॉम, एम.फिल)",
            "code": "6"
          },
          {
            "label": "ग्रेजुएट- प्रोफेशनल (बी.ई., एम.बी.बी.एस, बी.टेक)/पोस्ट-ग्रेजुएट- प्रोफेशनल (एम.ई, एम.टेक, एम.बी.ए)",
            "code": "7"
          }]
      },
      Q31:{
        "number": "Q6_c",
        "question": "कृपया इस परिवार के महिला सदस्य द्वारा प्राप्त उच्चतम शिक्षा को चुनें।",
        "instruction": "",
        " inputType": "",
        "  inputLimit": "",
        "type": "radio",
        "    placeHolder": "",
        "label": "शिक्षा",
        options: [
          {
            "label": "अशिक्षित",
            "code": "1"
          },
          {
            "label": "शिक्षित लेकिन कोई औपचारिक शिक्षा नहीं/4वीं कक्षा तक स्कूल",
            "code": "2"
          },
          {
            "label": "5वीं-9वीं कक्षा तक स्कूल",
            "code": "3"
          },
          {
            "label": "एसएससी/एचएससी (10वीं-12वीं)",
            "code": "4"
          },
          {
            "label": "कॉलेज गए हैं डिप्लोमा सहित लेकिन ग्रेजुएट नहीं",
            "code": "5"
          },
          {
            "label": "ग्रेजुएट- सामान्य (बी.ए, बी.एससी, बी.कॉम)/पोस्ट-ग्रेजुएट सामान्य (एम.ए, एम.एससी, एम.कॉम, एम.फिल)",
            "code": "6"
          },
          {
            "label": "ग्रेजुएट- प्रोफेशनल (बी.ई., एम.बी.बी.एस, बी.टेक)/पोस्ट-ग्रेजुएट- प्रोफेशनल (एम.ई, एम.टेक, एम.बी.ए)",
            "code": "7"
          }]
      },


      Q32:{
        "number": "Q7_a",
        "question": "अपने परिवार के सदस्यों के बीच बात करते समय, आप कौन सी भाषा बोलते हैं?",
        "instruction": "",
        " inputType": "",
        "  inputLimit": "",
        "type": "multi",
        "    placeHolder": "",
        "label": "घर में बोली जानी वाली भाषा",
        "options": [
          { "label": "असमिया", "code": "1" },
          { "label": "अवधी", "code": "2" },
          { "label": "बंगाली", "code": "3" },
          { "label": "भोजपुरी", "code": "4" },
          { "label": "बोडो", "code": "5" },
          { "label": "बुंदेलखंडी", "code": "6" },
          { "label": "छत्तीसगढ़िया", "code": "7" },
          { "label": "डोगरी", "code": "8" },
          { "label": "अंग्रेजी", "code": "9" },
          { "label": "गढ़वाली", "code": "10" },
          { "label": "गुजराती", "code": "11" },
          { "label": "हिंदी", "code": "12" },
          { "label": "कन्नड़", "code": "13" },
          { "label": "कश्मीरी", "code": "14" },
          { "label": "खासी", "code": "15" },
          { "label": "कोंकणी", "code": "16" },
          { "label": "कच्छी", "code": "17" },
          { "label": "लुशाई/मिज़ो", "code": "18" },
          { "label": "मगही/मगधी", "code": "19" },
          { "label": "मैथिली", "code": "20" },
          { "label": "मलयालम", "code": "21" },
          { "label": "मालवानी", "code": "22" },
          { "label": "मणिपुरी", "code": "23" },
          { "label": "मराठी", "code": "24" },
          { "label": "मारवाड़ी", "code": "25" },
          { "label": "नेपाली", "code": "26" },
          { "label": "उड़िया", "code": "27" },
          { "label": "अन्य विदेशी भाषाएँ", "code": "28" },
          { "label": "अन्य भारतीय भाषाएँ", "code": "29" },
          { "label": "पहाड़ी", "code": "30" },
          { "label": "पंजाबी", "code": "31" },
          { "label": "संस्कृत", "code": "32" },
          { "label": "संथाली", "code": "33" },
          { "label": "सिंधी", "code": "34" },
          { "label": "तमिल", "code": "35" },
          { "label": "तेलुगु", "code": "36" },
          { "label": "तुलु", "code": "37" },
          { "label": "उर्दू", "code": "38" }
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
        "question": "ऊपर बताई गई भाषाओं में से, आप अपने परिवार के सदस्यों के साथ सबसे ज्‍यादा बार कौन सी भाषा बोलते हैं?",

        " inputType": "",
        "  inputLimit": "",
        "type": "radio",
        "    placeHolder": "",
        "label": "सबसे ज्‍यादा बोली जाने वाली भाषा",
        "options": [
          { "label": "असमिया", "code": "1" },
          { "label": "अवधी", "code": "2" },
          { "label": "बंगाली", "code": "3" },
          { "label": "भोजपुरी", "code": "4" },
          { "label": "बोडो", "code": "5" },
          { "label": "बुंदेलखंडी", "code": "6" },
          { "label": "छत्तीसगढ़िया", "code": "7" },
          { "label": "डोगरी", "code": "8" },
          { "label": "अंग्रेजी", "code": "9" },
          { "label": "गढ़वाली", "code": "10" },
          { "label": "गुजराती", "code": "11" },
          { "label": "हिंदी", "code": "12" },
          { "label": "कन्नड़", "code": "13" },
          { "label": "कश्मीरी", "code": "14" },
          { "label": "खासी", "code": "15" },
          { "label": "कोंकणी", "code": "16" },
          { "label": "कच्छी", "code": "17" },
          { "label": "लुशाई/मिज़ो", "code": "18" },
          { "label": "मगही/मगधी", "code": "19" },
          { "label": "मैथिली", "code": "20" },
          { "label": "मलयालम", "code": "21" },
          { "label": "मालवानी", "code": "22" },
          { "label": "मणिपुरी", "code": "23" },
          { "label": "मराठी", "code": "24" },
          { "label": "मारवाड़ी", "code": "25" },
          { "label": "नेपाली", "code": "26" },
          { "label": "उड़िया", "code": "27" },
          { "label": "अन्य विदेशी भाषाएँ", "code": "28" },
          { "label": "अन्य भारतीय भाषाएँ", "code": "29" },
          { "label": "पहाड़ी", "code": "30" },
          { "label": "पंजाबी", "code": "31" },
          { "label": "संस्कृत", "code": "32" },
          { "label": "संथाली", "code": "33" },
          { "label": "सिंधी", "code": "34" },
          { "label": "तमिल", "code": "35" },
          { "label": "तेलुगु", "code": "36" },
          { "label": "तुलु", "code": "37" },
          { "label": "उर्दू", "code": "38" }
        ],
       
        "depend on": "Q7_a",
        "labels": "",
        optionsDependOn:"Q7_a",
        optionsRemove:[],
      },
    
      Q3A: {
        "number": "Q8_a",
        "question": "कृपया अपना कांटेक्‍ट डिटेल्‍स बतायें - मोबाइल",
        " inputType": "number",
        inputLimit: 10,
    
        // "label": "Mobile number",

       
        "type": "multiInput",
        "  placeHolder": "",
  
        formFieldsStep1: [
          { name: "Q8_a_1", placeholder: "मोबाइल नंबर 1", type: "number" },
          { name: "Q8_a_2", placeholder: "मोबाइल नंबर -2 (वैकल्पिक)", type: "number" }
        ]
        ,
  
  
        languageText: {
  
          en: {
            Q8_a1: "मोबाइल नंबर 1",
            Q8_a2: "मोबाइल नंबर 2"
          }
          ,

      },
    },
     Q34: {
        "number": "Q8_b",
    "question": "कृपया अपना कांटेक्‍ट डिटेल्‍स बतायें  - लैंडलाइन / फिक्स्ड लाइन",
    "instruction": "",
    " inputType": "",
    "  inputLimit": "",
    "type": "multiInput",
    "  placeHolder": "",

    formFieldsStep1: [
      {
        name: "Q8_b_1", placeholder: "लैंडलाइन / फिक्स्ड लाइन 1"
      },
      {
        name: "Q8_b_2", placeholder: "लैंडलाइन / फिक्स्ड लाइन 2"
      }
      
    ],


    languageText: {

      en: {
        Q8_b_1: "लैंडलाइन / फिक्स्ड लाइन 1",
        Q8_b_2: "लैंडलाइन / फिक्स्ड लाइन 2"
      }
      ,

      // isCompulsory: true,
      }},

    Q35: {
      "number": "Q8_c",
      "question": "Detailed address",
      "instruction": "",
      " inputType": "",
      "  inputLimit": "",
      "type": "multiInput",
      "  placeHolder": "",

      formFieldsStep1: [
        
          { name: "Q8_c_1", placeholder: "घर का नंबर" },
          { name: "Q8_c_2", placeholder: "बिल्डिंग नंबर/नाम" },
          { name: "Q8_c_3", placeholder: "लेन/गली/वार्ड संख्या/नाम" },
          { name: "Q8_c_4", placeholder: "एरिया/इलाके का नाम" },
          { name: "Q8_c_5", placeholder: "कस्बे का नाम" },
          { name: "Q8_c_6", placeholder: "पिन कोड" },
          { name: "Q8_c_7", placeholder: "पहला लैंडमार्क" },
          { name: "Q8_c_8", placeholder: "दूसरा लैंडमार्क" }
        
        
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
      "question": "क्या आप पैनल का हिस्सा बनना चाहेंगे?",
      "instruction": "यदि हाँ चुना है, तो उत्तरदाता को सूचित करें कि अगले कदमों के लिए उन्हें एक कॉल/भ्रमण किया जाएगा। घर छोड़ने से पहले उत्तरदाता का सर्वेक्षण में भाग लेने के लिए धन्यवाद करें।",
      " inputType": "",
      "  inputLimit": "",
      options: [
        { label: "हाँ", code: "1" },
{ label: "नहीं", code: "2" }

      ],
      type: "radio",



    }



  },
  Section2:{
    
  }
}

export default hindi;
