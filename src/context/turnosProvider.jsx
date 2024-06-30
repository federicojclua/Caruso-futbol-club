// turnosProviders.js

export const obtenerTurnos = () => {
    const turnos = localStorage.getItem('turnos');
    return turnos ? JSON.parse(turnos) : [];
  };
  
  export const guardarTurno = (nuevoTurno) => {
    const turnos = obtenerTurnos();
    turnos.push(nuevoTurno);
    localStorage.setItem('turnos', JSON.stringify(turnos));
  };
  
  export const eliminarTurno = (turnoAEliminar) => {
    const turnos = obtenerTurnos();
    const turnosActualizados = turnos.filter(turno => turno.id !== turnoAEliminar.id);
    localStorage.setItem('turnos', JSON.stringify(turnosActualizados));
  };
  