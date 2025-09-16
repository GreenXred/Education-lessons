import React, { createContext, useState } from "react";

//1. Создай в своем приложении контекст `AuthContext`, который хранит `isLoggedIn = false` - состояние, имитирующее авторизацию пользователя.

//2. Добавь кнопку "Войти", которая при клике меняет `isLoggedIn` на `true`.

//3. *Если `isLoggedIn === true`, показывай "Вы авторизованы!".

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}
