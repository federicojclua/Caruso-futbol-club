// src/components/ReservasComponent.jsx
import React, { useEffect, useState } from 'react';
import { obtenerReservas, crearReserva, actualizarReserva, eliminarReserva } from '../apiComponentes/reservasAPI';

const ReservasComponent = () => {
  const [reservas, setReservas] = useState([]);
  const [newReserva, setNewReserva] = useState({
    userId: '',
    fieldId: '',
    fecha: '',
    hora: ''
  });

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const data = await obtenerReservas();
        setReservas(data);
      } catch (error) {
        console.error('Error fetching reservas:', error);
      }
    };

    fetchReservas();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReserva(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCreateReserva = async (e) => {
    e.preventDefault();
    try {
      const createdReserva = await crearReserva(newReserva);
      setReservas([...reservas, createdReserva]);
    } catch (error) {
      console.error('Error creating reserva:', error);
    }
  };

  const handleUpdateReserva = async (id, updatedData) => {
    try {
      const updatedReserva = await actualizarReserva(id, updatedData);
      setReservas(reservas.map(reserva => (reserva._id === id ? updatedReserva : reserva)));
    } catch (error) {
      console.error('Error updating reserva:', error);
    }
  };

  const handleDeleteReserva = async (id) => {
    try {
      await eliminarReserva(id);
      setReservas(reservas.filter(reserva => reserva._id !== id));
    } catch (error) {
      console.error('Error deleting reserva:', error);
    }
  };

  return (
    <div>
      <h1>Reservas</h1>
      <form onSubmit={handleCreateReserva}>
        <input
          type="text"
          name="userId"
          value={newReserva.userId}
          
