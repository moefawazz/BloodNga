import React, { useEffect, useState } from "react";
import {
  Header,
  LogoContainer,
  Logo,
  Title,
  ButtonsContainer,
  Button,
  HamburgerIcon,
  MenuContainer,
  MenuItem,
} from "./NavBar.style";
import { useLang } from "../../contexts/LangContext";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/authContext";
import { useTheme } from "../../contexts/ThemeContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaBars } from "react-icons/fa"; 
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { GrLanguage } from "react-icons/gr";

const NavBar = () => {
  const { language, updateLanguage, translations } = useLang();
  const { logout, user } = UserAuth();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { theme, toggleTheme, themeMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false); // state to toggle menu on small screens

  useEffect(() => {
    setIsLoggedIn(!!user);
  }, [user]);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    updateLanguage(newLanguage);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen); // toggle the menu state

  return (
    <Header theme={theme}>
      <LogoContainer onClick={() => navigate("/")}>
        <Logo>
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
              fill={'#1980e6'}
            ></path>
          </svg>
        </Logo>
        <Title color={theme.textPrimary}>ManageMate</Title>
      </LogoContainer>

      <HamburgerIcon onClick={toggleMenu}>
        <FaBars size={24} />
      </HamburgerIcon>

      <ButtonsContainer>
        {isLoggedIn ? (
          <Button primary onClick={handleLogout} theme={theme}>
            <span>{translations.logOut}</span>
          </Button>
        ) : (
          <Button primary onClick={() => navigate("/login")} theme={theme}>
            <span>{translations.logIn}</span>
          </Button>
        )}
        <Button onClick={toggleLanguage} theme={theme}>
        <GrLanguage size={20}/>
        </Button>
        <Button
          onClick={toggleTheme}
          style={{ fontSize: "20px" }}
          theme={theme}
        >
          {themeMode === "dark" ? (
            <MdOutlineDarkMode />
          ) : (
            <MdOutlineLightMode />
          )}
        </Button>
      </ButtonsContainer>

      {menuOpen && (
        <MenuContainer theme={theme} language={language}>
          {isLoggedIn ? (
            <MenuItem onClick={handleLogout}>
              <BiLogIn size={20}/>
              <div>{translations.logOut}</div>
            </MenuItem>
          ) : (
            <MenuItem onClick={() => navigate("/login")}>
              <BiLogOut size={20}/>
              <div>{translations.logIn}</div>
            </MenuItem>
          )}
          <MenuItem onClick={toggleLanguage}>
            <GrLanguage size={20}/>
            <div>{translations.language}</div>
          </MenuItem>
          <MenuItem onClick={toggleTheme}>
            {themeMode === "dark" ? (
              <>
                <MdOutlineDarkMode size={20}/> <div>{translations.dark}</div>
              </>
            ) : (
              <>
                <MdOutlineLightMode size={20}/> <div>{translations.light}</div>
              </>
            )}
          </MenuItem>
        </MenuContainer>
      )}
    </Header>
  );
};

export default NavBar;
