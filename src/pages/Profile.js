import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
// import '../styles/Profile.css';

function Profile() {
    const { user, getUserSettings } = useAuth(); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            // Fetch user settings if not already available in context
            getUserSettings().finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [user, getUserSettings]);

    if (loading) return <LoadingSpinner />;

    if (!user) return <p>Error loading profile data.</p>;

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