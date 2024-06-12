import React from 'react';
import "./Sponsors.css";
import { Container, Row, Col } from 'react-bootstrap';
import sponsor1 from '../../assets/img/sponsors/1.png';
import sponsor2 from '../../assets/img/sponsors/2.png';
import sponsor3 from '../../assets/img/sponsors/3.png';
import sponsor3 from '../../assets/img/sponsors/4.png';

const Sponsors = () => {
  return (
    <Container className='Sponsors'>
      <p className='text-sponsors'>Confían en Nosotros</p>
      <div className="overflow-hidden">
        <Row className="img-sponsors">
          <Col className="d-flex justify-content-center">
            <img src={sponsor1} alt="Sponsor 1" className="img-fluid" />
          </Col>
          <Col className="d-flex justify-content-center">
            <img src={sponsor2} alt="Sponsor 2" className="img-fluid" />
          </Col>
          <Col className="d-flex justify-content-center">
            <img src={sponsor3} alt="Sponsor 3" className="img-fluid" />
          </Col>
          <Col className="d-flex justify-content-center">
            <img src={sponsor4} alt="Sponsor 4" className="img-fluid" />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Sponsors;
