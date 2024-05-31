import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container } from 'react-bootstrap';
import './Header.css';
import Reservation from './reservation/Reservation';
import NavBar from './nav-bar/NavBar';

const Header = () => {
  return (
    <header className="header">
      <NavBar />
      <Container fluid>
        <div className="video-container">
          <Carousel controls={false} indicators={false} interval={null}>
            <Carousel.Item>
              <video autoPlay loop muted className="background-video">
                <source src="src/assets/video/header-video2.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
      <div className="content">
        <Reservation />
      </div>
    </header>
  );
}

export default Header;