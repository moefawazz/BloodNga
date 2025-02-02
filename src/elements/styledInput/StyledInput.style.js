import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  max-width: 480px;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 16px;
`;

export const LabelContainer = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  flex: 1;
`;

export const Label = styled.p`
  color: ${(props) => props.color};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  padding-bottom: 8px;
`;

export const Input = styled.input`
  flex: 1;
  width: 100%;
  min-width: 0;
  resize: none;
  overflow: hidden;
  border-radius: 12px;
  color: ${(props) => props.theme.textPrimary};
  background-color: ${(props) => props.theme.bgSecondary};
  height: 56px;
  padding: 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  border: solid 1px black ;

  &::placeholder {
    color: #637588;
  }

`;

export const StyledTextArea = styled.textarea`
  flex: 1;
  width: 100%;
  min-width: 0;
  resize: none;
  overflow: hidden;
  border: none;
  background-color: ${(props) => props.theme.bgSecondary};
  color: ${(props) => props.theme.textPrimary};
  border-radius: 12px;
  padding: 16px;
  font-size: 16px;
  line-height: 1.5;
  outline: none;
  min-height: 144px;

  &::placeholder {
    color: #637588;
  }
`;
