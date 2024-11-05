import React, { createContext, useContext, useState } from 'react';
import { registerUser, loginUser, getUserSettings as fetchUserSettings } from '../services/userService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const register = async (userData) => {
        const response = await registerUser(userData);
        setUser(response.user);
    };

    const login = async (userData) => {
        const response = await loginUser(userData);
        setUser(response.user); // Ensure user state is updated immediately after login
    };

    const logout = () => {
        setUser(null);
    };

    const getUserSettings = async () => {
        try {
            const data = await fetchUserSettings();
            setUser(data); // Set user data from API response
        } catch (error) {
            console.error("Failed to fetch user settings", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout, getUserSettings }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);