import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0); // Cambiar la cantidad predeterminada a 0

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    if (quantity > 0) { // Verificar si la cantidad es mayor que 0 antes de agregar al carrito
      addToCart(product, quantity);
    }
  };

  return (
    <div className='product-item'>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{`$${product.price}`}</p> {/* Agregar el signo "$" al precio */}
      <p>{product.description}</p> {/* Agregar la descripción */}
      <input type="number" value={quantity} min="0" onChange={handleQuantityChange} />
      <button onClick={handleAddToCart}>Añadir al Carrito</button> {/* Utilizar la función handleAddToCart */}
    </div>
  );
}

export default ProductItem;