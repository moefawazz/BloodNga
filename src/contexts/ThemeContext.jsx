// contexts/ThemeContext.jsx
import React, { createContext, useContext, useState, useMemo } from 'react';
import { Colors } from '../constants/Colors';

// Define the shape of the context
const ThemeContext = createContext({
  theme: 'light', // Default theme ("light" or "dark")
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(() => {
    // Load theme from localStorage or default to 'light'
    return localStorage.getItem('themeMode') || 'light';
  });

  const toggleTheme = () => {
    setThemeMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeMode', newMode); // Save theme to localStorage
      return newMode;
    });
  };

  // Memoize the theme value
  const theme = useMemo(() => (themeMode === 'dark' ? Colors.dark : Colors.light), [themeMode]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
