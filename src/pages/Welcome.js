import React from "react";
import enot from '../static/24.png';
import '../styles/Welcome.css';

function Welcome() {
    return (
        <div className="enot-container">
            <h1>СДАВАЙ ПЛАСТИК</h1>
            <h1>КОПИ БОНУСЫ</h1>
            <h1>ВЫИГРЫВАЙ ПРИЗЫ</h1>
            <img src={enot} alt="enot" style={{ width:'80%', height: '20%'}}/>
        </div>
    );
}

export default Welcome;