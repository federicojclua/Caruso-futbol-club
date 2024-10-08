import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Contact.css';
import NavBar from '../../components/header/nav-bar/NavBar';
import Footer from '../../components/footer/Footer';
import { Container } from 'react-bootstrap';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import pngBall from '../../assets/img/pngball.png';

const Contacto = () => {
  return (
    <div className='Contact-wrapper'>
      <Helmet>
        <title>Contacto - Caruso Futbol Club</title>
        <meta name="description" content="Ponte en contacto con nosotros para cualquier consulta o duda. Estamos disponibles a través de teléfono, email y WhatsApp." />
        <meta name="keywords" content="contacto, atención al cliente, Caruso Futbol Club, WhatsApp, email, teléfono" />
        <meta name="author" content="Caruso Futbol Club" />
        <link rel="canonical" href="https://www.carusofutbolclub.com/contacto" />
      </Helmet>
      <NavBar />
      <Container className="main-contact-content">
        <h2 className='subtitle-contact'>
          <div className="ball-icons-container">
            <div className="ball-icons animate__animated animate__rollIn">
              <img src={pngBall} alt="Ball icon" />
            </div>
            <div>Contacto</div>
            <div className="ball-icons rollInRight">
              <img src={pngBall} alt="Ball icon" />
            </div>
          </div>
        </h2>

        {/* Sección de Información de Contacto */}
        <section className="form">
          <div className="cont-contact">
            <div className="info">
              <p className='animate__animated animate__slideInDown'><a className='caller' href="tel:01122500777">011 2250 0777</a></p>
              <p><strong>Servicio de Atención al Cliente</strong></p>
              <i className="line-orange"></i>
              <p>Podes comunicarte por los siguientes medios y en los horarios indicados:</p>
            </div>
          </div>
        </section>

        {/* Lista Desordenada de Contacto */}
        <section className="contact-list">
          <ul>
            <li>
              <p>⚽️
                <strong>Whatsapp:</strong><br />
                <a className='links-contact-list' href="https://wa.me/5491122500777">+5491122500777</a>
              </p>
            </li>
            <li className="icon-mail">
              <p>⚽️
                <strong>Email:</strong><br />
                <a className='links-contact-list' href="mailto:carusofutbolclub@gmail.com">carusofutbolclub@gmail.com</a>
              </p>
            </li>
            <li>
              <p>⚽️
                <strong>Lunes a viernes: </strong><br />
                de 8:30 a 13:30 y 16:30 a 21 hs.
              </p>
            </li>
            <li>
              <p>⚽️
                <strong>Sábados: </strong><br />
                de 9 a 13:30 y 16:30 a 21 hs.
              </p>
            </li>
          </ul>
        </section>
      </Container>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default Contacto;
