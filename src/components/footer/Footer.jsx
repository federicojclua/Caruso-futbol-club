import React from 'react';
import "./Footer.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
              <li><a href="/contact">Contacto</a></li>
              <li><a href="/address">Dirección</a></li>
              <li><a href="/about">Quiénes Somos</a></li>
            </ul>
          </Col>
          <Col xs={12} md={4} className="text-center text-md-right">
            <div className="social-icons">
              <Button variant="link" className="mx-2" href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </Button>
              <Button variant="link" className="mx-2" href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Button>
              <Button variant="link" className="mx-2" href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
