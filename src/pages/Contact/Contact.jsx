import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import NavBar from '../../components/header/nav-bar/NavBar';  
import Footer from '../../components/footer/Footer';

const Contacto = () => {
  return (
    <div className="contacto">
      <header className="header">
        <NavBar />
      </header>
      <main className="main-content">
        <h1>Contacto</h1>
        <p>Ponte en contacto con nosotros para cualquier consulta o duda.</p>
        {/* Contenido para formulario de contacto*/}
        <form>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje"></textarea>
          <button type="submit">Enviar</button>
        </form>
        <Link to="/">Volver a la página principal</Link>
        <Footer />
      </main>
    </div>
  );
}

export default Contacto;
