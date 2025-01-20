import styled from 'styled-components';

export const PopupWrapper = styled.div`
  position: fixed;
  inset: 0; /* Sets top, right, bottom, left to 0 */
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it's above other content */
`;

export const PopupContent = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  padding: 40px 20px 20px 20px;
  border-radius: 8px;
  position: relative;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: ${props => props.language === 'ar' ? 'auto' : '10px'};
  left: ${props => props.language === 'ar' ? '10px' : 'auto'};
  background: none;
  border: none;
  font-size: 18px;
  color: ${props => props.theme.textPrimary};
  cursor: pointer;
`;
