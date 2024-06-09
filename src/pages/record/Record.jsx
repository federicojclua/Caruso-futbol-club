import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
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
      const response = await axios.post('http://localhost:5004/api/auth/register', { 
        nombre, 
        apellido, 
        dni, 
        equipo, 
        direccion, 
        email, 
        password 
      });
      if (response.data.message === 'Usuario registrado exitosamente') {
        navigate('/login');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Error al registrarse. Intenta nuevamente.');
    }
  };

  return (
    <Container className="Container-Record mt-5">
      <h2 className="mb-4 text-center">Registro</h2>
      {error && <p className="text-danger">{error}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre"
            value={nombre}
            maxLength={20}
            onChange={handleTextChange(setNombre)}
          />
        </Form.Group>

        <Form.Group controlId="formApellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu apellido"
            value={apellido}
            maxLength={20}
            onChange={handleTextChange(setApellido)}
          />
        </Form.Group>

        <Form.Group controlId="formDNI">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu DNI"
            value={dni}
            maxLength={8}
            onChange={handleDniChange}
          />
        </Form.Group>

        <Form.Group controlId="formEquipo">
          <Form.Label>Equipo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu equipo"
            value={equipo}
            maxLength={20}
            onChange={handleTextChange(setEquipo)}
          />
        </Form.Group>

        <Form.Group controlId="formDireccion">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu dirección"
            value={direccion}
            maxLength={20}
            onChange={handleTextChange(setDireccion)}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu email"
            value={email}
            maxLength={20}
            onChange={handleTextChange(setEmail)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            maxLength={20}
            onChange={handleTextChange(setPassword)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
    </Container>
  );
};

export default Record;
