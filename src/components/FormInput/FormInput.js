import React from 'react';
import './FormInput.css';

function FormInput({ label, type, value, onChange, placeholder }) {
    return (
        <div className="form-input">
            {label && <label>{label}</label>}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required
            />
        </div>
    );
}

export default FormInput;
