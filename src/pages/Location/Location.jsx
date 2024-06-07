import React from 'react';
import { Link } from 'react-router-dom';
import '../Location/Location.css';
import NavBar from '../../components/header/nav-bar/NavBar';  
import Footer from '../../components/footer/Footer';
import { Container } from 'react-bootstrap';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';

const LocationPage = () => {
  return (
    <div className='LocationPage-component'>
      <NavBar />
      <div className="main-location-content">
        <h1 className='subtitle-location'>Nuestras Ubicaciones</h1>
        
        <section className="location-section">
          <h2>Paso del Rey</h2>
          <p>Dirección: Calle Falsa 123, Paso del Rey</p>
          <p>Teléfono: 011 1234 5678</p>
          <p>Horario: Lunes a Viernes, de 9:00 a 18:00</p>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d689.9346735210776!2d-58.76519703729644!3d-34.657205820501076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc95c3b5e1bd6b%3A0xb5e1afd23a80dd26!2sCaruso%20FC%20%7C%20Paso%20del%20Rey!5e0!3m2!1ses-419!2sar!4v1717693476343!5m2!1ses-419!2sar" 
              width="600" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <section className="location-section">
          <h2>Merlo</h2>
          <p>Dirección: Calle Verdadera 456, Merlo</p>
          <p>Teléfono: 011 8765 4321</p>
          <p>Horario: Lunes a Viernes, de 9:00 a 18:00</p>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d410.2181073133757!2d-58.7531954!3d-34.6611459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc954470da0fe7%3A0x1c478967183e55!2sCaruso%20FC%20%7C%20Merlo!5e0!3m2!1ses-419!2sar!4v1717693283351!5m2!1ses-419!2sar" 
              width="600" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default LocationPage;
