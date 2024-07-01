import React, { useState } from 'react';
import AgregarTurno from '../Principal/AgregarTurnos/AgregarTurnos';
import TurnosTabla from '../Principal/TableShifts/TurnosTabla';
import NavBar from '../../components/header/nav-bar/NavBar'; 
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import './Principal.css';
import Footer from '../../components/footer/Footer';
import Precios from './Price/Price';
import pngBall from '../../assets/img/pngball.png';
import { obtenerTurnos, guardarTurno, eliminarTurno } from '../../context/turnosProvider'; // Ajusta la ruta de importación aquí

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



  // Obtener la fecha de hoy en formato adecuado
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Meses empiezan desde 0
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="container-principal">
      <NavBar />

      <div className="content">
      <h2 className="title-principal">
          <div className="ball-icons-container">
            <div className="ball-icons animate__animated animate__rollIn">
              <img src={pngBall} alt="Ball icon" />
            </div>
            <div>Hace tu reserva</div>
            <div className="ball-icons rollInRight">
              <img src={pngBall} alt="Ball icon" />
            </div>
          </div>
        </h2>

        <div className="content-section">
          <Precios />
          <div className="side-container-principal">
          <div className="form-container-principal">
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
            <label>
              Fecha:
              <input
                className="input-date"
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                min={getTodayDate()} // Establecer la fecha mínima
              />
            </label>
            <label>
              Seleccionar tipo de cancha:
              <select
                className="selector"
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
            <button
              className="btn-how-register"
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            >
              ¿Cómo reservar?
            </button>
          </div>
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

      <div id="how-register" className="how-register-section">
        <h3 className="how-register-title">¿Cómo reservar?</h3>
        <div className="how-register-content">
          <p>Para reservar tu turno, sigue estos simples pasos:</p>
          <ol>
            <li>Selecciona la sucursal donde deseas jugar.</li>
            <li>Elige la fecha en la que quieres reservar.</li>
            <li>Escoge el tipo de cancha que prefieras.</li>
            <li>Luego haz click en el horario que prefieras</li>
            <li>Asegurate que se haya seleccionado bien, según el tipo de cancha (f5 1 cancha, f7 2 canchas, f9 3 canchas)</li>
            <li>Para confirmar recibiras un correo, luego abonas la seña</li>
          </ol>
          <p>¡Y Listo! Tu turno será registrado y podrás disfrutar de tu juego.</p>
        </div>
      </div>
      
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Principal;
