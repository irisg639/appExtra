import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto
const AuthContext = createContext();

// Provider del contexto
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Estado para saber si hay usuario logueado

    // Función para login
    const login = (userData) => {
        setUser(userData);
    };

    // Función para logout
    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook para usar el contexto
export const useAuth = () => {
    return useContext(AuthContext);
};
