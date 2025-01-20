import styled from "styled-components";
import { FiSearch } from 'react-icons/fi';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 12px;
  height: 40px;
  padding: 10px 16px;
  max-width: 480px;
`;

export const SearchInput = styled.input`
  width: 100%;
  min-width: 0;
  resize: none;
  overflow: hidden;
  border: none;
  outline: none;
  flex: 1;
  font-size: 1rem;
  padding: 0 0.5rem;
  background-color: transparent;
  color: ${(props) => props.theme.textPrimary};

  &::placeholder{
    color: ${(props) => props.theme.borderColor};
  }
`;

export const SearchIcon = styled(FiSearch)`
  color: ${(props) => props.theme.borderColor};
  font-size: 1.2rem;
`;