import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import AdminTable from './AdminTable/AdminTable';



const Admin = () => {
  return (
    <div className="">
  
     
      <Container>
        <h2>Bienvenidos al panel Administrador</h2>
 
  
 
      <Button variant="primary">Pagina principal</Button>{' '}
      <Button variant="secondary">Escuelita</Button>{' '}
      <Button variant="success">Torneos</Button>{' '}
      <Button variant="success">Turnos</Button>{' '}
      
    
      <AdminTable/>
      

      
      </Container>
    </div>
  );
}

export default Admin;