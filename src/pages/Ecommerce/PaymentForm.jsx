import React, { useState } from 'react';
import './PaymentForm.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se pueden añadir validaciones y procesamiento del pago si fuera necesario
    navigate('/Error404'); // Redirigir al Error 404 al confirmar la compra
  };

  return (
    <div>
    <div className="payment-form">
      <h2>Formulario de Pago</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre en la Tarjeta</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Número de Tarjeta</label>
          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Fecha de Vencimiento</label>
          <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required />
        </div>
        <button type="submit">Confirmar Pago</button>
      </form>
    </div>
    <Footer />
    <WhatsAppButton />
    </div>
  );
};

export default PaymentForm;
