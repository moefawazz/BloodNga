import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  min-width: 0;
  resize: none;
display: flex;
flex-direction: column;
padding: 16px 20px;
background-color: transparent;
border-radius: 12px;
gap: 20px;
border: 1px solid ${(props) => props.theme.borderColor};
cursor: pointer;
transition: 0.2s ease-in-out;
&:hover {
    background-color: ${(props) => props.theme.borderColor};

    /* Target CardHeader when hovering over CardContainer */
    & > div:first-child {
      border-bottom-color: ${(props) => props.theme.textPrimary};
    }
  }
  
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding-bottom: 8px;
  transition: 0.2s ease-in-out;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  right: ${props => props.language === 'ar' ? 'auto' : 0};
  left: ${props => props.language === 'ar' ? 0 : 'auto'};
  background-color: ${(props) => props.theme.bgSecondary};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 8px;
  padding: 8px 0;
  list-style: none;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  li {
    padding: 8px 16px;
    display: flex;
    gap: 10px;
    cursor: pointer;
    color: ${(props) => props.theme.textColor};
    &:hover {
      background-color: ${(props) => props.theme.borderColor};
    }
  }
`;
