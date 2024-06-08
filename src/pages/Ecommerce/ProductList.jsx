import React from 'react';
import ProductItem from './ProductItem';
import './Ecommerce.css';

const products = [
  { id: 1, name: 'Pelota de Fútbol', price: '$100', image: 'url_a_la_imagen_de_la_pelota' },
  { id: 2, name: 'Medias', price: '$20', image: 'url_a_la_imagen_de_las_medias' },
  { id: 3, name: 'Remera', price: '$50', image: 'url_a_la_imagen_de_la_remera' },
  { id: 4, name: 'Botella de Agua', price: '$15', image: 'url_a_la_imagen_de_la_botella' },
  // Agrega más productos según sea necesario
];

const ProductList = ({ addToCart }) => {
  return (
    <div className='product-list'>
      {products.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
