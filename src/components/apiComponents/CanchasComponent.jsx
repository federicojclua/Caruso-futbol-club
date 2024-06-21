// src/components/CanchasComponent.jsx
import React, { useEffect, useState } from 'react';
import { obtenerCanchasDisponibles, crearCancha, actualizarCancha, eliminarCancha } from '../apiComponentes/canchasAPI';

const CanchasComponent = () => {
  const [canchas, setCanchas] = useState([]);
  const [sucursal, setSucursal] = useState('');
  const [newCancha, setNewCancha] = useState({
    nombre: '',
    tipo: '',
    sucursal: '',
  });

  useEffect(() => {
    if (sucursal) {
      const fetchCanchas = async () => {
        try {
          const data = await obtenerCanchasDisponibles(sucursal);
          setCanchas(data);
        } catch (error) {
          console.error('Error obteniendo canchas disponibles:', error);
        }
      };

      fetchCanchas();
    }
  }, [sucursal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCancha(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCreateCancha = async (e) => {
    e.preventDefault();
    try {
      const createdCancha = await crearCancha(newCancha);
      setCanchas([...canchas, createdCancha]);
    } catch (error) {
      console.error('Error creando cancha:', error);
    }
  };

  const handleUpdateCancha = async (id, updatedData) => {
    try {
      const updatedCancha = await actualizarCancha(id, updatedData);
      setCanchas(canchas.map(cancha => (cancha._id === id ? updatedCancha : cancha)));
    } catch (error) {
      console.error('Error actualizando cancha:', error);
    }
  };

  const handleDeleteCancha = async (id) => {
    try {
      await eliminarCancha(id);
      setCanchas(canchas.filter(cancha => cancha._id !== id));
    } catch (error) {
      console.error('Error eliminando cancha:', error);
    }
  };

  return (
    <div>
      <h1>Canchas Disponibles</h1>
      <div>
        <input
          type="text"
          value={sucursal}
          onChange={(e) => setSucursal(e.target.value)}
          placeholder="Sucursal"
        />
      </div>
      <ul>
        {canchas.map(cancha => (
          <li key={cancha._id}>
            {cancha.nombre} - {cancha.tipo} - {cancha.sucursal}
            <button onClick={() => handleUpdateCancha(cancha._id, { ...cancha, nombre: 'Nombre Actualizado' })}>Actualizar</button>
            <button onClick={() => handleDeleteCancha(cancha._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h2>Crear Cancha</h2>
      <form onSubmit={handleCreateCancha}>
        <input
          type="text"
          name="nombre"
          value={newCancha.nombre}
          onChange={handleChange}
          placeholder="Nombre"
        />
        <input
          type="text"
          name="tipo"
          value={newCancha.tipo}
          onChange={handleChange}
          placeholder="Tipo"
        />
        <input
          type="text"
          name="sucursal"
          value={newCancha.sucursal}
          onChange={handleChange}
          placeholder="Sucursal"
        />
        <button type="submit">Crear Cancha</button>
      </form>
    </div>
  );
};

export default CanchasComponent;
