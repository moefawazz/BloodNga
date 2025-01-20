import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { PopupWrapper, PopupContent, CloseButton } from './PopUp.style';
import { useTheme } from '../../contexts/ThemeContext';
import { useLang } from '../../contexts/LangContext';

const Popup = ({ content, onClose }) => {
    const { theme } = useTheme()
    const { language } = useLang()
  return (
    <PopupWrapper language={language}>
      <PopupContent theme={theme}>
        {/* Close Button */}
        <CloseButton onClick={onClose} theme={theme} language={language}>
          <AiOutlineClose />
        </CloseButton>

        {/* Content */}
        <div>{content}</div>
      </PopupContent>
    </PopupWrapper>
  );
};

export default Popup;
