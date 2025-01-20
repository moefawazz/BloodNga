import { ToastContainer } from "react-toastify";
import styled from "styled-components";

const theme = localStorage.getItem('themeMode')

export const FlexDiv = styled.div`
display: flex;
align-items: center;
gap: ${props => props.gap ? props.gap : "0.62rem"};
`

export const FormContainer = styled.div`
  padding: 20px 160px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  /* direction: ${props => props.language === 'ar' ? 'rtl' : 'ltr'}; */

  /* Medium screens (tablet and small laptop) */
  @media (max-width: 1200px) {
    padding: 20px 120px;
  }

  /* Small screens (phones in landscape) */
  @media (max-width: 992px) {
    padding: 20px 80px;
  }

  /* Extra small screens (phones in portrait) */
  @media (max-width: 768px) {
    padding: 20px 40px;
  }

  /* Very small screens (small mobile devices) */
  @media (max-width: 480px) {
    padding: 20px 20px;
    gap: 20px; /* Reduce the gap on small screens */
  }

  /* Extra small screens (even smaller mobile devices) */
@media (max-width: 400px) {
  padding: 15px 15px; /* Adjust padding for smaller screens */
  gap: 10px; /* Further reduce the gap on extra small screens */
}

  #barcode-reader{
    border-radius: 12px;
    display: flex;
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Create 3 equal columns */
  gap: 16px; /* Space between the divs */

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr); /* Create 3 equal columns */
  }
`

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    background-color: ${theme === 'light' ? "#fff" : '#010409'};
    color: ${theme === 'light' ? "#000" : '#fff'};
    font-family: "Primary Font-Regular";
  }

  .Toastify__toast--error .Toastify__close-button {
    color: ${theme === 'light' ? "#000" : '#fff'};
  }
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background-color: ${(props) => props.theme.bgSecondary};
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.textSecondary};
  font-weight: bold;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

export const TableData = styled.td`
  padding: 12px;
  text-align: left;
  color: ${(props) => props.theme.textPrimary};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  font-size: 16px;
`;

export const TableContainer = styled.div`
  overflow-x: auto;
  max-width: 100%;
`;

