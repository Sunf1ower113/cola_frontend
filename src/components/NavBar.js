// src/components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/all-boxes">All Boxes</Link></li>
                <li><Link to="/create-box">Create Box</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
