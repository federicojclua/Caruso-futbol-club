import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ModalPrice from './ModalPrice/Modalprice'; 
import './TablePrice.css'; 

const TablePrice = () => {
  const [precios, setPrecios] = useState([
    { id: 1, tipo: 'Fútbol 5', precio: '12000' },
    { id: 2, tipo: 'Fútbol 7', precio: '16800' },
    { id: 3, tipo: 'Fútbol 8', precio: '24000' }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleEditarClick = (index) => {
    setSelectedRow(precios[index]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRow(null);
  };

  const handleSaveChanges = (updatedRow) => {
    const updatedPrecios = precios.map((precio) =>
      precio.id === updatedRow.id ? updatedRow : precio
    );
    setPrecios(updatedPrecios);
    handleCloseModal();
  };

  return (
    <div className="price-table-container">
      <h3 className="price-table-title">Nuestros precios</h3>
      <Table className="price-table" striped bordered hover responsive>
        <thead>
          <tr>
            <th>Tipo de Fútbol</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {precios.map((item, index) => (
            <tr key={index}>
              <td>{item.tipo}</td>
              <td>{item.precio}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditarClick(index)}>Editar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedRow && (
        <ModalPrice 
          show={showModal} 
          handleClose={handleCloseModal} 
          handleSave={handleSaveChanges} 
          rowData={selectedRow} 
        />
      )}
    </div>
  );
};

export default TablePrice;