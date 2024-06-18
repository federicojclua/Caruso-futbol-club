import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
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
import Advertising from './components/Advertising/Advertising';
import Error404 from './pages/Error404/Error404';
import Contact from './pages/Contact/Contact';
import AboutUs from './pages/AboutUs/AboutUs';
import Ecommerce from './pages/Ecommerce/Ecommerce';
import PaymentForm from './pages/Ecommerce/PaymentForm';
import Location from './pages/Location/Location';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';
import Record from './pages/record/Record';
import Principal from './pages/Principal/Principal';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { AuthProvider } from './components/context/AuthProvider';
import AdminRoute from './components/ProtectedRoute/AdminRoute';

const backendUrl = 'https://caruso-prueba-back-1.onrender.com'; // Reemplaza con la URL pública de tu backend

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Container className="Container-Main">
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
            </Container>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/location" element={<Location />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Record" element={<Record />} />

          <Route path="/admin" element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          } />

          <Route path="/principal" element={
            <ProtectedRoute>
              <Principal />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
