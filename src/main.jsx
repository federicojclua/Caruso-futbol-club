import React from 'react';
import { createRoot } from 'react-dom/client'; //modificado para compatibilidad React 18
import App from './App.jsx';
import './App.css';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
