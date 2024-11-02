// src/components/LoadingSpinner.js
import React from "react";

function LoadingSpinner() {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <div className="spinner"></div>
            Loading...
        </div>
    );
}

export default LoadingSpinner;
