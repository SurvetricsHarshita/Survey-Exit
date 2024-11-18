import { useState } from "react";

function useOptions() {
  const [display, setDisplay] = useState()
  const [filteredOptions, setFilteredOptions] = useState();

  function isOptions(question, dependOn, allOptions, storedData) {
    const questionHandlers = {
      S2: () => handleS2(dependOn, allOptions, storedData), // Add handler for S2
    };

    if (questionHandlers[question]) {
      const result = questionHandlers[question]();
      if (result) {
        setDisplay(`Survey terminated for ${question} with result: ${result}`);
        setFilteredOptions(result);
      }
      return result;
    }
    return allOptions; // If no handler, return all options
  }



  function handleS2(dependOn, allOptions, storedData) {
 
  
    const dependentAnswers = dependOn.map(
      (dependentQuestion) => storedData[dependentQuestion] || ""
    );
  
    //  if any dependent question answer is "1", return all except the first option 
    if (dependentAnswers.includes("1")) {
      return allOptions.slice(1); // Remove the first option and return the rest
    }
  
    return allOptions; // Default: remove the first option and return the rest
  }
  
  return { isOptions,  filteredOptions };
}

export default useOptions;
