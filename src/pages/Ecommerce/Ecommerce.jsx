import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/header/nav-bar/NavBar';  
import Footer from '../../components/footer/Footer';
import { Container, Navbar } from 'react-bootstrap';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import ProductList from './ProductList.jsx';
import './Ecommerce.css';

const EcommercePage = () => {
  return (
    <div className='EcommercePage-component'>
      <NavBar />
      <div className="main-ecommerce-content">
        <h1 className='subtitle-ecommerce'>Bienvenidos a Nuestra Tienda</h1>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default EcommercePage;
