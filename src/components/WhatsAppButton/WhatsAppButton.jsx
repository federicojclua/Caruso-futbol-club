import React from 'react';
import './WhatsAppButton.css';
import whatsappIcon from '../../assets/img/whatsapp-transparent.png'; // Importa la imagen de WhatsApp

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/1234567890" // Reemplaza con tu número de WhatsApp
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsappIcon} alt="WhatsApp Icon" className="whatsapp-icon" />
    </a>
  );
}

export default WhatsAppButton;
