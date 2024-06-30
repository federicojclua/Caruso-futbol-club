import React, { useState } from 'react';
import dayjs from 'dayjs'; // Importa dayjs
import 'dayjs/locale/es'; // Importa el idioma español si lo necesitas
import './AgregarTurnos.css';

const AgregarTurno = ({ agregarTurno, sucursal }) => {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [canchaSeleccionada, setCanchaSeleccionada] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const fechaHoraSeleccionada = dayjs(`${fecha} ${hora}`, 'YYYY-MM-DD HH:mm'); // Usa dayjs con fecha y hora
    const fechaHoraActual = dayjs();

    if (fechaHoraSeleccionada.isBefore(fechaHoraActual)) {
      setError('No se puede reservar en una fecha y hora pasadas.');
      return;
    }

    agregarTurno({ fecha, hora, sucursal: sucursal.id, cancha: canchaSeleccionada });
    setFecha('');
    setHora('');
    setCanchaSeleccionada('');
    setError('');
  };

  const horarios = ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];

  return (
    <div className="agregar-turno-container">
      <h2>Agregar Turno en {sucursal.nombre}</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Fecha:
          <input 
            type="date" 
            value={fecha} 
            onChange={(e) => setFecha(e.target.value)} 
            className="fecha-selector" 
          />
        </label>
        <label>
          Hora:
          <select 
            value={hora} 
            onChange={(e) => setHora(e.target.value)}
            className="hora-selector"
          >
            <option value="">Seleccionar hora</option>
            {horarios.map((horario) => (
              <option key={horario} value={`${horario}:00`}>
                {horario}:00
              </option>
            ))}
          </select>
        </label>
        <label>
          Cancha:
          <select 
            value={canchaSeleccionada} 
            onChange={(e) => setCanchaSeleccionada(e.target.value)}
            className="cancha-selector"
          >
            <option value="">Seleccionar cancha</option>
            {sucursal.canchas.map((cancha) => (
              <option key={cancha.id} value={cancha.id}>
                {cancha.nombre}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" disabled={!fecha || !hora || !canchaSeleccionada}>
          Agregar Turno
        </button>
      </form>
    </div>
  );
};

export default AgregarTurno;
