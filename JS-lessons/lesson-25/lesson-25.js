// 1. Напиши функцию `safeDivide`, которая принимает два числа и возвращает результат их деления. 
// Если второй аргумент равен нулю, функция должна бросать ошибку с сообщением "Деление на ноль невозможно". Используй `try...catch` 
// для обработки ошибок и выведи сообщение об ошибке в консоль;

function safeDivide(a, b) {
    try {
        if (b === 0) {
        throw new Error('Деление на ноль невозможно');
    }
    return a / b;
    } catch (error) {
        console.log('Ошибка:', error.message);
    }
    return null;
}

console.log(safeDivide(10, 0)); // Ожидается: Ошибка: Деление на ноль невозможно

// 2. Напиши функцию `transfromJSON`, которая принимает строку в формате JSON и возвращает объект. 
// Используй `try...catch` для обработки возможных ошибок при парсинге JSON и выведи сообщение об ошибке в консоль;

const user = {
    firstName:'John'
}


function transformJSON (string) {
    try {
        if (typeof string !== 'string') {
            throw new Error('Неверный формат JSON');
        }
        return JSON.parse(string);
    } catch (error) {
        console.error('Ошибка:', error.message);
    }
    return null;
}


const json = JSON.stringify(user);           
console.log(transformJSON(json)); 


// 3. Напиши функцию `checkAccess`, которая принимает возраст пользователя. 
// Если возраст меньше 18, функция должна бросать ошибку с сообщением "Доступ запрещен". 
// Используйте `try...catch` для обработки ошибок и выведи сообщение об ошибке в консоль.

const userAge = {
    age: 15
}


function checkAccess(age) {
    try {
        if (typeof age !== 'number') {
            throw new Error('Укажите цифру!');
        }
        if (age < 18) {
            throw new Error('Доступ запрещен');
        }
        return 'Доступ разрешен';
    } catch (error) {
        console.error('Ошибка:', error.message);
        return null;
    }
}

console.log(checkAccess(userAge.age));