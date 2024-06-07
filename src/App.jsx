import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './App.css';
import Info from './components/Info/Info';
import Footer from './components/footer/Footer';
import Galeria from './components/Galeria-productos/Galeria';
import Header from './components/header/Header';
import Sponsors from './components/Sponsors/Sponsors';
import Tournament from './components/Tournament/Tournament';
import NavBar from './components/header/nav-bar/NavBar';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import Error404 from './pages/Error404/Error404';
import Contact from './pages/Contact/Contact';
import AboutUs from './pages/AboutUs/AboutUs';
import Ecommerce from './pages/Ecommerce/Ecommerce'
import Location from './pages/Location/Location'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>
          <Header />
          <Galeria />
          <Info />
          <Tournament />
          <Sponsors />
          <Footer />
          <WhatsAppButton />

        </div>} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Ecommerce" element={<Ecommerce />} />
        <Route path="/AboutUs" element={<AboutUs />} />
         <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;