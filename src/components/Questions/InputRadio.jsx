import React, { useState, useEffect } from 'react';
import { Box, Radio, RadioGroup, Stack, Input, Text, FormControl, FormLabel } from '@chakra-ui/react';

function InputRadio({ setResponses }) {
  const [isUsingApollo, setIsUsingApollo] = useState('');
  const [years, setYears] = useState('');
  const [months, setMonths] = useState('');

  // Update responses whenever inputs or radio change
  useEffect(() => {
    setResponses({
      '9.14_isUsingApollo': isUsingApollo,
      '9.14_years': isUsingApollo === '99' ? '' : years,
      '9.14_months': isUsingApollo === '99' ? '' : months,
    });
  }, [isUsingApollo, years, months, setResponses]);
  

  const handleRadioChange = (value) => {
    setIsUsingApollo(value);
    if (value === '99') {
      setYears('');
      setMonths('');
    }
  };

  return (
    <Box p={4}>
      <RadioGroup onChange={handleRadioChange} value={isUsingApollo}>
        <Stack direction="column">
          <Radio value="99">Not using Apollo Tyres</Radio>
          <Radio value="other">Yes, using Apollo tyres</Radio>
        </Stack>
      </RadioGroup>

      <Box mt={4}>
        <FormControl mb={4} isDisabled={isUsingApollo === '99'}>
          <FormLabel>In Years:</FormLabel>
          <Input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="Enter years"
          />
        </FormControl>
        <FormControl isDisabled={isUsingApollo === '99'}>
          <FormLabel>In Months:</FormLabel>
          <Input
            type="number"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            placeholder="Enter months"
          />
        </FormControl>
      </Box>
    </Box>
  );
}

export default InputRadio;
