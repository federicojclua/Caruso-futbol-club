import React from 'react';
import "./Tournament.css";
import { Container } from 'react-bootstrap';

const Tournament = () => {
  return (
    <Container className="container-tournament">
      {/* Contenedor para el texto */}
      <div className="tournament-text">
        <h1 className="tournament-title">¡Mirá todo lo que tenemos para vos!</h1>
         </div>
      {/* Contenedor para el Carousel */}
      <div className="img-tournament">
        
            <img
              className="d-block w-100 img-carousel"
              src="/src/assets/img/imagen-torneo.png"
              alt="First slide"
            />
            
      </div>
    </Container>
  );
}

export default Tournament;

