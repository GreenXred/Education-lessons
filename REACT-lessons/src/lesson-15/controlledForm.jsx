// 1. Создай контролируемую форму с полями "Имя" и "Пароль". Добавь валидацию:

//     - Имя не должно быть пустым.

//     - Пароль должен содержать не менее 6 символов.

//     - Если валидация не пройдена, выводи сообщение об ошибке.

// При отправке формы имя и пароль должны выводиться в консоль (перезагрузки страницы быть не должно!).

import { useState } from "react";

export default function ControlledForm() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const nameError = name.trim() ? "" : "Имя не должно быть пустым"; // решил выводить сразу без useState
    const passwordError = password.length >= 6 ? "" : "Пароль не короче 6 символов"; // // решил выводить сразу без useState

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nameError && !passwordError) {
            console.log(`Имя: ${name}`);
            console.log(`Пароль: ${password}`);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Имя
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            {nameError && <div style={{color:"red",fontSize:12}}>{nameError}</div>}
            <label>Пароль
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            {passwordError && <div style={{color:"red",fontSize:12}}>{passwordError}</div>}
            <button type="submit">Отправить</button>
        </form>
    )
}