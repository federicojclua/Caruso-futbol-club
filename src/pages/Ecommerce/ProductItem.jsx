import React, { useState } from 'react';
import './Ecommerce.css';

const ProductItem = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
    }
  };

  return (
    <div className='product-item'>
      <img src={product.image} alt={product.name} className='product-image' />
      <h2>{product.name}</h2>
      <p>{`$${product.price}`}</p>
      <p>{product.description}</p>
      <input type="number" value={quantity} min="0" onChange={handleQuantityChange} />
      <button onClick={handleAddToCart}>Añadir al Carrito</button>
    </div>
  );
}

export default ProductItem;