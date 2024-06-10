import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './AdminTable.css'; 
import ModalEdit from './ModalEdit/ModalEdit'; // Importa el modal desde su archivo correspondiente

const AdminTable = () => {
  const [rows, setRows] = useState([
    { idReserva: 1, nombre: 'Nombre 1', fechaReserva: '2024-06-09', horario: '10:00 AM', cancha: 'Cancha 1', predio: 'Predio 1', futbol: 'Sí', aceptado: false, senia: 0 },
    { idReserva: 2, nombre: 'Nombre 2', fechaReserva: '2024-06-10', horario: '11:00 AM', cancha: 'Cancha 2', predio: 'Predio 2', futbol: 'No', aceptado: false, senia: 0 },
    { idReserva: 3, nombre: 'Nombre 3', fechaReserva: '2024-06-11', horario: '12:00 PM', cancha: 'Cancha 3', predio: 'Predio 3', futbol: 'Sí', aceptado: false, senia: 0 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleDeleteClick = (idReserva) => {
    const newRows = rows.filter(row => row.idReserva !== idReserva);
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

  const handleEditClick = (index) => {
    setSelectedRow(rows[index]);
    setShowModal(true);
  };

  const handleSaveChanges = (updatedRow) => {
    const updatedRows = rows.map(row => row.idReserva === updatedRow.idReserva ? updatedRow : row);
    setRows(updatedRows);
    setShowModal(false);
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
      aceptado: false,
      senia: 0
    };
    setRows([...rows, newRow]);
  };

  return (
    <Container>
      <h3 className='title-admin'>Tabla de Reserva de Turnos</h3>
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
            <th>Seña</th>
            <th>Accion</th>
            <th>Eliminar</th>
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
              <td>{row.senia}</td>
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
                <Button variant="warning" onClick={() => handleEditClick(index)}>Editar</Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteClick(row.idReserva)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedRow && (
        <ModalEdit 
          show={showModal} 
          handleClose={() => setShowModal(false)} 
          rowData={selectedRow} 
          handleSave={handleSaveChanges} 
        />
      )}
    </Container>
  );
};

export default AdminTable;
