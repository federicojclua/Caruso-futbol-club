import React, { useEffect, useState } from 'react';
import { obtenerReservas, crearReserva, actualizarReserva, eliminarReserva } from '../../api/reservasApi';

const ReserverComponent = () => {
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
      setNewReserva({
        userId: '',
        fieldId: '',
        fecha: '',
        hora: ''
      });
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
          onChange={handleChange}
          placeholder="User ID"
          required
        />
        <input
          type="text"
          name="fieldId"
          value={newReserva.fieldId}
          onChange={handleChange}
          placeholder="Field ID"
          required
        />
        <input
          type="text"
          name="fecha"
          value={newReserva.fecha}
          onChange={handleChange}
          placeholder="Fecha"
          required
        />
        <input
          type="text"
          name="hora"
          value={newReserva.hora}
          onChange={handleChange}
          placeholder="Hora"
          required
        />
        <button type="submit">Crear Reserva</button>
      </form>

      <ul>
        {reservas.map(reserva => (
          <li key={reserva._id}>
            <div>
              <span>User ID: {reserva.userId}</span>
              <span>Field ID: {reserva.fieldId}</span>
              <span>Fecha: {reserva.fecha}</span>
              <span>Hora: {reserva.hora}</span>
            </div>
            <div>
              <button onClick={() => handleUpdateReserva(reserva._id, { ...reserva, fecha: 'nueva fecha' })}>Actualizar</button>
              <button onClick={() => handleDeleteReserva(reserva._id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReserverComponent;
