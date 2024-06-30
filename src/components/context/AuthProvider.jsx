// AuthProvider.js
import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado inicialmente falso

    const [user, setUser] = useState(null);

    useEffect(() => {
        // Al cargar la aplicación, intenta leer el token del almacenamiento local
        const token = localStorage.getItem('token');
        if (token) {
            // Si se encuentra un token, establece el estado de autenticación en verdadero
            setIsLoggedIn(true);
            // Podrías decodificar el token aquí para obtener información adicional del usuario
            // Por ejemplo, el ID del usuario, el rol, etc.
            // setUser(user);
        }
    }, []);

    const login = (token, user) => {
        // Al iniciar sesión, establece el estado de autenticación en verdadero
        setIsLoggedIn(true);
        // Almacena el token en el almacenamiento local
        localStorage.setItem('isLoggedIn', 'true'); // Establecer indicador de inicio de sesión
        localStorage.setItem('token', token);

        // Podrías decodificar el token aquí para obtener información adicional del usuario
        // setUser(user);
        setUser(user);

    };

    const logout = () => {
        // Al cerrar sesión, establece el estado de autenticación en falso
        setIsLoggedIn(false);
        // Elimina el token del almacenamiento local
        localStorage.removeItem('token');
        // Limpia cualquier información del usuario
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;