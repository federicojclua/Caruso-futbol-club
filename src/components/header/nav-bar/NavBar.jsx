import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./NavBar.css";
import Container from 'react-bootstrap/Container';

const NavBar = ({ isAuthenticated, userName, userImage }) => {
  const navigate = useNavigate();

  const handleProtectedClick = (path) => {
    if (isAuthenticated) {
      navigate(path);
    } else {
      navigate('/login');
    }
  };

  const simulateLogout = () => {
    // Implementa la lógica para cerrar sesión aquí
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
        <Link to="/">
        <img className='cfc-logo' src="./src/assets/img/cfc-logo.png" alt="logo-caruso" />
      </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Ecommerce">Nuestra Tienda</Nav.Link>
              <Nav.Link as={Link} to="/Location">Nuestros Complejos</Nav.Link>
              <NavDropdown title="Reservas">
                <NavDropdown.Item onClick={() => handleProtectedClick('/principal')}>Reservar</NavDropdown.Item>
                {isAuthenticated && (
                  <NavDropdown.Item as={Link} to="/mis-reservas">Mis Reservas</NavDropdown.Item>
                )}
              </NavDropdown>
              {isAuthenticated && userName === 'admin4@admin4.com' && ( // Agregar condición para mostrar el botón de Administrador
                <Nav.Link as={Link} to="/admin">Administrador</Nav.Link>
              )}
            </Nav>
            <Nav>
              {isAuthenticated ? (
                <NavDropdown title={userName} className="button-inicio">
                  <div className="user-info">
                    <img src={userImage} alt="User Avatar" className="user-avatar" />
                    <span className="user-name">{userName}</span>
                  </div>
                  <NavDropdown.Item as={Link} to="/perfil">Mi Perfil</NavDropdown.Item>
                  <NavDropdown.Item onClick={simulateLogout}>Cerrar Sesión</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown title="Iniciar Sesión" className="button-inicio">
                  <NavDropdown.Item as={Link} to="/record">¿No tienes cuenta? Regístrate</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/login">Inicia Sesión</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
