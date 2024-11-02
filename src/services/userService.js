import api from './Api';

// Функция для регистрации нового пользователя
export const registerUser = async (userData) => {
    const response = await api.post('/register', userData);
    return response.data;
};

// Функция для входа пользователя
export const loginUser = async (userData) => {
    const response = await api.post('/login', userData);
    return response.data;
};

// Функция для получения настроек пользователя (например, профиль)
export const getUserSettings = async () => {
    const response = await api.get('/settings');
    return response.data;
};

// Функция для обновления настроек пользователя (например, обновление профиля)
export const updateUserSettings = async (userData) => {
    const response = await api.put('/settings', userData);
    return response.data;
};
