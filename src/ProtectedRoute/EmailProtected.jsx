// components/EmailProtectedRoute.js
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserAuth } from '../../context/authContext/authContext';

const AllowedEmails = ['Trenchtribu@gmail.com'];

const EmailProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to='/' />;
  }

  if (!AllowedEmails.includes(user.email)) {
    return <Navigate to='/unauthorized' />;
  }

  return <Routes>{children}</Routes>;
};

export default EmailProtectedRoute;
