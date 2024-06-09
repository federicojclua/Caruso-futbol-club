import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import NavBar from '../../components/header/nav-bar/NavBar';  
import Footer from '../../components/footer/Footer';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import './Login.css'; // Importamos el archivo CSS para los estilos del login

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [serverError, setServerError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Utilizamos useEffect para limpiar el mensaje de éxito después de 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage('');
    }, 2000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de la contraseña
    if (password.length < 4 || password.length > 20) {
      setPasswordError('La contraseña debe tener al menos 4 caracteres y menos de 20.');
      return;
    } else {
      setPasswordError('');
    }

    try {
      const response = await fetch('http://localhost:5004/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Manejar el inicio de sesión exitoso
        setSuccessMessage('Sesión iniciada correctamente. ¡Bienvenido!');
        setTimeout(() => {
          navigate('/'); // Redireccionar a la página de inicio después del inicio de sesión exitoso
        }, 2000); // Transición de 2 segundos
      } else {
        // Manejar errores del servidor
        setServerError(data.message || 'Correo o contraseña incorrecta, por favor, intente de nuevo.');
      }
    } catch (error) {
      setServerError('Correo o contraseña incorrecta, por favor, intente de nuevo.');
    }
  };

  return (
    <div className="Login-container">
      <Helmet>
        <title>Login - Caruso Futbol Club</title>
        <meta name="description" content="Inicia sesión en Caruso Futbol Club para acceder a tu cuenta y disfrutar de todos los beneficios." />
        <meta name="keywords" content="login, iniciar sesión, Caruso Futbol Club, cuenta" />
        <meta name="author" content="Caruso Futbol Club" />
        <link rel="canonical" href="https://www.carusofutbolclub.com/login" />
      </Helmet>
      <NavBar />
      <Container className="main-login-content">
        {successMessage && <p className="text-success">{successMessage}</p>}
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresar correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresar Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {passwordError && <Form.Text className="text-danger">{passwordError}</Form.Text>}
          </Form.Group>
          {serverError && <p className="text-danger">{serverError}</p>}
          <Button variant="primary" type="submit">
            Iniciar Sesión
          </Button>
        </Form>
      </Container>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Login;
