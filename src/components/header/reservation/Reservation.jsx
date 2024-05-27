import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Eliminamos la importación de Dropdown aquí
import "./Reservation.css";
import List from './List/List'

const Reservation = () => {
  return (
    <>
      <div className="reservation-container">
        <div className="reservation-button">
          <h2>Hace tu reservación</h2>
        </div>
      
      </div>
      <List/>

    </>
  );
}

export default Reservation;
