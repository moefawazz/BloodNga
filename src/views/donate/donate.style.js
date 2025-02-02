import styled from "styled-components";

export const MainDiv = styled.div`
  position: relative; 
  height: 95vh; 
  @media (max-width: 480px) {
overflow-y:none;
  }
`;

export const ImageHolder = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-y:none;
  @media (max-width: 480px) {
    width: 100vw; 
  height: 100vh; 
  object-fit: cover; 
  position: fixed; 
  top: 0;
  left: 0;
  z-index: -1; 
  }
  `
;

export const StyledButton = styled.button`
  position: absolute; 
  top: 60%; 
  left: 20%;
  transform: translate(-50%, -50%); 
  justify-content:center;
  display:flex;
  align-items:center;
  width:9rem;
  height:1rem;
  z-index: 1; 
  background-color: red;
  color: white;
  border: none;
  padding:2rem;
  border-radius: 8px;
  font-weight:bold;
  font-size:1rem;
  cursor: pointer;

 
`;


export const MainInputs = styled.div`
  overflow-y: scroll;
  height: 27rem;
  width: auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 27rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 27rem;
  }
`;

export const ButtonHolder=styled.div`
margin-left:40%;
margin-top:1rem;
@media (max-width: 768px) {
  margin-left:37%;
  }

`