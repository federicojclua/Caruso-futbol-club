import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './TurnosTabla.css';
import Moment from './moment';  // Importando el componente Moment

const TurnosTabla = ({ turnos, sucursal, tipoCancha, fecha, agregarTurno }) => {
  const horarios = ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
  const [turnosLocales, setTurnosLocales] = useState([]);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  useEffect(() => {
    setTurnosLocales(turnos.filter(turno => turno.sucursal === sucursal.id && turno.fecha === fecha));
  }, [turnos, sucursal.id, fecha]);

  const estaOcupado = (horario, cancha) => {
    return !!turnosLocales.find(turno => turno.hora === horario && turno.cancha === cancha);
  };

  const estaOcupadoParaFutbol7 = (horario, cancha) => {
    const index = sucursal.canchas.findIndex(c => c.id === cancha);
    if (index !== -1 && index + 1 < sucursal.canchas.length) {
      const canchaPar = sucursal.canchas[index + 1]?.id;
      return estaOcupado(horario, cancha) || estaOcupado(horario, canchaPar);
    }
    return false;
  };

  const estaOcupadoParaFutbol9 = (horario, cancha) => {
    const index = sucursal.canchas.findIndex(c => c.id === cancha);
    if (index !== -1 && index + 2 < sucursal.canchas.length) {
      const cancha1 = sucursal.canchas[index]?.id;
      const cancha2 = sucursal.canchas[index + 1]?.id;
      const cancha3 = sucursal.canchas[index + 2]?.id;
      return (
        estaOcupado(horario, cancha1) ||
        estaOcupado(horario, cancha2) ||
        estaOcupado(horario, cancha3)
      );
    }
    return false;
  };

  const handleTurnoClick = (horario, cancha) => {
    const index = sucursal.canchas.findIndex(c => c.id === cancha);
    const fechaHoraSeleccionada = moment(`${fecha} ${horario}`, 'YYYY-MM-DD HH:mm');
    const fechaHoraActual = moment();

    if (fechaHoraSeleccionada.isBefore(fechaHoraActual)) {
      setMostrarAlerta(true);
      return;
    }

    let nuevosTurnos = [];

    if (tipoCancha === 'futbol5' && !estaOcupado(horario, cancha)) {
      const nuevoTurno = { fecha, hora: horario, sucursal: sucursal.id, cancha };
      agregarTurno(nuevoTurno);
      nuevosTurnos = [...turnosLocales, nuevoTurno];
    } else if (tipoCancha === 'futbol7' && !estaOcupadoParaFutbol7(horario, cancha)) {
      if (index + 1 < sucursal.canchas.length) {
        const canchaPar = sucursal.canchas[index + 1]?.id;
        const nuevoTurno1 = { fecha, hora: horario, sucursal: sucursal.id, cancha };
        const nuevoTurno2 = { fecha, hora: horario, sucursal: sucursal.id, cancha: canchaPar };
        agregarTurno(nuevoTurno1);
        agregarTurno(nuevoTurno2);
        nuevosTurnos = [...turnosLocales, nuevoTurno1, nuevoTurno2];
      }
    } else if (tipoCancha === 'futbol9' && !estaOcupadoParaFutbol9(horario, cancha)) {
      if (index + 2 < sucursal.canchas.length) {
        const cancha2 = sucursal.canchas[index + 1]?.id;
        const cancha3 = sucursal.canchas[index + 2]?.id;
        const nuevoTurno1 = { fecha, hora: horario, sucursal: sucursal.id, cancha };
        const nuevoTurno2 = { fecha, hora: horario, sucursal: sucursal.id, cancha: cancha2 };
        const nuevoTurno3 = { fecha, hora: horario, sucursal: sucursal.id, cancha: cancha3 };
        agregarTurno(nuevoTurno1);
        agregarTurno(nuevoTurno2);
        agregarTurno(nuevoTurno3);
        nuevosTurnos = [...turnosLocales, nuevoTurno1, nuevoTurno2, nuevoTurno3];
      }
    }

    setTurnosLocales(nuevosTurnos);
  };

  useEffect(() => {
    if (mostrarAlerta) {
      alert('No se puede reservar en una fecha y hora pasadas.');
      setMostrarAlerta(false);
    }
  }, [mostrarAlerta]);

  return (
    <div className="turnos-tabla-container">
      <h2 className="turnos-tabla-titulo">Turnos en {sucursal.nombre} para el {moment(fecha).format('DD/MM/YYYY')}</h2>
      <Moment /> {/* Renderizando el componente Moment */}
      <table className="turnos-tabla">
        <thead>
          <tr>
            <th>Horario</th>
            {sucursal.canchas.map((cancha) => (
              <th key={cancha.id}>{cancha.nombre}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {horarios.map((horario) => (
            <tr key={horario}>
              <td>{`${horario}:00`}</td>
              {sucursal.canchas.map((cancha) => {
                const ocupado = estaOcupado(horario, cancha.id);
                const ocupadoFutbol7 = tipoCancha === 'futbol7' && estaOcupadoParaFutbol7(horario, cancha.id);
                const ocupadoFutbol9 = tipoCancha === 'futbol9' && estaOcupadoParaFutbol9(horario, cancha.id);

                return (
                  <td
                    key={cancha.id}
                    className={ocupado || ocupadoFutbol7 || ocupadoFutbol9 ? 'ocupado' : 'disponible'}
                    onClick={() => handleTurnoClick(horario, cancha.id)}
                  >
                    {ocupado || ocupadoFutbol7 || ocupadoFutbol9 ? 'Ocupado' : 'Disponible'}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TurnosTabla;
