import { Input, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { shuffleArray } from '../../utils/constant';


function RadioQuestion({
  isOther,
  currentQuestion,
  responses,
  handleResponseChange,
  othersSpecify,
  othersPlaceholders,
  otherInput,
  handleOtherInputChange,
   currentQuestionIndex,codeMapping
}) {
  const [options, setOptions] = useState([...currentQuestion.options]);

  useEffect(() => {
    if (currentQuestion.randomize) {
      const randomizedOptions = shuffleArray([...currentQuestion.options]);
      setOptions(randomizedOptions);
    } else {
      setOptions([...currentQuestion.options]);
    }
  }, [currentQuestionIndex]);
  return (
    <>
    <RadioGroup
      onChange={(value) => handleResponseChange( currentQuestion.number, value)}
      value={responses[ currentQuestion.number] || ""}
    >
      <Stack spacing={4} direction="column">
        {options.map((option, idx) => (
          <Radio key={idx} value={codeMapping[idx]} mb={2}>
            {option}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>

    {/* Handle dynamic input fields based on selected responses */}
    {(isOther || othersSpecify.includes(responses[currentQuestionIndex])) && (
      <Input
        placeholder="Please specify"
        value={otherInput}
        onChange={handleOtherInputChange}
        mt={2}
      />
    )}
    {othersSpecify.includes(responses[currentQuestionIndex]) && (
      <Input
        placeholder={othersPlaceholders[responses[currentQuestionIndex]] || "Please specify"}
        value={otherInput}
        onChange={handleOtherInputChange}
        mt={2}
      />
    )}
  </>
  )
}

export default RadioQuestion
