import React, { createContext, useContext, useEffect, useState } from 'react';
import en from '../langs/en';
import ar from '../langs/ar';

// Create the context
const LangContext = createContext();

// LangProvider to manage and provide translations
export const LangProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const [translations, setTranslations] = useState(language === 'en' ? en : ar);

  // Update translations when language changes
  useEffect(() => {
    setTranslations(language === 'en' ? en : ar);
    localStorage.setItem('language', language); // Save to localStorage
  }, [language]);

  // Function to update the language
  const updateLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LangContext.Provider value={{ translations, language, updateLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

// Custom hook to use translations
export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
};
