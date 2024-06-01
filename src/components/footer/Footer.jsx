import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <img src="src/assets/img/cfc-logo.png" alt="Logo Caruso" className="footer-logo" />
        </div>
        <div className="footer-column">
          <h5>Información</h5>
          <p>| Caruso Fútbol Club |<br />
            ⚽️ Alquiler de canchas de fútbol 5, 6, 7 y 8 <br />
            Contamos con Parrilla, Buffet, Bebidas y más
          </p>
        </div>
        <div className="footer-column">
          <h5>Accesos útiles</h5>
          <ul>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Acerca de nosotros</a></li>
            <li><a href="#">Donde encontrarnos</a></li>
            <li><a href="#">Política de Privacidad</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a className="social-button facebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a className="social-button twitter" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a className="social-button tiktok" href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </a>
            <a className="social-button instagram" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Diseñado por Equipo 3</p>
        <p>Todos los derechos reservados © 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
