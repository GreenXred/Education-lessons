// 1. Напиши объект с несколькими свойствами и сделай все свойства неизменяемыми (с помощью Object.defineProperty).
//  Проверь, можно ли изменить их значения после этого;

'use strict';

const user = {
    name: 'John',
    age: 25,
    sex: 'male'
};

Object.defineProperty(user, 'name', {
    writable: false,
    enumerable: false,
    configurable: false,
});

Object.defineProperty(user, 'age', {
    writable: false,
    enumerable: false,
    configurable: false,
});

Object.defineProperty(user, 'sex', {
    writable: false,
    enumerable: false,
    configurable: false,
});

user.name = 'Bob';
console.log(user.name);

// 2. Создай объект с несколькими свойствами, где одно из них будет неперечисляемым (не должно выводиться в циклах).
//  Убедись, что свойство не отображается при выводе ключей объекта через цикл for...in.

const vehicle = {
    name: 'BMW',
    model: 'X5',
    year: 2020,
    engine: {
        type: 'V8',
        horsepower: 500
    }
};

Object.defineProperties(vehicle, {
    engine: {
        value: vehicle.engine,
        enumerable: false,
        writable: true,
        configurable: true
    }
});

console.log(Object.keys(vehicle));

for (const key in vehicle) {
    if (Object.prototype.hasOwnProperty.call(vehicle, key)) {
        console.log(key); 
    }
};

for (const key in vehicle) {
    console.log(key);
};
