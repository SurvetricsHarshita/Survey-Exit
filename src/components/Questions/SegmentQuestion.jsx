import { useEffect, useState } from 'react';
import {

  Box,
  Center,
  FormControl,
  Text,
  HStack,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
import PreviousButton from './../atoms/PreviousButton';
import NextButton from '../atoms/NextButton';
// Function to shuffle array
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function SegmentQuestion({
  segmentData = [],
  segmentLabels = [],
  segmentTitle = "Segment",
  instructions = "Please listen to these statements carefully, and tell us which one do you feel closer to?",
  onSubmit,
  onPrevious,
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [segmentValue, setSegmentValue] = useState(Math.floor(segmentLabels.length / 2)); // Neutral position
  const [segment, setSegment] = useState([]);
  const [segmentMoved, setSegmentMoved] = useState(false);

  useEffect(() => {
    const randomizedSegment = shuffleArray(segmentData);
    setSegment([...randomizedSegment]);
  }, [segmentData]);

  const handleSegmentChange = (value) => {
    setSegmentValue(value);
    setSegmentMoved(true);
  };

  const handleNext = (event) => {
    event.preventDefault();
    const currentQuestion = segment[currentQuestionIndex];
    const questionKey = `segment_${currentQuestion?.id}`;
    const selectedOption = segmentLabels[segmentValue];

    // Save response to localStorage
    const storedData = JSON.parse(localStorage.getItem("ProductsTest")) || {};
    storedData[questionKey] = selectedOption;
    localStorage.setItem("ProductsTest", JSON.stringify(storedData));
    setSegmentMoved(false);

    if (currentQuestionIndex < segment.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSegmentValue(Math.floor(segmentLabels.length / 2)); // Reset segment to neutral
    } else {
      onSubmit(storedData); // Trigger submission on the last question
    }
  };

  const handlePrevious = (event) => {
    event.preventDefault();
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      onPrevious && onPrevious(); // Trigger parent previous callback
    }
  };

  const currentQuestion = segment[currentQuestionIndex];

  return (
    <Center minHeight="100vh" bg="#F7FAFC" px={{ base: 4, md: 8 }}>
      <Box
        p={{ base: 4, md: 7 }}
        borderWidth={1}
        borderRadius="md"
        boxShadow="md"
        width={{ base: "90%", sm: "80%", md: "70%", lg: "60%" }}
      >
        <Text fontWeight={500} mb={5} fontSize={{ base: "sm", md: "md" }}>
          {segmentTitle}
        </Text>
        <Text mb={4} fontSize={{ base: "sm", md: "md" }}>
          {instructions}
        </Text>

        {currentQuestion && (
          <FormControl mb={4}>
            <Flex direction={{ base: "column", md: "row" }}>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                width="300px"
                textAlign="center"
                mt={3}
                mr={5}
              >
                <b>Person A</b> <br />
                {currentQuestion.statement}
              </Text>

              <Flex
                direction="column"
                mt={{ base: 6, md: 20 }}
                gap={5}
                width={{ base: "100%", md: "500px", lg: "700px" }}
              >
                <Slider
                  min={0}
                  max={segmentLabels.length - 1}
                  step={1}
                  value={segmentValue}
                  onChange={handleSegmentChange}
                  colorScheme="blue"
                >
                  <SliderTrack bg="gray.300">
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb boxSize={5} bg="blue.500">
                    <Box color="blue.500" />
                  </SliderThumb>
                </Slider>

                <HStack justify="space-between" mt={2}>
                  {segmentLabels.map((label, index) => (
                    <Text
                      key={index}
                      fontSize={{ base: "xs", md: "sm" }}
                      textAlign="center"
                      width={{ base: "45px", md: "70px" }}
                    >
                      {label}
                    </Text>
                  ))}
                </HStack>
              </Flex>

              <Text
                fontSize={{ base: "sm", md: "md" }}
                width="300px"
                textAlign="center"
                mt={3}
                ml={5}
              >
                <b>Person B</b> <br />
                {currentQuestion.optionA}
              </Text>
            </Flex>
          </FormControl>
        )}

        <Box mt={4} textAlign="center">
          <Flex justifyContent="space-between" mt={10}>
            <PreviousButton onClick={  onPrevious} disabled={currentQuestionIndex === 0}/>
       

            <NextButton onClick={handleNext} disabled={!segmentMoved}/>
           
        
          </Flex>
        </Box>
      </Box>
    </Center>
  );
}

export default SegmentQuestion;
