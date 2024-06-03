import React from 'react';
import "./Sponsors.css";
import { Container, Row, Col } from 'react-bootstrap';

const Sponsors = () => {
  return (
    <Container className='Sponsors'>
      <p className='text-sponsors'>Confían en Nosotros</p>
    <Row className="img-sponsors">
      <Col className="d-flex justify-content-center">
        <img src="src/assets/img/sponsor1.png" alt="Sponsor 1" className="img-fluid w-100" style={{ maxWidth: '200px' }}/>
      </Col>
      <Col className="d-flex justify-content-center">
        <img src="src/assets/img/sponsor1.png" alt="Sponsor 2" className="img-fluid w-100" style={{ maxWidth: '200px' }} />
      </Col>
      <Col className="d-flex justify-content-center">
        <img src="src/assets/img/sponsor1.png" alt="Sponsor 3" className="img-fluid w-100" style={{ maxWidth: '200px' }} />
      </Col>
      <Col className="d-flex justify-content-center">
        <img src="src/assets/img/sponsor1.png" alt="Sponsor 4" className="img-fluid w-100" style={{ maxWidth: '200px' }} />
      </Col>
    </Row>
  </Container>
  );
}

export default Sponsors;
