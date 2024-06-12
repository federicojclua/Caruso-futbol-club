import React from 'react';
import "./Sponsors.css";
import { Container, Row, Col } from 'react-bootstrap';

const Sponsors = () => {
  return (
    <Container className='Sponsors'>
      <p className='text-sponsors'>Confían en Nosotros</p>
      <div className="overflow-hidden">
        <Row className="img-sponsors">
          <Col className="d-flex justify-content-center">
            <img src="./src/assets/img/sponsors/4.png" alt="Sponsor 1" className="img-fluid" />
          </Col>
          <Col className="d-flex justify-content-center">
            <img src="./src/assets/img/sponsors/2.png" alt="Sponsor 2" className="img-fluid" />
          </Col>
          <Col className="d-flex justify-content-center">
            <img src="./src/assets/img/sponsors/3.png" alt="Sponsor 3" className="img-fluid" />
          </Col>
          <Col className="d-flex justify-content-center">
            <img src="./src/assets/img/sponsors/1.png" alt="Sponsor 4" className="img-fluid" />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Sponsors;
