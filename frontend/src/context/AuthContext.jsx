import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Por ahora simulamos un usuario logueado para poder probar las rutas
    // Rol: 'Administrador', 'Encargado', 'Cliente'
    const [user, setUser] = useState({
        id: 1,
        username: 'luxury_user',
        rol: 'Administrador'
    });

    const login = (role) => {
        setUser({ id: 1, username: 'test', rol: role });
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
