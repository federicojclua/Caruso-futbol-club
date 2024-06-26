// src/api/authAPI.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL:  import.meta.env.VITE_APP_API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Función para registrar un nuevo usuario
export const register = async (userData) => {
  try {
    const response = await apiClient.post('/api/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error registrando usuario:', error);
    throw error;
  }
};

// Función para registrar un nuevo administrador
export const registerAdmin = async (adminData) => {
  try {
    const response = await apiClient.post('/api/auth/register-admin', adminData);
    return response.data;
  } catch (error) {
    console.error('Error registrando administrador:', error);
    throw error;
  }
};

// Función para iniciar sesión
export const login = async (credentials) => {
  try {
    const response = await apiClient.post('/api/auth/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Error iniciando sesión:', error);
    throw error;
  }
};

// Función para cerrar sesión
export const logout = async () => {
  try {
    await apiClient.get('/api/auth/logout');
    return true; // Indica que la operación de logout fue exitosa
  } catch (error) {
    console.error('Error cerrando sesión:', error);
    throw error;
  }
};

export default apiClient; 