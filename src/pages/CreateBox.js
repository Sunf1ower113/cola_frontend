// src/pages/CreateBox.js
import React, { useState } from "react";
import api from "../services/Api";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage"; // Импортируем компонент ErrorMessage

function CreateBox() {
    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [capacity, setCapacity] = useState(0);
    const [error, setError] = useState(""); // Состояние для ошибки
    const [successMessage, setSuccessMessage] = useState(""); // Состояние для успеха

    const handleCreateBox = async () => {
        setError(""); // Сбрасываем ошибку при новой попытке
        setSuccessMessage(""); // Сбрасываем сообщение об успехе
        try {
            await api.post("/recyclebox", { title, address, capacity });
            setSuccessMessage("Recycle box created successfully!");
        } catch (error) {
            console.error("Error creating recycle box:", error);
            setError(error.response?.data?.message || "Failed to create recycle box"); // Устанавливаем сообщение об ошибке
        }
    };

    return (
        <div className="container">
            <h2>Create Recycle Box</h2>
            {error && <ErrorMessage message={error} />} {/* Отображаем сообщение об ошибке */}
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>} {/* Отображаем сообщение об успехе */}
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <input
                type="number"
                placeholder="Capacity"
                value={capacity}
                onChange={(e) => setCapacity(Number(e.target.value))}
            />
            <button onClick={handleCreateBox}>Create Box</button>
        </div>
    );
}

export default CreateBox;
