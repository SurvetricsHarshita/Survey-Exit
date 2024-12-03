import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Flex,
  FormLabel,
  Input,
  SimpleGrid,
  Text,
 
} from "@chakra-ui/react";
import { useEffect, useState } from "react";


const MultiInput = ({

  language,
  formFieldsStep1,
  languageText,
  setResponses,
}) => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const langText = languageText[language] || languageText["en"];


  useEffect(() => {
    const initialData = formFieldsStep1.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {});
    setFormData(initialData);
  }, [formFieldsStep1]);

  const handleMultiChange = (e, currentQuestion) => {
    const { name, value } = e.target;
    
    // Limit the input value based on the inputLimit property for fields
    const newValue = value.slice(0, currentQuestion.inputLimit || value.length);

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    setResponses((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  // const validateForm = () => {
  //   for (const field of formFieldsStep1) {
  //     if (!formData[field.name]?.trim() && field.isRequired) {
  //       setError(`${field.placeholder} is required.`);
  //       return false;
  //     }
  //     if (field.type === "tel" && formData[field.name]?.length !== 10) {
  //       setError("Mobile number must be 10 digits.");
  //       return false;
  //     }
  //   }
  //   setError("");
  //   return true;
  // };

  return (
    <Flex p={4} flexDirection="column" alignItems="center">
      <Text fontSize="xl" fontWeight="bold" mb={9}>
        {langText.title}
      </Text>

      {error && (
        <Alert status="error" mb={4} width="100%">
          <AlertIcon />
          <AlertTitle>Error:</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} maxWidth="800px">
        {formFieldsStep1.map((field, index) => (
          <div key={index}>
            <FormLabel>{field.placeholder}:</FormLabel>
            <Input
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={(e) =>
                handleMultiChange(e, field)
              }
              type={field.type || "text"}
              isInvalid={
                error === `${field.placeholder} is required.` ||
                (field.type === "tel" && error === "Mobile number must be 10 digits.")
              }
              errorBorderColor="red.300"
            />
          </div>
        ))}
      </SimpleGrid>

     
    </Flex>
  );
};

export default MultiInput;
