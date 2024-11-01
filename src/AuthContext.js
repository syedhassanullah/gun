import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();    

export const AuthProvider = ({ children }) => {
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    // const login = () => setIsAuthenticated(true);
    // const logout = () => setIsAuthenticated(false);
    const storetokenInLS = (serverToken) =>{
        return localStorage.setItem("token", serverToken)
    }

    return (
        <AuthContext.Provider value={{ storetokenInLS }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);