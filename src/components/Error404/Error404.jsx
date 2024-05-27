import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';

const Error404 = () => {
  return (
    <div className="error-404">
      <h1>Lo sentimos, ocurrió un error inesperado...</h1>
      <img src="https://i.gifer.com/8dSK.gif" alt="Error 404" />
      <Link to="/">Volver a la página principal</Link>
    </div>
  );
}

export default Error404;
