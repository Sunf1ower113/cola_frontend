// src/pages/BoxDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/Api";
import LoadingSpinner from "../components/LoadingSpinner"; // Импортируем компонент LoadingSpinner

function BoxDetails() {
    const { id } = useParams();
    const [box, setBox] = useState(null);
    const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки

    useEffect(() => {
        api.get(`/recyclebox/${id}`)
            .then(response => {
                setBox(response.data);
                setLoading(false); // Устанавливаем loading в false после загрузки данных
            })
            .catch(error => {
                console.error("Error fetching box details:", error);
                setLoading(false);
            });
    }, [id]);

    const handleAddBottle = async () => {
        try {
            await api.post(`/recyclebox/add-bottle-points/${id}`);
            alert("Bottle added successfully");
            window.location.reload(); // Обновляем данные коробки после добавления бутылки
        } catch (error) {
            alert("Failed to add bottle");
        }
    };

    const handleClearBox = async () => {
        try {
            await api.post(`/recyclebox/clear/${id}`);
            alert("Box cleared successfully");
            window.location.reload(); // Обновляем данные коробки после очистки
        } catch (error) {
            alert("Failed to clear box");
        }
    };

    if (loading) return <LoadingSpinner />; // Отображаем индикатор загрузки, пока данные загружаются

    if (!box) return <div>Box not found</div>; // Обрабатываем случай, когда коробка не найдена

    return (
        <div className="container">
            <h2>Box Details</h2>
            <p>Title: {box.title}</p>
            <p>Address: {box.address}</p>
            <p>Capacity: {box.capacity}</p>
            <p>Current Count: {box.count}</p>
            <button onClick={handleAddBottle}>Add Bottle</button>
            <button onClick={handleClearBox}>Clear Box</button>
        </div>
    );
}

export default BoxDetails;
