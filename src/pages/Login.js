// src/pages/Login.js
import React, { useState } from "react";
import api from "../services/Api";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage"; // Импортируем компонент ErrorMessage

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Состояние для ошибки

    const handleLogin = async () => {
        setError(""); // Сбрасываем ошибку перед новым запросом
        try {
            const response = await api.post("/login", { email, password });
            alert("Login successful"); // Сообщение об успешном входе

            // Обработка токена или перенаправление после входа
            // Пример: перенаправление на страницу профиля
            // window.location.href = "/profile";
        } catch (error) {
            console.error("Error logging in:", error);
            setError(error.response?.data?.message || "Login failed"); // Устанавливаем сообщение об ошибке
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            {error && <ErrorMessage message={error} />} {/* Отображаем сообщение об ошибке */}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
