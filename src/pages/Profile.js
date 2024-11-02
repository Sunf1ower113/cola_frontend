// src/pages/Profile.js
import React, { useEffect, useState } from "react";
import api from "../services/Api";
import LoadingSpinner from "../components/LoadingSpinner"; // Импорт компонента

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        api.get("/profile")
            .then(response => setUser(response.data))
            .catch(error => console.error("Error fetching profile", error));
    }, []);

    if (!user) return <LoadingSpinner />; // Отображаем индикатор загрузки, если данные ещё загружаются

    return (
        <div className="container">
            <h2>Profile</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone_number}</p>
            <p>Points: {user.points}</p>
        </div>
    );
}

export default Profile;
