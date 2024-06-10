import React from 'react';
import './Price.css'

const Price = () => {
  const precios = [
    { tipo: 'Fútbol 5', precio: '12,000' },
    { tipo: 'Fútbol 7', precio: '16,800' },
    { tipo: 'Fútbol 8', precio: '24,000' }
  ];

  return (
    <div className='table-price' style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Nuestros precios</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo de Fútbol</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Precio</th>
          </tr>
        </thead>
        <tbody>
          {precios.map((item, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.tipo}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Price;
