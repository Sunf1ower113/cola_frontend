import api from './Api';

export const createRecycleBox = async (boxData) => {
    const response = await api.post('/recyclebox', boxData);
    return response.data;
};

export const getRecycleBoxById = async (id) => {
    const response = await api.get(`/recyclebox/${id}`);ы
    return response.data;
};

export const updateRecycleBox = async (id, boxData) => {
    const response = await api.put(`/recyclebox/${id}`, boxData);
    return response.data;
};

export const addBottleToRecycleBox = async (id) => {
    const response = await api.post(`/recyclebox/add-bottle/${id}`);
    return response.data;
};

export const addBottleWithPoints = async (id) => {
    const response = await api.post(`/recyclebox/add-bottle-points/${id}`);
    return response.data;
};