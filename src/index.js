import React from "react"; 
import ReactDOM from "react-dom/client"; 
import App from "./App";
import "./App.css"; 
import './styles/index.css'; // Убедитесь, что путь к файлу правильный

// import './styles';
 
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render( 
    <React.StrictMode> 
            <App /> 
    </React.StrictMode> 
); 
