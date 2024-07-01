import React from 'react';

const SucursalesInfo = () => {
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

  return (
    <div className="sucursales-info">
      <h2>Información de Sucursales</h2>
      {sucursales.map((sucursal) => (
        <div key={sucursal.id} className="sucursal">
          <h3>{sucursal.nombre}</h3>
          <ul>
            {sucursal.canchas.map((cancha) => (
              <li key={cancha.id}>{cancha.nombre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SucursalesInfo;
