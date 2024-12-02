import { Select, VStack } from '@chakra-ui/react'



function SelectLanguage({handleLanguageSelect }) {
 


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
