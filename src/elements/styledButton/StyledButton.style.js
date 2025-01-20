import styled from "styled-components";

// Styled component for the button
export const Button = styled.button`
  display: flex;
  min-width: 84px;
  max-width: 480px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 12px; /* 12px rounded corners for better modern UI */
  height: 40px;
  padding: 10px 16px; /* px-4 translates to 16px horizontal padding */
  flex: 1;
  background-color: #1980e6;
  color: white;
  font-size: 14px; /* text-sm translates to 14px */
  font-weight: bold;
  line-height: normal;
  letter-spacing: 0.015em;
  text-align: center;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease;
  border: none;

  &:hover {
    background-color: #106bb5; /* Slightly darker shade for hover */
  }

  &:active {
    transform: scale(0.98); /* Button presses slightly on click */
  }
`;

// Styled component for the span
export const ButtonText = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;