import React, { useContext } from 'react';
import { Navigate,Outlet } from 'react-router-dom';
import { AuthContext } from './LoginContext';

export const ProtectedRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <Outlet/>;
};