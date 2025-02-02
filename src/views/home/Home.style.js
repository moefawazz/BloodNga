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