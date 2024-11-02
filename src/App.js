// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import BoxDetails from "./pages/BoxDetails";
import AllBoxes from "./pages/AllBoxes";
import CreateBox from "./pages/CreateBox";
import NavBar from "./components/NavBar"; // Импорт NavBar
import { AuthProvider } from './contexts/AuthContext';
import "./App.css";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/box/:id" element={<BoxDetails />} />
                    <Route path="/all-boxes" element={<AllBoxes />} />
                    <Route path="/create-box" element={<CreateBox />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
