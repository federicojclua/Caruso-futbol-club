import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./NavBar.css";
import Container from 'react-bootstrap/Container';
import AuthContext from '../context/AuthProvider'; 
import navLogo from '../../../assets/img/carpeta/cfc-logo.png';
import userImagePlaceholder from '../../../assets/img/carpeta/IMAGEN-LOGO.png';

const NavBar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useContext(AuthContext); 

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleProtectedClick = (path) => {
    if (isLoggedIn) {
      navigate(path);
    } else {
      navigate('/Login');
    }
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" variant="dark">
        <Container>
          <Link to="/">
            <img className='cfc-logo' src={navLogo} alt="logo-caruso" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Ecommerce">Nuestra Tienda</Nav.Link>
              <Nav.Link as={Link} to="/Location">Nuestros Complejos</Nav.Link>
              <NavDropdown title="Reservas" id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={() => handleProtectedClick('/principal')}>Reservar</NavDropdown.Item>
                {isLoggedIn && (
                  <NavDropdown.Item as={Link} to="/mis-reservas">Mis Reservas</NavDropdown.Item>
                )}
              </NavDropdown>
              {isLoggedIn && user.email === 'admin4@admin4.com' && (
                <Nav.Link as={Link} to="/admin">Administrador</Nav.Link>
              )}
            </Nav>
            <Nav>
              {isLoggedIn ? ( // Mostrar nombre de usuario si está autenticado
                <NavDropdown title={user.name || user.email} id="collasible-nav-dropdown">
                  <div className="user-info">
                    <img src={user.image || userImagePlaceholder} alt="User Avatar" className="user-avatar" />
                    <span className="user-name">{user.name || user.email}</span>
                  </div>
                  <NavDropdown.Item onClick={handleLogout}>Cerrar Sesión</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown title="Iniciar Sesión" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/Login">Inicia Sesión</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/record">Regístrate</NavDropdown.Item>
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
