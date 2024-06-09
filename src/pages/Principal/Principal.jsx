import React, { useState } from 'react';
import AgregarTurno from '../Principal/AgregarTurnos/AgregarTurnos';
import TurnosTabla from '../Principal/TableShifts/TurnosTabla';

const Principal = () => {
  const [turnos, setTurnos] = useState([]);
  const [sucursalSeleccionada, setSucursalSeleccionada] = useState('');

  const sucursales = [
    {
      id: 'sucursal1',
      nombre: 'Sucursal 1',
      canchas: [
        { id: 'cancha1', nombre: 'Cancha 1' },
        { id: 'cancha2', nombre: 'Cancha 2' },
        { id: 'cancha3', nombre: 'Cancha 3' },
      ],
    },
    {
      id: 'sucursal2',
      nombre: 'Sucursal 2',
      canchas: [
        { id: 'cancha1', nombre: 'Cancha 1' },
        { id: 'cancha2', nombre: 'Cancha 2' },
        { id: 'cancha3', nombre: 'Cancha 3' },
        { id: 'cancha4', nombre: 'Cancha 4' },
      ],
    },
  ];

  const agregarTurno = (nuevoTurno) => {
    setTurnos([...turnos, nuevoTurno]);
  };

  return (
    <div>
      <h1>Gestión de Turnos</h1>
      <label>
        Seleccionar Sucursal:
        <select
          value={sucursalSeleccionada}
          onChange={(e) => setSucursalSeleccionada(e.target.value)}
        >
          <option value="">Seleccionar sucursal</option>
          {sucursales.map((sucursal) => (
            <option key={sucursal.id} value={sucursal.id}>
              {sucursal.nombre}
            </option>
          ))}
        </select>
      </label>
      {sucursalSeleccionada && (
        <>
          <AgregarTurno
            agregarTurno={agregarTurno}
            sucursal={sucursales.find((s) => s.id === sucursalSeleccionada)}
          />
          <TurnosTabla
            turnos={turnos.filter(turno => turno.sucursal === sucursalSeleccionada)}
            sucursal={sucursales.find((s) => s.id === sucursalSeleccionada)}
          />
        </>
      )}
    </div>
  );
};

export default Principal;
