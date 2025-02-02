import styled from "styled-components";

export const MainDiv = styled.div`
  border-bottom: 4px solid black;  
  border-right: 4px solid black;   
  border-radius: 8px;            

  width: 100%; 
  max-width: 20rem; 
  min-height: 7rem; 
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem; 

  @media (max-width: 480px) {
    padding: 0.5rem;
    gap: 0.3rem;
  }
`;

export const Bold = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis; 

  @media (max-width: 480px) {
    font-size: 0.7rem; 
  }
`;

export const SmallText = styled.div`
  font-size: 0.5rem;
  color: gray;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 480px) {
    font-size: 0.4rem;
  }
`;

export const StyledSvg = styled.div`
  max-width: 100%;
  height: auto;

  @media (max-width: 480px) {
    max-width: 80%; 
  }
`;
