// src/components/ProtectedRoute/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from "../../components/context/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, user } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (user.role !== 'user') {
    return <Navigate to="/principal" />;
  }

  return children;
};


export default ProtectedRoute;
