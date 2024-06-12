import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import NavBar from '../../components/header/nav-bar/NavBar';  
import Footer from '../../components/footer/Footer';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import { Link } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [serverError, setServerError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate('/record');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage('');
    }, 2000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar restricciones del correo electrónico
    if (!email.includes('@') || email.length > 50) {
      setEmailError('El correo electrónico debe contener "@" y tener menos de 50 caracteres.');
      return;
    } else {
      setEmailError('');
    }

    // Verificar restricciones de la contraseña
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
        setSuccessMessage('Sesión iniciada correctamente. ¡Bienvenido!');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setServerError(data.message || 'Correo o contraseña incorrecta, por favor, intente de nuevo.');
      }
    } catch (error) {
      setServerError('Correo o contraseña incorrecta, por favor, intente de nuevo.');
    }

  };

  return (
    <div className="Login-component">
      <Helmet>
        <title>Login - Caruso Futbol Club</title>
        <meta name="description" content="Inicia sesión en Caruso Futbol Club para acceder a tu cuenta y disfrutar de todos los beneficios." />
        <meta name="keywords" content="login, iniciar sesión, Caruso Futbol Club, cuenta" />
        <meta name="author" content="Caruso Futbol Club" />
        <link rel="canonical" href="https://www.carusofutbolclub.com/login" />
      </Helmet>
      <NavBar />
      <div className="row">
        <div className="colm-form">
          <div className="form-container">
            {successMessage && <p className="text-success">{successMessage}</p>}
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={50}
              required
            />
            {emailError && <p className="text-danger">{emailError}</p>}
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              maxLength={20}
              required
            />
            {passwordError && <p className="text-danger">{passwordError}</p>}
            {serverError && <p className="text-danger">{serverError}</p>}
            <button className="btn-login" onClick={handleSubmit}>Iniciar Sesión</button>
            <div className="register-message">
              <p>¿No tienes cuenta? Registrate haciendo click aquí abajo</p>
              <Link to="/record">
                <button className="btn-new" onClick={handleRegister}>
                Registrarme
                </button>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Login;
