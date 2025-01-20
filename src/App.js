import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Navbar from "./components/navbar/Navbar";
import Items from "./views/items/Items";
import Users from "./views/users/Users";
import Profits from "./views/profits/Profits";
import Payments from "./views/payments/Payments";
import { LangProvider, useLang } from "./contexts/LangContext";
import Login from "./views/login/Login";
import SignUp from "./views/signUp/SignUp";
import { AuthContextProvider } from "./contexts/authContext";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import NotFound from "./views/notFound/NotFound";
import Statistics from "./views/statistics/Statistics";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { StyledToastContainer } from "./globalStyles";

function AppContent() {
  const { theme } = useTheme();
  const { language } = useLang()

  useEffect(() => {
    document.body.style.backgroundColor = theme.backgroundColor;
    document.body.style.color = theme.textPrimary;
  }, [theme]);

  useEffect(() => {
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language]);

  return (
    <BrowserRouter>
      <Navbar />
      <StyledToastContainer
      position={language === 'ar' ? "top-left" : "top-right"}
      rtl={language === 'ar' ? 'rtl' : ''}
      />
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/items" element={<ProtectedRoute><Items /></ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
        <Route path="/payments" element={<ProtectedRoute><Payments /></ProtectedRoute>} />
        <Route path="/profits" element={<ProtectedRoute><Profits /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/statistics" element={<ProtectedRoute><Statistics /></ProtectedRoute>} />
        <Route path="/*" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <ThemeProvider> {/* ThemeProvider is now the topmost provider */}
      <AuthContextProvider>
        <LangProvider>
          <AppContent />
        </LangProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
