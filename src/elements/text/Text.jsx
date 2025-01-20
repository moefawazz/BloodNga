import React from "react";

export const TextElement = ({ tag, text, fontSize, fontFamily, fontStyle, color }) => {

  const style = {
    fontSize: fontSize,
    fontFamily: fontFamily,
    fontStyle: fontStyle,
    color: color,
  };

  return React.createElement(tag, { style }, text);
};
