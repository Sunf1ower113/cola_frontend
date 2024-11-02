// src/pages/AllBoxes.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/Api";
import LoadingSpinner from "../components/LoadingSpinner"; // Импортируем компонент LoadingSpinner

function AllBoxes() {
    const [boxes, setBoxes] = useState([]);
    const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки

    useEffect(() => {
        api.get("/recyclebox/all")
            .then(response => {
                setBoxes(response.data);
                setLoading(false); // Устанавливаем loading в false после загрузки данных
            })
            .catch(error => {
                console.error("Error fetching all boxes:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <LoadingSpinner />; // Отображаем индикатор загрузки, пока данные загружаются

    return (
        <div className="container">
            <h2>All Recycle Boxes</h2>
            {boxes.length === 0 ? (
                <p>No recycle boxes available.</p>
            ) : (
                <ul>
                    {boxes.map(box => (
                        <li key={box.id}>
                            <Link to={`/box/${box.id}`}>
                                {box.title} - {box.address} (Capacity: {box.capacity}, Current Count: {box.count})
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default AllBoxes;
