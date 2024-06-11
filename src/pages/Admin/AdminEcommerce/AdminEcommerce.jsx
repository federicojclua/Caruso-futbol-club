import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ModalEcommerce from './ModalEcommerce/ModalEcommerce';
import ProductData from './ProductData'; // Importa ProductData
import './AdminEcommerce.css';

const AdminEcommerce = () => {
  // Usa los datos de ProductData
  const products = ProductData();
  
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (row) => {
    setSelectedRow(row);
    setShowModal(true);
  };

  const handleSaveModal = (updatedRow) => {
    const newRows = products.map(row => row.id === updatedRow.id ? updatedRow : row); // Actualiza los productos en lugar de rows
    // No hay necesidad de cambiar setRows, ya que estás actualizando products directamente
    handleCloseModal();
  };

  const handleDeleteRow = (row) => {
    const newRows = products.filter(r => r.id !== row.id); // Filtra los productos
    // No hay necesidad de cambiar setRows, ya que estás actualizando products directamente
  };

  const addRow = () => {
    const newRow = { id: products.length + 1, image: 'IMAGEN', title: `Foto ${products.length + 1} del carrousel`, quantity: 0, price: 0, active: false };
    // Agrega un nuevo producto al array de productos
    // No hay necesidad de cambiar setRows, ya que estás actualizando products directamente
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
            <th>ID</th>
            <th>Nombre del Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Descripción del Producto</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => ( // Itera sobre los productos
            <tr key={product.id}>
              <td>
                <input 
                  type="checkbox" 
                  checked={product.active} 
                  onChange={() => handleCheckboxChange(product)} 
                />
              </td>
              <td>{product.id}</td> {/* Muestra el ID del producto */}
              <td>{product.title}</td>
              <td>{product.quantity}</td> {/* Muestra la cantidad del producto */}
              <td>{product.price}</td>
              <td>
                {product.image.startsWith('blob:') ? (
                  <img src={product.image} alt={`Imagen ${product.id}`} style={{ width: '100px', height: '100px' }} />
                ) : (
                  <img src={product.image} alt={`Imagen ${product.id}`} style={{ width: '100px', height: '100px' }} />
                )}
              </td>
              <td>{product.description}</td> {/* Muestra la descripción */}
              <td>
                <Button className="btn-custom" onClick={() => handleShowModal(product)}>
                  Editar
                </Button>
              </td>
              <td>
                <Button className="btn-delete" onClick={() => handleDeleteRow(product)}>
                  Eliminar
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

