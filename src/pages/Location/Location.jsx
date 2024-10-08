import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../Location/Location.css';
import NavBar from '../../components/header/nav-bar/NavBar';  
import Footer from '../../components/footer/Footer';
import { Container } from 'react-bootstrap';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import pngBall from '../../assets/img/pngball.png';

const LocationPage = () => {
  return (
    <div className='LocationPage-component-page'>
      <Helmet>
        <title>Ubicaciones - Caruso Futbol Club</title>
        <meta name="description" content="Descubre las ubicaciones de Caruso Futbol Club. Encuentra nuestras sedes en Paso del Rey y Merlo. Ven a visitarnos en cualquiera de nuestras ubicaciones." />
        <meta name="keywords" content="ubicaciones, Caruso Futbol Club, Paso del Rey, Merlo, dirección, teléfono, horario" />
        <meta name="author" content="Caruso Futbol Club" />
        <link rel="canonical" href="https://www.carusofutbolclub.com/ubicaciones" />
      </Helmet>
      <NavBar />
      <div className="main-location-content-page">
      <h2 className='subtitle-location-page'>
      <div className="ball-icons-container">
            <div className="ball-icons animate__animated animate__rollIn">
              <img src={pngBall} alt="Ball icon" />
            </div>
            <div>Complejos</div>
            <div className="ball-icons rollInRight">
              <img src={pngBall} alt="Ball icon" />
            </div>
          </div>
        </h2>


        <div className="maps-container-page">
          <section className="location-section-page paso-del-rey">
            <h3>Paso del Rey</h3>
            <p className="location-detail">Dirección: Av. Alcorta 943, B1742 Paso del Rey, Provincia de Buenos Aires</p>
            <div className="map-container-page">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d689.9346735210776!2d-58.76519703729644!3d-34.657205820501076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc95c3b5e1bd6b%3A0xb5e1afd23a80dd26!2sCaruso%20FC%20%7C%20Paso%20del%20Rey!5e0!3m2!1ses-419!2sar!4v1717693476343!5m2!1ses-419!2sar" 
                width="350" 
                height="350" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>

          <section className="location-section-page merlo">
            <h3>Merlo</h3>
            <p className="location-detail">Dirección: Moreno 2500, B1722DAB Merlo, Provincia de Buenos Aires</p>
            <div className="map-container-page">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d410.2181073133757!2d-58.7531954!3d-34.6611459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc954470da0fe7%3A0x1c478967183e55!2sCaruso%20FC%20%7C%20Merlo!5e0!3m2!1ses-419!2sar!4v1717693283351!5m2!1ses-419!2sar" 
                width="350" 
                height="350" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default LocationPage;
