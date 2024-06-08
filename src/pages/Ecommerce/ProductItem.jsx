import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className='product-item'>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
