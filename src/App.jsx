import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Escuelita from './components/escuelita-futbol/Escuelita';
import Footer from './components/footer/Footer';
import Galeria from './components/Galeria-productos/Galeria';
import Header from './components/header/Header';
import InfoTorneos from './components/Info-torneos/InfoTorneos';
import Sponsors from './components/Sponsors/Sponsors';
import NavBar from './components/header/nav-bar/NavBar';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import Error404 from './components/Error404/Error404';

function App() {
  return (
    <Router>
      <>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Galeria />} />
          <Route path="/escuelita" element={<Escuelita />} />
          <Route path="/info-torneos" element={<InfoTorneos />} />
          <Route path="/error-404" element={<Error404 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </>
    </Router>
  );
}

export default App;

