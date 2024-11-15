import React, { useState, useEffect } from 'react';
import { Box, FormControl, Table, Thead, Tbody, Tr, Th, Td, Flex, Radio, RadioGroup } from '@chakra-ui/react';
import NextButton from '../atoms/NextButton';
import PreviousButton from '../atoms/PreviousButton';

// Shuffle function
const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const RatingQuestion = ({ onSubmit, onPrevious, mediaChannels, frequencies }) => {
  const [mediaFrequencies, setMediaFrequencies] = useState(
    mediaChannels.reduce((acc, channel) => ({ ...acc, [channel.id]: '' }), {})
  );
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(true);
  const [shuffledMediaChannels, setShuffledMediaChannels] = useState([]);

  useEffect(() => {
    // Shuffle the media channels once
    setShuffledMediaChannels(shuffleArray(mediaChannels));
  }, [mediaChannels]);

  useEffect(() => {
    // Check if all fields are filled to enable the Next button
    const allFieldsFilled = Object.values(mediaFrequencies).every(value => value !== '');
    setNextButtonDisabled(!allFieldsFilled);
  }, [mediaFrequencies]);

  const handleChange = (mediaId, frequency) => {
    setMediaFrequencies(prevFrequencies => ({
      ...prevFrequencies,
      [mediaId]: frequency,
    }));
  };

  const handleSubmit = () => {
    const storedData = JSON.parse(localStorage.getItem('ProductsTest')) || {};
    localStorage.setItem('ProductsTest', JSON.stringify({ ...storedData, ...mediaFrequencies }));
    onSubmit("MediaConsumption", mediaFrequencies);
  };

  return (
    <Box minHeight="100vh" bg="#F7FAFC" p={4}>
      <Box p={6} borderWidth={1} borderRadius="md" boxShadow="md" maxWidth="90vw" width="100%" overflowX="auto">
        <FormControl mb={4}>
          <Box overflowX="auto">
            <Table variant="simple" size={{ base: 'sm', md: 'md' }}>
              <Thead>
                <Tr>
                  <Th fontSize={{ base: 'sm', md: 'md' }} textAlign="center">Media Channel</Th>
                  {frequencies.map(freq => (
                    <Th key={freq.value} fontSize={{ base: 'sm', md: 'md' }} textAlign="center">{freq.label}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {shuffledMediaChannels.map(channel => (
                  <Tr key={channel.id}>
                    <Td fontSize={{ base: 'sm', md: 'md' }}>{channel.label}</Td>
                    {frequencies.map(freq => (
                      <Td key={freq.value} textAlign="center">
                        <RadioGroup
                          value={mediaFrequencies[channel.id]}
                          onChange={(value) => handleChange(channel.id, value)}
                        >
                          <Radio
                            value={freq.value}
                            borderColor="gray.300"
                            borderWidth="1px"
                            _focus={{ boxShadow: 'outline' }}
                            size={{ base: 'sm', md: 'md' }}
                          />
                        </RadioGroup>
                      </Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
          <Flex mt={10} justifyContent="space-between">
            <PreviousButton onPrev={onPrevious} />
            <NextButton onClick={handleSubmit} isDisabled={isNextButtonDisabled} />
          </Flex>
        </FormControl>
      </Box>
    </Box>
  );
};

export default RatingQuestion;
