import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../Ecommerce/ShoppingCart.css';

const ShoppingCart = ({ show, handleClose, cartItems }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Carrito de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className='cart-item'>
              <img src={item.image} alt={item.name} />
              <h5>{item.name}</h5>
              <p>{item.price}</p>
            </div>
          ))
        ) : (
          <p>El carrito está vacío</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={() => alert('Ir a pagar')}>
          Pagar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShoppingCart;
