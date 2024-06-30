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
<<<<<<< HEAD
    return <Navigate to="/principal" />;
=======
    return <Navigate to="/admin" />;
>>>>>>> 57692c22443fefac9dca157ba3f37a61c6fcc40c
  }

  return children;
};


export default ProtectedRoute;
