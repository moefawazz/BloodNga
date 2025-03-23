import React, { useState } from 'react'
import { FormContainer } from '../../globalStyles';
import { BoldTypography } from '../../elements/typography/Typography';
import StyledInput from '../../elements/styledInput/StyledInput';
import StyledButton from '../../elements/styledButton/StyledButton';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import { useLang } from '../../contexts/LangContext';
import { RightSide } from './dashboard.style';

const DashboardUser = () => {
    const { translations, language } = useLang();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!email) {
        toast.error(translations.enterEmail);
        return;
      }
  
      if (!password) {
        toast.error(translations.enterPassword);
        return;
      }
  
      try {
        toast.success(translations.loggedInSuccessfully);
        Navigate("/");
      } catch (error) {
        console.error("Login Error:", error.message);
        toast.error(translations.invalidCredentials || "Email or password are incorrect!");
      }
    };
  
    return (
        <RightSide>

      <FormContainer language={language}>
        <div style={{ margin: "auto", textAlign: "center" }}>
          <div>
            <BoldTypography
              text={"Add new admin users"}
              fontSize="32px"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
              marginTop: "20px",
              justifyContent: "center",
            }}
          >
       
            
          </div>
        </div>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <StyledInput
            label={translations.email}
            placeholder={translations.enterEmail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledInput
            label={translations.password}
            placeholder={translations.enterPassword}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <StyledButton title={"Add new User"} type="submit" />
        </form>
      </FormContainer>
        </RightSide>
    );
  };

export default DashboardUser