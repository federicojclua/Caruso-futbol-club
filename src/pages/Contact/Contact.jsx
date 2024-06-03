import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import NavBar from '../../components/header/nav-bar/NavBar';  
import Footer from '../../components/footer/Footer';
import { Container, Navbar } from 'react-bootstrap';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';

const Contacto = () => {
  return (
   <div className='Contact-component'>
        <NavBar />
        <div className="">
      <Container className="main-contact-content">
        <p className='subtitle-contact'>Ponte en contacto con nosotros para cualquier consulta o duda.</p>

        {/* Sección de Información de Contacto */}
        <section className="form">
          <div className="cont-contact">
            <div className="info">
              <a className='caller' href="tel:01122500777">011 2250 0777</a>
              <p><strong>Servicio de Atención al Cliente</strong></p>
              <i className="line-orange"></i>
              <p>¡Dale, armá tu equipo y vení! Podes comunicarte por los siguiente medios y en los horarios indicados:</p>
            </div>
          </div>
        </section>

        {/* Lista Desordenada de Contacto */}
        <section className="contact-list">
          <ul>
          <li>
              <p>⚽️
                <strong>Whatsapp:</strong><br />
                <a style={{ padding: '0px', margin: '0px' }} href="https://wa.me/5491122500777">+5491122500777</a>
              </p>
            </li>
            <li className="icon-mail">
              <p>⚽️
                <strong>Email:</strong><br />
                <a style={{ padding: '0px', margin: '0px' }} href="mailto:carusofutbolclub@gmail.com">carusofutbolclub@gmail.com</a>
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
    </div>
    
  );
}

export default Contacto;
