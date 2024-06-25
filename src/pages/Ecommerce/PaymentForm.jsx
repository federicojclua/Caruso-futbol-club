import React, { useState, useEffect } from "react";
import "./PaymentForm.css";
import { Helmet } from 'react-helmet';
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from '../../components/header/nav-bar/NavBar';
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
    deliveryOption: "pickup",
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [deliveryData, setDeliveryData] = useState({
    fullName: "",
    postalCode: "",
    province: "",
    locality: "",
    street: "",
    streetNumber: "",
    noStreetNumber: false,
    floorApartment: "",
    phoneNumber: "",
    additionalInstructions: "",
    instructionsLength: 0,
  });

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total + deliveryCost);
  }, [cartItems, deliveryCost]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setFormData({
        ...formData,
        [name]: value.replace(/[^a-zA-Z\s]/g, ""), // Solo permite letras y espacios en blanco
      });
    } else if (name === "deliveryOption") {
      setFormData({
        ...formData,
        [name]: value,
      });
      setShowDeliveryForm(value === "delivery");
      setDeliveryCost(value === "delivery" ? 500 : 0);
    } else {
      setFormData({
        ...formData,
        [name]: value.replace(/\D/g, ""), // Elimina todos los caracteres que no sean dígitos
      });
    }
  };

  const handleDeliveryChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      setDeliveryData({
        ...deliveryData,
        [name]: checked,
        streetNumber: checked ? "" : deliveryData.streetNumber,
      });
    } else if (name === "additionalInstructions") {
      setDeliveryData({
        ...deliveryData,
        [name]: value,
        instructionsLength: value.length,
      });
    } else if (name === "fullName" || name === "province" || name === "locality" || name === "street") {
      setDeliveryData({
        ...deliveryData,
        [name]: value.replace(/[^a-zA-Z\s]/g, ""), // Solo permite letras y espacios en blanco
      });
    } else {
      setDeliveryData({
        ...deliveryData,
        [name]: value.replace(/\D/g, ""), // Solo permite números
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir validaciones y procesamiento del pago si fuera necesario
    navigate("/Error404"); // Redirigir al Error 404 al confirmar la compra
  };

  return (
    <div className='PaymentForm-component'>
      <Helmet>
  <title>Finalizar Compra - Caruso Futbol Club</title>
  <meta name="description" content="Completa tu compra en Caruso Futbol Club. Revisa tus productos seleccionados y procede al pago de manera segura." />
  <meta name="keywords" content="finalizar compra, e-commerce, Caruso Futbol Club, carrito de compras, pago seguro" />
  <meta name="author" content="Caruso Futbol Club" />
  <link rel="canonical" href="https://www.carusofutbolclub.com/finalizar-compra" />
</Helmet>

    <NavBar />
    <div className="payment-container">
      <div className="cart-summary">
        <h2>Resumen del Carrito</h2>
        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>{item.price} x {item.quantity}</p>
            </div>
          </div>
        ))}
        <div className="delivery-cost">
          Costo de Envío: {deliveryCost ? `$${deliveryCost}` : "$0"}
        </div>
        <div className="total-price">
          Total: ${totalPrice}
        </div>
      </div>
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
          <div className="form-group cvv-group">
            <label>CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              maxLength="3"
              className="cvv-input"
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
            />
          </div>
          <div className="form-group">
            <label>Opciones de Entrega</label>
            <div className="delivery-options">
              <label>
                <input
                  type="radio"
                  name="deliveryOption"
                  value="pickup"
                  checked={formData.deliveryOption === "pickup"}
                  onChange={handleChange}
                />
                Retirar de las instalaciones
              </label>
              <label>
                <input
                  type="radio"
                  name="deliveryOption"
                  value="delivery"
                  checked={formData.deliveryOption === "delivery"}
                  onChange={handleChange}
                />
                Enviar a domicilio (Se aplicarán cargos por envío)
              </label>
            </div>
          </div>
          <button type="submit">Confirmar Compra</button>
        </form>
      </div>
      {showDeliveryForm && (
        <div className="delivery-form">
          <h2>Formulario de Entrega</h2>
          <div className="form-group">
            <label>Nombre Completo</label>
            <input
              type="text"
              name="fullName"
              value={deliveryData.fullName}
              onChange={handleDeliveryChange}
              required
              maxLength="50"
            />
          </div>
          <div className="form-group">
            <label>Provincia</label>
            <input
              type="text"
              name="province"
              value={deliveryData.province}
              onChange={handleDeliveryChange}
              required
              maxLength="50"
            />
          </div>
          <div className="form-group">
            <label>Localidad</label>
            <input
              type="text"
              name="locality"
              value={deliveryData.locality}
              onChange={handleDeliveryChange}
              required
              maxLength="50"
            />
          </div>
          <div className="form-group">
            <label>Calle</label>
            <input
              type="text"
              name="street"
              value={deliveryData.street}
              onChange={handleDeliveryChange}
              required
              maxLength="50"
            />
          </div>
          <div className="form-group no-street-number">
  {!deliveryData.noStreetNumber && (
    <div className="form-group">
      <label>Número</label>
      <input
        type="text"
        name="streetNumber"
        value={deliveryData.streetNumber}
        onChange={handleDeliveryChange}
        required
        maxLength="5"
      />
    </div>
  )}
  <label   style={{ marginLeft: '10px' }}>
  <input

  type="checkbox"
  name="noStreetNumber"
  checked={deliveryData.noStreetNumber}
  onChange={handleDeliveryChange}
/>

    Sin Número
  </label>
</div>

<div className="form-group inline-group">
  <div className="inline-item">
    <label>Código Postal</label>
    <input
      type="text"
      name="postalCode"
      value={deliveryData.postalCode}
      onChange={handleDeliveryChange}
      required
      maxLength="4"
    />
  </div>
  <div className="inline-item">
    <label>Piso/Departamento</label>
    <input
      type="text"
      name="floorApartment"
      value={deliveryData.floorApartment}
      onChange={handleDeliveryChange}
      maxLength="5"
    />
  </div>
</div>

          <div className="form-group">
            <label>Teléfono</label>
            <input
              type="text"
              name="phoneNumber"
              value={deliveryData.phoneNumber}
              onChange={handleDeliveryChange}
              required
              maxLength="10"
            />
          </div>
          <div className="form-group">
            <label>Instrucciones adicionales</label>
            <textarea
              name="additionalInstructions"
              value={deliveryData.additionalInstructions}
              onChange={handleDeliveryChange}
              maxLength="128"
            ></textarea>
            <div className="character-count">
              {deliveryData.instructionsLength}/128 caracteres
            </div>
          </div>
          <button type="submit">Confirmar Envío y Compra</button>
        </div>
      )}
    </div>
    <Footer />
    <WhatsAppButton />
    </div>
  );
};

export default PaymentForm;
