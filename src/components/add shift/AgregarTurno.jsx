import React, { useState } from 'react';

const AgregarTurno = ({ agregarTurno, sucursal }) => {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [canchaSeleccionada, setCanchaSeleccionada] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTurno({ fecha, hora, sucursal: sucursal.id, cancha: canchaSeleccionada });
    setFecha('');
    setHora('');
    setCanchaSeleccionada('');
  };

  const horarios = ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'];

  return (
    <div>
      <h2>Agregar Turno en {sucursal.nombre}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Fecha:
          <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        </label>
        <label>
          Hora:
          <select value={hora} onChange={(e) => setHora(e.target.value)}>
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
          <select value={canchaSeleccionada} onChange={(e) => setCanchaSeleccionada(e.target.value)}>
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

