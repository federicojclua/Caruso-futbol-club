import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import './Ecommerce.css';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5004/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error cargando productos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='product-list'>
      {products.map(product => (
        <ProductItem key={product._id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;