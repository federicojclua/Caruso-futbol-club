import React from 'react';
import './Price.css'

const Price = () => {
  const precios = [
    { tipo: 'Fútbol 5', precio: '12,000' },
    { tipo: 'Fútbol 7', precio: '16,800' },
    { tipo: 'Fútbol 9', precio: '24,000' }
  ];

  return (
    <div className='table-price'>
      <h2>Nuestros precios</h2>
      <table>
        <thead>
          <tr>
            <th>Tipo de Fútbol</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {precios.map((item, index) => (
            <tr key={index}>
              <td>{item.tipo}</td>
              <td>{item.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Price;
