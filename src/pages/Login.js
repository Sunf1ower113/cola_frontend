// src/pages/Login.js
import React, { useState } from "react";
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput/FormInput';
import Button from '../components/Button/Button';
import ErrorMessage from "../components/ErrorMessage/ErrorMessage"; // Импортируем компонент ErrorMessage
import '../styles/Login.css';

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Состояние для ошибки

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent form submission
        setError(""); // Reset error before new request
        try {
            await login({ email, password });
            navigate("/profile"); // Redirect to profile page or another page after login
        } catch (error) {
            setError(error.message || "Login failed");
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <FormInput
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
                <FormInput
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
                {error && <ErrorMessage message={error} />} {/* Отображаем сообщение об ошибке */}
                <Button text="Login" type="submit"></Button>
            </form>
        </div>
    );
}

export default Login;
