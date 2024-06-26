// src/api/usuariosAPI.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Función para obtener todos los usuarios
export const getAllUsers = async () => {
  try {
    const response = await apiClient.get('/api/usuarios');
    return response.data;
  } catch (error) {
    console.error('Error fetching usuarios:', error);
    throw error;
  }
};

// Función para obtener un usuario por ID
export const getUserById = async (id) => {
  try {
    const response = await apiClient.get(`/api/usuarios/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching usuario by ID:', error);
    throw error;
  }
};

// Función para crear un nuevo usuario
export const createUser = async (usuarioData) => {
  try {
    const response = await apiClient.post('/api/usuarios', usuarioData);
    return response.data;
  } catch (error) {
    console.error('Error creating usuario:', error);
    throw error;
  }
};

// Función para actualizar un usuario
export const updateUser = async (id, usuarioData) => {
  try {
    const response = await apiClient.put(`/api/usuarios/${id}`, usuarioData);
    return response.data;
  } catch (error) {
    console.error('Error updating usuario:', error);
    throw error;
  }
};

// Función para eliminar un usuario
export const deleteUser = async (id) => {
  try {
    const response = await apiClient.delete(`/api/usuarios/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting usuario:', error);
    throw error;
  }
};
export default apiClient; 