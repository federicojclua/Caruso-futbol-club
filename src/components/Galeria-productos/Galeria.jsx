import React from 'react';
import "./Galeria.css";
import Carousel from 'react-bootstrap/Carousel';

const FlexibleContainer = ({ children }) => {
  return (
    <div className="flexible-container">
      {children}
    </div>
  );
}

const Galeria = () => {
  return (
    <FlexibleContainer>
      <div className="gallery">
        {/* Contenedor para el Carousel */}
        <div className="carousel-container">
          <Carousel>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
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
                className="d-block w-100"
                src="/src/assets/img/canchas_3.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
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
      </div>
    </FlexibleContainer>
  );
}

export default Galeria;
