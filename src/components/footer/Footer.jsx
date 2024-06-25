import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link si estás usando react-router para manejar las rutas

import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logosinfondogris from '../../assets/img/logo_sin_fondo_bw.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column animate__animated animate__rollIn">
          <Link to="/">
            <img className='logo_sin_fondo_bw' src={logosinfondogris} alt="logo blanco y negro" />
          </Link>
        </div>
        <div className="footer-column">
          <h5>Accesos útiles</h5>
          <div className="footer-links">
            <ul>
              <li><Link to="/Login">Iniciar sesión</Link></li>
              <li><Link to="/Record">Registro</Link></li>
              <li><Link to="/Ecommerce">Tienda</Link></li>
            </ul>
            <ul>
              <li><Link to="/Contact">Contacto</Link></li>
              <li><Link to="/Location">Complejos</Link></li>
              <li><Link to="/AboutUs">Nosotros</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-column">
          <h5>Síguenos</h5>
          <div className="social-icons">
            <a className="social-button facebook" href="https://www.facebook.com/carusofutbolclub" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a className="social-button instagram" href="https://www.instagram.com/carusofutbolclub" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Diseñado por Equipo 2</p>
        <p>Todos los derechos reservados © 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
