import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ModalEcommerce from './ModalEcommerce/ModalEcommerce';
import './AdminEcommerce.css'; 

const AdminEcommerce = () => {
  const [rows, setRows] = useState([
    { id: 1, image: 'IMAGEN', title: 'Foto 1 del carrousel', quantity: 5, price: 10, active: false },
    { id: 2, image: 'IMAGEN', title: 'Foto 2 del carrousel', quantity: 3, price: 20, active: false },
    { id: 3, image: 'IMAGEN', title: 'Foto 3 del carrousel', quantity: 4, price: 15, active: false },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (row) => {
    setSelectedRow(row);
    setShowModal(true);
  };

  const handleSaveModal = (updatedRow) => {
    const newRows = rows.map(row => row.id === updatedRow.id ? updatedRow : row);
    setRows(newRows);
    handleCloseModal();
  };

  const handleDeleteRow = (row) => {
    const newRows = rows.filter(r => r.id !== row.id);
    setRows(newRows);
  };

  const addRow = () => {
    const newRow = { id: rows.length + 1, image: 'IMAGEN', title: `Foto ${rows.length + 1} del carrousel`, quantity: 0, price: 0, active: false };
    setRows([...rows, newRow]);
  };

  return (
    <Container>
      <ModalEcommerce 
        show={showModal} 
        handleClose={handleCloseModal} 
        handleSave={handleSaveModal} 
        currentRow={selectedRow}
      />
      <h3 className='admin-ecommerce'>Panel Administrador Ecommerce</h3>
      <Button onClick={addRow}>Agregar Imagen</Button>
      <Table responsive>
        <thead>
          <tr>
            <th>Selección</th>
            <th>Cantidad</th>
            <th>Imagen</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                <input 
                  type="checkbox" 
                  checked={row.active} 
                  onChange={() => handleCheckboxChange(row)} 
                />
              </td>
              <td>{row.quantity}</td> {/* Mostrar la cantidad del producto */}
              <td>
                {row.image.startsWith('blob:') ? (
                  <img src={row.image} alt={`Imagen ${row.id}`} style={{ width: '100px', height: '100px' }} />
                ) : (
                  <img src={row.image} alt={`Imagen ${row.id}`} style={{ width: '100px', height: '100px' }} />
                )}
              </td>
              <td>{row.title}</td>
              <td>{row.price}</td>
              <td>
                <Button className="btn-custom" onClick={() => handleShowModal(row)}>
                  Editar
                </Button>
              </td>
              <td>
                <Button className="btn-delete" onClick={() => handleDeleteRow(row)}>
                  <img className="img-eliminar" src="src/assets/img/Basurero.png" alt="Eliminar" style={{ width: '30px', height: '50px' }} />
                 </Button>
              </td>

            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminEcommerce;
