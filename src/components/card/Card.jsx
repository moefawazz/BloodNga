import React from 'react'
import { CardContainer, Description, IconWrapper, Title } from './Card.style';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const Card = ({ icon, title, description, path }) => {
  const navigate = useNavigate()
  const { theme } = useTheme();
    return (
      <CardContainer onClick={()=>navigate(path)} backgroundColor={theme.bgSecondary} borderColor={theme.borderColor}>
        <IconWrapper color={theme.textPrimary}>{icon}</IconWrapper>
        <div>
          <Title color={theme.textPrimary}>{title}</Title>
          <Description>{description}</Description>
        </div>
      </CardContainer>
    );
  };

export default Card
