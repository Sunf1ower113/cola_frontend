import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../../static/10.png';
import closeIcon from '../../static/7.png';
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
                    {menuOpen ? <img src={closeIcon} alt="navbar-icon" style={{ width: '32px', height: '32px'}}/> : 
                    <img src={menuIcon} alt="navbar-icon" style={{ width: '32px', height: '32px'}} />
                    }
                </button>
            </div>
                <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
                    <ul>
                    <li>
                    <Link to="/register" className="navbar-menu-item" onClick={toggleMenu}>Register</Link>
                    </li>
                    <li>
                    <Link to="/login" className="navbar-menu-item" onClick={toggleMenu}>Login</Link>
                    </li>
                    <li>
                    <Link to="/profile" className="navbar-menu-item" onClick={toggleMenu}>Profile</Link>
                    </li>
                    <li>
                    <Link to="/all-boxes" className="navbar-menu-item" onClick={toggleMenu}>All Boxes</Link>
                    </li>
                    <li>
                    <Link to="/create-box" className="navbar-menu-item" onClick={toggleMenu}>Create Box</Link>
                    </li>
                    </ul>
                </div>
        </nav>
    );
}

export default Navbar;
