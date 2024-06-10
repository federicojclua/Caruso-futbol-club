import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ show, handleClose, cartItems, handleRemoveItem, handleReduceQuantity, handleClearCart, handleProceedToPayment }) => {
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
              <p>Precio: ${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => handleRemoveItem(index)}>Eliminar</button>
              <button onClick={() => handleReduceQuantity(index)}>Reducir Cantidad</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <button onClick={handleClearCart}>Eliminar Todos</button>
        {cartItems.length > 0 && (
          <button onClick={handleProceedToPayment}>Realizar Compra</button>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
