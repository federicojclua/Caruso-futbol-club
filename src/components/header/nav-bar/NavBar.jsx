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
          <img className='cfc-logo' src="src\assets\img\cfc-logo.png" alt="logo-caruso" />
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ color: '#8cc63f' }} href="#features">Nuestro Merch</Nav.Link>
              <Nav.Link style={{ color: '#8cc63f' }} href="#pricing">Nuestra tienda</Nav.Link>
              <NavDropdown title="Los Estadios" id="collapsible-nav-dropdown" style={{ backgroundColor: '#8cc63f', color: '#fff' }}>
                <NavDropdown.Item href="#action/3.1">Estadio1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Estadio2</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link style={{ color: '#8cc63f' }} eventKey={2} href="#memes">
                iniciar sesión
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
