import { AuthContext } from '../context/authContext/authContext.jsx'
import React, { useContext } from "react";

//1. Создай в своем приложении контекст `AuthContext`, который хранит `isLoggedIn = false` - состояние, имитирующее авторизацию пользователя.

//2. Добавь кнопку "Войти", которая при клике меняет `isLoggedIn` на `true`.

//3. *Если `isLoggedIn === true`, показывай "Вы авторизованы!".

export default function Authorization() {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    if (isLoggedIn) {
        return <p>Вы авторизованы!</p>
    }
    return <button onClick={() => setIsLoggedIn(true)}>Войти</button>
}