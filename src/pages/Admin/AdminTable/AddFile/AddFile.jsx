import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './AddFile.css';

const AddFile = ({ addRow }) => {
  return (
    <Container>
      <Button variant="primary" onClick={addRow}>Agregar Fila</Button>
    </Container>
  );
}

export default AddFile;
