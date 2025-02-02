import React from "react";
import { Bold, MainDiv, SmallText, StyledSvg } from "./requestDiv.style";

const RequestDiv = ({ svg, label, minilabel }) => {
  return (
    <MainDiv>
      {svg && <StyledSvg>{React.cloneElement(svg)}</StyledSvg>}
      <Bold>{label}</Bold>
      <SmallText>{minilabel}</SmallText>
    </MainDiv>
  );
};

export default RequestDiv;
