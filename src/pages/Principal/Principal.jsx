import React, { useState } from 'react';
import AgregarTurno from '../components/AgregarTurno';
import TurnosTabla from '../components/TurnosTabla';
import NavBar from '../components/nav-bar/Nav-bar'; // Ruta corregida
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';
import './Principal.css';
import Footer from '../components/footer/Footer';


const Principal = () => {
  const [turnos, setTurnos] = useState([]);
  const [sucursalSeleccionada, setSucursalSeleccionada] = useState('');
  const [tipoCancha, setTipoCancha] = useState('');
  const [fecha, setFecha] = useState('');
  const [tipoCancha, setTipoCancha] = useState('');
  const [fecha, setFecha] = useState('');

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
    alert('Su turno fue registrado con éxito. Por cualquier cambio consulte con el administrador.');
    alert('Su turno fue registrado con éxito. Por cualquier cambio consulte con el administrador.');
  };

  return (
    
    <div className="container">
      <NavBar/>
      
      <video className="video-bg" autoplay loop muted>
        <source src="/assets/video/video-sistema.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <div className="content">
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
            <label>
              Fecha:
              <input
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </label>
            <label>
              Seleccionar tipo de cancha:
              <select
                value={tipoCancha}
                onChange={(e) => setTipoCancha(e.target.value)}
              >
                <option value="">Seleccionar tipo de cancha</option>
                <option value="futbol5">Futbol 5</option>
                <option value="futbol7">Futbol 7</option>
                <option value="futbol9">Futbol 9</option>
              </select>
            </label>
            <TurnosTabla
              turnos={turnos}
              sucursal={sucursales.find((s) => s.id === sucursalSeleccionada)}
              tipoCancha={tipoCancha}
              fecha={fecha}
              agregarTurno={agregarTurno}
            />
          </>
        )}
      </div>
      
      <WhatsAppButton />
      <Footer/>
      
    </div>
  );
};

export default Principal;