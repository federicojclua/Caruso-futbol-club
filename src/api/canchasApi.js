// src/api/canchasAPI.js

import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Función para obtener canchas disponibles por sucursal
export const obtenerCanchasDisponibles = async (sucursal) => {
  try {
    const response = await apiClient.get(`/api/canchas/disponibles/${sucursal}`);
    return response.data;
  } catch (error) {
    console.error('Error obteniendo canchas disponibles:', error);
    throw error;
  }
};

// Función para crear una nueva cancha
export const crearCancha = async (canchaData) => {
  try {
    const response = await apiClient.post('/api/canchas', canchaData);
    return response.data;
  } catch (error) {
    console.error('Error creando cancha:', error);
    throw error;
  }
};

// Función para actualizar una cancha por ID
export const actualizarCancha = async (id, canchaData) => {
  try {
    const response = await apiClient.put(`/api/canchas/${id}`, canchaData);
    return response.data;
  } catch (error) {
    console.error('Error actualizando cancha:', error);
    throw error;
  }
};

// Función para eliminar una cancha por ID
export const eliminarCancha = async (id) => {
  try {
    const response = await apiClient.delete(`/api/canchas/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error eliminando cancha:', error);
    throw error;
  }
};

export default apiClient; 
