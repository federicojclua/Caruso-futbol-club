import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated }) => {
  // Si el usuario está autenticado, renderiza el componente
  // Si no, redirige a la página de inicio de sesión
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
