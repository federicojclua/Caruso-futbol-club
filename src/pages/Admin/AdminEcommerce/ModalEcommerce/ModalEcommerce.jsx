// ModalEcommerce.jsx
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalEcommerce({ show, handleClose, handleSave, currentRow }) {
  const [image, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (currentRow) {
      setImageUrl(currentRow.image);
      setName(currentRow.name);
      setQuantity(currentRow.quantity ?? '');
      setPrice(currentRow.price ?? '');
      setDescription(currentRow.description);
    }
  }, [currentRow]);

  const handleImageChange = (event) => {
    const image = URL.createObjectURL(event.target.files[0]);
    setImageUrl(image);
  };

  const handleSaveChanges = () => {
    if (quantity.length > 3 || price.length > 5) {
      alert('La cantidad debe tener como máximo 3 caracteres y el precio como máximo 5 caracteres.');
      return;
    }

    const quantityValue = parseFloat(quantity);
    const priceValue = parseFloat(price);

    if (!isNaN(quantityValue) && !isNaN(priceValue)) {
      handleSave({ ...currentRow, image, name, quantity: quantityValue, price: priceValue, description });
      handleClose();
    } else {
      alert('Por favor, ingrese números válidos para cantidad y precio.');
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formQuantity">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              value={quantity}
              onChange={(e) => {
                if (e.target.value.length <= 3) {
                  setQuantity(e.target.value);
                }
              }}
              maxLength={3}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(e) => {
                if (e.target.value.length <= 5) {
                  setPrice(e.target.value);
                }
              }}
              maxLength={5}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Foto (300 x 200 px)</Form.Label>
            {image && (
              <div style={{ marginBottom: '10px' }}>
                <img src={image} alt="Preview" style={{ width: '100%', maxHeight: '200px' }} />
              </div>
            )}
            <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEcommerce;
