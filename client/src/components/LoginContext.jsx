import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export const LoginContext = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authenticate = () => {
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, authenticate }}>
      {children}
    </AuthContext.Provider>
  );
};