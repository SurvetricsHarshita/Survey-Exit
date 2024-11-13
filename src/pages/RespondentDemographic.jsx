import { useState, useEffect } from "react";
import {
  Flex,
  Input,
  Stack,
  Text,
  Select,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { languageText } from "../utils/Respondent";
import { formFieldsStep1, formFieldsStep2, places } from "../utils/Respondent";
import NextButton from "../components/atoms/NextButton";

const RespondentDemographic = ({ handleNext, language }) => {
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

  const [step, setStep] = useState(1); // Step state to track which form part to show

  const langText = languageText[language] || languageText["en"];

  useEffect(() => {
    requestMicrophonePermission();
    requestLocationPermission();
  }, []);

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

  const handleSubmit = (step) => {
    // let requiredFields;
    // if (step === 1) {
    //   requiredFields = formFieldsStep1.map(field => field.name);
    // } else {
    //   requiredFields = formFieldsStep2.map(field => field.name);
    // }

    // // Validate the required fields for the current step
    // for (let field of requiredFields) {
    //   if (!formData[field]) {
    //     setError(`${field} is required.`)
    //     alert(`${field} is required.`);
    //     return;
    //   }
    // }

    // Gather respondent data and add latitude/longitude
    const respondentData = { ...formData, latitude, longitude };
    const start = new Date();

    // Get existing data from localStorage or initialize as empty
    const existingData = JSON.parse(localStorage.getItem("ProductsTest")) || {};
    const updatedData = {
      ...existingData,
      ...respondentData,
      startTime: {
        date: start.toLocaleDateString(),
        time: start.toLocaleTimeString(),
      },
    };

    // Save updated data back to localStorage
    localStorage.setItem("ProductsTest", JSON.stringify(updatedData));

    // Proceed to the next step
    if (step === 1) {
      setStep(2); // Go to step 2
    } else {
      handleNext(); // Call the function to handle the final step
    }
  };
  return (
    <Flex
      p={4}
      flexDirection="column"
      justifyContent="center"
      alignItems="center">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        {step === 1 ? langText.title : "FIELD CONTROL INFORMATION"}
      </Text>
      {error && (
        <Alert status="error" mb={4} width="100%">
          <AlertIcon />
          <AlertTitle mr={2}>Error:</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Stack spacing={4} justifyContent="center" textAlign="center" mb={30}>
        {step === 1 ? (
          formFieldsStep1.map((field, index) => (
            <Input
              key={index}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              type={field.type || "text"}
              width={{ md: "60", lg: "350px" }}
            />
          ))
        ) : (
          <>
            {formFieldsStep2.map((field, index) => (
              <Input
                key={index}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                type={field.type || "text"}
                width={{ md: "60", lg: "350px" }}
              />
            ))}
            <Select
              name="place" // Add a name attribute here
              placeholder={langText.place}
              onChange={handleChange}
              width={{ md: "60", lg: "350px" }}
              mt={4}>
              {places.map((place, index) => (
                <option key={index} value={index + 1}>
                  {place}
                </option>
              ))}
            </Select>
          </>
        )}
      </Stack>

      <Flex>
        <NextButton onClick={() => handleSubmit(step)} />
      </Flex>
    </Flex>
  );
};

export default RespondentDemographic;
