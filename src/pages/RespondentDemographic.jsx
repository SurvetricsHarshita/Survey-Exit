import { useState, useEffect } from "react";
import {
  Flex,
  Input,
  SimpleGrid,
  Text,
  Select,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
  FormLabel,
} from "@chakra-ui/react";
import { formFieldsStep1, formFieldsStep2, formFieldsStep3, languageText, places } from "../utils/Respondent";
import NextButton from "../components/atoms/NextButton";
import SelectLanguage from "../components/atoms/SelectLanguage";
import { getIndianTime } from "../utils/constant";
import PreviousButton from "../components/atoms/PreviousButton";
import { Navigate, useNavigate } from "react-router-dom";

const RespondentDemographic = ({ handleNext, language ,onComplete }) => {
  const [formData, setFormData] = useState({
    name: "",
    doorNo: "",
    floorNo: "",
    houseName: "",
    streetName: "",
    areaName: "",
    townName: "",
    landmark: "",
    pincode: "",
    phoneRes: "",
    phonePP: "",
    phoneOff: "",
    emailId: "",
    interviewerName: "",
    interviewerId: "",
    mobile: "",
    place: "",
  });

  const [error, setError] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [step, setStep] = useState(1);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const langText = languageText[language] || languageText["en"];
  const toast = useToast();
const navigate=useNavigate()
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
    let requiredFields = [];
    if (step === 1) {
      requiredFields = formFieldsStep1.map((field) => field.name);
    } else if (step === 2) {
      requiredFields = formFieldsStep2.map((field) => field.name);
    } else {
      requiredFields = formFieldsStep3.map((field) => field.name);
    }

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
    const isValidMobile = /^\d{10}$/.test(formData.mobile);
    const isValidMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailId);
    const isValidPincode = /\d/.test(formData.pincode);
    const isValidPhoneRes = !formData.phoneRes || /^\d{10}$/.test(formData.phoneRes);
    const isValidPhonePP = !formData.phonePP || /^\d{10}$/.test(formData.phonePP);
    const isValidPhoneOff = !formData.phoneOff || /^\d{10}$/.test(formData.phoneOff);
if(step==2){
  if (!isValidMobile) {
    handleValidationError("Please enter a valid 10-digit mobile number");
    return;
  }
  if (!isValidMail) {
    handleValidationError("Please enter a valid email address");
    return;
  }
  if (!isValidPincode) {
    handleValidationError("Please enter a valid pincode");
    return;
  }
  if (!isValidPhoneRes) {
    handleValidationError("Please enter a valid 10-digit residential phone number");
    return;
  }
  if (!isValidPhonePP) {
    handleValidationError("Please enter a valid 10-digit personal phone number");
    return;
  }
  if (!isValidPhoneOff) {
    handleValidationError("Please enter a valid 10-digit office phone number");
    return;
  }
}
   
    if (error) {
      handleValidationError(error);
      return;
    }

    const respondentData = { ...formData, latitude, longitude };
    const start = getIndianTime();
    const storedData = JSON.parse(localStorage.getItem("questionsData")) || {};
    storedData["startTime"] = {
      date: start.toLocaleDateString("en-IN"),
      time: start.toLocaleTimeString("en-IN"),
    };

    const existingData = JSON.parse(localStorage.getItem("ProductsTest")) || {};
    const updatedData = {
      ...existingData,
      ...respondentData,
      startTime: storedData.startTime,
    };

    localStorage.setItem("ProductsTest", JSON.stringify(updatedData));

    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      onComplete()
      handleNext();
 
    }
  };
function handlePrevious(){
  if(step > 1){
    setStep(step - 1);
  }else{
    
    
    const email = localStorage.getItem("email");

    localStorage.clear();

    if (email) {
      localStorage.setItem("email", email);
    }
    navigate("/")
  }
}
  return (
    <Flex p={4} flexDirection="column" justifyContent="center" alignItems="center" pl={{ base: '10', md: '4', lg: '6' }}>
      <Text fontSize="xl" fontWeight="bold" mb={9}>
        {step === 1 ||step === 2 ? langText.title : "FIELD CONTROL INFORMATION"}
      </Text>

      {error && (
        <Alert status="error" mb={4} width="100%">
          <AlertIcon />
          <AlertTitle mr={2}>Error:</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={4} width="100%" maxWidth="800px" mb={8}>
        {((step === 1 && formFieldsStep1) ||
          (step === 2 && formFieldsStep2) ||
          (step === 3 && formFieldsStep3)).map((field, index) => (
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
        {step === 3 && (
          <>
            <Select name="place" placeholder={langText.place} onChange={handleChange}>
              {places.map((place, index) => (
                <option key={index} value={index + 1}>
                  {place}
                </option>
              ))}
            </Select>
            <SelectLanguage />
          </>
        )}
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
