import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
<<<<<<< HEAD
// import './Formulario.css';
=======
import './Formulario.css';
>>>>>>> ee8c70e (Se agrego sistema de reservas, principal.jsx y css, tambien AgregarTurnos, Formulario y TurnosTabla)



const Formulario = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');

  const generateTimeSlots = () => {
    const times = [];
    const startOfDay = moment(selectedDate).startOf('day');
    for (let i = 0; i < 24; i++) {
      times.push(startOfDay.clone().add(i, 'hours').format('HH:mm'));
    }
    return times;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(''); // Reset time when date changes
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Fecha seleccionada: ${moment(selectedDate).format('YYYY-MM-DD')}\nHora seleccionada: ${selectedTime}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Selecciona una fecha:</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <div>
        <label>Selecciona una hora:</label>
        <select value={selectedTime} onChange={handleTimeChange}>
          <option value="">Selecciona una hora</option>
          {generateTimeSlots().map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
