import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../Location/Location.css';
import NavBar from '../../components/header/nav-bar/NavBar';  
import Footer from '../../components/footer/Footer';
import LocationMain from '../../components/LocationMain/LocationMain'
import { Container } from 'react-bootstrap';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';

const LocationPage = () => {
  return (
    <div className='LocationPage-component'>
      <Helmet>
        <title>Ubicaciones - Caruso Futbol Club</title>
        <meta name="description" content="Descubre las ubicaciones de Caruso Futbol Club. Encuentra nuestras sedes en Paso del Rey y Merlo. Ven a visitarnos en cualquiera de nuestras ubicaciones." />
        <meta name="keywords" content="ubicaciones, Caruso Futbol Club, Paso del Rey, Merlo, dirección, teléfono, horario" />
        <meta name="author" content="Caruso Futbol Club" />
        <link rel="canonical" href="https://www.carusofutbolclub.com/ubicaciones" />
      </Helmet>
      <NavBar />
      <LocationMain />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default LocationPage;
