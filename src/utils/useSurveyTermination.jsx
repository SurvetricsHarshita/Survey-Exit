let terminationReason = "";

function useSurveyTermination() {
  function isTerminate(question, answer, terminationCodes, storedData = {}) {
    const questionHandlers = {
I: () => radioHandler(answer, terminationCodes),
QConsent: () => radioHandler(answer, terminationCodes),
Q2_c: () => handleQ2_c(answer),
      Q1: () => radioHandler(answer, terminationCodes),
      Q4_a: () => radioHandler(answer, terminationCodes),
     Q3: () => handleQ3(answer, terminationCodes),
     Q6_a: () => handleS4c(answer),
     
     Q2_e: () => handleS9d(answer, terminationCodes),

      S9c: () => radioHandler(answer, terminationCodes),
      S9d: () => handleS9d(answer, terminationCodes, storedData),
      S9g: () => radioHandler(answer, terminationCodes),
      S10a: () => radioHandler(answer, terminationCodes),
      S10b: () => radioHandler(answer, terminationCodes),
      QP1: () => radioHandler(answer, terminationCodes),
      QP2: () => radioHandler(answer, terminationCodes),
    };

    const handler = questionHandlers[question];
    if (handler) {
      const result = handler();
      if (result) {
        terminationReason = `Survey terminated for ${question} with answer: ${answer}`;
      }
      return result;
    }

    return false;
  }

  // Default handler for simple termination code checks for radio
  function radioHandler(answer, terminationCodes) {
    return terminationCodes.includes(answer);
  }

  // Custom handler for S4c (numerical range restriction)
  function handleS4c(answer) {
    return answer > 12 
  }

  // Custom handler for S7b (specific condition)
  function handleQ2_c(answer) {
    // alert(answer)
    return !(answer.includes("4") && answer.includes("10"));
  }

  // Custom handler for S9d (dependent on storedData)
  function handleS9d(answer, terminationCodes, storedData) {
    // Extract NCCS and Q2_c values from storedData
    const s9cValue = storedData["NCCS"] || "";
    const Q2cValue = storedData["Q2_c"] || [];
  
    // Check if the household is not NCCS A1 and codes 1 and 5 are selected in Q2_c
    const isNotNCCSA1 = s9cValue!="A1"
    const areCodesSelected = Q2cValue.includes("1") && Q2cValue.includes("5");
  
    // Return true if both conditions are satisfied
    return ! (isNotNCCSA1 && areCodesSelected);
  }
  function handleQ3(answer) {
    const codes = ["1", "2", "3", "7"];

    // Check if "4" is selected or none of the codes are selected
    if (answer.includes("4") || !codes.some(code => answer.includes(code))) {
        return true; // Terminate
    }
    return false; // Continue
}


  return { isTerminate, terminationReason };
}

export default useSurveyTermination;
