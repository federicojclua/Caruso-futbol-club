import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

// import './Formulario.css';

import './Formulario.css';


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
        <label>Seleccioná una fecha:</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <div>
        <label>Seleccioná un horario:</label>
        <select value={selectedTime} onChange={handleTimeChange}>
          <option value="">Seleccioná un horario</option>
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
