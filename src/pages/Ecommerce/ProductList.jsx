import React from 'react';
import ProductItem from './ProductItem';
import './Ecommerce.css';

const products = [
  { id: 1, name: 'Pelota de Fútbol', price: 100, image: 'https://http2.mlstatic.com/D_NQ_NP_726049-MLU69159207879_042023-O.webp', description: 'Pelota oficial de fútbol de alta calidad.' },
  { id: 2, name: 'Medias', price: 20, image: 'https://sublitextil.com.ar/wp-content/uploads/2019/03/Medias-Futbol-Sublimacion.jpg', description: 'Medias deportivas para fútbol.' },
  { id: 3, name: 'Remera', price: 50, image: 'https://http2.mlstatic.com/D_NQ_NP_996966-MLA51138821801_082022-O.webp', description: 'Remera de algodón transpirable.' },
  { id: 4, name: 'Botella de Agua', price: 15, image: 'https://d28hi93gr697ol.cloudfront.net/0bd0313a-ccf0-5fc3/productos/6b6b9e0c-cdc7-c6d2-1ee8-908e12f6e554/b6532dbcaf0d9bd6bf57317e154d5717-64cab38e6130c.jpg', description: 'Botella de agua para deportistas.' },
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

export default ProductList;