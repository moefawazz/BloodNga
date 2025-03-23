import styled from "styled-components";

// Main Layout Container
export const LayoutContainer = styled.div`
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  direction: ${props => props.language === 'ar' ? 'rtl' : 'ltr'};
`;

// Content Container
export const ContentContainer = styled.div`
  max-width: 960px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

// Welcome Text Container
export const WelcomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

export const WelcomeText = styled.p`
  color: ${(props) => props.color};
  font-size: 32px;
  font-weight: 900;
  margin: 0;
  min-width: 72px;
`;

// Grid Container for Cards
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45%, 1fr)); /* Ensures cards won't shrink below 300px */
  gap: 16px;
  padding: 16px;

  @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr); /* Create 3 equal columns */
  }
`;

export const ImageHolder = styled.img`
  width: 100%;
  height: 20rem;
  display: flex;
  overflow-y:none;
  @media (max-width: 480px) {
    width: 100vw; 
  height: 100vh; 
  position: fixed; 
  top: 0;
  left: 0;
  z-index: -1; 
  }
  `
;

export const MainDiv=styled.div`
margin-top:1rem;
 font-size: 3.5rem;  
  font-weight: 600; 
  font-family: "Poppins", sans-serif; 
  letter-spacing: 1px; 
  text-align: center; 
  @media (max-width: 580px) {
    font-size: 1rem; 
  }

`

export const EmergencyButton = styled.div`
  position: fixed;
  bottom: 30px;
  left: 0; 
  width: 30px; 
  height: 60px;
  background-color: red;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: width 0.3s ease-in-out;
  overflow: hidden; 
  
  &:hover {
    width: 160px; 
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    white-space: nowrap;
    margin-left: 10px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover a {
    opacity: 1; /* Show text when hovered */
  }
`;


export const Tooltip = styled.span`
  position: absolute;
  bottom: 70px;
  right: 50%;
  transform: translateX(50%);
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s;
`;
