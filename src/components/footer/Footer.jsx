import React from 'react';
import "./Footer.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
   <>
   
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <Row>
          <Col xs={12} md={4} className="text-center text-md-left mb-3 mb-md-0">
            <img src="src/assets/img/cfc-logo.png" alt="Logo Caruso" className="footer-logo" />
          </Col>
          <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
            <Button variant="primary" href="/contact">Contáctanos</Button>
          </Col>
          <Col xs={12} md={4} className="text-center text-md-right">
            <a href="https://facebook.com" className="text-white mx-2">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com" className="text-white mx-2">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://instagram.com" className="text-white mx-2">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <div className="mt-2">
            <Button variant="primary" href="/contact">Nosotros</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
   </>
  );
}
export default Footer;