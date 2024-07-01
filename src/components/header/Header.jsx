import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import video from '../../assets/video/header-video2.mp4';
import NavBar from './nav-bar/NavBar';
import AuthContext from '../../context/AuthProvider'; // Importa AuthContext

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext); // Utiliza AuthContext para obtener el estado de autenticación

  const handleReservationClick = () => {
    if (isLoggedIn) {
      navigate('/Principal');
    } else {
      navigate('/Login');
    }
  };

  return (
    <header className="header">
      <NavBar />
      <Container className="Container-video">
        <video autoPlay loop muted className="background-video">
          <source src={video} type="video/mp4" />
        </video>
        <div className="wrapper">
          <button className='button-record' onClick={handleReservationClick}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Reservá
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Header;
