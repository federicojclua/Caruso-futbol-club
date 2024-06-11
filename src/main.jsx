import React from 'react';
import { render } from 'react-dom'; // Importa render desde 'react-dom'
import App from './App.jsx';
import './App.css';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
