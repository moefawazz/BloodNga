import styled from "styled-components";
import react from "react";
export const Main=styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
  border-radius: 8px;
  font-size: 0.5rem;
  font-weight: bold;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 255, 0.5);
  }

  ${({ isSelected }) =>
    isSelected && `
      box-shadow: 0 0 15px rgba(0, 0, 255, 0.8);
      border-color: blue;
    `}

`