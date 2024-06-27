import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import AdminTable from './AdminTable/AdminTable';
import AdminEcommerce from './AdminEcommerce/AdminEcommerce';
import TablePrice from './Table-price/TablePrice'

const Admin = () => {
  const [contentToShow, setContentToShow] = useState('');

  const handleReservaTurnosClick = () => {
    setContentToShow('Reserva de turnos');
  };

  const handleEcommerceClick = () => {
    setContentToShow('Ecommerce');
  };

  const handlePriceClick = () => {
    setContentToShow('Precios');
  };

  return (
    <div className="container-admin">
      <Container>
        <h2 className='title-panel'>Bienvenido al panel Administrador</h2>
        <div className='button-container'>
          <Button className='button-admin' variant="primary" onClick={handleReservaTurnosClick}>Reservas de turnos</Button>{' '}
          <Button className='button-admin' variant="secondary" onClick={handleEcommerceClick}>Tienda</Button>{' '}
          <Button className='button-admin' variant="info" onClick={handlePriceClick}>Precios</Button>{' '}
        </div>
        
        {contentToShow === 'Reserva de turnos' && <AdminTable />}
        {contentToShow === 'Ecommerce' && <AdminEcommerce />}
        {contentToShow === 'Precios' && <TablePrice />}
      </Container>
    </div>
  );
}

export default Admin;