import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./Reservation.css";


const Reservation = () => {
  return (
    <>
      <div className="reservation-container">
        <div className="reservation-button">
          <h2>Hace tu reservación</h2>
        </div>
      </div>
    
    </>
  );
}

const List = () => {
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
    <div className="buttons-container" style={{ display: 'flex' }}>
      {buttons.map((button, index) => (
        <DropdownButton
          key={index}
          as={ButtonGroup}
          title={button.title}
          className="dropdown-button"
        >
          {button.options.map((option, i) => (
            <Dropdown.Item key={i} eventKey={i}>
              {option}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      ))}
    </div>
  );
}

export { Reservation, List }; // Exporta los componentes