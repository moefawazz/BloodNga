import React from 'react'
import { Button, ButtonText } from './StyledButton.style';

const StyledButton = ({ title, onClick }) => {
    return (
      <Button onClick={onClick}>
        <ButtonText>{title}</ButtonText>
      </Button>
    );
  };

export default StyledButton
