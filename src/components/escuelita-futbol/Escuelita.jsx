
import React from 'react';
import "./Escuelita.css";
import { Container } from 'react-bootstrap';

const Escuelita = () => {
  return (
    <Container fluid className='Services-container'>
      <section className="color2">
        <h3> Nuestros Servicios</h3>
        <div className="row mx-auto">
          <div className="col-md-3 mb-4">
            <div className="box-1">
              <div className="content-container">
                <img src="src/assets/img/Logo-canchas.png" alt="Canchas" />
              </div>
              <h4> Canchas de Césped Sintético Premium</h4>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="box-1">
              <div className="content-container">
                <img src="src/assets/img/Logo-iluminacion.png" alt="Iluminacion" />
              </div>
              <h4>Excelente Iluminacion</h4>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="box-1">
              <div className="content-container">
                <img src="src/assets/img/Logo-parrilla.png" alt="Parrilla" />
              </div>
              <h4>Parilla y Quincho</h4>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="box-1">
              <div className="content-container">
                <img src="src/assets/img/Logo_baños.png" alt="Baños" />
              </div>
              <h4>Baños Amplios</h4>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="box-1">
              <div className="content-container">
                <img src="src/assets/img/Logo_baños.png" alt="Baños" />
              </div>
              <h4>Cantina</h4>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="box-1">
              <div className="content-container">
                <img src="src/assets/img/Logo_baños.png" alt="Baños" />
              </div>
              <h4>Torneos</h4>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="box-1">
              <div className="content-container">
                <img src="src/assets/img/Logo_baños.png" alt="Baños" />
              </div>
              <h4>futbol Femenino</h4>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="box-1">
              <div className="content-container">
                <img src="src/assets/img/Logo_baños.png" alt="Baños" />
              </div>
              <h4>Escula de Futbol para niños</h4>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Escuelita;
