import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Eliminamos la importación de Dropdown aquí
import "./Reservacion.css";
import List from './list/List';

const Reservacion = () => {
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

export default Reservacion;
