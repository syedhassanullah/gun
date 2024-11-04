import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("TOKEN") || null);

  const storetokenInLS = (newToken) => {
    setToken(newToken);
    localStorage.setItem("TOKEN", newToken);
  };

  const Logoutuser = () => {
    setToken(null);
    localStorage.removeItem("TOKEN");
  };

  return (
    <AuthContext.Provider value={{ token, storetokenInLS, Logoutuser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
