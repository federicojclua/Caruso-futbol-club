import React from 'react';
import "./Galeria.css";
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

const Galeria = () => {
  return (
    <Container className="container-gallery">
      {/* Contenedor para el texto */}
      <div className="gallery-text">
        <h1>CARUSO FÚTBOL CLUB</h1>
        <p>¡Vení a disfrutar de nuestras instalaciones!</p>
          <p>Contamos con 2 predios de 3 y 4 canchas en ubicaciones.</p>
      </div>
      {/* Contenedor para el Carousel */}
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 img-carousel"
              src="/src/assets/img/canchas_3.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 img-carousel"
              src="/src/assets/img/canchas_3.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 img-carousel"
              src="/src/assets/img/canchas_3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
}

export default Galeria;
