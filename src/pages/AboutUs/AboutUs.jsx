import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../AboutUs/AboutUs.css';
import NavBar from '../../components/header/nav-bar/NavBar';  
import Footer from '../../components/footer/Footer';
import { Container } from 'react-bootstrap';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import pngBall from '../../assets/img/pngball.png';

const AboutUs = () => {
  return (
    <div className="AboutUs-component">
      <Helmet>
        <title>Acerca de Nosotros - Caruso Fútbol Club</title>
        <meta name="description" content="Conocé más sobre Caruso Fútbol Club. Descubrí nuestras instalaciones, filosofía y ubicaciones en Merlo y Paso del Rey." />
        <meta name="keywords" content="Acerca de nosotros, Caruso Futbol Club, instalaciones, filosofía, ubicaciones" />
        <meta name="author" content="Caruso Futbol Club" />
        <link rel="canonical" href="https://www.carusofutbolclub.com/acerca-de-nosotros" />
      </Helmet>
      <NavBar />
      <h2 className='title-aboutus'>
      <div className="ball-icons-container">
            <div className="ball-icons animate__animated animate__rollIn">
              <img src={pngBall} alt="Ball icon" />
            </div>
            <div>Acerca de nosotros</div>
            <div className="ball-icons rollInRight">
              <img src={pngBall} alt="Ball icon" />
            </div>
          </div>
        </h2>

      <Container className="main-content-about">
        <section>
          <p>
            En Caruso Fútbol Club, creemos que el fútbol es más que un deporte; es una pasión que une a amigos, familias y compañeros de trabajo. Ubicados en Merlo y Paso del Rey, ofrecemos un espacio ideal para disfrutar del deporte rey en un ambiente amigable y con todas las comodidades.
          </p>
        </section>
        <section>
          <i className="line-orange animate__animated animate__lightSpeedInLeft"></i>
          <div className='animate__animated animate__rotateIn'><strong>Nuestras Instalaciones</strong></div>
          <ul>
            <li><strong>F5 y más</strong>: Canchas para todos los formatos de juego.</li>
            <li><strong>La Mejor Iluminación</strong>: Excelente visibilidad en cualquier momento.</li>
            <li><strong>Parrilla y Quinchos</strong>: Espacios para disfrutar de un buen asado.</li>
            <li><strong>Baños Amplios</strong>: Instalaciones cómodas y limpias.</li>
            <li><strong>Kiosco y Cerveza</strong>: Bebidas y snacks disponibles.</li>
          </ul>
        </section>
        <section>
          <i className="line-orange animate__animated animate__lightSpeedInLeft"></i>
          <div className='animate__animated animate__rotateIn'><strong>Eventos y Reservas</strong></div>
          <ul>
            <li><strong>Reservas Fáciles</strong>: Reservá tu cancha fácilmente <a href="/Principal">aquí</a>.</li>
            <li><strong>Notificaciones de Horarios Libres</strong>: Activá las notificaciones en nuestras redes sociales.</li>
          </ul>
        </section>
        <section>
          <i className="line-orange animate__animated animate__lightSpeedInLeft"></i>
          <div className='animate__animated animate__rotateIn'><strong>Nuestra Filosofía</strong></div>
          <p>Promovemos el espíritu de equipo, la comunicación y el amor por el fútbol, ofreciendo un espacio donde se pueden crear recuerdos inolvidables y fortalecer vínculos a través del deporte.</p>
        </section>
        <section>
          <i className="line-orange animate__animated animate__lightSpeedInLeft"></i>
          <div className='animate__animated animate__rotateIn'><strong>Ubicación</strong></div>
          <p>Visitanos en nuestros predios de <a href="https://maps.app.goo.gl/j8XjDLnM7HCJbxGeA" target="_blank">Merlo</a> y <a href="https://maps.app.goo.gl/7rKCYXNMrAf26gA28" target="_blank">Paso del Rey</a>.</p>
        </section>
      </Container>
      <footer>
        <Footer />
      </footer>
      <WhatsAppButton />
    </div>
  );
}

export default AboutUs;
