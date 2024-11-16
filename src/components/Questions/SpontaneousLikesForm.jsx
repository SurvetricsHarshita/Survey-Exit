import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Textarea,
  Button,
  VStack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const SpontaneousLikesForm = () => {
  const [responses, setResponses] = useState({
    mainResponse: "",
    shape: "",
    fragrance: "",
    skinImpact: "",
    additionalComments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResponses((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitted Responses:", responses);
    alert("Responses submitted successfully!");
  };

  return (
    <Box p={4} maxWidth="600px" mx="auto" mt={6}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Spontaneous Likes | Tell Us About Your Current Soap
      </Text>
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Main Response</FormLabel>
          <Textarea
            name="mainResponse"
            placeholder="Tell us everything you like about your current soap."
            value={responses.mainResponse}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Probe 1: Shape</FormLabel>
          <Input
            name="shape"
            placeholder="What do you think about the shape of the soap?"
            value={responses.shape}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Probe 2: Fragrance</FormLabel>
          <Input
            name="fragrance"
            placeholder="How do you feel about the fragrance of the soap?"
            value={responses.fragrance}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Probe 3: Impact on Skin Smoothness and Softness</FormLabel>
          <Input
            name="skinImpact"
            placeholder="How does the soap affect the smoothness and softness of your skin?"
            value={responses.skinImpact}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Additional Comments</FormLabel>
          <Textarea
            name="additionalComments"
            placeholder="Is there anything else you wish to mention about your soap?"
            value={responses.additionalComments}
            onChange={handleChange}
          />
        </FormControl>

        <Button
          colorScheme="teal"
          width="100%"
          onClick={handleSubmit}
          isDisabled={!responses.mainResponse.trim()}
        >
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default SpontaneousLikesForm;
