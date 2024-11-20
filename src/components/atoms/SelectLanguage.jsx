import { Select, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'


function SelectLanguage() {
  const [language, setLanguage] = useState(
    JSON.parse(localStorage.getItem('selectedLanguage')) || 'en'
  );

  // Update the language state and immediately update localStorage
  const handleLanguageSelect = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);

    // Update selected language in localStorage
    localStorage.setItem('selectedLanguage', JSON.stringify(selectedLanguage));

    // Update language in ProductsTest
    const existingData = JSON.parse(localStorage.getItem('ProductsTest')) || {};
    localStorage.setItem(
      'ProductsTest',
      JSON.stringify({
        ...existingData,
        language: selectedLanguage,
      })
    );
  };

  useEffect(() => {
    // Ensure initial language is synced with ProductsTest on load
    const existingData = JSON.parse(localStorage.getItem('ProductsTest')) || {};
    localStorage.setItem(
      'ProductsTest',
      JSON.stringify({
        ...existingData,
        language,
      })
    );
  }, [language]);


  return (
    <VStack spacing={2}  w={{ base: 300, md: 300, lg:300 }} mb={3}>
    {/* <Heading as="h2" size="lg">Choose Language</Heading> */}
    <Select placeholder="Select language" onChange={handleLanguageSelect} >
      <option value="en">English</option>
      <option value="hi">Hindi</option>
      <option value="ben">Bengali</option>
      <option value="tel">Telgu</option>
      <option value="guj">Gujrati</option>
      <option value="kan">Kannada</option>
      <option value="mal">Malayalam</option>
      <option value="odi">Odia</option>
      <option value="tam">Tamil</option>
      
    </Select>
   
  </VStack>
  )
}

export default SelectLanguage
