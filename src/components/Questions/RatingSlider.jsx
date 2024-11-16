import React, { useState } from "react";
import {
  Box,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
  Button,
  HStack,
} from "@chakra-ui/react";

const RatingSlider = ({currentQuestion}) => {
  const [sliderValue, setSliderValue] = useState(3) // Default neutral value
  const maxSliderValue = 5; // Maximum value of the scale

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  const handleSubmit = () => {
    alert(`Thank you for your feedback! You selected: ${sliderValue}`);
    console.log("Selected Rating:", sliderValue);
    const storedData = JSON.parse(localStorage.getItem('ProductsTest')) || {};
    localStorage.setItem('ProductsTest', JSON.stringify({ ...storedData, [currentQuestion.number]: sliderValue}));
  };

  return (
    <Box p={6} maxWidth="400px" mx="auto" mt={6} borderWidth="1px" borderRadius="lg" bg="gray.50">
      <VStack spacing={6} align="stretch">
        

        <Slider
          aria-label="rating-slider"
          min={1}
          max={maxSliderValue}
          step={1}
          value={sliderValue}
          onChange={handleSliderChange}
          colorScheme="blue"
        >
          <SliderTrack bg="gray.300">
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={5} bg="blue.500">
            <Text fontSize="xs" color="white">
              {sliderValue}
            </Text>
          </SliderThumb>
        </Slider>
        <HStack justify="space-between" mt={2}>
                  {currentQuestion.lableOptions.map((label, index) => (
                    <Text key={index} fontSize={{ base: "xs", md: "sm" }} textAlign="center" width={{ base: "45px", md: "70px" }}>
                      {label}
                    </Text>
                  ))}
                </HStack>
      

        <Button
          colorScheme="blue"
          onClick={handleSubmit}
          isDisabled={!sliderValue}
        >
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default RatingSlider;
