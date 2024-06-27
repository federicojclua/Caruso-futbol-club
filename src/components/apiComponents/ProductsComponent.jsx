// src/components/ProductsComponent.jsx
import React, { useEffect, useState } from 'react';
import { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById, uploadImage } from '../../api/productsApi';

const ProductsComponent = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
  });
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const createdProduct = await createProduct(newProduct);
      setProducts([...products, createdProduct]);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleUploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedImage);
    try {
      const data = await uploadImage(formData);
      console.log('Image uploaded:', data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleUpdateProduct = async (id, updatedData) => {
    try {
      const updatedProduct = await updateProductById(id, updatedData);
      setProducts(products.map(product => (product._id === id ? updatedProduct : product)));
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProductById(id);
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h1>Productos</h1>
      <form onSubmit={handleCreateProduct}>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="description"
          value={newProduct.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <button type="submit">Crear Producto</button>
      </form>

      <form onSubmit={handleUploadImage}>
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
        />
        <button type="submit">Subir Imagen</button>
      </form>

      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - {product.description} - ${product.price}
            <button onClick={() => handleUpdateProduct(product._id, { ...product, name: 'Updated Name' })}>Actualizar</button>
            <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsComponent;
