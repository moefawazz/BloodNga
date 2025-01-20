import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 8px;
  border: 1px solid ${(props) => props.borderColor};
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.borderColor};
  }

  /* Ensure the card stays responsive */
  width: 100%; /* Ensures the card fills the grid cell */
`;

export const IconWrapper = styled.div`
  color: ${(props) => props.color};
  font-size: 24px;
`;

export const Title = styled.h2`
  color: ${(props) => props.color};
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

export const Description = styled.p`
  color: #637588;
  font-size: 14px;
`;