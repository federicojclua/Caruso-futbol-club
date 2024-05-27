import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Eliminamos la importación de Dropdown aquí
import "./Reservation.css";
import List from './List/List'

const Reservation = () => {
  return (
    <>
      <container className="reservation-container">
        <div className="reservation-button">
          <h2>Hace tu reservación</h2>
        </div>
      
      </container>
      <List/>

    </>
  );
}

export default Reservation;
