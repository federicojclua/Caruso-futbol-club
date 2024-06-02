import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import NavBar from '../../components/header/nav-bar/NavBar';
import Footer from '../../components/footer/Footer';

const AboutUs = () => {
  return (
    <div className="acerca-de-nosotros">
      <header className="header">
        <NavBar />
      </header>
      <main className="main-content">
        <h1>Acerca de Nosotros</h1>
        <p>
          <strong>Bienvenidos a Caruso Fútbol Club</strong>
        </p>
        <p>
          En Caruso Fútbol Club, creemos que el fútbol es más que un deporte; es una pasión que une a amigos, familias y compañeros de trabajo. Ubicados en los predios de Padua, Merlo y Paso del Rey, ofrecemos un espacio ideal para disfrutar del deporte rey en un ambiente amigable y con todas las comodidades.
        </p>
        <p>
          <strong>Nuestras Instalaciones</strong>
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
          <strong>Eventos y Reservas</strong>
        </p>
        <p>
          En Caruso Fútbol Club, nos aseguramos de que cada visita sea especial. Ya sea que vengas a practicar con tu equipo, celebrar un evento o simplemente a pasar un buen rato, tenemos todo lo que necesitas.
        </p>
        <ul>
          <li><strong>Reservas Fáciles</strong>: Puedes reservar tu cancha fácilmente haciendo click <a href="/">aquí</a>.</li>
          <li><strong>Notificaciones de Horarios Libres</strong>: Activa las notificaciones en nuestras redes sociales para estar al tanto de todas nuestras novedades y no perderte la oportunidad de jugar cuando más te convenga.</li>
        </ul>
        <p>
          <strong>Nuestra Filosofía</strong>
        </p>
        <p>
          En Caruso Fútbol Club, promovemos el espíritu de equipo, la comunicación y el amor por el fútbol. Nos enorgullece ofrecer un espacio donde se puedan crear recuerdos inolvidables y fortalecer vínculos a través del deporte.
        </p>
        <p>
          <strong>Ubicación</strong>
        </p>
        <p>
          Te esperamos en nuestros predios de <a href="/">Merlo</a> y <a href="/">Paso del Rey</a>. Ven y descubre por qué somos el lugar preferido para jugar al fútbol y disfrutar de buenos momentos con amigos y familia.
        </p>

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AboutUs;
