//Создай HOC withLoading, который принимает компонент, показывает "Загрузка..." перед его рендером. 
// Через 2 секунды заменяет его на переданный компонент.

import React, { useState, useEffect } from "react";

export default function withLoading(WrappedComponent) {
    function WithLoading(props) {

        const [isLoading, setIsLoading] = useState(true);

        useEffect(function () { // после первого рендера запускается таймер 2 секунды
            const timerId = setTimeout(function () {
                setIsLoading(false);
            }, 2000);

            return function () {
                clearTimeout(timerId);
            };
        }, []); // теперь после таймера обёртка рендерит уже исходный компонент

        if (isLoading) {
            return (
                <div>Загрузка...</div> // и вместо текста «Загрузка…» появляется реальный контент
            );
        }

        return <WrappedComponent {...props} />;
    }

    return WithLoading;
}
