let display = "";

function useAsk() {
  function isAsk(question, answer, storedData) {
    const questionHandlers = {
      "1.6":()=>handleQ1_6(question, answer, storedData)
      // 1.11:()=> handle4_11(answer, storedData)
    };

    if (questionHandlers[question]) {
      const result = questionHandlers[question]();
      if (result) {
        display = `Survey terminated for ${question} with answer: ${answer}`;
      }
      return result;
    }
    return false;
  }
  function handleQ1_6( question, answer,storedData) {
    const Q5 = storedData["1.5"]
    console.log(storedData,"fron checkAsk");
    console.log(Q5);
    if (Q5 == "2 " || Q5 == "3") {
      return true; // Proper return for this condition
  } else {
      return true; // Explicitly return true for the else case as well
  }
  }

//   function handleQ13(answer) {
//     if (answer == "1" ) {
//       return false;
//     }
//     return true;
//   }
//   function handleQ37(answer) {
    
// console.log(answer)
//     if (answer == "1" ) {
//       return false;
//     }
//     return true;
//   }
//   function handleQ511(answer) {
    
//     console.log(answer)
//         if (answer != "1" ) {
//           return false;
//         }
//         return true;
//       }
//   function handleS9e(answer, storedData) {
//     console.log("hi", storedData);
//     const s4aValue = storedData["S9e"] || "";
//     console.log("hi", s4aValue);

//     if (answer == "5" || answer == "6" || answer == "4") {
//       return false;
//     }
//     return true;
//   }
//   function handleQ918(answer,storedData) {
//     const sevenOne=storedData["7.1"]
//     console.log(sevenOne)
    
//     console.log(answer)
//         if (answer == "1" ) {
//           return false;
//         }
//         return true;
//       }
  return { isAsk, display };
}

export default useAsk;
