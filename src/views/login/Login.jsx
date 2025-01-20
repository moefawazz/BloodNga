import React, { useState } from "react";
import { BoldTypography, RegularTypography } from "../../elements/typography/Typography";
import { useLang } from "../../contexts/LangContext";
import { FormContainer } from "../../globalStyles";
import StyledInput from "../../elements/styledInput/StyledInput";
import StyledButton from "../../elements/styledButton/StyledButton";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/authContext";

const Login = () => {
  const { translations, language } = useLang();
  const { signIn } = UserAuth();
  const navigate = useNavigate();
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
      await signIn(email, password);
      toast.success(translations.loggedInSuccessfully);
      navigate("/");
    } catch (error) {
      console.error("Login Error:", error.message);
      toast.error(translations.invalidCredentials || "Email or password are incorrect!");
    }
  };

  return (
    <FormContainer language={language}>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <div>
          <BoldTypography
            text={translations.logInToYourAccount}
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
          <RegularTypography text={translations.newToManageMate} />
          <Link to={"/signup"}>
            <p
              style={{
                fontFamily: "Primary Font-Regular",
                color: "#1980e6",
                textDecoration: "underline",
                textDecorationColor: "#1980e6",
              }}
            >
              {translations.signUpForAnAccount}
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
        <StyledButton title={translations.logIn} type="submit" />
      </form>
    </FormContainer>
  );
};

export default Login;
