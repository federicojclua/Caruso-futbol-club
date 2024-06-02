import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import NavBar from '../../components/header/nav-bar/NavBar';  
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const Contacto = () => {
  return (
    <div className="contacto">
      <header className="header">
        <NavBar />
      </header>
      <main className="main-content">
        <h1>Contacto</h1>
        <p>Ponte en contacto con nosotros para cualquier consulta o duda.</p>

        <section className="form">
          <div className="cont-975">
            <div className="informacion">
            <a className='caller' href="tel:01122500777">011 2250 0777</a>
              <p><strong>Servicio de Atención al Cliente</strong></p>
              <i className="linea-amarilla"></i>
              <p>¡Dale, armá tu equipo y vení! Podes comunicarte en los siguientes horarios:</p>
              <ul className="order-center-list">
                <li className="">
                  <p>⚽️
                    <strong>Lunes a viernes: </strong><br />
                    de 8:30 a 13:30 y 16:30 a 21 hs.
                  </p>
                </li>
                <li className="">
                  <p>⚽️
                    <strong>Sábados: </strong><br />
                    de 9 a 13:30 y 16:30 a 21 hs.
                  </p>
                </li>
                <li className="icon-mail">
                  <p>⚽️
                    <strong>Email:</strong><br />
                    <a style={{ fontSize: '16px', padding: '0px', margin: '0px' }} href="mailto:carusofutbolclub@gmail.com">carusofutbolclub@gmail.com</a>
                  </p>
                </li>
                <li className="">
                  <p>⚽️
                    <strong>Whatsapp:</strong><br />
                    <a style={{ fontSize: '16px', padding: '0px', margin: '0px' }} href="https://wa.me/5491122500777">+5491122500777</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default Contacto;
