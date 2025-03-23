import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allows wrapping if cards exceed width */
  gap: 20px; /* Space between cards */
  justify-content: flex-start; /* Align cards to the left */
  padding: 20px;
`;

export const MainCard = styled.div`
  width: 15rem; /* Adjust width as needed */
  height: auto; /* Adjust height as needed */
  border: 2px solid black;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  padding:1rem;
  justify-content: center;
  text-align: start;
  font-size: 18px;
  font-weight: bold;
  color: black;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Slightly enlarges on hover */
  }
`;

