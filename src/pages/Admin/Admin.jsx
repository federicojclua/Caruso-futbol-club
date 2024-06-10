import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import AdminTable from './AdminTable/AdminTable';
import AdminEcommerce from './AdminEcommerce/AdminEcommerce';
import TablePrice from './Table-price/TablePrice'

const Admin = () => {
  // Estado para controlar qué contenido se muestra
  const [contentToShow, setContentToShow] = useState(''); // Inicialmente no se muestra nada

  // Función para manejar el clic en el botón de Reserva de turnos
  const handleReservaTurnosClick = () => {
    // Establecer el contenido a mostrar como 'Reserva de turnos'
    setContentToShow('Reserva de turnos');
  };

  // Función para manejar el clic en el botón de Ecommerce
  const handleEcommerceClick = () => {
    // Establecer el contenido a mostrar como 'Ecommerce'
    setContentToShow('Ecommerce');
  };
    // Función para manejar el clic en el botón de Ecommerce
    const handlePriceClick = () => {
      // Establecer el contenido a mostrar como 'Ecommerce'
      setContentToShow('Precios');
    };

  return (
    <div className=" container-admin">
      <Container>
        <h2 className='title-panel'>Bienvenidos al panel Administrador</h2>
        {/* Botones para cambiar el contenido */}
        <div className='button-container'>
        <Button className='button-admin' variant="primary" onClick={handleReservaTurnosClick}>Reserva de turnos</Button>{' '}
        <Button className='button-admin' variant="secondary" onClick={handleEcommerceClick}>Ecommerce</Button>{' '}
        <Button className='button-admin' variant="info" onClick={handlePriceClick}>Precios</Button>{' '}
        </div>
        
        {/* Mostrar el contenido correspondiente según lo seleccionado */}
        {contentToShow === 'Reserva de turnos' && <AdminTable />}
        {contentToShow === 'Ecommerce' && <AdminEcommerce />}
        {contentToShow === 'Precios' && <TablePrice />}
      </Container>
    </div>
  );
}

export default Admin;
