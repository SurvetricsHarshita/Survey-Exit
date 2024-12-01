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
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const MultiInput = ({ handleNext, language, formFieldsStep1, languageText
  ,setResponses
 }) => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const langText = languageText[language] || languageText["en"];
  const toast = useToast();

  useEffect(() => {
    const initialData = formFieldsStep1.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {});
    setFormData(initialData);
  }, [formFieldsStep1]);

  const handleMultiChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setResponses((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    for (const field of formFieldsStep1) {
      if (!formData[field.name]?.trim() && field.isRequired) {
        setError(`${field.placeholder} is required.`);
        return false;
      }
      if (field.type === "tel" && formData[field.name]?.length !== 10) {
        setError("Mobile number must be 10 digits.");
        return false;
      }
    }
    setError("");
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      handleNext(formData); // Pass data to parent
      toast({
        title: "Success",
        description: "Form submitted successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

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
              onChange={handleMultiChange}
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

      <Flex mt={8}>
        {/* <Button colorScheme="teal" onClick={handleSubmit}>
          Submit
        </Button> */}
      </Flex>
    </Flex>
  );
};






export default MultiInput
