import React from "react";
import { BoldTypography, RegularTypography } from "../typography/Typography";
import { IoIosArrowBack } from "react-icons/io";
import { ArrowTitle, Container } from "./HeaderNavigator.style";
import { useNavigate } from "react-router-dom";
import { useLang } from "../../contexts/LangContext";

const HeaderNavigator = ({ title, description}) => {
    const navigate = useNavigate()
    const { language } = useLang()
  return (
    <Container>
      <ArrowTitle onClick={()=>navigate(-1)}>
        <IoIosArrowBack fontSize={32} style={{transform: language === 'ar' ? 'rotate(180deg)' : ''}}/>
        <BoldTypography text={title} fontSize="32px" />
      </ArrowTitle>
      <RegularTypography text={description} fontSize="14px" color={"#637588"}/>
    </Container>
  );
};

export default HeaderNavigator;
