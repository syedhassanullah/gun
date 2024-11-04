import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();

  // If there's no token, redirect to the login page
  return token ? children : <Navigate to="/adminlogin" />;
};

export default ProtectedRoute;
