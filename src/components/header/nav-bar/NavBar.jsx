import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import ProtectedRoute from './ProtectedRoute'; // Importa tu componente ProtectedRoute
import "./NavBar.css";
import Container from 'react-bootstrap/Container';

const NavBar = ({ isAuthenticated }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <img className='cfc-logo' src="src/assets/img/cfc-logo.png" alt="logo-caruso" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Ecommerce">Nuestra Tienda</Nav.Link>
              <Nav.Link as={Link} to="/Location">Nuestros Complejos</Nav.Link>
              <NavDropdown title="Reservas">
                <NavDropdown.Item as={Link} to="/reservar">Reservar</NavDropdown.Item>
                {/* Aquí utilizamos ProtectedRoute para proteger el enlace "Mis Reservas" */}
                <ProtectedRoute isAuthenticated={isAuthenticated} element={<NavDropdown.Item as={Link} to="/mis-reservas">Mis Reservas</NavDropdown.Item>} />
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown title="Iniciar Sesión" className="button-inicio">
                <NavDropdown.Item as={Link} to="/registrarse">¿No tienes cuenta? Regístrate</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Login">Inicia Sesión</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
