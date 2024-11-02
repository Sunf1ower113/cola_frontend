import React, { createContext, useContext, useState } from 'react';
import { registerUser, loginUser } from '../services/userService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const register = async (userData) => {
        const response = await registerUser(userData);
        setUser(response.user); // Устанавливаем данные пользователя
    };

    const login = async (userData) => {
        const response = await loginUser(userData);
        setUser(response.user);
    };

    const logout = () => {
        setUser(null);
        // Дополнительно можно удалить куки с токеном
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
