
import React from 'react';
import "./Gallery.css";
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import carouselimg1 from '../../assets/img/carrousel/entrada.jpg';
import img1 from '../../assets/img/carrousel/canchas.jpg';
import img2 from '../../assets/img/carrousel/quincho2.jpg';
import img3 from '../../assets/img/carrousel/quincho.jpg';
import img4 from '../../assets/img/carrousel/canchas2.jpeg';
import img5 from '../../assets/img/carrousel/cancha1.jpg';
import img6 from '../../assets/img/carrousel/cancha_nocturna.jpg';




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
            <img
              className="d-block w-100 img-carousel"
              src={carouselimg1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 img-carousel"
              src="./src/assets/img/carrousel/canchas_3.jpg"
              alt="Second slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 img-carousel"
              src={img2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 img-carousel"
              src={img3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 img-carousel"
              src={img4}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 img-carousel"
              src={img5}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 img-carousel"
              src="./src/assets/img/carrousel/cancha1.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 img-carousel"
              src={img6}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
    
  );
}

export default Gallery;
