import React from 'react';

const ProductData = () => {
  const products = [
    { id: 1, name: 'Pelota de Fútbol', quantity: 5, price: 10, image: 'https://http2.mlstatic.com/D_NQ_NP_726049-MLU69159207879_042023-O.webp', description: 'Pelota oficial de fútbol de alta calidad.' },
    { id: 2, name: 'Medias', quantity: 3, price: 20, image: 'https://sublitextil.com.ar/wp-content/uploads/2019/03/Medias-Futbol-Sublimacion.jpg', description: 'Medias deportivas para fútbol.' },
    { id: 3, name: 'Remera', quantity: 4, price: 15, image: 'https://http2.mlstatic.com/D_NQ_NP_996966-MLA51138821801_082022-O.webp', description: 'Remera de algodón transpirable.' },
    { id: 4, name: 'Botella de Agua', quantity: 10, price: 5, image: 'https://d28hi93gr697ol.cloudfront.net/0bd0313a-ccf0-5fc3/productos/6b6b9e0c-cdc7-c6d2-1ee8-908e12f6e554/b6532dbcaf0d9bd6bf57317e154d5717-64cab38e6130c.jpg', description: 'Botella de agua para deportistas.' },
    // Agrega más productos según sea necesario
  ];

  return products;
};

export default ProductData;
