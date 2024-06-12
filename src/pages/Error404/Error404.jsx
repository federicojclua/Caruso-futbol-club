import React from 'react';
import { Link } from 'react-router-dom';
import '../Error404/Error404.css';
import { Container } from 'react-bootstrap';
import NavBar from '../../components/header/nav-bar/NavBar';  
import error404gif from '/../../assets/img/carpeta/error404gif.gif';

const Error404 = () => {
  return (
    
    <div className="Error404-component">
      <NavBar />
      <Container className="main-content-error">
        <h2 className="animate_animated animate_rotateIn">Error 404</h2>
        <img className='error404gif'src={error404gif} alt="img-error404" />
        <p><Link to="/" className="link-error animate_animated animate_flash">Volver a la página principal</Link></p>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <p>Puede que hayas escrito mal la dirección o que la página se haya pinchado.</p>
        
      </Container>
    </div>
  );
}

export default Error404;