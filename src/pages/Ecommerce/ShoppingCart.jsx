import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ShoppingCart.css';

const ShoppingCart = ({ show, handleClose, cartItems }) => {
  const handleRemoveItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Carrito de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h5>{item.name}</h5>
              <p>{item.price}</p>
              <Button variant="danger" onClick={() => handleRemoveItem(index)}>Remove</Button>
            </div>
          ))
        ) : (
          <p>El carrito está vacío</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => alert('Ir a pagar')}>
          Pagar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShoppingCart;
