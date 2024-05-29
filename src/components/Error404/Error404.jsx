import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';
import NavBar from '../header/nav-bar/NavBar';
import Container from 'react-bootstrap/Container';
import Reservation from '../header/reservation/Reservation';

const Error404 = () => {
  return (
    <div className="error-404">
      <header className="header">
        <NavBar />
        <Container fluid>
          <div className="content">
            <Reservation />
          </div>
        </Container>
      </header>
      <main className="main-content">
        <h1>Lo sentimos, ocurrió un error inesperado...</h1>
        {/* La siguiente imagen gif es solo a modo de prueba, no es la definitiva */}
        <img src="https://i.gifer.com/8dSK.gif" alt="Error 404" />
        <Link to="/">Volver a la página principal</Link>
      </main>
    </div>
  );
}

export default Error404;
