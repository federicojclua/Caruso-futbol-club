import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './AdminTable.css'; // Asegúrate de importar un archivo CSS para los estilos

const AdminTable = () => {
  const [rows, setRows] = useState([
    { idReserva: 1, nombre: 'Nombre 1', fechaReserva: '2024-06-09', horario: '10:00 AM', cancha: 'Cancha 1', predio: 'Predio 1', futbol: 'Sí', aceptado: false },
    { idReserva: 2, nombre: 'Nombre 2', fechaReserva: '2024-06-10', horario: '11:00 AM', cancha: 'Cancha 2', predio: 'Predio 2', futbol: 'No', aceptado: false },
    { idReserva: 3, nombre: 'Nombre 3', fechaReserva: '2024-06-11', horario: '12:00 PM', cancha: 'Cancha 3', predio: 'Predio 3', futbol: 'Sí', aceptado: false },
  ]);

  const handleDeleteClick = (index) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

  const handleAcceptClick = (index) => {
    const newRows = [...rows];
    newRows[index].aceptado = true;
    setRows(newRows);
    alert(`Reserva ${rows[index].idReserva} aceptada`);
  };

  const handleCancelClick = (index) => {
    const newRows = [...rows];
    newRows[index].aceptado = false;
    setRows(newRows);
    alert(`Reserva ${rows[index].idReserva} cancelada`);
  };

  const addRow = () => {
    const newRow = {
      idReserva: rows.length + 1,
      nombre: `Nombre ${rows.length + 1}`,
      fechaReserva: '2024-06-12',
      horario: '01:00 PM',
      cancha: `Cancha ${rows.length + 1}`,
      predio: `Predio ${rows.length + 1}`,
      futbol: 'Sí',
      aceptado: false
    };
    setRows([...rows, newRow]);
  };

  return (
    <Container>
      <h3>Imagenes de la Galería</h3>
      <Button onClick={addRow}>Agregar Fila</Button>
      <Table responsive>
        <thead>
          <tr>
            <th>ID Reserva</th>
            <th>Nombre</th>
            <th>Fecha Reserva</th>
            <th>Horario</th>
            <th>Cancha</th>
            <th>Predio</th>
            <th>Futbol</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.idReserva}>
              <td>{row.idReserva}</td>
              <td>{row.nombre}</td>
              <td>{row.fechaReserva}</td>
              <td>{row.horario}</td>
              <td>{row.cancha}</td>
              <td>{row.predio}</td>
              <td>{row.futbol}</td>
              <td>
                <Button 
                  variant={row.aceptado ? "success" : "primary"} 
                  onClick={() => handleAcceptClick(index)} 
                  disabled={row.aceptado}
                >
                  {row.aceptado ? "Aceptado" : "Aceptar"}
                </Button>{' '}
                <Button 
                  variant="danger" 
                  onClick={() => handleCancelClick(index)}
                  disabled={!row.aceptado}
                >
                  {row.aceptado ? "Cancelar" : "Cancelado"}
                </Button>{' '}
                <Button variant="warning" onClick={() => alert(`Editar Reserva ${row.idReserva}`)}>Editar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminTable;

