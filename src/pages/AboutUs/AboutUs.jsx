import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../AboutUs/AboutUs.css';
import NavBar from '../../components/header/nav-bar/NavBar';  
import Footer from '../../components/footer/Footer';
import { Container } from 'react-bootstrap';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';

const AboutUs = () => {
  return (
    <div className="AboutUs-component">
      <Helmet>
        <title>Acerca de Nosotros - Caruso Futbol Club</title>
        <meta name="description" content="Conoce más sobre Caruso Futbol Club. Descubre nuestras instalaciones, filosofía y ubicaciones en Merlo y Paso del Rey." />
        <meta name="keywords" content="Acerca de nosotros, Caruso Futbol Club, instalaciones, filosofía, ubicaciones" />
        <meta name="author" content="Caruso Futbol Club" />
        <link rel="canonical" href="https://www.carusofutbolclub.com/acerca-de-nosotros" />
      </Helmet>
      <NavBar />
      <Container className="main-content-about">
        <h2>Acerca de Nosotros</h2>
        <p>
          En Caruso Fútbol Club, creemos que el fútbol es más que un deporte; es una pasión que une a amigos, familias y compañeros de trabajo. Ubicados en los predios de Padua, Merlo y Paso del Rey, ofrecemos un espacio ideal para disfrutar del deporte rey en un ambiente amigable y con todas las comodidades.
        </p>
        <p>
          <i className="line-orange animate__animated animate__lightSpeedInLeft"></i>
          <div className='animate__animated animate__rotateIn'><strong>Nuestras Instalaciones</strong></div>
        </p>
        <p>
          Contamos con canchas de fútbol de diferentes tamaños para adaptarnos a tus necesidades:
        </p>
        <ul>
          <li><strong>F5, F6, F7 y F8</strong>: Canchas diseñadas para todos los formatos de juego, desde partidos rápidos de cinco jugadores hasta encuentros más amplios de ocho.</li>
          <li><strong>La Mejor Iluminación</strong>: Juega de día o de noche con nuestra excelente iluminación que asegura una visibilidad perfecta en cualquier momento.</li>
          <li><strong>Parrilla y Quinchos</strong>: Disfruta de un buen asado con amigos o colegas después del partido. Nuestras áreas de quincho están equipadas para que pases un momento inolvidable.</li>
          <li><strong>Baños Amplios</strong>: Instalaciones cómodas y limpias para tu conveniencia.</li>
          <li><strong>Kiosco y Cerveza</strong>: Relájate con una cerveza bien fría y snacks disponibles en nuestro kiosco.</li>
        </ul>
        <p>
          <i className="line-orange animate__animated animate__lightSpeedInLeft"></i>
          <div className='animate__animated animate__rotateIn'><strong>Eventos y Reservas</strong></div>
        </p>
        <p>
          En Caruso Fútbol Club, nos aseguramos de que cada visita sea especial. Ya sea que vengas a practicar con tu equipo, celebrar un evento o simplemente a pasar un buen rato, tenemos todo lo que necesitas.
        </p>
        <ul>
          <li><strong>Reservas Fáciles</strong>: Puedes reservar tu cancha fácilmente haciendo click <a href="/Principal">aquí</a>.</li>
          <li><strong>Notificaciones de Horarios Libres</strong>: Activa las notificaciones en nuestras redes sociales para estar al tanto de todas nuestras novedades y no perderte la oportunidad de jugar cuando más te convenga.</li>
        </ul>
        <p>
          <i className="line-orange animate__animated animate__lightSpeedInLeft"></i>
          <div className='animate__animated animate__rotateIn'><strong>Nuestra Filosofía</strong></div>
        </p>
        <p>
          En Caruso Fútbol Club, promovemos el espíritu de equipo, la comunicación y el amor por el fútbol. Nos enorgullece ofrecer un espacio donde se puedan crear recuerdos inolvidables y fortalecer vínculos a través del deporte.
        </p>
        <p>
          <i className="line-orange animate__animated animate__lightSpeedInLeft"></i>
          <div className='animate__animated animate__rotateIn'><strong>Ubicación</strong></div>
        </p>
        <p>
  Te esperamos en nuestros predios de <a href="https://maps.app.goo.gl/j8XjDLnM7HCJbxGeA" target="_blank">Merlo </a>y<a href="https://maps.app.goo.gl/7rKCYXNMrAf26gA28" target="_blank"> Paso del Rey</a>. 
  Ven y descubre por qué somos el lugar preferido para jugar al fútbol y disfrutar de buenos momentos con amigos y familia.
</p>

      </Container>
      <footer>
        <Footer />
      </footer>
      <WhatsAppButton />
    </div>
  );
}

export default AboutUs;
