
import React from 'react';
import "./Gallery.css";
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import carouselimg1 from '../../assets/img/carrousel/entrada.jpg';
import canchas3 from '../../assets/img/carrousel/canchas_3.jpg';
import canchas from '../../assets/img/carrousel/canchas.jpg';
import quincho2 from '../../assets/img/carrousel/quincho2.jpg';
import quincho from '../../assets/img/carrousel/quincho.jpg';
import canchas2 from '../../assets/img/carrousel/canchas2.jpeg';
import cancha1 from '../../assets/img/carrousel/cancha1.jpg';
import canchaNocturna from '../../assets/img/carrousel/cancha_nocturna.jpg';

const Gallery = () => {
  return (
    <Container className="container-gallery">
      {/* Contenedor para el texto */}
      <div className="gallery-text">
        ¡Mirá todo lo que tenemos para vos!
      </div>
      {/* Contenedor para el Carousel */}
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={carouselimg1} alt="One Slide" />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 canchas_3"
              src={canchas3}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 canchas"
              src={canchas}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 quincho2"
              src={quincho2}
              alt="Four slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 quincho"
              src={quincho}
              alt="Five slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 canchas2"
              src={canchas2}
              alt="Six slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 cancha1"
              src={cancha1}
              alt="Seven slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 cancha_nocturna"
              src={canchaNocturna}
              alt="Eight slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
}

export default Gallery;
