import React, { useState } from 'react';
import AgregarTurno from '../Principal/AgregarTurnos/AgregarTurnos';
import TurnosTabla from '../Principal/TableShifts/TurnosTabla';
import NavBar from '../../components/header/nav-bar/NavBar'; 
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import './Principal.css';
import Footer from '../../components/footer/Footer';
import Precios from './Price/Price';
import pngBall from '../../assets/img/pngball.png';

const Principal = () => {
  const [turnos, setTurnos] = useState([]);
  const [sucursalSeleccionada, setSucursalSeleccionada] = useState('');
  const [tipoCancha, setTipoCancha] = useState('');
  const [fecha, setFecha] = useState('');

  const sucursales = [
    {
      id: 'sucursal1',
      nombre: 'Sucursal Paso del Rey',
      canchas: [
        { id: 'cancha1', nombre: 'Cancha 1' },
        { id: 'cancha2', nombre: 'Cancha 2' },
        { id: 'cancha3', nombre: 'Cancha 3' },
      ],
    },
    {
      id: 'sucursal2',
      nombre: 'Sucursal Merlo',
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
    alert('¡Tu Turno fue registrado con éxito! Por cualquier cambio, consultá con el Administrador.');
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
            <div>Hacé tu Reserva</div>
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
                <option value="">Seleccionar Sucursal</option>
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
                <option value="futbol5">Fútbol 5</option>
                <option value="futbol7">Fútbol 7</option>
                <option value="futbol9">Fútbol 9</option>
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
          <p>Para reservar tu turno, seguí estos simples pasos:</p>
          <ol>
            <li>Seleccioná la sucursal donde deseas jugar.</li>
            <li>Elegí la fecha en la que querés reservar.</li>
            <li>Escogé el tipo de cancha que prefieras.</li>
            <li>Luego, hacé click en el horario deseado</li>
            <li>Asegurate de que se haya seleccionado bien, según el tipo de cancha (f5 1 cancha, f7 2 canchas, f9 3 canchas)</li>
            <li>Para confirmar recibirás un correo, luego abonás la seña</li>
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
