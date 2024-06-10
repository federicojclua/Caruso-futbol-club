import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalEdit({ show, handleClose, handleSave, rowData }) {
  const [importeSenia, setImporteSenia] = useState('');

  useEffect(() => {
    if (rowData) {
      setImporteSenia(rowData.senia || '');
    }
  }, [rowData]);

  const handleSaveChanges = () => {
    const updatedRow = { ...rowData, senia: importeSenia };
    handleSave(updatedRow);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Reserva</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="importeSenia">
            <Form.Label>Importe de la Seña</Form.Label>
            <Form.Control
              type="number"
              value={importeSenia}
              onChange={(e) => setImporteSenia(e.target.value)}
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

export default ModalEdit;
