// src/components/Users.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../features/user/usersSlice';

export default function Users() {
    const [name, setName] = useState(''); // Состояние для ввода имени
    const users = useSelector((state) => state.users.list); // Получаем список пользователей из store
    const dispatch = useDispatch(); // Диспатчер для обновления store

    const handleAdd = () => {
        if (name.trim() !== '') {
            dispatch(addUser(name));
            setName('');
        }
    };

    const handleRemove = (id) => {
        dispatch(removeUser(id));
    };

    return (
        <div>
            <h2>Пользователи</h2>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите имя"
            />
            <button onClick={handleAdd}>Добавить пользователя</button>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}{' '}
                        <button onClick={() => handleRemove(user.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

