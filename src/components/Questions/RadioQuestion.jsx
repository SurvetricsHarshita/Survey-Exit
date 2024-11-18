import { Input, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { shuffleArray } from '../../utils/constant';
import useOptions from '../../utils/useOptions';

function RadioQuestion({
  isOther,
  currentQuestion,
  responses,
  handleResponseChange,
  othersSpecify,
  othersPlaceholders,
  otherInput,
  handleOtherInputChange,
  currentQuestionIndex,
  codeMapping,
}) {
  const [options, setOptions] = useState(currentQuestion.options); // Initialize with current question options
  const { isOptions } = useOptions();
  const [storedData, setStoredData] = useState({});
  const [isLoading, setIsLoading] = useState(false); // Loader state

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
        currentQuestion.options,
        updatedData
      );
    }

    // Handle randomization
    if (currentQuestion.randomize) {
      updatedOptions = shuffleArray(updatedOptions);
    }

    setOptions(updatedOptions); // Update options state
    setIsLoading(false); // End loader
  }, [
    currentQuestion, // Update when the current question changes
    responses, // Re-run if responses change
    currentQuestionIndex, // React to index changes
  ]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div> // Loader UI
      ) : (
        <div>
          <RadioGroup
            onChange={(value) => handleResponseChange(currentQuestion.number, value)}
            value={responses[currentQuestion.number] || ''}
          >
            <Stack spacing={4} direction="column">
              {options.map((option, idx) => (
                <Radio key={idx} value={option.code} mb={2}> {/* Use the code as value */}
                  {option.label} {/* Display the label */}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>

          {/* Handle dynamic input fields based on selected responses */}
          {(isOther || othersSpecify.includes(responses[currentQuestion.number])) && (
            <Input
              placeholder={
                othersPlaceholders[responses[currentQuestion.number]] || 'Please specify'
              }
              value={otherInput}
              onChange={handleOtherInputChange}
              mt={2}
            />
          )}
        </div>
      )}
    </>
  );
}

export default RadioQuestion;
