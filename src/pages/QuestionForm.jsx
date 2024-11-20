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
  getIndianTime,
  calculateSurveyData,
} from "../utils/constant";

import RadioQuestion from "../components/Questions/RadioQuestion";
import InputQuestion from "../components/Questions/InputQuestion";
import MultiChoiceQuestion from "../components/Questions/MultiChoiceQuestion";
import useSurveyTermination from "../utils/useSurveyTermination";
import products from "../components/translationFiles/Indrusties/products";
import RatingQuestion from "./../components/Questions/RatingQuestion";
import useAsk from "../utils/useAsk";

import RatingSlider from "../components/Questions/RatingSlider";
import { Axios } from "axios";
import { submitDataToAPI } from "../utils/submitDataToAPI";
import Segment2 from "../components/Questions/SegmentQuestion";
import SegmentQuestion from "../components/Questions/SegmentQuestion";
import RankingQuestion from "../components/Questions/RankingQuestion";
import Quota from "../components/Questions/Quota";

function QuestionForm() {
  const { Section1, Section2 } = products;
  const [sliderMoved, setSliderMoved] = useState(false);
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
  const [responses, setResponses] = useState({});
  const [storedData, setStoredData] = useState({});
 
  const [mediaFrequencies, setMediaFrequencies] = useState({});
  const [sliderValue, setSliderValue] = useState(3);
  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";

    const email = localStorage.getItem("email");
    localStorage.clear();
    if (email) {
      localStorage.setItem("email", email);
    }
    localStorage.removeItem("ProductsTest");
    navigate("/survey");
  };
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("ProductsTest")) || [];
    setResponses(storedData);
    setStoredData(storedData);

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
    const existingData = JSON.parse(localStorage.getItem("ProductsTest")) || {};

    const updatedData = { ...existingData, ...responses };

    setStoredData(updatedData);

    localStorage.setItem("ProductsTest", JSON.stringify(updatedData));
  }, [responses]);

  useEffect(() => {
    // Trigger the recording logic only when demographicAnswered is true
    if (demographicAnswered && mediaRecorder) {
      // Only execute if the mediaRecorder exists
      if (mediaRecorder.state === "recording") {
        mediaRecorder.stop(); // Stop recording if it's currently recording
        console.log("Recording stopped...");
        mediaRecorder.start(); // Start recording if it's not recording
        console.log("Recording started...");
      } else if (mediaRecorder.state === "inactive") {
        mediaRecorder.start(); // Start recording if it's not recording
        console.log("Recording started...");
      }
    }
  }, [demographicAnswered, mediaRecorder]);
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

    // Loop through options and find the "Other" option
    currentQuestion.options.forEach((option, idx) => {
      if (othersSpecify.includes(option.label)) {
        keyForOtherSpecify = option.code; // Ensure this maps to the correct value
      }
    });

    // Check if the selected value is the "Other" option and update state
    setOther(value === keyForOtherSpecify);

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
      const display = isAsk(currentQuestion.number, value, storedData);
      setAsk(display);
    }

    // Update responses state
    setResponses((prevResponses) => {
      const updatedResponses = { ...prevResponses, [key]: value };

      // If "Other" option is selected, clear the "other" input value
      if (othersSpecify.includes(value)) {
        setOtherInput("");
      } else if (keyForOtherSpecify && value === keyForOtherSpecify) {
        setOtherInput("");
      }

      return updatedResponses; // Return updated responses object
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
      if (currentQuestion.checkAsk) {
        const display = isAsk(currentQuestion.number, storedData);
        setAsk(display);
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
      if (othersSpecify.includes(option.label)) {
        keyForOtherSpecify = option.code;
      }
    });

    // Check if "Others (please specify)" is selected
    const isOtherSelected = values.includes(keyForOtherSpecify);
    setOther(isOtherSelected);
    if (currentQuestion.termination) {
      const terminate = isTerminate(
        currentQuestion.number,
        values,
        currentQuestion.terminationCodes
      );
      setTerminate(terminate);
    }
    if (currentQuestion.checkAsk) {
      const display = isAsk(currentQuestion.number, storedData);
      setAsk(display);
    }
    
    if (isOther) {
 
      setResponses((prev) => ({
        ...prev,
        [keyValue]: values, // Save the selected values
        [`${keyValue}_other`]: otherInput, // Save the "other" input under a unique key
      }));
    } else {
      setResponses((prev) => {
        // Remove "Others" input if not selected
        const updatedResponses = { ...prev, [keyValue]: values };
        // delete updatedResponses[`${keyValue}_other`];
        return updatedResponses;
      });
    }
  };

  const handleOtherInputChange = (event) => {
    const newValue = event.target.value;
    setOtherInput(newValue);

    setResponses((prevResponses) => ({
      ...prevResponses,
      [`${currentQuestion.number}_other`]: newValue,
    }));
  };

  const handleNext = async () => {
    if (terminate) {
      alert("terminated");
      navigate("/submit", { state: { msg: "terminated" } });
      setTerminate(false);
    }
    if (!demographicAnswered) {
      setDemographicAnswered(true);
      return;
    }

    mediaRecorder.stop();
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


    if (currentQuestion.autoCodeQuestion) {
      setResponses((prev) => {
    const updatedResponses = { ...prev };
        const storedData = JSON.parse(localStorage.getItem('ProductsTest')) || {};
    const selectedCode = prev[currentQuestion.number]; // assuming the selected code is saved in prev[currentQuestion.number]

    if (selectedCode) {
      const response = currentQuestion.codes[selectedCode];
      if (response) {
        storedData[currentQuestion.autoCodeQuestionVar] = response.save; // Save the mapped value to localStorage
        localStorage.setItem('ProductsTest', JSON.stringify(storedData));
      }
    }
    return updatedResponses;
      });
    }


    if (!isOther) {
      setResponses((prev) => {
        const updatedResponses = { ...prev };
    delete updatedResponses[`${currentQuestion.number}_other`]; // Clean up "other" input
    console.log(updatedResponses);

    const storedData = JSON.parse(localStorage.getItem('ProductsTest')) || {};
    delete storedData[`${currentQuestion.number}_other`];
    localStorage.setItem('ProductsTest', JSON.stringify(storedData));

    return updatedResponses;
      });
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

    if (currentQuestion.checkAsk && ask) {
      // alert(ask,currentQuestion.checkAsk )

      setCurrentQuestionIndex((prev) => prev + 2);
      return;
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
    setOtherInput("");
    setAsk(false);
    setMediaFrequencies({});
    setSliderMoved(false)
    // setDisable(true)
  };

  // setMulti(1)
  const handlePrevious = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));

    if (currentQuestion.first) {
      setDemographicAnswered(false);
    }
  };

  const handleSubmit = async () => {
    // Get the current time in IST
    const end = getIndianTime(); // Function to get Indian Standard Time
    const endDate = `${end.getDate()}/${end.getMonth() + 1}/${end.getFullYear()}`; // Format: DD/MM/YYYY
    const endTime = end.toLocaleTimeString('en-IN'); // Format: hh:mm:ss am/pm
  
    // Retrieve existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem("ProductsTest")) || {};
    const startTimeDate = existingData.startTime?.date; 
    const startTimeStr = existingData.startTime?.time;
  
    if (startTimeDate && startTimeStr) {
      // Convert start time to Date object
      const [day, month, year] = startTimeDate.split('/');
      const formattedDate = `${month}/${day}/${year}`; // Format: MM/DD/YYYY
      const startTimeFull = `${formattedDate} ${startTimeStr}`; 
      const startTime = new Date(startTimeFull);
  
      // Calculate survey duration in seconds
      const surveyDuration = Math.floor((end.getTime() - startTime.getTime()) / 1000);
  
      // Add end time and duration to the existing data
      existingData.endTime = { date: endDate, time: endTime };
      existingData.duration = surveyDuration; // Duration in seconds
    } else {
      console.error("Start time data is missing!");
      return;
    }
  
    // Update and store the data in localStorage
    const updatedProductTest = calculateSurveyData(existingData, end);
    localStorage.setItem("ProductsTest", JSON.stringify(updatedProductTest));
  
    // Preserve the email in localStorage
    const email = localStorage.getItem("email");
    localStorage.clear();
    if (email) {
      localStorage.setItem("email", email);
    }
  
    // Navigate to the submit page
    navigate("/submit", { state: { msg: "submit" } });
  
    // Submit data to the API
    const { success, message } = await submitDataToAPI(updatedProductTest);
  
    if (success) {
      navigate("/submit");
    } else {
      console.log(message); // Show error message if submission fails
    }
  };
  

  const currentQuestion = questions[currentQuestionIndex];

  const isNextButtonDisabled = () => {
    const currentResponse = responses[currentQuestion.number];

    if (!demographicAnswered) return false;

    if (currentQuestion.options && currentQuestion.type === "multi") {
      if (currentQuestion.maxSelections) {
        return (
          !currentResponse ||
          (isOther && !otherInput.trim()) ||
          multi !== currentQuestion.maxSelections ||
          multi === 0 // No selections
        );
      } else {
        return (
          !currentResponse || multi === 0 || (isOther && !otherInput.trim())
        );
      }
    }

    // Rate question handling
    if (currentQuestion.type === "rate") {
      return (
        !mediaFrequencies ||
        Object.values(mediaFrequencies).some((value) => value === "")
      );
    }
    if (currentQuestion.type === "rank") {
      return (
        !mediaFrequencies ||
        Object.values(mediaFrequencies).some((value) => value === "")
      );
    }
    if (currentQuestion.type === "RatingSlider" ||currentQuestion.type === "segment" ) {
      return !sliderMoved
    }
    // Radio question handling with "Other" option
    if (currentQuestion.type === "radio" && isOther) {
      return !otherInput.trim(); // Ensure "Other" input is not empty
    }

    // Default case for unanswered questions
    return !currentResponse && !otherInput.trim();
  };

  const handleChange = (mediaId, frequency) => {
    setMediaFrequencies((prevFrequencies) => ({
      ...prevFrequencies,
      [mediaId]: frequency,
    }));

    setResponses((prevResponses) => ({
      ...prevResponses,
      [mediaId]: frequency,
    }));
  };



  return (
    <Box p={5} mb={4}  >
      {!demographicAnswered ? (
        <RespondentDemographic
          setResponses={setResponses}
          onComplete={() => setDemographicAnswered(true)}
          handleNext={handleNext}
          language={language}
        />
      ) : (
        <FormControl mb={4} pl={{ base: '10', md: '4', lg: '6' }}>
          <Text fontSize="2xl" fontWeight={700} mb={30}>
            {currentQuestion.section}
          </Text>
          <FormLabel fontSize="lg" mb={30} >
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
              
              isOther={isOther}
            />
          ) : currentQuestion.type === "rate" ? (
            <RatingQuestion
              currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              othersSpecify={othersSpecify}
              othersPlaceholders={othersPlaceholders}
              otherInput={otherInput}
              
              isOther={isOther}
              mediaChannels={currentQuestion.STATEMENTS}
              frequencies={currentQuestion.FREQUENCIES}
              // onRating={handleRating}
              handleChange={handleChange}
              setMediaFrequencies={setMediaFrequencies}
              mediaFrequencies={mediaFrequencies}
            />
          ) : // Spontaneous

          // segment
          currentQuestion.type === "RatingSlider" ? (
            <RatingSlider
              currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              handleResponseChange={handleResponseChange}
              othersSpecify={othersSpecify}
              othersPlaceholders={othersPlaceholders}
              otherInput={otherInput}
              handleOtherInputChange={handleOtherInputChange}
              
              isOther={isOther}
              mediaChannels={currentQuestion.STATEMENTS}
              frequencies={currentQuestion.FREQUENCIES}
              onPrevious={handlePrevious}
              onSubmit={handleNext}
              setMediaFrequencies={setMediaFrequencies}
              // handleSliderChange={handleSliderChange}
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
              setSliderMoved={setSliderMoved}
             
              setResponses={setResponses}
              // segmentLabels = {currentQuestion.sliderLabels }
              // segmentData = {currentQuestion.questionsData}

 />
          ) : // Spontaneous

          // segment
          currentQuestion.type === "rank" ? (
            <RankingQuestion
            currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              othersSpecify={othersSpecify}
              othersPlaceholders={othersPlaceholders}
              otherInput={otherInput}
              
              isOther={isOther}
              mediaChannels={currentQuestion.STATEMENTS}
              frequencies={currentQuestion.FREQUENCIES}
              // onRating={handleRating}
              handleChange={handleChange}
              setMediaFrequencies={setMediaFrequencies}
              mediaFrequencies={mediaFrequencies}
           
            />
          ) :currentQuestion.type === "Quota" ? (
            <Quota
            currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              othersSpecify={othersSpecify}
              othersPlaceholders={othersPlaceholders}
              otherInput={otherInput}
              
              isOther={isOther}
              mediaChannels={currentQuestion.STATEMENTS}
              frequencies={currentQuestion.FREQUENCIES}
              // onRating={handleRating}
              handleChange={handleChange}
              setMediaFrequencies={setMediaFrequencies}
              mediaFrequencies={mediaFrequencies}
           
            />
          ): // Spontaneous
          // Quota
          // segment
          currentQuestion.type === "segment" ? (
            <SegmentQuestion
            currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              handleResponseChange={handleResponseChange}
              othersSpecify={othersSpecify}
              othersPlaceholders={othersPlaceholders}
              otherInput={otherInput}
              handleOtherInputChange={handleOtherInputChange}
              
              isOther={isOther}
              mediaChannels={currentQuestion.STATEMENTS}
              frequencies={currentQuestion.FREQUENCIES}
              onPrevious={handlePrevious}
              onSubmit={handleNext}
              setMediaFrequencies={setMediaFrequencies}
              // handleSliderChange={handleSliderChange}
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
              setSliderMoved={setSliderMoved}
              setResponses={setResponses}
            />
          ):(
            // Spontaneous
            <InputQuestion
              currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              handleResponseInput={handleResponseInput}
            />
          )}
        </FormControl>
      )}

      {demographicAnswered &&  (
        <Flex mt={10} justify="space-between" >
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
              isDisabled={isNextButtonDisabled() || isLoading }>
              Next
            </Button>
          )}
        </Flex>
      )}
    </Box>
  );
}

export default QuestionForm;
