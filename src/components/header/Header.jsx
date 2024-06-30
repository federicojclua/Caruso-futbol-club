import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container } from 'react-bootstrap';
import './Header.css';
import video from '../../assets/video/header-video2.mp4';

import NavBar from './nav-bar/NavBar';

const Header = () => {
  return (
    <header className="header">
      <NavBar />
      <Container className="Container-video">
        <video autoPlay loop muted className="background-video">
          <source src={video} type="video/mp4" />
        </video>
        <div className="wrapper">
          <a href='/Principal'><button className='button-record'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            jejejejej
          </button></a>
        </div>
      </Container>
    </header>
  );
}

export default Header;
