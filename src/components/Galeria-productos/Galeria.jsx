import React from 'react';
import "./Galeria.css";
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';


const Galeria = () => {
  return (
    
    <Container className="container-gallery">
      {/* Contenedor para el texto */}
      <div className="gallery-text">
        <h1 className="gallery-title">¡Mirá todo lo que tenemos para vos!</h1>
          
      </div>
      {/* Contenedor para el Carousel */}
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 img-carousel"
              src="src\assets\img\carrousel\entrada.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 img-carousel"
              src="/src/assets/img/carrousel/canchas_3.jpg"
              alt="Second slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 img-carousel"
              src="/src/assets/img/carrousel/canchas.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 img-carousel"
              src="src/assets/img/carrousel/quincho2.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 img-carousel"
              src="src/assets/img/carrousel/quincho.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 img-carousel"
              src="src/assets/img/carrousel/canchas2.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 img-carousel"
              src="src/assets/img/carrousel/cancha1.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 img-carousel"
              src="src/assets/img/carrousel/cancha_nocturna.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
    
  );
}

export default Galeria;
