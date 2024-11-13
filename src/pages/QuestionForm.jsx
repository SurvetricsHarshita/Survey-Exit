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

import { othersSpecify, othersPlaceholders } from "../utils/constant";

import RadioQuestion from "../components/Questions/RadioQuestion";
import InputQuestion from "../components/Questions/InputQuestion";
import MultiChoiceQuestion from "../components/Questions/MultiChoiceQuestion";
import useSurveyTermination from "../utils/useSurveyTermination";
import products from "../components/translationFiles/Indrusties/products";

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
  const codeMapping = Array.from({ length: 10 }, (_, i) => (i + 1).toString());
  console.log(codeMapping);

  console.log(codeMapping);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("ProductsTest")) || [];
    setResponses(storedData);

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
  const [responses, setResponses] = useState({}); // Store responses in an array
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [otherInput, setOtherInput] = useState(""); // State to hold "Other" input
  const [demographicAnswered, setDemographicAnswered] = useState(false);
  const { isTerminate } = useSurveyTermination();
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("ProductsTest")) || [];
    setResponses(storedData);
  }, []);

  useEffect(() => {
    // Merge existing data with new responses and store it back in local storage
    const existingData = JSON.parse(localStorage.getItem("ProductsTest")) || {};

    // Merge the existing data with the new responses
    const updatedData = { ...existingData, ...responses };

    // Save the updated data back to local storage
    localStorage.setItem("ProductsTest", JSON.stringify(updatedData));
  }, [responses]);

  useEffect(() => {
    // Merge existing data with new responses and store it back in local storage
    const existingData = JSON.parse(localStorage.getItem("ProductsTest")) || {};

    // Merge the existing data with the new responses
    const updatedData = { ...existingData, ...responses };

    // Save the updated data back to local storage
    localStorage.setItem("ProductsTest", JSON.stringify(updatedData));
  }, [responses]);

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
        currentQuestion.terminationCodes
      );
      setTerminate(terminate);
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

      if (othersSpecify.includes(value)) {
        // If "Others" is selected in any language, keep the previous input if available
        setOtherInput(prevResponses[key] || "");
      } else {
        // Reset "Other" input if a non-"Others" option is selected
        setOtherInput("");
      }
      return updatedResponses; // Return the updated responses object
    });
  };

  const handleCheckboxChange = (key, values) => {
    const keyValue = key;
    let keyForOtherSpecify = "";
    const currentQuestion = questions[currentQuestionIndex];
    const maxSelections = currentQuestion.maxSelections || 0;
    console.log(currentQuestion.maxSelections, values.length, "max");
    if (maxSelections > 0) {
      setMulti(values.length);
    }

    currentQuestion.options.forEach((option, index) => {
      if (othersSpecify.includes(option)) {
        keyForOtherSpecify = codeMapping[index];
      }
    });

    setOther(codeMapping.includes(keyForOtherSpecify));

    if (values.includes("Others (please specify)")) {
      setResponses((prev) => ({
        ...prev,
        [`${keyValue}_a`]: otherInput,
      }));
    } else {
      setResponses((prev) => ({
        ...prev,
        [keyValue]: values,
      }));
    }
  };

  const handleOtherInputChange = (e) => {
    setOtherInput(e.target.value);
  };

  const handleNext = () => {
    if (terminate) {
      alert("terminated");
      navigate("/submit", { state: { msg: "terminated" } });
      setTerminate(false);
    }
    if (!demographicAnswered) {
      setDemographicAnswered(true);
      return;
    }
    setOther(false);
    if (currentQuestionIndex < questions.length - 1) {
      if (otherInput && otherInput.trim()) {
        localStorage.setItem(`other${currentQuestionIndex}`, otherInput);
      }

      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (sectionIndex < sections.length - 1) {
      setSectionIndex((prev) => prev + 1);
      setCurrentQuestionIndex(0);
    }
    setOtherInput("");
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
      currentQuestion.maxSelections &&
      isOther
    ) {
      return (
        !currentResponse ||
        (currentResponse.includes("Others (please specify)") &&
          !otherInput.trim()) ||
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
              isDisabled={isNextButtonDisabled()}
            />
          ) : (
            <Button
              colorScheme="teal"
              onClick={handleSubmit}
              isDisabled={isNextButtonDisabled()}>
              Next
            </Button>
          )}
        </Flex>
      )}
    </Box>
  );
}

export default QuestionForm;
