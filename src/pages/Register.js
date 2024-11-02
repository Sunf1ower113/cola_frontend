import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import FormInput from '../components/FormInput/FormInput';
import Button from '../components/Button/Button';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import '../styles/Register.css';
import api from "../services/Api";

function Register() {
    const { register } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            await register({ email, password });
        } catch (err) {
            setError(err.message || 'Failed to register');
        }
    };

    return (
        <div className="register-container">
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
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
                <FormInput
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                />
                {error && <ErrorMessage message={error} />}
                <Button text="Register" type="submit" />
            </form>
        </div>
    );
}

export default Register;


// // src/pages/Register.js
// import React, { useState } from "react";
// import api from "../services/Api";
// import ErrorMessage from "../components/ErrorMessage";

// function Register() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     const handleRegister = async () => {
//         console.log("Начало регистрации пользователя"); // Лог на начало функции
//         setError(""); // Сбрасываем ошибку перед новым запросом

//         try {
//             console.log("Отправка запроса на сервер:", { email, password }); // Лог для запроса
//             const response = await api.post("/register", { email, password });

//             if (response.status === 201) {
//                 console.log("Пользователь успешно зарегистрирован:", response.data); // Лог успешного ответа
//                 alert("User registered successfully");
//             } else {
//                 console.warn("Регистрация пользователя прошла, но ответ не соответствует ожидаемому:", response); // Лог, если статус ответа не 201
//                 setError("Failed to register user");
//             }
//         } catch (error) {
//             console.error("Ошибка при регистрации пользователя:", error); // Лог ошибки
//             if (error.response) {
//                 console.error("Ответ с ошибкой от сервера:", error.response.data); // Лог ответа с ошибкой от сервера
//                 setError(error.response.data.message || "Failed to register user");
//             } else if (error.request) {
//                 console.error("Запрос был отправлен, но ответа не получено:", error.request); // Лог, если запрос отправлен, но ответа нет
//                 setError("No response from server");
//             } else {
//                 console.error("Ошибка при настройке запроса:", error.message); // Лог для ошибки настройки запроса
//                 setError("Request setup error");
//             }
//         }
//     };

//     return (
//         <div className="container">
//             <h2>Register</h2>
//             {error && <ErrorMessage message={error} />}
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={handleRegister}>Register</button>
//         </div>
//     );
// }

// export default Register;
