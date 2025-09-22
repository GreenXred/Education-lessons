// 2. У тебя есть компонент `ExpensiveCalculation`, который выполняет тяжелое вычисление (например, сортировку большого массива чисел). 
// Это вычисление выполняется при каждом рендере, даже если данные не изменились. 
// Используй один из только что изученных инструментов, чтобы оптимизировать вычисления и сделать так, 
// чтобы результат пересчитывался только при изменении массива чисел.

import React, { useMemo } from "react";

function ExpensiveCalculation(props) {
    const numbers = props.numbers; // массив чисел пропсом (нужен компонент, содержащий массив чисел)

    const sortedNumbers = useMemo(function () {

        return [...numbers].sort(function (a, b) { return a - b; });
    }, [numbers]);

    return (
        <div>{JSON.stringify(sortedNumbers)}</div>
    );
}

export default React.memo(ExpensiveCalculation);
