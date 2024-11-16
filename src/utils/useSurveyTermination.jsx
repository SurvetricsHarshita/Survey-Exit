
let terminationReason = "";
function useSurveyTermination() {
  function isTerminate(question, answer, terminationCodes, storedData) {
    const questionHandlers = {
      S1: () => handleS1(answer, terminationCodes),
      S3: () => handleS3(answer, terminationCodes),
      S4a : () => handleS4a(answer, terminationCodes),
      S4b: () => handleS4b(answer, terminationCodes),
      S4c: () => handleS4c(answer, terminationCodes),
      S7b: () => handleS7b(answer, terminationCodes),
      S7g: () => handleS7g(answer, terminationCodes),
      S9c: () => handleS9c(answer, terminationCodes),
      S9d: () => handleS9d(answer, terminationCodes, storedData),
      S9g: () => handleS9g(answer, terminationCodes, storedData),
      S10a: () => handleS10a(answer, terminationCodes, storedData),
      S10b:()=> handleS10b(answer, terminationCodes, storedData),
      QP1: () => handleQP1(answer, terminationCodes, storedData),
      QP2:() => handleQP2(answer, terminationCodes , storedData)
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


  function handleS1(answer, terminationCodes) {
    if (terminationCodes.includes(answer)) {
      // Corrected syntax
      return true;
    }
    return false;
  }
  function handleQP1(answer, terminationCodes) {
    if (terminationCodes.includes(answer)) {
      // Corrected syntax
      return true;
    }
    return false;
  }
  function handleQP2(answer, terminationCodes) {
    if (terminationCodes.includes(answer)) {
      // Corrected syntax
      return true;
    }
    return false;
  }

  function handleS7g(answer, terminationCodes) {
    if (terminationCodes.includes(answer)) {
      // Corrected syntax
      return true;
    }
    return false;
  }
  function handleS10a(answer, terminationCodes) {
    if (terminationCodes.includes(answer)) {
      // Corrected syntax
      return true;
    }
    return false;
  }
  function handleS10b(answer, terminationCodes) {
    if (terminationCodes.includes(answer)) {
      // Corrected syntax
      return true;
    }
    return false;
  }
  function handleS7b(answer, terminationCodes) {

   
      if (answer.includes("1")) {
  
        return false;
      }
    

    
    return true;
  }
  function handleS4a(answer, terminationCodes) {


    console.log(answer)
   
    if (terminationCodes.includes(answer)) {
      
      return true;
    }
    return false;
  }

  function handleS4b(answer, terminationCodes) {
    if (terminationCodes.includes(answer)) {
    
      return true;
    }
    return false;
  }

  function handleS3(answer, terminationCodes) {
    if (terminationCodes.includes(answer)) {
      // Corrected syntax
      return true;
    }
    return false;
  }




  // numeral restrictions on input arguments
  function handleS9c(answer, terminationCodes) {
    if (terminationCodes.includes(answer)) {
      return true;
    }
    return false;
  }


  function handleS4c(answer) {
    if (answer < 25 || answer > 45) {
      // Corrected syntax
      return true;
    }
    return false;
  }


  function handleS9d(answer, terminationCodes, storedData) {
    console.log("hi", storedData)
    const s4aValue = storedData['S9c'] || '';
    console.log("hi", s4aValue)

    if (s4aValue == "7" || s4aValue == "6") {
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