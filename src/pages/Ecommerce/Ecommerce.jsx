import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../../components/header/nav-bar/NavBar';  
import Footer from '../../components/footer/Footer';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import './Ecommerce.css';

const EcommercePage = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    handleShowCart();
  };

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
        <ProductList addToCart={addToCart} />
      </div>
      <Footer />
      <WhatsAppButton />
      <button className="floating-cart-button" onClick={handleShowCart}>🛒</button>
      <ShoppingCart show={showCart} handleClose={handleCloseCart} cartItems={cartItems} />
    </div>
  );
}

export default EcommercePage;
