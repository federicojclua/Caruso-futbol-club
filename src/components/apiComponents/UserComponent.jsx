import React, { useEffect, useState } from 'react';
import { getUserById } from '../../api/userApi'; // Ajusta la ruta según tu estructura

const UserComponent = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUserById();
        setUsuarios(data);
      } catch (error) {
        console.error('Error fetching usuarios:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserComponent;
