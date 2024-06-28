import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import NavBar from '../../components/header/nav-bar/NavBar';
import Footer from '../../components/footer/Footer';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import { register } from '../../api/authApi';
import "./Record.css";

const Record = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState('');
  const [equipo, setEquipo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleDniChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 8) {
      setDni(value);
    }
  };

  const handleTextChange = (setter) => (e) => {
    const value = e.target.value;
    if (value.length <= 20) {
      setter(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register({ 
        nombre, 
        apellido, 
        dni, 
        equipo, 
        direccion, 
        email, 
        password 
      });
      if (response.message === 'Usuario registrado exitosamente') {
        navigate('/login');
      } else {
        setError(response.data.message); // 28-06
      }
    } catch (error) {
      setError('Error al registrarse. Intenta nuevamente.');
    }
  };

  return (
    <div className="Record-component">
      <Helmet>
        <title>Registro - Caruso Futbol Club</title>
        <meta name="description" content="Regístrate en Caruso Futbol Club para acceder a tu cuenta y disfrutar de todos los beneficios." />
        <meta name="keywords" content="registro, registrarse, Caruso Futbol Club, cuenta" />
        <meta name="author" content="Caruso Futbol Club" />
        <link rel="canonical" href="https://caruso-futbol-club-1.onrender.com" />
      </Helmet>
      <NavBar />
      <div className="row">
        <div className="colm-form">
          <div className="form-container">
            <h2 className="mb-4 text-center">Registro</h2>
            {error && <p className="text-danger">{error}</p>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formNombre">
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu nombre"
                  value={nombre}
                  maxLength={20}
                  onChange={handleTextChange(setNombre)}
                />
              </Form.Group>
              <Form.Group controlId="formApellido">
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu apellido"
                  value={apellido}
                  maxLength={20}
                  onChange={handleTextChange(setApellido)}
                />
              </Form.Group>
              <Form.Group controlId="formDNI">
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu DNI"
                  value={dni}
                  maxLength={8}
                  onChange={handleDniChange}
                />
              </Form.Group>
              <Form.Group controlId="formEquipo">
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu equipo"
                  value={equipo}
                  maxLength={20}
                  onChange={handleTextChange(setEquipo)}
                />
              </Form.Group>
              <Form.Group controlId="formDireccion">
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu dirección"
                  value={direccion}
                  maxLength={20}
                  onChange={handleTextChange(setDireccion)}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu email"
                  value={email}
                  maxLength={20}
                  onChange={handleTextChange(setEmail)}
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  maxLength={20}
                  onChange={handleTextChange(setPassword)}
                />
              </Form.Group>
              <Button className="btn-login" type="submit">
                Registrarse
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Record;
