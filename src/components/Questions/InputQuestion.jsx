import { Input } from '@chakra-ui/react'


function InputQuestion({currentQuestion,
  responses,
  handleResponseInput}) {
  return (
    <Input
    maxLength={currentQuestion.maxLength || 255}
    type={currentQuestion.inputType||"text"}
    placeholder={currentQuestion.placeHolder || "Your answer"}
    value={responses[ currentQuestion.number] || ""}
    onChange={(e) =>
      handleResponseInput( currentQuestion.number, e.target.value, responses[ currentQuestion.number])
    }
  />
  )
}

export default InputQuestion
