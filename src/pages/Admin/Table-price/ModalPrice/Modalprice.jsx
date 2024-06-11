import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalPrice({ show, handleClose, handleSave, rowData }) {
  const [precio, setPrecio] = useState('');

  useEffect(() => {
    if (rowData) {
      setPrecio(rowData.precio || '');
    }
  }, [rowData]);

  const handleSaveChanges = () => {
    const updatedRow = { ...rowData, precio };
    handleSave(updatedRow);
    handleClose();
  };

  // Función para manejar el cambio en el campo de precio, asegurando que solo se ingresen números y máximo 4 caracteres
  const handlePrecioChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,5}$/.test(value)) {
      setPrecio(value);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Precio</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="precio">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="text"
              value={precio}
              onChange={handlePrecioChange}
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPrice;
