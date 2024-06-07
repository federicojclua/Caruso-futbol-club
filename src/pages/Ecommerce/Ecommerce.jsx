import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import NavBar from '../../components/header/nav-bar/NavBar';  
import Footer from '../../components/footer/Footer';
import { Container } from 'react-bootstrap';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import ProductList from './ProductList.jsx';
import './Ecommerce.css';

const EcommercePage = () => {
  return (
    <div className='EcommercePage-component'>
      <Helmet>
        <title>Tienda - Caruso Futbol Club</title>
        <meta name="description" content="Bienvenidos a nuestra tienda en línea. Descubre nuestros productos exclusivos y aprovecha nuestras ofertas especiales." />
        <meta name="keywords" content="tienda, e-commerce, Caruso Futbol Club, productos, ofertas" />
        <meta name="author" content="Caruso Futbol Club" />
        <link rel="canonical" href="https://www.carusofutbolclub.com/tienda" />
      </Helmet>
      <NavBar />
      <div className="main-ecommerce-content">
        <h1 className='subtitle-ecommerce'>Bienvenidos a Nuestra Tienda</h1>
        <ProductList />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default EcommercePage;
