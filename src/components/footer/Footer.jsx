import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logosinfondogris from '../../assets/img/carpeta/logo_sin_fondo_bw.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
<<<<<<< HEAD
        <div className="footer-column animate__animated animate__rollIn">
=======
        <div className="footer-column animate_animated animate_rollIn">
>>>>>>> 48fc77ac774893e97003ef080f5075acea97d39f
        <img className='logo_sin_fondo_bw'src={logosinfondogris} alt="logo blanco y negro" />
        </div>
        <div className="footer-column">
          <h5>Información</h5>
          <p>Caruso Fútbol Club</p>
<p>Alquiler de canchas de fútbol 5, 6, 7 y 8</p>
<p>Excelente iluminación por la noche</p>
<p>Contamos con Parrilla, Buffet, Bebidas y más</p>

        </div>
        <div className="footer-column">
          <h5>Accesos útiles</h5>
          <ul>
            <li><a href="/Contact">Contacto</a></li>
            <li><a href="/Login">Iniciar sesión</a></li>
            <li><a href="/AboutUs">Acerca de nosotros</a></li>
            <li><a href="/Location">Donde encontrarnos</a></li>
          </ul>
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

export default Footer;