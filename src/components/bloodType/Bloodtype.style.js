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
    box-shadow: 0 0 10px rgba(247, 10, 2, 0.76);
  }

  ${({ isSelected }) =>
    isSelected && `
      box-shadow: 0 0 15px rgba(244, 23, 27, 0.8);
      border-color: red;
    `}

`