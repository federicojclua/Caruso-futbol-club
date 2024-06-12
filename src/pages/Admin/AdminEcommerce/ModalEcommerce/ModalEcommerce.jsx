import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ModalEcommerce = ({ show, handleClose, handleSave, currentRow, isNewProduct }) => {
  const [product, setProduct] = useState(currentRow);
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

  useEffect(() => {
    setProduct(currentRow);
  }, [currentRow]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = () => {
    handleSave(product);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isNewProduct ? 'Agregar Producto' : 'Editar Producto'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formProductName">
            <Form.Label>Nombre del Producto</Form.Label>
            <Form.Control 
              type="text" 
              name="name" 
              value={product?.name || ''} 
              onChange={handleChange} 
              placeholder="Ingrese el nombre del producto" 
            />
          </Form.Group>
          <Form.Group controlId="formProductDescription">
            <Form.Label>Descripción</Form.Label>
            <Form.Control 
              type="text" 
              name="description" 
              value={product?.description || ''} 
              onChange={handleChange} 
              placeholder="Ingrese la descripción del producto" 
            />
          </Form.Group>
          <Form.Group controlId="formProductPrice">
            <Form.Label>Precio</Form.Label>
            <Form.Control 
              type="number" 
              name="price" 
              value={product?.price || 0} 
              onChange={handleChange} 
              placeholder="Ingrese el precio del producto" 
            />
          </Form.Group>
          <Form.Group controlId="formProductQuantity">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control 
              type="number" 
              name="quantity" 
              value={product?.quantity || 0} 
              onChange={handleChange} 
              placeholder="Ingrese la cantidad del producto" 
            />
          </Form.Group>
          <Form.Group controlId="formProductImage">
          <Form.Label>Foto (300 x 200 px)</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
            {imageUrl && <img src={imageUrl} alt="Vista previa" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEcommerce;
