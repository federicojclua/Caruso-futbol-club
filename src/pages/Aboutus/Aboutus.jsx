import React from 'react';
import { Link } from 'react-router-dom';
import './Aboutus.css';
import NavBar from '../../components/header/nav-bar/NavBar';

const Nosotros = () => {
  return (
    <div className="acerca-de-nosotros">
      <header className="header">
        <NavBar />
      </header>
      <main className="main-content">
        <h1>Acerca de Nosotros</h1>
        <p>Somos una empresa dedicada a...</p>
        <p>Estamos comprometidos con...</p>
        <p>Nuestro equipo está formado por...</p>
        <Link to="/">Volver a la página principal</Link>
      </main>
    </div>
  );
}

export default Nosotros;
