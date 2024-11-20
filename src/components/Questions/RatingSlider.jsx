import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
  HStack,
} from "@chakra-ui/react";

const RatingSlider = ({ currentQuestion , setSliderMoved}) => {
  const [sliderValue, setSliderValue] = useState(3); // Default neutral value
  const maxSliderValue = currentQuestion.lableOptions.length - 1; // Maximum value based on options length

  const handleSliderChange = (value) => {
    setSliderValue(value);
    setSliderMoved(true)
    // Store the selected value in localStorage as a number (not as a string)
    const selectedOption = currentQuestion.lableOptions[value]; 
    const storedData = JSON.parse(localStorage.getItem('ProductsTest')) || {};
    localStorage.setItem('ProductsTest', JSON.stringify({ 
      ...storedData, 
      [currentQuestion.number]: selectedOption.value 
    }));
  };

  // Ensure slider value persists even after page reload
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('ProductsTest')) || {};
    const storedValue = storedData[currentQuestion.number];
    if (storedValue) {
      // Find the index of the stored value in the lableOptions
      const index = currentQuestion.lableOptions.findIndex(option => option.value === storedValue);
     
    }
  }, [currentQuestion.number, currentQuestion.lableOptions]);

  return (
    <Box p={6} maxWidth="700px" mx="auto" mt={6} borderWidth="1px" borderRadius="lg" bg="gray.50">
      <VStack spacing={6} align="stretch">
        <Slider
          aria-label="rating-slider"
          min={0} // Slider values will start from 0
          max={maxSliderValue} // Maximum value based on the number of options
          step={1}
          value={sliderValue}
          onChange={handleSliderChange}
          colorScheme="blue"
        >
          <SliderTrack bg="gray.300">
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={5} bg="blue.500">
            
          </SliderThumb>
        </Slider>

        {/* Displaying Labels dynamically from currentQuestion.lableOptions */}
        <HStack justify="space-between" mt={2}>
          {currentQuestion.lableOptions.map((option, index) => (
            <Text
              key={index}
              fontSize={{ base: "xs", md: "sm" }}
              textAlign="center"
              width={{ base: "45px", md: "70px" }}
            >
              {option.label} {/* Display the label for each option */}
              {/* {option.value} Display the corresponding value */}
            </Text>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default RatingSlider;
