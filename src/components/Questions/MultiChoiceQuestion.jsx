import { Checkbox, CheckboxGroup, Input, Stack } from "@chakra-ui/react";
import { shuffleArray, shuffleArrayWithFixed } from "../../utils/constant";
import { useEffect, useState } from "react";
import useOptions from "../../utils/useOptions";

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
  isOther,
}) {
  const [options, setOptions] = useState(currentQuestion.options || []);
  const { isOptions } = useOptions();
  const [storedData, setStoredData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true); // Start loader

    const existingData = JSON.parse(localStorage.getItem('ProductsTest')) || {};
    const updatedData = { ...existingData, ...responses };
    setStoredData(updatedData);

    let updatedOptions = [...currentQuestion.options];

    // Handle dependent options
    if (currentQuestion.optionsDependOn) {
      updatedOptions = isOptions(
        currentQuestion.number,
        currentQuestion.optionsDependOn,
        currentQuestion.optionsRemove,
        currentQuestion.options,
        updatedData
      );
    }

    // Handle randomization
    if (currentQuestion.randomize) {
      updatedOptions = shuffleArrayWithFixed(updatedOptions,  currentQuestion.fixedCodes,currentQuestion.RandomizeOnce);
    }

    setOptions(updatedOptions); // Update options state
    setIsLoading(false); // End loader
  }, [
    currentQuestion, // Update when the current question changes
  ...(currentQuestion.RandomizeOnce ? [] : [responses]),
    currentQuestionIndex, // React to index changes
  ]);

  return (
    <CheckboxGroup
      value={responses[currentQuestion.number] || []}
      onChange={(values) => handleCheckboxChange(currentQuestion.number, values)}
    >
      <Stack spacing={4} direction="column">
        {options.map((option, idx) => (
          <Checkbox
            key={idx}
            value={option.code}
            isChecked={(responses[currentQuestion.number] || []).includes(option.code)}
          >
            {option.label}
          </Checkbox>
        ))}

        {/* Display input field for "Other" options */}
        {(isOther || othersSpecify.some((value) => responses[currentQuestion.number]?.includes(value))) && (
          <Input
            placeholder={
              othersSpecify.find((value) => responses[currentQuestion.number]?.includes(value)) || "Please specify"
            }
            value={otherInput}
            onChange={handleOtherInputChange}
            mt={2}
          />
        )}

        {/* Dynamic input fields for specific responses */}
        {othersSpecify.map(
          (checkValue) =>
            responses[currentQuestion.number]?.includes(checkValue) && (
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
