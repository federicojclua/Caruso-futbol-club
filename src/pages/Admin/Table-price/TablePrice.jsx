import React from 'react';
import Table from 'react-bootstrap/Table';

const MyTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Columna 1</th>
          <th>Columna 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Fila 1 - Columna 1</td>
          <td>Fila 1 - Columna 2</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Fila 2 - Columna 1</td>
          <td>Fila 2 - Columna 2</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Fila 3 - Columna 1</td>
          <td>Fila 3 - Columna 2</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default MyTable;
