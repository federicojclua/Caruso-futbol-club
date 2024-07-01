import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ModalEcommerce from './ModalEcommerce/ModalEcommerce';
import './AdminEcommerce.css';
import useProductData from './ProductData';

const AdminEcommerce = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  useProductData()

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (row) => {
    setSelectedRow(row);
    setShowModal(true);
  };

  const handleSaveModal = async (updatedRow) => {
    try {
      const formData = new FormData();
      formData.append('name', updatedRow.name);
      formData.append('description', updatedRow.description);
      formData.append('price', updatedRow.price);
      formData.append('quantity', updatedRow.quantity);
      if (updatedRow.image) {
        formData.append('image', updatedRow.image);
      }

      let response;
      if (updatedRow.id) {
        response = await axios.put(/api/products`${updatedRow.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      } else {
        response = await axios.post('/api/products', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response)
        setProducts([...products, response.data]); // Añadir el nuevo producto a la lista
      }

      const newProducts = products.map(row => row.id === response.data.id ? response.data : row);
      setProducts(newProducts);
      handleCloseModal();
    } catch (error) {
      
      console.error('Error saving product', error);
      alert('Error saving product');
    }
  };

  const handleDeleteRow = async (row) => {
    try {
      await axios.delete(/api/products`${row.id}`);
      const newProducts = products.filter(r => r.id !== row.id);
      setProducts(newProducts);
    } catch (error) {
      console.error('Error deleting product', error);
      alert('Error deleting product');
    }
  };

  const addRow = () => {
    setSelectedRow({
      id: null,
      name: '',
      description: '',
      price: '',
      quantity: '',
      image: '',
    });
    setShowModal(true);
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
      <Button onClick={addRow}>Agregar Producto</Button>
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
          {products.lenght >= 0 && products.map((product) => (
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
              <td>{product.description}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.image} alt={Imagen `${product.id}`} style={{ width: '100px', height: '100px' }} />
              </td>
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

export default AdminEcommerce;