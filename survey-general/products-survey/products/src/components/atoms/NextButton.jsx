import React from 'react';
import { Button } from '@chakra-ui/react';
import { IoArrowForward } from 'react-icons/io5';

const NextButton = ({ onClick, label = 'Next', icon = <IoArrowForward /> ,isDisabled}) => {
  return (
    <Button
      colorScheme="teal"
      onClick={onClick}
      rightIcon={icon}
      type="submit"
      isDisabled={isDisabled}
    >
      {label}
    </Button>
  );
};

export default NextButton;
