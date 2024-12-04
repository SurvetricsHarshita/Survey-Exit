let terminationReason = "";

function useSurveyTermination() {
  function isTerminate(question, answer, terminationCodes, storedData = {}) {
    const questionHandlers = {
      QH: () => radioHandler(answer, terminationCodes),
      Introduction: () => radioHandler(answer, terminationCodes),
QConsent: () => radioHandler(answer, terminationCodes),
Q2_c: () => handleQ2_c(answer),
Q2_d1: () => radioHandler(answer, terminationCodes),
      Q1: () => radioHandler(answer, terminationCodes),
      Q4_a: () => radioHandler(answer, terminationCodes),
     Q3: () => handleQ3(answer, terminationCodes),
     Q6_a: () => handleS4c(answer),
     
     Q2_e: () => handleS9d(answer, terminationCodes,storedData),

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
    return !(answer.includes("4") && answer.includes("10") &&answer.includes("6"));
  }

  // Custom handler for S9d (dependent on storedData)
 function handleS9d(answer, terminationCodes, storedData) {
    const Q2_e_1 = storedData["Q2_e_1"];
    const Q2_e_2 = storedData["Q2_e_2"];
    
    const Q2_e_6 = storedData["Q2_e_6"];
    
    
    // Extract NCCS, Q2_c, and Q2_e values from storedData
    const s9cValue = storedData["NCCS"] || ""; // Household NCCS value
    const Q2_c = storedData["Q2_c"] || []; // Selected codes for Q2_c
    // const Q2eValue = [Q2_e_1, Q2_e_2, Q2_e_3, Q2_e_4]; // Selected codes for Q2_e
    console.log(Q2_c)
    // console.log("Q2_e_Values:", Q2eValue);
    
    // Check if codes 1 and 5 are selected in Q2_c
    const areCodes1and5Selected = Q2_c.includes("1") && Q2_c.includes("5");
  
    // // Check if codes 1 and 5 are not selected in Q2_c
    // const areCodes1and5NotSelectedInQ2c = !Q2_c.includes("1") || !Q2_c.includes("5");
  
    // Check if codes 1 and 2 are not selected in Q2_e
    const areCodes1and2NotSelectedInQ2e = (Q2_e_1 =="2" &  Q2_e_2 =="2"&& Q2_e_6 =="2")
    // Logic for when Household is NCCS A1
    if (s9cValue === "A1") {
        // Household is NCCS A1, check the termination conditions
        if (!areCodes1and5Selected && areCodes1and2NotSelectedInQ2e) {
            // Terminate if codes 1 and 5 are not selected in Q2_c and codes 1 and 2 are not selected in Q2_e
            return true; // Terminate
        } else {
            // If conditions aren't met for termination, don't terminate
            return  Q2_e_6 !="1"; // Do not terminate
        }
    } else {
        // Logic for when Household is NOT NCCS A1
        return !areCodes1and5Selected  || Q2_e_6 !="1" // No termination for other households
    }


    
}

  
  
  
  function handleQ3(answer) {
    const codes = ["1", "2", "3"];

    // Check if "4" is selected or none of the codes are selected
    if (answer.includes("4") || !codes.some(code => answer.includes(code))) {
        return true; // Terminate
    }
    return false; // Continue
}


  return { isTerminate, terminationReason };
}

export default useSurveyTermination;
