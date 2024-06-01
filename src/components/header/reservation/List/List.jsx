import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./List.css";

function CombinedComponent() {
  // Array de objetos con las opciones de cada botón
  const buttons = [
    {
      title: 'Elegi tu Predio',
      options: ['Opción 1', 'Opción 2', 'Opción 3']
    },
    {
      title: 'Tipo de Cancha',
      options: ['Opción A', 'Opción B', 'Opción C']
    },
    {
      title: 'Elegi tu Futbol',
      options: ['Opción X', 'Opción Y', 'Opción Z']
    },
    {
      title: 'Elegi la Fecha',
      options: ['Opción A', 'Opción B', 'Opción C']
    },
    {
      title: 'Elegi el horario',
      options: ['Opción 1', 'Opción 2', 'Opción 3']
    }
  ];

  return (
    <Container>
      <Row>
        {buttons.map((button, index) => (
          <Col key={index}>
            <DropdownButton as={ButtonGroup} title={button.title} className="dropdown-button">
              {button.options.map((option, i) => (
                <Dropdown.Item key={i} eventKey={i}>
                  {option}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CombinedComponent;
