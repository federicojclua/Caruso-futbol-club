import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './App.css';
import Info from './components/Info/Info';
import Footer from './components/footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Header from './components/header/Header';
import Sponsors from './components/Sponsors/Sponsors';
import Tournament from './components/Tournament/Tournament';
import NavBar from './components/header/nav-bar/NavBar';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import LocationMain from './components/LocationMain/LocationMain';
import Error404 from './pages/Error404/Error404';
import Contact from './pages/Contact/Contact';
import AboutUs from './pages/AboutUs/AboutUs';
import Ecommerce from './pages/Ecommerce/Ecommerce';
import Location from './pages/Location/Location';
import Login from './pages/Login/Login';
import ShoppingCart from './pages/Ecommerce/ShoppingCart';  // Importa el componente ShoppingCart
import Advertising from './components/Advertising/Advertising';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <NavBar />
            <Header />
            <LocationMain />
            <Gallery />
            <Info />
            <Advertising />
            <Tournament />
            <Sponsors />
            <Footer />
            <WhatsAppButton />
          </div>
        } />
        <Route path="/Login" element={<Login />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Ecommerce" element={<Ecommerce />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<ShoppingCart />} />  {/* Ruta para la página del carrito */}
        <Route path="*" element={<Error404 />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
