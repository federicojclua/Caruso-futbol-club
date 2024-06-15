import React from 'react';
import "./Tournament.css";
import { Container } from 'react-bootstrap';
import Tournament1 from '../../assets/img/caruso-torneo2.gif';

const Tournament = () => {
  return (
    <Container className="container-tournament">
    
      <div className="tournament-text">
        <h2 className="tournament-title">¡Animate! Inscribí tu equipo al Próximo Torneo</h2>
        <p className="tournament-description">Participa con tu equipo y demostrá tus habilidades en nuestras canchas. ¡Te esperamos!</p>
      
      </div>
      
      <div className="img-tournament">
        <img
          src={Tournament1}
          alt="First slide"
        />
      </div>
 
    </Container>
  );
}

export default Tournament;

