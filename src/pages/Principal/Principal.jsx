import React, { useState } from 'react';
import AgregarTurno from '../Principal/AgregarTurnos/AgregarTurnos';
import TurnosTabla from '../Principal/TableShifts/TurnosTabla';
import NavBar from '../../components/header/nav-bar/NavBar'; 
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import './Principal.css';
import Footer from '../../components/footer/Footer';
import Precios from './Price/Price';

const Principal = () => {
  const [turnos, setTurnos] = useState([]);
  const [sucursalSeleccionada, setSucursalSeleccionada] = useState('');
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
  };

  return (
    <div className="container-principal">
      <NavBar />
      <video className="video-bg" autoPlay loop muted>
        <source src="/assets/video/video-sistema.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <div className="content">
        <h3 className="title-principal">Hace tu reserva </h3>
        <Precios />
        <div className="form-container">
          <label className="label-principal">
            Seleccionar Sucursal:
            <select
              className="selector"  
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
          <label >
            Fecha:
            <input className="selector"
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </label>
          <label >
            Seleccionar tipo de cancha:
            <select className="selector"
              value={tipoCancha}
              onChange={(e) => setTipoCancha(e.target.value)}
            >
              <option value="">Seleccionar tipo de cancha</option>
              <option value="futbol5">Futbol 5</option>
              <option value="futbol7">Futbol 7</option>
              <option value="futbol9">Futbol 9</option>
            </select>
          </label>
        </div>
        {sucursalSeleccionada && (
          <TurnosTabla
            turnos={turnos}
            sucursal={sucursales.find((s) => s.id === sucursalSeleccionada)}
            tipoCancha={tipoCancha}
            fecha={fecha}
            agregarTurno={agregarTurno}
          />
        )}
      </div>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Principal;
