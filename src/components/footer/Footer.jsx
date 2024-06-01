import React, { useEffect } from 'react';
import "./Footer.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
        <div class="footer-container">
            <div class="footer-column">
            <img src="src/assets/img/cfc-logo.png" alt="Logo Caruso" className="footer-logo" />
            </div>
            <div class="footer-column">
                <h3>Información</h3>
                <p>Algunas líneas sobre la página web y su propósito.</p>
            </div>
            <div class="footer-column">
                <h3>Enlaces</h3>
                <ul>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Quiénes Somos</a></li>
                    <li><a href="#">Términos y Condiciones</a></li>
                    <li><a href="#">Política de Privacidad</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Síguenos</h3>
                <div class="social-icons">
                <div className="social-icons">     
             <div className="rounded-social-buttons">
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
            </div>
        </div>
    </footer>
  );
}

export default Footer;
