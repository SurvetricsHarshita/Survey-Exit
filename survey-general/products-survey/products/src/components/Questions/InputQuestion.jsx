import { Input } from '@chakra-ui/react'


function InputQuestion({currentQuestion,
  responses,
  handleResponseInput}) {
  return (
    <Input
    placeholder={currentQuestion.placeHolder || "Your answer"}
    value={responses[ currentQuestion.number] || ""}
    onChange={(e) =>
      handleResponseInput( currentQuestion.number, e.target.value, responses[ currentQuestion.number])
    }
  />
  )
}

export default InputQuestion
