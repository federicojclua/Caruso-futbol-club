import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ModalEcommerce from './ModalEcommerce/ModalEcommerce';
import ProductData from './ProductData'; // Importa ProductData
import './AdminEcommerce.css';

const AdminEcommerce = () => {
  
  const [products, setProducts] = useState(ProductData);
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (row) => {
    setSelectedRow(row);
    setShowModal(true);
  };

  const handleSaveModal = (updatedRow) => {
    const newProducts = products.map(row => row.id === updatedRow.id ? updatedRow : row);
    setProducts(newProducts); 
    handleCloseModal();
  };

  const handleDeleteRow = (row) => {
    const newProducts = products.filter(r => r.id !== row.id); // Filtra los productos
    setProducts(newProducts);
  };

  const addRow = () => {
    const newRow = { 
      id: products.length + 1,
      image: 'IMAGEN', 
      name: `Foto ${products.length + 1} del carrousel`,
      quantity: 0, 
      price: 0,
      description: '', 
      active: false };
    // Agrega un nuevo producto al array de productos
    };

  const handleCheckboxChange = (product) => {
    const newProducts = products.map(p =>
      p.id === product.id ? { ...p, active: !p.active } : p
    );
    setProducts(newProducts);
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
      <Button onClick={() => handleShowModal()}>Agregar Producto</Button>
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
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>
                {product.image.startsWith('blob:') ? (
                  <img src={product.image} alt={`Imagen ${product.id}`} style={{ width: '100px', height: '100px' }} />
                ) : (
                  <img src={product.image} alt={`Imagen ${product.id}`} style={{ width: '100px', height: '100px' }} />
                )}
              </td>
              <td>{product.description}</td>
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

