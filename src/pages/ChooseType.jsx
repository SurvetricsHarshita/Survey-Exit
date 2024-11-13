import { useState } from 'react';
import { Box, Heading, VStack, Select } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import NextButton from '../components/atoms/NextButton';

function ChooseType() {
  const [language, setLanguage] = useState('');
  const navigate = useNavigate();

  // Define language options in an array
  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'hi', label: 'Hindi' },
    { value: 'ben', label: 'Bengali' },
    { value: 'tel', label: 'Telugu' },
    { value: 'guj', label: 'Gujarati' },
    { value: 'kan', label: 'Kannada' },
    { value: 'mal', label: 'Malayalam' },
    { value: 'odi', label: 'Odia' },
    { value: 'tam', label: 'Tamil' },
  ];

  const handleLanguageSelect = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem('selectedLanguage', JSON.stringify(selectedLanguage));
  };

  const handleNextLanguage = () => {
    if (language) {
      const existingData = JSON.parse(localStorage.getItem('ProductsTest')) || {};
      localStorage.setItem(
        'ProductsTest',
        JSON.stringify({
          ...existingData,
          language,
        })
      );
      navigate('/questionForm');
    } else {
      alert('Please select a language');
    }
  };

  return (
    <Box>
      <VStack spacing={2}>
        <Heading as="h2" size="lg">
          Choose Language
        </Heading>
        <Select placeholder="Select language" onChange={handleLanguageSelect}>
          {languageOptions.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </Select>
        <NextButton onClick={handleNextLanguage} />
      </VStack>
    </Box>
  );
}

export default ChooseType;
