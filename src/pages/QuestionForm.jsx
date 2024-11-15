// export default QuestionForm
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Flex,
  Text,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import NextButton from "../components/atoms/NextButton";
import PreviousButton from "../components/atoms/PreviousButton";
import RespondentDemographic from "./RespondentDemographic";

import {
  othersSpecify,
  othersPlaceholders,
  sendBlobToBackend,
} from "../utils/constant";

import RadioQuestion from "../components/Questions/RadioQuestion";
import InputQuestion from "../components/Questions/InputQuestion";
import MultiChoiceQuestion from "../components/Questions/MultiChoiceQuestion";
import useSurveyTermination from "../utils/useSurveyTermination";
import products from "../components/translationFiles/Indrusties/products";
import RatingQuestion from "./../components/Questions/RatingQuestion";
import useAsk from "../utils/useAsk";

function QuestionForm() {
  const { Section1, Section2 } = products;

  const navigate = useNavigate();
  const [sectionIndex, setSectionIndex] = useState(0);
  // Default is English
  const [language, setLanguage] = useState("en");
  const [sections, setSections] = useState([Section1, Section2]); // Default is English
  const [loading, setLoading] = useState(true);

  const [isOther, setOther] = useState(false);
  const [multi, setMulti] = useState(0);
  const [terminate, setTerminate] = useState(false);
  const [ask, setAsk] = useState(false);
  const [responses, setResponses] = useState({}); // Store responses in an array
  const [storedData, setStoredData] = useState({});
  const codeMapping = Array.from({ length: 20 }, (_, i) => (i + 1).toString());
  


  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("ProductsTest")) || [];
    setResponses(storedData);
    setStoredData(storedData)

    console.log(storedData, "fron");
    // Get selected language from localStorage or default to English
    const selectedLanguage =
      JSON.parse(localStorage.getItem("selectedLanguage")) || "en";
    setLanguage(selectedLanguage);
  }, []);

  useEffect(() => {
    setLoading(true); // Set loading to true when language changes

    switch (language) {
      case "en":
        setSections([Section1, Section2]);
        break;
      // case "hi":
      //   setSections([HiSection1, HiSection2]);
      //   break;

      default:
        setSections([Section1, Section2]); // Default to English if no match
        break;
    }

    setLoading(false); // Set loading to false after sections are updated
  }, [language]);

  const questions = loading
    ? []
    : [...Object.values(sections[0]), ...Object.values(sections[1])];
  const [isLoading, setIsLoading] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedBlob, setRecordedBlob] = useState(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [otherInput, setOtherInput] = useState(""); // State to hold "Other" input
  const [demographicAnswered, setDemographicAnswered] = useState(false);
  const { isTerminate } = useSurveyTermination();
  const { isAsk } = useAsk();
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("ProductsTest")) || [];
    setResponses(storedData);

    const selectedLanguage =
      JSON.parse(localStorage.getItem("selectedLanguage")) || "en";
    setLanguage(selectedLanguage);
  }, []);

  useEffect(() => {
    // Merge existing data with new responses and store it back in local storage
    const existingData = JSON.parse(localStorage.getItem("ProductsTest")) || {};

    // Merge the existing data with the new responses
    const updatedData = { ...existingData, ...responses };
 

    setStoredData(updatedData)
// console.log()
    console.log(storedData, "frodfgdfh");
    // Save the updated data back to local storage
    localStorage.setItem("ProductsTest", JSON.stringify(updatedData));
  }, [responses]);

  //audio
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.ondataavailable = (e) => {
          setRecordedBlob(e.data);
        };
      })
      .catch((error) => console.error("Error accessing media devices:", error));
  }, []);
  const handleResponseChange = (key, value, index) => {
    let keyForOtherSpecify = "";

    currentQuestion.options.forEach((option, idx) => {
      if (othersSpecify.includes(option)) {
        keyForOtherSpecify = codeMapping[idx]; // Use idx instead of index to correctly reference the current index
      }
    });

    // Update the state to show/hide the "Other" input
    setOther(value == keyForOtherSpecify);

    if (currentQuestion.termination) {
      const terminate = isTerminate(
        currentQuestion.number,
        value,
        currentQuestion.terminationCodes,
        storedData
      );
      setTerminate(terminate);
     
    }
    if (currentQuestion.checkAsk) {
      const display = isAsk(
        currentQuestion.number,
       value,
        storedData
        
      );
      setAsk(display );
    }
    setResponses((prevResponses) => {
      const updatedResponses = { ...prevResponses, [key]: value }; // Update the specific response

      if (othersSpecify.includes(value)) {
        setOtherInput("");
      } else if (keyForOtherSpecify && value === keyForOtherSpecify) {
        setOtherInput("");
      }

      return updatedResponses; // Return the updated responses object
    });
  };

  const handleResponseInput = (key, value) => {
    // Create a new responses object based on the previous state
    setResponses((prevResponses) => {
      const updatedResponses = { ...prevResponses, [key]: value }; // Update the specific response

      if (currentQuestion.termination) {
        const terminate = isTerminate(
          currentQuestion.number,
          value,
          currentQuestion.terminationCodes
        );
        setTerminate(terminate);
      }
      if (currentQuestion. checkAsk) {
        const display = isAsk(
          currentQuestion.number,
          storedData
        );
        setAsk(display );
      }
      if (othersSpecify.includes(value)) {
        // If "Others" is selected in any language, keep the previous input if available
        updatedResponses[`${key}_other`] = otherInput;
        // setOtherInput(prevResponses[key] || "");
      } else {
        delete updatedResponses[`${key}_other`];
        // Reset "Other" input if a non-"Others" option is selected
        setOtherInput("");
      }
      return updatedResponses; // Return the updated responses object
    });
  };

  const handleCheckboxChange = (key, values) => {
    console.log(otherInput);

    const keyValue = key;
    let keyForOtherSpecify = "";
    const currentQuestion = questions[currentQuestionIndex];
    const maxSelections = currentQuestion.maxSelections || 0;

    if (maxSelections > 0) {
      setMulti(values.length);
    }
    setMulti(values.length);
    // Identify the key for "Others (please specify)"
    currentQuestion.options.forEach((option, index) => {
      if (othersSpecify.includes(option)) {
        keyForOtherSpecify = codeMapping[index];
      }
    });

    // Check if "Others (please specify)" is selected
    const isOtherSelected = values.includes(keyForOtherSpecify);
    setOther(isOtherSelected);

    if (isOtherSelected) {
      setResponses((prev) => ({
        ...prev,
        [keyValue]: values, // Save the selected values
        [`${keyValue}_a`]: otherInput, // Save the "other" input under a unique key
      }));
    } else {
      setResponses((prev) => {
        // Remove "Others" input if not selected
        const updatedResponses = { ...prev, [keyValue]: values };
        delete updatedResponses[`${keyValue}_a`];
        return updatedResponses;
      });
    }
  };

  const handleOtherInputChange = (event) => {
    const newValue = event.target.value;
    setOtherInput(newValue);

    setResponses((prevResponses) => ({
      ...prevResponses,
      [`${currentQuestion.number}_other`]: newValue, // Save under unique key, e.g., "S1-Q1_other"
    }));
  };

  const handleNext = async () => {
    // if (currentQuestion.number == "S9f") {
    //   // Skip to `q3` directly
    //   setCurrentQuestionIndex((prev) => prev + 1);
    //   return
      
    // }
    if (terminate) {
      alert("terminated");
      navigate("/submit", { state: { msg: "terminated" } });
      setTerminate(false);
    }
    if (!demographicAnswered) {
      setDemographicAnswered(true);
      return;
    }

    // mediaRecorder.stop()
    //audio
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop(); // Stop recording when clicking 'Next'
      console.log("stopped");
    }
    if (currentQuestion.audio && recordedBlob) {
      setIsLoading(true);
      const fileUrl = await sendBlobToBackend(recordedBlob);
      setIsLoading(false);

      setResponses((prevResponses) => ({
        ...prevResponses,
        [`${currentQuestion.number}_rec`]: fileUrl, // Save the file URL to the responses
      }));
    }

    
    setOther(false);
    if (currentQuestionIndex < questions.length - 1) {
      // setCurrentQuestionIndex((prev) => prev + 1);
      mediaRecorder.start();
      mediaRecorder.onstart = () => {
        console.log("Recording started successfully.");
      };
      // Start recording for the next question
    } else if (sectionIndex < sections.length - 1) {
      setSectionIndex(sectionIndex + 1);
      setCurrentQuestionIndex(0);
      setOtherInput("");
    }


    if (currentQuestion.checkAsk  && ask) {
      alert("23")
      
        setCurrentQuestionIndex((prev) => prev + 2);
        return
   
      

      
    }else{
      setCurrentQuestionIndex((prev) => prev + 1);
    }
    setOtherInput("");
    setAsk(false);
  };
  // setMulti(1)
  const handlePrevious = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));

    if (currentQuestion.first) {
      setDemographicAnswered(false);
    }
  };

  const handleSubmit = () => {
    const questionCount = questions.length;

    // 19_rec	https://audio-image-torage.s3.eu
    const existingData = JSON.parse(localStorage.getItem("ProductsTest")) || {};
    // Retrieve the existing ProductsTest from state or context
    const updatedProductsTest = {
      ...existingData,
      // Add the gathered "Others" data to the object
    };

    // Perform any action to store or submit updatedProductsTest
    console.log(updatedProductsTest);
    localStorage.setItem("ProductsTest", JSON.stringify(updatedProductsTest));

    // navigate("/selfie");
  };

  const currentQuestion = questions[currentQuestionIndex];

  
  
  const isNextButtonDisabled = () => {
    const currentResponse = responses[currentQuestion.number];
    if (!demographicAnswered) return false;
    if (
      currentQuestion.options &&
      currentQuestion.type === "multi" &&
      currentQuestion.maxSelections 
      // isOth.er
    ) {
      return (
        !currentResponse ||
        (isOther && !otherInput.trim()) ||
        multi != currentQuestion.maxSelections ||
        multi == 0 ||
        multi != currentQuestion.maxSelections
      );
    }

    if (currentQuestion.type == "radio" && isOther) {
      return !otherInput.trim();
    } else {
      return !currentResponse && !otherInput.trim();
    }
  };
  
  return (
    <Box p={5}>
      {!demographicAnswered ? (
        <RespondentDemographic
          setResponses={setResponses}
          onComplete={() => setDemographicAnswered(true)}
          handleNext={handleNext}
          language={language}
        />
      ) : (
        <FormControl mb={4}>
          <Text fontSize="2xl" fontWeight={700} mb={30}>
            {currentQuestion.section}
          </Text>
          <FormLabel fontSize="lg">
            {" "}
            {currentQuestion.number} .{currentQuestion.question}
          </FormLabel>
          <Text color="green.500" fontWeight={500}>
            {currentQuestion.instruction}
          </Text>

          <FormLabel fontSize="md"> {currentQuestion.label}</FormLabel>

          {/* Render components based on question type */}
          {currentQuestion.type === "multi" ? (
            <MultiChoiceQuestion
              currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              handleCheckboxChange={handleCheckboxChange}
              othersSpecify={othersSpecify}
              othersPlaceholders={othersPlaceholders}
              otherInput={otherInput}
              handleOtherInputChange={handleOtherInputChange}
              codeMapping={codeMapping}
              isOther={isOther}
            />
          ) : currentQuestion.type === "radio" ? (
            <RadioQuestion
              currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              handleResponseChange={handleResponseChange}
              othersSpecify={othersSpecify}
              othersPlaceholders={othersPlaceholders}
              otherInput={otherInput}
              handleOtherInputChange={handleOtherInputChange}
              codeMapping={codeMapping}
              isOther={isOther}
            />
          ) : currentQuestion.type === "rate" ? (
            <RatingQuestion
              currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              handleResponseChange={handleResponseChange}
              othersSpecify={othersSpecify}
              othersPlaceholders={othersPlaceholders}
              otherInput={otherInput}
              handleOtherInputChange={handleOtherInputChange}
              codeMapping={codeMapping}
              isOther={isOther}
              mediaChannels={currentQuestion.STATEMENTS}
              frequencies={currentQuestion.FREQUENCIES}
              onPrevious={handlePrevious}
              onSubmit={handleNext}
            />
          ) : (
            <InputQuestion
              currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              handleResponseInput={handleResponseInput}
            />
          )}
        </FormControl>
      )}

      {demographicAnswered && (
        <Flex mt={10} justify="space-between">
          <PreviousButton
            mr={2}
            onPrev={handlePrevious}
            isDisabled={currentQuestionIndex === 0}>
            Previous
          </PreviousButton>
          {currentQuestionIndex < questions.length - 1 ? (
            <NextButton
              onClick={handleNext}
              isDisabled={isNextButtonDisabled() || isLoading}
            />
          ) : (
            <Button
              colorScheme="teal"
              onClick={handleSubmit}
              isDisabled={isNextButtonDisabled() || isLoading}>
              Next
            </Button>
          )}
        </Flex>
      )}
    </Box>
  );
}

export default QuestionForm;
