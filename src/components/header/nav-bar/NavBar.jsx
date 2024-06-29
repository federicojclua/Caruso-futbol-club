import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./NavBar.css";
import Container from 'react-bootstrap/Container';
import AuthContext from '../../context/AuthProvider';
import navLogo from '../../../assets/img/carpeta/cfc-logo.png';
import userImagePlaceholder from '../../../assets/img/carpeta/IMAGEN-LOGO.png';

const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState('');
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useContext(AuthContext);

  const handleLogin = () => {
    // Aquí simulas el proceso de inicio de sesión exitoso
    setIsAuthenticated(true);
    setUserName('Nombre de Usuario');
    setUserImage('URL de la imagen del usuario');
  };

  const handleLogout = () => {
    // Aquí simulas el proceso de cierre de sesión
    logout();
  };

  const handleProtectedClick = (path) => {
    if (isAuthenticated) {
      navigate(path);
    } else {
      navigate('/');
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
                {isAuthenticated && (
                  <NavDropdown.Item as={Link} to="/mis-reservas">Mis Reservas</NavDropdown.Item>
                )}
              </NavDropdown>
              {isAuthenticated && userName === 'admin4@admin4.com' && (
                <Nav.Link as={Link} to="/admin">Administrador</Nav.Link>
              )}
            </Nav>
            <Nav>
              {user ? (
                <NavDropdown title={userName} id="collasible-nav-dropdown">
                  <div className="user-info">
                    <img src={userImage || userImagePlaceholder} alt="User Avatar" className="user-avatar" />
                    <span className="user-name">{userName}</span>
                  </div>
                  <NavDropdown.Item as={Link} to="/perfil">Mi Perfil</NavDropdown.Item>
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
