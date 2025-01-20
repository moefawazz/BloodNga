import React from 'react';
import { Container, LabelContainer, Label, Input, StyledTextArea } from './StyledInput.style';
import { useTheme } from '../../contexts/ThemeContext';

const StyledInput = ({ label, placeholder, value, onChange, isTextArea, type }) => {
  const { theme } = useTheme();
  return (
    <Container>
      <LabelContainer>
        {label && <Label color={theme.primaryText}>{label}</Label>}
        {isTextArea ? (
          <StyledTextArea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          theme={theme}
          />
        ) : (
        <Input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={type}
          theme={theme}
        />
      )}
      </LabelContainer>
    </Container>
  );
};

export default StyledInput;
