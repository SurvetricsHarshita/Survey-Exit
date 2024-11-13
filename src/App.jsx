import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Box, Center } from '@chakra-ui/react';

// Import your pages
import LoginPage from './pages/LoginPage';
import ChooseType from './pages/ChooseType';



import SubmitMsg from './pages/SubmitMsg';
import SelfieCapture from './components/atoms/SelfieCapture';

import QuestionForm from './pages/QuestionForm';

function App() {
 

  return (
    <Center minHeight="100vh" bg="#F7FAFC">
      <Box p={6} borderWidth={1} borderRadius="md" boxShadow="md" width={{ md: "80%", lg: "50%" }}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/type" element={<ChooseType />} />
         
        
        
          <Route path="/questionForm" element={<QuestionForm />} />
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


