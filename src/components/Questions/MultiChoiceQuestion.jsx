import { Checkbox, CheckboxGroup, Input, Stack } from '@chakra-ui/react'
import { shuffleArray } from '../../utils/constant';
import { useEffect, useState } from 'react';
import useOptions from '../../utils/useOptions';


function MultiChoiceQuestion({
  currentQuestion,
  responses,
  handleCheckboxChange,
  othersSpecify,
  othersPlaceholders,
  otherInput,
  handleOtherInputChange,
  codeMapping,
  currentQuestionIndex,
  isOther 
}) {
  const [options, setOptions] = useState([...currentQuestion.options]);
  const { isOptions } = useOptions();
  const [storedData, setStoredData] = useState({});

  useEffect(() => {

    const existingData = JSON.parse(localStorage.getItem("ProductsTest")) || {};

    const updatedData = { ...existingData, ...responses };

    setStoredData(updatedData);

    // question, dependOn, allOptions, storedData

    if (currentQuestion.optionsDependOn) {


      const filteredOptions = isOptions(
        currentQuestion.number,
        currentQuestion.optionsDependOn,
        currentQuestion.options,
        storedData
      );
    
      setOptions(filteredOptions,"filter");
      
      console.log(filteredOptions)// Use the returned options directly
      console.log(options,"options")
    }
  
    if (currentQuestion.randomize) {
      const randomizedOptions = shuffleArray([...isOptions]);
      
      setOptions(randomizedOptions);
    } else {
      setOptions([...currentQuestion.options]);
    }
  }, [currentQuestionIndex]); // Add currentQuestion as a dependency

  return (
    <CheckboxGroup
      value={responses[`${currentQuestion.number}`] || []}
      onChange={(values) => handleCheckboxChange(currentQuestion.number, values)}
    >
      <Stack spacing={4} direction="column">
        {options.map((option, idx) => (
          <Checkbox
            key={idx}
            isChecked={(responses[currentQuestionIndex] || []).includes(option.trim())}
            value={codeMapping[idx]}
          >
            {option}
          </Checkbox>
        ))}
        {/* Display Input field when an option includes any value from 'othersSpecify' */}
        {(isOther || othersSpecify.some((value) => responses[currentQuestionIndex]?.includes(value))) && (
          <Input
            placeholder={
              othersSpecify.find((value) => responses[currentQuestionIndex]?.includes(value)) || "Please specify"
            }
            value={otherInput}
            onChange={handleOtherInputChange}
            mt={2}
          />
        )}
        {/* Display input fields dynamically for specific responses */}
        {othersSpecify.map(
          (checkValue) =>
            responses[currentQuestionIndex]?.includes(checkValue) && (
              <Input
                key={checkValue}
                placeholder={othersPlaceholders[checkValue] || "Please specify"}
                value={otherInput}
                onChange={handleOtherInputChange}
                mt={2}
              />
            )
        )}
      </Stack>
    </CheckboxGroup>
  );
}

export default MultiChoiceQuestion;
