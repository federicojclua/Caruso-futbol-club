import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Principal from '../../pages/Principal/Principal';
import LoginPage from '../../pages/Login/Login';

const App = () => {
  // Supongamos que tienes una función que verifica si el usuario está autenticado
  const isAuthenticated = checkIfUserIsAuthenticated();

  return (
    <Router>
      <Routes>
        {/* Ruta protegida */}
        <ProtectedRoute
          path="/principal"
          element={<Principal />}
          isAuthenticated={isAuthenticated}
        />
        {/* Ruta de inicio de sesión */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
