import React from 'react';
import { Link } from 'react-router-dom';
import '../Error404/Error404.css';
import { Container } from 'react-bootstrap';

const Error404 = () => {
  return (
    <div className="Error404-component">
      
      <Container className="main-content-error">
        <h2 className="animate__animated animate__rotateIn">Error 404</h2>
        <img src="src/assets/img/error404.gif" alt="Error 404" className="error-gif" />
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <p>Puede que hayas escrito mal la dirección o que la página se haya pinchado.</p>
        <Link to="/" className="link-error animate__animated animate__flash">Volver a la página principal</Link>
      </Container>
    </div>
  );
}

export default Error404;
