import React from 'react';
import ProductItem from './ProductItem';
import './Ecommerce.css';

const products = [
  { id: 1, name: 'Product 1', price: '$100', image: '' },
  { id: 2, name: 'Product 2', price: '$200', image: '' },
  { id: 3, name: 'Product 3', price: '$300', image: '' },
  // Agrega más productos según sea necesario
];

const ProductList = () => {
  return (
    <div className='product-list'>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
