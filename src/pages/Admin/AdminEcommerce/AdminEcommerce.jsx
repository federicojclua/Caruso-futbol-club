import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ModalEcommerce from './ModalEcommerce/ModalEcommerce';
import fetchProductData from './ProductData';
import axios from 'axios'; 
import './AdminEcommerce.css';

const AdminEcommerce = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isNewProduct, setIsNewProduct] = useState(false);

  const fetchProducts = async () => {
    const data = await fetchProductData();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    setIsNewProduct(false);
    setSelectedRow(null);
  };

  const handleShowModal = (product) => {
    setSelectedRow(product);
    setShowModal(true);
  };

  const handleSaveModal = async (formData) => {
    if (isNewProduct) {
      try {
        const response = await axios.post('http://localhost:5004/api/products/new', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        setProducts([...products, response.data.product]); 
      } catch (error) {
        console.error('Error creando producto:', error);
      }
    } else {
      try {
        const response = await axios.put(`http://localhost:5004/api/products/${selectedRow._id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        const updatedProduct = response.data.product;
        setProducts(products.map(product => product._id === updatedProduct._id ? updatedProduct : product));
      } catch (error) {
        console.error('Error actualizando producto:', error);
      }
    }
    handleCloseModal();
  };

  const handleDeleteRow = async (product) => {
    try {
      await axios.delete(`http://localhost:5004/api/products/${product._id}`);
      setProducts(products.filter(p => p._id !== product._id));
    } catch (error) {
      console.error('Error eliminando producto:', error);
    }
  };

  const addProduct = () => {
    const newProduct = {
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      image: '',
    };
    setSelectedRow(newProduct);
    setIsNewProduct(true);
    setShowModal(true);
  };

  const handleCheckboxChange = (product) => {
    const updatedProducts = products.map(p => p._id === product._id ? { ...p, active: !p.active } : p);
    setProducts(updatedProducts);
  };

  return (
    <Container>
      <ModalEcommerce 
        show={showModal} 
        handleClose={handleCloseModal} 
        handleSave={handleSaveModal} 
        currentRow={selectedRow}
        isNewProduct={isNewProduct}
      />
      <h3 className='admin-ecommerce'>Panel Administrador Ecommerce</h3>
      <Button onClick={addProduct} className="btn-add">Agregar Producto</Button>
      <Table responsive className="ecommerce-table">
        <thead>
          <tr>
            <th>Selección</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Descripción</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <input 
                  type="checkbox" 
                  checked={product.active} 
                  onChange={() => handleCheckboxChange(product)} 
                />
              </td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.image} alt={`Imagen ${product._id}`} className="product-image" />
              </td>
              <td>{product.description}</td>
              <td>
                <Button className="btn-action" onClick={() => handleShowModal(product)}>
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
