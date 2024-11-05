import React, { createContext, useContext, useState } from 'react';
import {
    createRecycleBox,
    getRecycleBoxById,
    updateRecycleBox,
    addBottleToRecycleBox,
    addBottleWithPoints
} from '../services/boxService';

const RecycleBoxContext = createContext();

export const RecycleBoxProvider = ({ children }) => {
    const [currentBox, setCurrentBox] = useState(null);
    const [boxes, setBoxes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createBox = async (boxData) => {
        try {
            setLoading(true);
            const newBox = await createRecycleBox(boxData);
            setBoxes([...boxes, newBox]); // Добавляем новый бокс в список
            return newBox;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const fetchBoxById = async (id) => {
        try {
            setLoading(true);
            const box = await getRecycleBoxById(id);
            setCurrentBox(box); // Устанавливаем текущий бокс
            return box;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const updateBox = async (id, boxData) => {
        try {
            setLoading(true);
            const updatedBox = await updateRecycleBox(id, boxData);
            setCurrentBox(updatedBox); // Обновляем текущий бокс
            setBoxes(boxes.map((box) => (box.id === id ? updatedBox : box))); // Обновляем список боксов
            return updatedBox;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const addBottle = async (id) => {
        try {
            setLoading(true);
            const updatedBox = await addBottleToRecycleBox(id);
            setCurrentBox(updatedBox);
            setBoxes(boxes.map((box) => (box.id === id ? updatedBox : box)));
            return updatedBox;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const addBottleWithBonus = async (id) => {
        try {
            setLoading(true);
            const updatedBox = await addBottleWithPoints(id);
            setCurrentBox(updatedBox);
            setBoxes(boxes.map((box) => (box.id === id ? updatedBox : box)));
            return updatedBox;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return (
        <RecycleBoxContext.Provider
            value={{
                currentBox,
                boxes,
                loading,
                error,
                createBox,
                fetchBoxById,
                updateBox,
                addBottle,
                addBottleWithBonus,
            }}
        >
            {children}
        </RecycleBoxContext.Provider>
    );
};

export const useRecycleBox = () => useContext(RecycleBoxContext);