// AuthProvider.js
import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado inicialmente falso
    const [user, setUser] = useState(null); // Usuario inicialmente nulo

    // Decodifica el token para obtener información del usuario
    const decodeToken = (token) => {
        // Aquí deberías implementar la lógica para decodificar el token
        // Por ejemplo, usando jwt-decode si estás manejando JWTs:
        // const decoded = jwtDecode(token);
        // return decoded.user;
        
        // Por ahora, devuelve un usuario simulado
        return { email: "user@example.com", name: "User" }; 
    };

    useEffect(() => {
        // Al cargar la aplicación, intenta leer el token del almacenamiento local
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            const decodedUser = decodeToken(token); // Decodifica el token
            setUser(decodedUser); // Establece el usuario decodificado
        }
    }, []);

    const login = (token, user) => {
        // Al iniciar sesión, establece el estado de autenticación en verdadero
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true'); // Almacena el estado de inicio de sesión
        localStorage.setItem('token', token); // Almacena el token en el almacenamiento local
        setUser(user); // Establece el usuario desde los datos de login
    };

    const logout = () => {
        // Al cerrar sesión, elimina el token y el estado del usuario
        setIsLoggedIn(false);
        localStorage.removeItem('token'); // Elimina el token del almacenamiento local
        setUser(null); // Limpia la información del usuario
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
