import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../../components/header/nav-bar/NavBar';
import Footer from '../../components/footer/Footer';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import './Ecommerce.css';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import PaymentForm from './PaymentForm'; // Importar el nuevo componente de formulario de pago

const EcommercePage = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  const addToCart = (product, quantity) => {
    const existingIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
    handleShowCart();
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const handleReduceQuantity = (index) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);
    } else {
      handleRemoveFromCart(index);
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleProceedToPayment = () => {
    navigate('/payment');
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
      <ShoppingCart
        show={showCart}
        handleClose={handleCloseCart}
        cartItems={cartItems}
        handleRemoveItem={handleRemoveFromCart}
        handleReduceQuantity={handleReduceQuantity}
        handleClearCart={handleClearCart}
        handleProceedToPayment={handleProceedToPayment}
      />
      <Routes>
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/Error404" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
};

export default EcommercePage;
