import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Flex,
  FormLabel,
  Input,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NextButton from "../components/atoms/NextButton";
import PreviousButton from "../components/atoms/PreviousButton";
import { getIndianTime } from "../utils/constant";
import { formFieldsStep1, languageText } from "../utils/Respondent";
import SelectLanguage from "../components/atoms/SelectLanguage";

const RespondentDemographic = ({ handleNext,  onComplete }) => {
  const [formData, setFormData] = useState({
    
   
  });
  const [language, setLanguage] = useState("en");
  const [error, setError] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const langText = languageText[language] || languageText["en"];
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    requestMicrophonePermission();
    requestLocationPermission();
  }, []);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const requestMicrophonePermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    } catch (err) {
      setError("Microphone access is required to proceed.");
    }
  };

  const requestLocationPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        () => setError("Location is required to proceed.")
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const requiredFields = formFieldsStep1.map((field) => field.name);
    const isComplete = requiredFields.every((field) => formData[field]?.trim());
    setIsFormComplete(isComplete);
  };

  const handleValidationError = (errorMessage) => {
    toast({
      title: "Validation Error",
      description: errorMessage,
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  const handleSubmit = () => {
    if (error) {
      handleValidationError(error);
      return;
    }

    const respondentData = { ...formData, latitude, longitude };
    const start = getIndianTime();

    const existingData = JSON.parse(localStorage.getItem("ProductsTest")) || {};
    const updatedData = {
      ...existingData,
      ...respondentData,
      startTime: start.toLocaleTimeString("en-IN"),
      startDate: start.toLocaleDateString("en-IN"),
      language
    };

    localStorage.setItem("ProductsTest", JSON.stringify(updatedData));

    // Only handleNext if step 1 validation passes.
    handleNext();
  };

  function handlePrevious() {
    const email = localStorage.getItem("email");

    localStorage.clear();

    if (email) {
      localStorage.setItem("email", email);
    }
    navigate("/");
  }
  const handleLanguageSelect = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    
  
    localStorage.setItem('selectedLanguage', JSON.stringify(selectedLanguage)); // Store French as the selected language

  };
  return (
    <Flex
      p={4}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pl={{ base: "10", md: "4", lg: "6" }}
    >
      <Text fontSize="xl" fontWeight="bold" mb={9}>
        {langText.title}
      </Text>

      {error && (
        <Alert status="error" mb={4} width="100%">
          <AlertIcon />
          <AlertTitle mr={2}>Error:</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        spacing={4}
        width="100%"
        maxWidth="800px"
        mb={8}
      >
        {formFieldsStep1.map((field, index) => (
          <div key={index}>
            <FormLabel>{field.placeholder}:</FormLabel>
            <Input
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              type={field.type || "text"}
            />
          </div>
        ))}
        <SelectLanguage handleLanguageSelect={handleLanguageSelect}/>
      </SimpleGrid>

      <Flex mt={10} justify="space-between" gap={10}>
        <PreviousButton onPrev={handlePrevious} />
        <NextButton onClick={handleSubmit}
        isDisabled={!isFormComplete}
         />
      </Flex>
    </Flex>
  );
};

export default RespondentDemographic;