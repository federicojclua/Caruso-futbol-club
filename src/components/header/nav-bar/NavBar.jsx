import React from 'react';
import "./NavBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <img className='cfc-logo' src="src/assets/img/cfc-logo.png" alt="logo-caruso" />


          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Nuestra Tienda</Nav.Link>
              <Nav.Link href="#complexes">Nuestros Complejos</Nav.Link>
              <NavDropdown title="Reservas">
                <NavDropdown.Item href="#action/3.1">Reservar</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Mis Reservas</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown title="Iniciar Sesión" className="button-inicio">
                <NavDropdown.Item href="#action/3.1">¿Ya tienes cuenta? Regístrate</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Inicia Sesión</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
