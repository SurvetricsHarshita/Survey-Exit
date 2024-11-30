let terminationReason = "";

function useSurveyTermination() {
  function isTerminate(question, answer, terminationCodes, storedData = {}) {
    const questionHandlers = {
I: () => radioHandler(answer, terminationCodes),
QConsent: () => radioHandler(answer, terminationCodes),
Q2_c: () => handleQ2_c(answer),
      Q1: () => radioHandler(answer, terminationCodes),
      Q4_a: () => radioHandler(answer, terminationCodes),
     Q3: () => radioHandler(answer, terminationCodes),
     Q6_a: () => handleS4c(answer),
     
      S7g: () => radioHandler(answer, terminationCodes),
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
    alert(answer)
    return !answer.includes("4") ;
  }

  // Custom handler for S9d (dependent on storedData)
  function handleS9d(answer, terminationCodes, storedData) {
    const s9cValue = storedData["S9c"] || "";
    return s9cValue === "7" || s9cValue === "6";
  }

  return { isTerminate, terminationReason };
}

export default useSurveyTermination;
