// src/api/reservasAPI.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Función para obtener todas las reservas
export const obtenerReservas = async () => {
  try {
    const response = await apiClient.get('/api/reservas');
    return response.data;
  } catch (error) {
    console.error('Error fetching reservas:', error);
    throw error;
  }
};

// Función para obtener una reserva por ID
export const obtenerReservaPorId = async (id) => {
  try {
    const response = await apiClient.get(`/api/reservas/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reserva by ID:', error);
    throw error;
  }
};

// Función para crear una nueva reserva
export const crearReserva = async (reservaData) => {
  try {
    const response = await apiClient.post('/api/reservas', reservaData);
    return response.data;
  } catch (error) {
    console.error('Error creating reserva:', error);
    throw error;
  }
};

// Función para actualizar una reserva por ID
export const actualizarReserva = async (id, reservaData) => {
  try {
    const response = await apiClient.put(`/api/reservas/${id}`, reservaData);
    return response.data;
  } catch (error) {
    console.error('Error updating reserva:', error);
    throw error;
  }
};

// Función para eliminar una reserva por ID
export const eliminarReserva = async (id) => {
  try {
    const response = await apiClient.delete(`/api/reservas/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting reserva:', error);
    throw error;
  }
};
