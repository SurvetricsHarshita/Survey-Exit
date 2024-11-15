import { useEffect } from "react";

let terminationReason = "";

function useSurveyTermination() {
  function isTerminate(question, answer, terminationCodes,storedData) {
    const questionHandlers = {
      S1: () => handleS1(answer, terminationCodes),
      S2: () => handleS2(answer, terminationCodes),
      S4c: () => handleS4c(answer, terminationCodes),
      S9c: () => handleS9c(answer, terminationCodes),
      S9d:() => handleS9d(answer, terminationCodes,storedData),
      S9g:() => handleS9g(answer, terminationCodes,storedData)
    };

    if (questionHandlers[question]) {
      const result = questionHandlers[question]();
      if (result) {
        terminationReason = `Survey terminated for ${question} with answer: ${answer}`;
      }
      return result;
    }
    return false;
  }

  function handleS2(answer, terminationCodes) {
    if (terminationCodes.includes(answer)) {
      // Corrected syntax
      return true;
    }
    return false;
  }

  function handleS1(answer, terminationCodes) {
    if (terminationCodes.includes(answer)) {
      // Corrected syntax
      return true;
    }
    return false;
  }
  function handleS9c(answer, terminationCodes) {
    if (terminationCodes.includes(answer)) {
      // Corrected syntax
      return true;
    }
    return false;
  }
  function   handleS4c(answer) {
    
    if (answer < 25 || answer > 45) {

      // Corrected syntax
      return true;
    }
    return false;
  }
  function handleS9d(answer, terminationCodes,storedData) {
console.log("hi",storedData)
      const s4aValue = storedData['S9c'] || '';
      console.log("hi",s4aValue)

    if (s4aValue=="7"|| s4aValue=="6") {
      // Corrected syntax
      return true;
    }
    return false;
  }

  function handleS9g(answer, terminationCodes) {
    if (terminationCodes.includes(answer)) {
      // Corrected syntax
      return true;
    }
    return false;
  }
  return { isTerminate, terminationReason };
}

export default useSurveyTermination;
