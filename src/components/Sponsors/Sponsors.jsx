import React from 'react';
import "./Sponsors.css";
import { Container, Row, Col } from 'react-bootstrap';
import sponsor1 from '../../assets/img/sponsors/1.png';
import sponsor2 from '../../assets/img/sponsors/2.png';
import sponsor3 from '../../assets/img/sponsors/3.png';
import sponsor4 from '../../assets/img/sponsors/4.png';

const sponsors = [sponsor1, sponsor2, sponsor3, sponsor4];

const Sponsors = () => {
  // Duplicar los sponsors para asegurar que haya suficientes para llenar el contenedor sin espacios vacíos
  const repeatedSponsors = [...sponsors, ...sponsors];

  return (
    <Container className='Sponsors'>
      <p className='text-sponsors'>Confían en Nosotros</p>
      <div className="overflow-hidden">
        <div className="img-sponsors-wrapper">
          <Row className="img-sponsors">
            {repeatedSponsors.map((sponsor, index) => (
              <Col key={index} className="d-flex justify-content-center">
                <img src={sponsor} alt={`Sponsor ${index + 1}`} className="img-fluid" />
              </Col>
            ))}
          </Row>
          <Row className="img-sponsors">
            {repeatedSponsors.map((sponsor, index) => (
              <Col key={index + repeatedSponsors.length} className="d-flex justify-content-center">
                <img src={sponsor} alt={`Sponsor ${index + 1}`} className="img-fluid" />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default Sponsors;
