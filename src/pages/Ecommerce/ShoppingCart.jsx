import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ show, handleClose, cartItems, handleRemoveItem }) => {
  // Calcular el precio total del carrito
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
  };

  return (
    <div className={`shopping-cart ${show ? 'show' : ''}`}>
      <div className="cart-header">
        <h2>Carrito de Compras</h2>
        <button className="close-cart" onClick={handleClose}>Cerrar</button>
      </div>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.price * item.quantity}</p>
              <button onClick={() => handleRemoveItem(index)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price">Precio Total: ${calculateTotalPrice()}</div>
    </div>
  );
}

export default ShoppingCart;
