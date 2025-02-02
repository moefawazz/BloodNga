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
  NavBarLinks,
  RetractedMenu,
} from "./NavBar.style";
import { useLang } from "../../contexts/LangContext";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/authContext";
import { useTheme } from "../../contexts/ThemeContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaBars } from "react-icons/fa"; 
import { BiLogIn, BiLogOut,BiDonateBlood } from "react-icons/bi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineBloodtype  } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import BloodLogo from "../../assests/BloodLogo.jpg"
const NavBar = () => {
  const { language, updateLanguage, translations } = useLang();
  const { logout, user } = UserAuth();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { theme, toggleTheme, themeMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false); 

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
        <img src={BloodLogo} width={"100px"} height={"48px"}/>
        </Logo>
      </LogoContainer>
      
      <NavBarLinks onClick={() => navigate("/")}>

Give Blood
     </NavBarLinks>
     <NavBarLinks onClick={() => navigate("/requestblood")}>
Request Blood
     </NavBarLinks>
     <NavBarLinks onClick={() => navigate("/cardgenerate")}>
Generate Card
     </NavBarLinks>
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
     
      </ButtonsContainer>

      {menuOpen && (
        <MenuContainer theme={theme} language={language}>
             <MenuItem onClick={() => navigate("/")}>
             <MdOutlineBloodtype size={20}/>
            <RetractedMenu>Donate Blood</RetractedMenu>
          </MenuItem>
             <MenuItem onClick={() => navigate("/RequestBlood")}>
             <BiDonateBlood size={20} />
            <RetractedMenu>Request Blood</RetractedMenu>
          </MenuItem>
             <MenuItem onClick={() => navigate("/CardGenerate")}>
             <IoIosInformationCircleOutline size={20}/>
            <RetractedMenu>Generate Card</RetractedMenu>
          </MenuItem>
          {isLoggedIn ? (
            <MenuItem onClick={handleLogout}>
              <BiLogIn size={20}/>
              <RetractedMenu>{translations.logOut}</RetractedMenu>
            </MenuItem>
          ) : (
            <MenuItem onClick={() => navigate("/login")}>
              <BiLogOut size={20}/>
              <RetractedMenu>{translations.logIn}</RetractedMenu>
            </MenuItem>
          )}
       
         
        </MenuContainer>
      )}
    </Header>
  );
};

export default NavBar;
