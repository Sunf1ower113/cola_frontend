import React from 'react';
import './Button.css';

function Button({ text, onClick, type = 'button', disabled = false }) {
    return (
        <button onClick={onClick} type={type} disabled={disabled} className="button">
            {text}
        </button>
    );
}

export default Button;
