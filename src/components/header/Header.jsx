import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container } from 'react-bootstrap';
import './Header.css';

import NavBar from './nav-bar/NavBar';

const Header = () => {
  return (
    <header className="header">
      <NavBar />
      <Container >
        <div className="video-container">
          
              <video autoPlay loop muted className="background-video">
                <source src="src/assets/video/header-video2.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
       
        </div>
      </Container>
      <Container className="content">
       
        <p>Hace tu reservacion </p>

      </Container>
    </header>
  );
}

export default Header;