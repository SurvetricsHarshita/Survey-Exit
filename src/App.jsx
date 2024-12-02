import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Box, Center } from '@chakra-ui/react';

// Import your pages
import LoginPage from './pages/LoginPage';




import SubmitMsg from './pages/SubmitMsg';
import SelfieCapture from './components/atoms/SelfieCapture';

import QuestionForm from './pages/QuestionForm';

function App() {
 
  // #1d2124
  return (
    <Center minHeight="100vh" bg="" color="">
      <Box p={6} borderWidth={1} borderRadius="md" boxShadow="md"  borderColor="#9caac2" width={{ md: "80%", lg: "60%" }}   m="4">
        <Routes>
          <Route path="/" element={<LoginPage />} />
        
         
        
        
          <Route path="/survey" element={<QuestionForm />} />
          <Route path="/submit" element={<SubmitMsg />} />
          < Route path="/selfie" element={   <SelfieCapture/>}/>
          
        
        </Routes>
      </Box>
    </Center>
  );
}

const AppWrapper = () => (
  <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
>
    <App />
  </Router>
);

export default AppWrapper;


