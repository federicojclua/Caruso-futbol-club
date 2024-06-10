import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalEcommerce({ show, handleClose, handleSave, currentRow }) {
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (currentRow) {
      setImageUrl(currentRow.image);
      setTitle(currentRow.title);
      setQuantity(currentRow.quantity ?? '');
      setPrice(currentRow.price ?? '');
    }
  }, [currentRow]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };

  const handleSaveChanges = () => {
    // Validar la longitud máxima de los valores
    if (quantity.length > 3 || price.length > 5) {
      alert('La cantidad debe tener como máximo 3 caracteres y el precio como máximo 5 caracteres.');
      return;
    }

    const quantityValue = parseFloat(quantity);
    const priceValue = parseFloat(price);

    if (!isNaN(quantityValue) && !isNaN(priceValue)) {
      handleSave({ ...currentRow, image: imageUrl, title, quantity: quantityValue, price: priceValue });
      handleClose();
    } else {
      alert('Por favor, ingrese números válidos para cantidad y precio.');
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Titulo de la Imágen</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
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
            {imageUrl && (
              <div style={{ marginBottom: '10px' }}>
                <img src={imageUrl} alt="Preview" style={{ width: '100%', maxHeight: '200px' }} />
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
