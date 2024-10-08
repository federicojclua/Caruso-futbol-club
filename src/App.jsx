import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
//import 'react-toastify/dist/ReactToastify.css'; // Importa el CSS de react-toastify
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
import { ToastContainer } from 'react-toastify'; // Importa ToastContainer
import 'react-toastify/dist/ReactToastify.css';

// Conexión con el back
import CanchasComponent from './components/apiComponents/CanchasComponent';
import AuthComponent from './components/apiComponents/AuthComponent';
import UserComponent from './components/apiComponents/UserComponent';
import ProductsComponent from './components/apiComponents/ProductsComponent';
import ReserverComponent from './components/apiComponents/ReserverComponent';


const backendUrl = 'https://caruso-prueba-back-1.onrender.com';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/data`);
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Container className="Container-Main">
          <NavBar />
          <ToastContainer /> {/* Agrega el ToastContainer aquí */}
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <LocationMain />
                <Gallery />
                <Info />
                <Advertising />
                <Tournament />
                <Sponsors />
                <Footer />
                <WhatsAppButton />
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/location" element={<Location />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/payment" element={<PaymentForm />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Record" element={<Record />} />
            <Route path="/canchas" element={<CanchasComponent />} />
            <Route path="/auth" element={<AuthComponent />} />
            <Route path="/users" element={<UserComponent />} />
            <Route path="/reservas" element={<ReserverComponent />} />
            <Route path="/products" element={<ProductsComponent />} />

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
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
