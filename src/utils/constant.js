export const othersSpecify = [

  "Others (please specify)",
  "Any other reason please specify"

  



]


export  const othersPlaceholders = {
  "অন্যান্য (একটু বলুন)": "একটু বলুন",
  "અન્ય (કૃપા કરીને સ્પષ્ટ કરો)": "કૃપા કરીને સ્પષ્ટ કરો",
  "ಇತರೆ (ದಯವಿಟ್ಟು ಹೆಸರಿಸಿ)": "ದಯವಿಟ್ಟು ಹೆಸರಿಸಿ",
  "ଅନ୍ୟାନ୍ୟ (ଦୟାକରି ଉଲ୍ଲେଖ କରନ୍ତୁ)": "ଦୟାକରି ଉଲ୍ଲେଖ କରନ୍ତୁ",
  "மற்றவை (தயவுசெய்து குறிப்பிடவும்)": "தயவுசெய்து குறிப்பிடவும்",
};





export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}


export const handleTerminate = () => {
  localStorage.clear();
  setIsFinalSubmit(true);
  setCurrentQuestion(-1);
};


