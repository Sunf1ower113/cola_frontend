// src/pages/CreateBox.js
import React, { useState } from 'react';
import { useRecycleBox } from '../contexts/BoxContext';
import FormInput from '../components/FormInput/FormInput';
import Button from '../components/Button/Button';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import '../styles/CreateBox.css';

function CreateBox() {
    const { createBox, loading, error } = useRecycleBox();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [capacity, setCapacity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createBox({ title, address, capacity: parseInt(capacity) });
            alert('Корзина успешно добавлена!');
            setTitle('');
            setAddress('');
            setCapacity('');
        } catch (err) {
            alert('Ошибка при добавлении корзины.');
        }
    };

    return (
        <div className="create-box-container">
            <h1>Добавить новую корзину</h1>
            <form onSubmit={handleSubmit} className="create-box-form">
                <label>
                    <FormInput
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        placeholder="Введите название"
                    />
                </label>
                <label>
                    <FormInput
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        placeholder="Введите адрес"
                    />
                </label>
                <label>
                    <FormInput
                        type="number"
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                        required
                        placeholder="Введите емкость"
                    />
                </label>
                <Button text="Создать корзину" type="submit"></Button>
                {error && <ErrorMessage message={error} />}
            </form>
        </div>
    );
}

export default CreateBox;
