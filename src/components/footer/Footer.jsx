import React, { useEffect } from 'react';
import "./Footer.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-center text-md-left mb-3 mb-md-0">
            <img src="src/assets/img/cfc-logo.png" alt="Logo Caruso" className="footer-logo" />
          </Col>
          <Col xs={12} md={4} className="text-center text-md-left mb-3 mb-md-0">
            <ul className="footer-links">
              <li><a href="/contact"><button class="btn-hover color-1">Contacto</button></a></li>
              <li><a href="/address"><button class="btn-hover color-1">Quiénes somos</button></a></li>
              <li><a href="/about"><button class="btn-hover color-1">Dirección</button></a></li>
              
            </ul>
          </Col>
          <Col xs={12} md={4} className="text-center text-md-right">
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
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
