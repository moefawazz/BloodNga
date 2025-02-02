import styled from 'styled-components';

export const Header = styled.header`
min-width: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding: 12px 40px;
  background-color: ${(props) => props.theme.bgSecondary};

  /* Very small screens (small mobile devices) */
  @media (max-width: 480px) {
    padding: 12px 20px;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 480px) {
    display: block;
  }
`;

export const MenuContainer = styled.div`
z-index:100;
  position: absolute;
  top: 50px;
  right: ${props => props.language === 'ar' ? 'auto' : '20px'};
  left: ${props => props.language === 'ar' ? '20px' : 'auto'};
  background-color: ${(props) => props.theme.bgSecondary};
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 480px) {
    display: flex;
  }
`;

export const MenuItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  color: ${(props) => props.theme.textPrimary};
  display: flex;
  align-items: center;
  gap: 7px;

  &:hover {
    background-color: ${(props) => props.theme.borderColor};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #111418;
  cursor: pointer;

        /* Very small screens (small mobile devices) */
        @media (max-width: 300px) {
          gap: 8px;
  }
`;

export const Logo = styled.div`
  width: 48px;
  height: 48px;

      /* Very small screens (small mobile devices) */
      @media (max-width: 300px) {
        width: 40px;
        height: 40px;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.color};
  font-size: 1.125rem; /* text-lg */
  font-family: "Primary Font-Bold";
  line-height: 1.25;
  letter-spacing: -0.015em;
margin-left:1rem;
    /* Very small screens (small mobile devices) */
    @media (max-width: 300px) {
      font-size: 0.9rem; 
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`;

export const NavLink = styled.a`
  color: #111418;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500;
  line-height: normal;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;

    /* Hide the buttons on small screens */
    @media (max-width: 480px) {
    display: none;
  }
`;
export const RetractedMenu=styled.div`
  &:hover {
  text-decoration: underline;
  text-decoration-color: red;
  text-decoration-thickness: 3px; 
  text-underline-offset: 4px; 
}

`
export const NavBarLinks=styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;
  height: 40px;
  font-size: 0.875rem; /* text-sm */
  font-weight: bold;
  line-height: normal;
  padding: ${(props) => (props.primary ? '0 16px' : '0 10px')};
  background-color: ${(props) => props.theme.backgroundColor};
  border: none;
  color: ${(props) => props.theme.textPrimary};

  &:hover {
  text-decoration: underline;
  text-decoration-color: red;
  text-decoration-thickness: 3px; 
  text-underline-offset: 4px; 
}
@media (max-width: 480px) {
    display: none;
  }
`


export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;
  height: 40px;
  font-size: 0.875rem; /* text-sm */
  font-weight: bold;
  line-height: normal;
  padding: ${(props) => (props.primary ? '0 16px' : '0 10px')};
  background-color: ${(props) => props.theme.backgroundColor};
  border: none;
  color: ${(props) => props.theme.textPrimary};

  &:hover {
    background-color: ${(props) => props.theme.borderColor}
  }

  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const ProfileImage = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;
