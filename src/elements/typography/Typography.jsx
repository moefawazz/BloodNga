import { useTheme } from "../../contexts/ThemeContext";
import { TextElement } from "../text/Text";


export const BoldTypography = ({ tag = "p", fontSize = "16px", color,  text, fontStyle, }) => {
  const { theme } = useTheme();
  return (
    <TextElement
      tag={tag}
      text={text}
      fontSize={fontSize}
      fontFamily="Primary Font-Bold"
      color={color || theme.textPrimary}
      fontStyle={fontStyle}
    />
  );
};

export const MediumTypography = ({ tag = "p", fontSize = "16px", color, text, fontStyle, }) => {
  const { theme } = useTheme();
  return (
    <TextElement
      tag={tag}
      text={text}
      fontSize={fontSize}
      fontFamily="Primary Font-Medium"
      color={color ||  theme.textPrimary}
      fontStyle={fontStyle}
    />
  );
};

export const LightTypography = ({ tag = "p", fontSize = "16px", color, text, fontStyle, }) => {
  const { theme } = useTheme();
  return (
    <TextElement
      tag={tag}
      text={text}
      fontSize={fontSize}
      fontFamily="Primary Font-Light"
      color={color || theme.textPrimary}
      fontStyle={fontStyle}
    />
  );
};

export const RegularTypography = ({ tag = "p", fontSize = "16px", color, text, fontStyle, }) => {
  const { theme } = useTheme();
  return (
    <TextElement
      tag={tag}
      text={text}
      fontSize={fontSize}
      fontFamily="Primary Font-Regular"
      color={color || theme.textPrimary}
      fontStyle={fontStyle}
    />
  );
};
