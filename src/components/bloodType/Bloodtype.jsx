import React from 'react'
import { Main } from './Bloodtype.style'
import { Label, LabelContainer } from '../../elements/styledInput/StyledInput.style';

const Bloodtype = ({ label, value, onClick, isSelected }) => {
    return (
      <Main onClick={onClick} isSelected={isSelected}>
        <div>{label}</div>
      </Main>
    );
  };

export default Bloodtype