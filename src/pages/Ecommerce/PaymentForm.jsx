import React, { useState, useEffect } from "react";
import "./PaymentForm.css";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";

const PaymentForm = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    dni: "",
  });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validar si el campo es "nombre en la tarjeta" para permitir solo letras
    if (name === "name") {
      setFormData({
        ...formData,
        [name]: value.replace(/[^a-zA-Z\s]/g, ""), // Solo permite letras y espacios en blanco
      });
    } else {
      setFormData({
        ...formData,
        [name]: value.replace(/\D/g, ""), // Elimina todos los caracteres que no sean dígitos
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir validaciones y procesamiento del pago si fuera necesario
    navigate("/Error404"); // Redirigir al Error 404 al confirmar la compra
  };

  return (
    <div>
      <div className="payment-container">
        <div className="payment-form">
          <h2>Formulario de Pago</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre en la Tarjeta</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength="50"
              />
            </div>
            <div className="form-group">
              <label>Número de Tarjeta</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
                maxLength="16"
              />
            </div>
            <div className="form-group">
              <label>Fecha de Vencimiento</label>
              <input
                type="text"
                name="expiryMonth"
                value={formData.expiryMonth}
                onChange={handleChange}
                required
                maxLength="2"
                placeholder="MM"
                style={{ width: "50px", marginRight: "10px" }}
              />
              <input
                type="text"
                name="expiryYear"
                value={formData.expiryYear}
                onChange={handleChange}
                required
                maxLength="2"
                placeholder="AA"
                style={{ width: "50px" }}
              />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
                maxLength="3"
              />
              <img
                src="https://images.contentstack.io/v3/assets/bltd488044897c9abc0/blta94cfceb401ac8c6/637c1807a32209106e8b5077/CVV_graphic_2.png"
                alt="CVV ayuda"
                className="cvv-help-image"
              />
            </div>
            <div className="form-group">
              <label>DNI del titular de la tarjeta</label>
              <input
                type="text"
                name="dni"
                value={formData.dni}
                onChange={handleChange}
                required
                maxLength="8"
                placeholder="Ingresa el número sin puntos"
              />
            </div>
            <button type="submit">Confirmar Pago</button>
          </form>
        </div>
        <div className="cart-summary">
          <h2>Resumen del Pedido</h2>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="total-price">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PaymentForm;
