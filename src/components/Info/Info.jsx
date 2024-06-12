import React from 'react';
import "./Info.css";
import { Container, Row, Col } from 'react-bootstrap';
import info1 from '../../assets/img/logo_info/Logo-canchas.png';
import info2 from '../../assets/img/logo_info/logo-iluminacion.png';
import info3 from '../../assets/img/logo_info/logo-parrilla.PNG';
import info4 from '../../assets/img/logo_info/logo_baños.PNG';
import info5 from '../../assets/img/logo_info/Logo-venta.PNG';
import info6 from '../../assets/img/logo_info/logo-torneos.PNG';
import info8 from '../../assets/img/logo_info/logo-escuela.PNG';
import info7 from '../../assets/img/logo_info/logo-esculafem.PNG';

const Info = () => {
  return (
    <Container fluid className='Services-container'>
      <section className="container-card">
        <h3 className="Services-title"> Nuestros Servicios</h3>
        <Row className="card-section">
          <Col xs={12} sm={6} md={3} className="mb-2">
            <div className="box-1">
              <div className="content-container">
                <img  className='Logo-canchas' src={info1} alt="Canchas" />
              </div>
              <h4>Canchas de Césped Sintético</h4>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-2">
            <div className="box-1">
              <div className="content-container">
                <img src={info2} alt="Iluminacion" />
              </div>
              <h4>Excelente Iluminacion</h4>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-2">
            <div className="box-1">
              <div className="content-container">
                <img src={info3}alt="Parrilla" />
              </div>
              <h4>Parilla y Quincho</h4>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-2">
            <div className="box-1">
              <div className="content-container">
                <img src={info4} alt="Baños" />
              </div>
              <h4>Baños Amplios</h4>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-2">
            <div className="box-1">
              <div className="content-container">
                <img src={info5} alt="Cantina" />
              </div>
              <h4>Cantina</h4>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-2">
            <div className="box-1">
              <div className="content-container">
                <img src={info6} alt="Torneos" />
              </div>
              <h4>Torneos</h4>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-2">
            <div className="box-1">
              <div className="content-container">
                <img src={info7} alt="Futbol Femenino" />
              </div>
              <h4>Futbol Femenino</h4>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-2">
            <div className="box-1">
              <div className="content-container">
                <img src={info8} alt="Futbol para niños" />
              </div>
              <h4>Futbol para niños</h4>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Info;