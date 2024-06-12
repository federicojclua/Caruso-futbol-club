import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container } from 'react-bootstrap';
import './Header.css';

import NavBar from './nav-bar/NavBar';

const Header = () => {
  return (
    <header className="header">
      <NavBar />
      <Container className="Container-video">
        <video autoPlay loop muted className="background-video">
          <source src="src/assets/video/header-video2.mp4" type="video/mp4" />
        </video>
        <div className="wrapper">
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Reservar
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Header;
