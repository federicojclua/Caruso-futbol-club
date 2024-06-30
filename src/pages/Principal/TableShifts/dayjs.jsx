// src/utils/dayjs.jsx
import dayjs from 'dayjs';

export const isBeforeCurrentDateTime = (fecha, hora) => {
  const fechaHoraSeleccionada = dayjs(`${fecha} ${hora}`, 'YYYY-MM-DD HH:mm');
  const fechaHoraActual = dayjs();
  return fechaHoraSeleccionada.isBefore(fechaHoraActual);
};

export default dayjs;