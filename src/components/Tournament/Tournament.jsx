import React from 'react';
import "./Tournament.css";
import { Container } from 'react-bootstrap';

const Tournament = () => {
  return (
    <Container className="container-tournament">
    
      <div className="tournament-text">
        <h2 className="tournament-title">¡Animate! Inscribí tu equipo al Próximo Torneo</h2>
        <p className="tournament-description">Participa con tu equipo y demostrá tus habilidades en nuestras canchas. ¡Te esperamos!</p>
      
      </div>
      
      <div className="img-tournament">
        <img
          src="/src/assets/img/caruso-torneo2.gif"
          alt="First slide"
        />
      </div>
 
    </Container>
  );
}

export default Tournament;

