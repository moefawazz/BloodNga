import React, { useState } from 'react'
import { FormContainer } from '../../globalStyles';
import { ItemsContainer } from '../items/Item.style';
import StyledInput from '../../elements/styledInput/StyledInput';
import StyledButton from '../../elements/styledButton/StyledButton';
import HeaderNavigator from '../../elements/headerNavigator/HeaderNavigator';
import { useLang } from '../../contexts/LangContext';

const Users = () => {
  const { language, translations } = useLang();
  const [userInfo, setUserInfo] = useState({
    name: "",
    phoneNumber: "",
    role: "",
  });

  const handleName = (e) => {
    const updatedUserInfo = { ...userInfo };
    updatedUserInfo.name = e.target.value;
    setUserInfo(updatedUserInfo);
  };

  const handlePhoneNumber = (e) => {
    const updatedUserInfo = { ...userInfo };
    updatedUserInfo.phoneNumber = e.target.value;
    setUserInfo(updatedUserInfo);
  };

  const handleRole = (e) => {
    const updatedUserInfo = { ...userInfo };
    updatedUserInfo.role = e.target.value;
    setUserInfo(updatedUserInfo);
  };

  const handleSave = () => {
    console.log("user added", userInfo);
  }

  return (
    <FormContainer language={language}>
      <HeaderNavigator 
        title={translations.users} 
        description={translations.usersDescription} 
      />
      <StyledInput 
        label={translations.name} 
        placeholder={translations.enterName} 
        onChange={handleName} 
      />
      <StyledInput 
        label={translations.phoneNumber} 
        placeholder={translations.enterPhoneNumber} 
        onChange={handlePhoneNumber} 
        type='number' 
      />
      <StyledInput 
        label={translations.role} 
        placeholder={translations.enterRole} 
        onChange={handleRole} 
      />
      <StyledButton 
        title={translations.addUser} 
        onClick={handleSave} 
      />
      <ItemsContainer />
    </FormContainer>
  );
};

export default Users;
