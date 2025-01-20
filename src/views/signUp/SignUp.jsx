import React, { useState } from 'react';
import { BoldTypography, RegularTypography } from '../../elements/typography/Typography';
import { useLang } from '../../contexts/LangContext';
import { FormContainer } from '../../globalStyles';
import { toast, ToastContainer } from 'react-toastify';
import StyledInput from '../../elements/styledInput/StyledInput';
import StyledButton from '../../elements/styledButton/StyledButton';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../contexts/authContext';

const SignUp = () => {
  const { translations, language } = useLang();
  const { createUser } = UserAuth(); 
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!email) {
      toast.error(translations.enterEmail);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error(translations.invalidEmailAddress);
      return;
    }

    if (!password) {
      toast.error(translations.enterPassword);
      return;
    }

    if (password.length < 6) {
      toast.error(translations.passwordMustBe);
      return;
    }

    if (password !== confirmPassword) {
      toast.error(translations.passwordsDoNotMatch);
      return;
    }

    // Sign up user
    try {
      await createUser(email, password);
      toast.success(translations.accountCreatedSuccessfully);
      navigate('/login'); // Redirect to login page after successful sign-up
    } catch (error) {
      console.error("Sign Up Error:", error.message);
      toast.error(translations.unableToCreateAccount || "Unable to create account, please try again.");
    }
  };

  return (
    <FormContainer language={language}>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <div>
          <BoldTypography
            text={translations.createAccount}
            fontSize="32px"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            marginTop: "20px",
            justifyContent: 'center'
          }}
        >
          <RegularTypography text={translations.alreadyHaveAnAccount} />
          <Link to={'/login'}>
            <p style={{
              fontFamily: 'Primary Font-Regular',
              color: '#1980e6',
              textDecoration: 'underline',
              textDecorationColor: '#1980e6'
            }}>
              {translations.logIn}
            </p>
          </Link>
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
        <StyledInput
          label={translations.confirmPassword}
          placeholder={translations.confirmYourPassword}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
        />
        <StyledButton title={translations.signUp} type="submit" />
      </form>
    </FormContainer>
  );
};

export default SignUp;
