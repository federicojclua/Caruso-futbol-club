// src/components/AuthComponent.jsx

import React, { useState } from 'react';
import { register, registerAdmin, login, logout } from '../apiComponentes/authAPI';

const AuthComponent = () => {
  const [userData, setUserData] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    equipo: '',
    direccion: '',
    email: '',
    password: '',
  });

  const [adminData, setAdminData] = useState({
    nombre: '',
    email: '',
    password: '',
  });

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAdminChange = (e) => {
    const { name, value } = e.target;
    setAdminData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCredentialsChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUserRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await register(userData);
      console.log('Usuario registrado:', response);
      // Aquí puedes agregar lógica adicional después de registrar el usuario
    } catch (error) {
      console.error('Error registrando usuario:', error);
    }
  };

  const handleAdminRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerAdmin(adminData);
      console.log('Admin registrado:', response);
      // Aquí puedes agregar lógica adicional después de registrar el administrador
    } catch (error) {
      console.error('Error registrando administrador:', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(credentials);
      console.log('Inicio de sesión exitoso:', response);
      // Aquí puedes manejar el token de sesión o redirigir al usuario
    } catch (error) {
      console.error('Error iniciando sesión:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      console.log('Cierre de sesión exitoso');
      // Aquí puedes manejar la lógica después de cerrar sesión
    } catch (error) {
      console.error('Error cerrando sesión:', error);
    }
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleUserRegister}>
        {/* Campos del formulario para registro de usuario */}
      </form>

      <h2>Registro de Administrador</h2>
      <form onSubmit={handleAdminRegister}>
        {/* Campos del formulario para registro de administrador */}
      </form>

      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        {/* Campos del formulario para iniciar sesión */}
      </form>

      <h2>Cerrar Sesión</h2>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default AuthComponent;
