import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <button className="navbar-button" onClick={toggleMenu}>
                    ☰ {/* Иконка меню, можно заменить на любую другую */}
                </button>
            </div>
            {menuOpen && (
                <div className="navbar-menu">
                    <Link to="/register" className="navbar-menu-item" onClick={toggleMenu}>Register</Link>
                    <Link to="/login" className="navbar-menu-item" onClick={toggleMenu}>Login</Link>
                    <Link to="/profile" className="navbar-menu-item" onClick={toggleMenu}>Profile</Link>
                    <Link to="/all-boxes" className="navbar-menu-item" onClick={toggleMenu}>All Boxes</Link>
                    <Link to="/create-box" className="navbar-menu-item" onClick={toggleMenu}>Create Box</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
