import { Box, Button, Text, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { getIndianTime } from '../../utils/constant';
import { submitDataToAPI } from '../../utils/submitDataToAPI';

function Terminate() {
  const [selectedReason, setSelectedReason] = useState(null);
const navigate=useNavigate()
  const terminationReasons = [
    { reason: 'Door locked', code: 1 },
    { reason: 'Members not available at home', code: 2 },
    { reason: 'Refused to give the interview', code: 3 },
    { reason: 'Refused to give consent', code: 4 },
    { reason: 'Refused to continue the interview after some time', code: 5 },
    { reason: 'Permission not granted to enter the society', code: 6 },
  ];

  const handleConfirmTermination = async() => {
    if (!selectedReason) {
      alert('Please select a reason for termination.');
      return;
    }
    const end = getIndianTime(); // Function to get Indian Standard Time
    const endDate = `${end.getDate()}/${end.getMonth() + 1}/${end.getFullYear()}`; // Format: DD/MM/YYYY
    const endTime = end.toLocaleTimeString('en-IN'); // Format: hh:mm:ss am/pm
  
    // Retrieve existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem("ProductsTest")) || {};
    const startTimeDate = existingData.startDate
    const startTimeStr = existingData.startTime
    ;

    
    if (startTimeDate && startTimeStr) {
      // Convert start time to Date object
      const [day, month, year] = startTimeDate.split('/');
      const formattedDate = `${month}/${day}/${year}`; // Format: MM/DD/YYYY
      const startTimeFull = `${formattedDate} ${startTimeStr}`; 
      const startTime = new Date(startTimeFull);
      function formatDuration(seconds) {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        return `${hrs}:${mins}:${secs}`;
    }
      // Calculate survey duration in seconds
      const surveyDuration = Math.floor((end.getTime() - startTime.getTime()) / 1000);
  
      // Add end time and duration to the existing data
      existingData.endTime =   endTime
      existingData.endDate = endDate

      existingData.duration = formatDuration(surveyDuration);
      existingData.terminationReason=selectedReason
     console.log("After update:", existingData);
       // Duration in seconds
    } else {
      console.error("Start time data is missing!");
      // return;
    }
  
   
    // Update and store the data in localStorage
    const updatedProductTest = existingData
    localStorage.setItem("ProductsTest", JSON.stringify(updatedProductTest));
  
    // Preserve the email in localStorage
    // const email = localStorage.getItem("email");
    // localStorage.clear();
    // if (email) {
    //   localStorage.setItem("email", email);
    // }
  
    // Navigate to the submit page
    // navigate("/submit", { state: { msg: "submit" } });
  
    // Submit data to the API
    const { success, message } = await submitDataToAPI(updatedProductTest);
    if (success) {
      navigate("/submit", { state: { msg: "terminated" } })
      localStorage.clear();
    } else {
       
      console.log(message); // Show error message if submission fails
    }
   
    alert(`Survey terminated due to: ${terminationReasons.find((r) => r.code === parseInt(selectedReason)).reason}`);
  };

  return (
    <Box minH="100vh" bgGradient="linear(to-br, #e9e3e3.100, gray.200)" p={6} display="flex" justifyContent="center" alignItems="center">
      <Box bg="white" shadow="lg" borderRadius="lg" p={8} w="full" maxW="md">
        <Box display="flex" alignItems="center" mb={6}>
          <FaExclamationTriangle color="red" size="1.5rem" style={{ marginRight: '0.5rem' }} />
          <Text fontSize="2xl" fontWeight="bold" color="gray.800">
            Terminate Survey
          </Text>
        </Box>

        <Text fontSize="sm" color="green" mb={6}>
        Please select correct termination reason 
        </Text>

        <RadioGroup onChange={setSelectedReason} value={selectedReason}>
          <Stack spacing={4}>
            {terminationReasons.map(({ reason, code }) => (
              <Radio key={code} value={String(code)} colorScheme="red">
                {reason}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>

        <Box mt={8} display="flex"  alignItems="center" justifyContent="space-between">
        
          <Link to="/">
            <Button colorScheme="green" mb={4}>
              Back to Login
            </Button>
          </Link>
          <Button colorScheme="red"    isDisabled={!selectedReason}  onClick={handleConfirmTermination}>
            Terminate
          </Button>
        </Box>

        <Box mt={6} textAlign="center">
          <Text fontSize="md" color="gray.700" fontWeight="bold">
   
          </Text>
         
        </Box>
      </Box>
    </Box>
  );
}

export default Terminate;
