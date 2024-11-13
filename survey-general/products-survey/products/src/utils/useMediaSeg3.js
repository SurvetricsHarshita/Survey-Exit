import { useState, useEffect } from 'react';
import { sendBlobToBackend } from './sendBlobToBackend';

const useMediaRecording = (mediaRecorder, currentQuestionIndex, number) => {
  const [isRecordingStopped, setIsRecordingStopped] = useState(false);
  const [isValid, setValid] = useState(false);
  const [values, setValues] = useState([]);
  const [isRecordingComplete, setRecordingComplete] = useState(false);
  const [current, setCurrent] = useState(currentQuestionIndex);

  // fsdf
  useEffect(() => {
 

    // Check if the mediaRecorder exists and the currentQuestionIndex is valid
    if (mediaRecorder ) {
      mediaRecorder.start();
      setRecordingComplete(false);  // Reset the recording complete flag

      const handleDataAvailable = async (event) => {
        if (event.data.size > 0) {
          console.log(currentQuestionIndex)
          const blob = new Blob([event.data], { type: 'audio/webm' });
         
            try {
            console.log(currentQuestionIndex,"sending")
              const response = await sendBlobToBackend(blob);
              localStorage.setItem(`${currentQuestionIndex-1}_rec`, response);
              setRecordingComplete(true); // Set recording complete flag
            } catch (error) {
              console.error('Error sending blob to backend:', error);
            }
         
        }
      };

      mediaRecorder.addEventListener('dataavailable', handleDataAvailable);

      return () => {
        mediaRecorder.removeEventListener('dataavailable', handleDataAvailable);
        mediaRecorder.stop();
        setIsRecordingStopped(true);
      };
    }
  }, [mediaRecorder, currentQuestionIndex, isValid]);

  // Ensure the recording is complete before proceeding
  useEffect(() => {
    if (isRecordingComplete) {
      // setCurrent(currentQuestionIndex+1)
      console.log('Recording complete for question index:', currentQuestionIndex);
      // console.log("Recording",current);
      // Here you can trigger the next action or notify that recording is complete
    }
  }, [isRecordingComplete]);

  return { isRecordingStopped, setIsRecordingStopped, isRecordingComplete,current
  
  };
};

export default useMediaRecording;
