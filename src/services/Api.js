import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_HOST || "http://localhost:8080";

const api = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
