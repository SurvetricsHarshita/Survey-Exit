

let terminationReason = "";


function useSurveyTermination() {

  function isTerminate(question, answer,terminationCodes) {


    const questionHandlers = {
      
"S1":()=>handleS1(answer,terminationCodes),
      'S2': () => handleS2(answer,terminationCodes),
      
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
    if (terminationCodes.includes(answer)) { // Corrected syntax
      return true;
    }
    return false;
  }
  

  function handleS1(answer, terminationCodes) {
    if (terminationCodes.includes(answer)) { // Corrected syntax
      return true;
    }
    return false;
  }

 
  return { isTerminate, terminationReason };
}

export default useSurveyTermination;