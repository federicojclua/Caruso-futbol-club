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
        
          <p className="gallery-subtitle">Te Invitamos a Disfrutar   </p>
            <p classname="gallery-list-text">
            <li>Nuestras canchas son de césped sintético de alta calidad. </li>
            <li>Ambiente familiar y seguro, ideal para todas las edades y niveles. </li>
            <li>Horarios flexibles: Abierto todos los días para que puedas jugar cuando más te convenga.. </li>
            <li>Eventos y torneos: Participa en nuestras competiciones y demuestra tus habilidades. </li>
            </p>

          
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
