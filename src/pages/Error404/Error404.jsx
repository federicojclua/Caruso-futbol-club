import React from 'react';
import { Link } from 'react-router-dom';
import '../Error404/Error404.css';
import NavBar from '../../components/header/nav-bar/NavBar';
import Footer from '../../components/footer/Footer';
import { Container } from 'react-bootstrap';

const Error404 = () => {
  return (
    <div className="Error404-component">
      <NavBar />
      <Container className="main-content-error">
        <h2 class="animate__animated animate__rotateIn">Error 404</h2>
        <img src="src/assets/img/error404.gif" alt="Error 404" className="error-gif" />
        <p>
          Lo sentimos, la página que estás buscando no existe.
        </p>
        <p>
          Puede que hayas escrito mal la dirección o que la página se haya movido.
        </p>
        
        <Link to="/" className="link-error">Volver a la página principal</Link>
      </Container>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Error404;
