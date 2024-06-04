import React from 'react';
import "./Info.css";
import { Container, Row, Col } from 'react-bootstrap';

const Info = () => {
  return (
    <Container fluid className='Services-container'>
      <section className="container-card">
        <h3 className="Services-title"> Nuestros Servicios</h3>
        <Row className="card-section">
          <Col xs={12} sm={6} md={3} className="mb-2">
            <div className="box-1">
              <div className="content-container">
                <img src="src/assets/img/Logo-canchas.png" alt="Canchas" />
              </div>
              <h4 >Canchas de Césped Sintético </h4>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-2">
            <div className="box-1">
              <div className="content-container">
                <img src="src/assets/img/Logo-iluminacion.png" alt="Iluminacion" />
              </div>
              <h4>Excelente Iluminacion</h4>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-2">
            <div className="box-1">
              <div className="content-container">
                <img src="src/assets/img/Logo-parrilla.png" alt="Parrilla" />
              </div>
              <h4>Parilla y Quincho</h4>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-2">
            <div className="box-1">
              <div className="content-container">
                <img src="src/assets/img/logo_baños.png" alt="Baños" />
              </div>
              <h4>Baños Amplios</h4>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-2">
            <div className="box-1">
              <div className="content-container">
                <img src="src/assets/img/Logo-venta.png" alt="Baños" />
              </div>
              <h4>Cantina</h4>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-2">
            <div className="box-1">
              <div className="content-container">
                <img src="src/assets/img/logo-torneos.png" alt="Baños" />
              </div>
              <h4>Torneos</h4>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-2">
            <div className="box-1">
              <div className="content-container">
                <img src="src/assets/img/logo-esculafem.png" alt="Baños" />
              </div>
              <h4>Futbol Femenino</h4>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-2">
            <div className="box-1">
              <div className="content-container">
                <img src="src/assets/img/logo-escuela.png" alt="Baños" />
              </div>
              <h4> Futbol para niños</h4>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Info;
