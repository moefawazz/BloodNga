import styled from "styled-components";

export const UpperDesign = styled.div`
  position: relative;
  height: 7rem;
  background: white;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 90px;
    background: linear-gradient(
      to bottom,
      #ff4d4d 0%,
      #ff3333 50%,
      #ff1a1a 100%
    );
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 320' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000000' fill-opacity='1' d='M0,96L80,85.3C160,75,320,53,480,85.3C640,117,800,203,960,213.3C1120,224,1280,160,1360,128L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'%3E%3C/path%3E%3C/svg%3E");
    mask-repeat: no-repeat;
    mask-size: cover;
  }

  @media (max-width: 480px) {
    overflow-y: hidden;
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

export const MainDiv=styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:3rem;
margin-bottom:3rem;
flex-wrap:wrap;
@media (max-width: 480px) {
    gap:0.6rem;
}

`

export const UpperText = styled.div`
  font-size: 3.5rem;  
  color: #e63946;  
  font-weight: 600; 
  font-family: "Poppins", sans-serif; 
  letter-spacing: 1px; 
  text-align: center; 
  @media (max-width: 580px) {
    font-size: 1rem; 
  }
`;

export const ButtonHolder=styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;

`