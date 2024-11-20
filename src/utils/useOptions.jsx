import { useState } from "react";

function useOptions() {
  const [filteredOptions, setFilteredOptions] = useState([]);

  function isOptions(question, dependOn,  optionsRemove,allOptions, storedData) {
    const questionHandlers = {
      S2: () => handleDynamicFilter(dependOn, allOptions, storedData,optionsRemove),
      S6a:() => handleDynamicFilter(dependOn, allOptions, storedData,optionsRemove)
    };

    // Check if there's a handler for the current question
    if (questionHandlers[question]) {
      const result = questionHandlers[question]();
      if (result) {
        setFilteredOptions(result);
      }
      return result;
    }

    // Default: return all options if no handler exists
    setFilteredOptions(allOptions);
    return allOptions;
  }

  function handleDynamicFilter(dependOn, allOptions, storedData, optionsRemove) {
    // Check if any dependency condition is met for multiple questions
    const shouldKeepOptions = dependOn.some((dependency) => {
      const storedAnswer = storedData[dependency.question];
      
      // If there's a stored answer and it matches any of the dependency options
      return (
        storedAnswer &&
        dependency.options.some((option) => storedAnswer.includes(option))
      );
    });
  
    // If dependencies are met, return options that are not removed
    if (shouldKeepOptions) {
      const filteredOptions = allOptions.filter(option => !optionsRemove.includes(option.code));
      return filteredOptions;
    } else {
      // Return all options if dependencies are not met
      return allOptions;
    }
  }
  

  return { isOptions, filteredOptions };
}

export default useOptions;
