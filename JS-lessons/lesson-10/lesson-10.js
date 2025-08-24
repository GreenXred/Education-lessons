// 1. Создай функцию, которая принимает произвольное количество чисел и возвращает их среднее значение;

function average(...numbers) {
    const sumNumbers = numbers.reduce((acc, item) => acc + item, 0);

    if (numbers.length > 0) {
        const averageValue = (sumNumbers / numbers.length);
        return averageValue;
    }
}

let rusult = average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(rusult);

// 2. Создай функцию, которая принимает объект с информацией о пользователе (имя, возраст, страна) и возвращает строку с этой информацией, 
// используя деструктуризацию;

const user = {
    name: 'John',
    age: 25,
    country: 'USA',
};

function userInformation({ name, age, country }) {
    return `${name}, ${age}, ${country}`;
};


// 3. Создай объект с вложенными объектами и массивами. Используй деструктуризацию, чтобы извлечь несколько значений на разных уровнях вложенности;
const user1 = {
    name: 'John',
    age: 25,
    country: 'USA',
    hobbies: ['reading', 'swimming', 'coding'],
    address: {
        city: 'New York'
    }
}

const { name, age, country, address: { city } } = user1;

console.log(name);
console.log(age);
console.log(country);
console.log(city);

const { hobbies: [firstHobby, secondHobby] } = user1;

console.log(firstHobby); // "reading"
console.log(secondHobby); // "swimming"

// 4. Используй оператор `spread` для создания нового массива, 
// который включает все элементы исходного массива и добавляет несколько новых элементов в начале и в конце;

const array1 = [6, 7, 8, 9, 10];

const copiedArray = [1, 2, 3, 4, 5, ...array1, 11, 12, 13, 14, 15];

console.log(copiedArray);


// 5. Используй оператор `rest` для создания функции, которая принимает объект с параметрами и возвращает новый объект без одного указанного параметра.

const user2 = {
    name: 'John',
    age: 25,
    country: 'USA',
};

function getUserInfo({ age, ...rest }) {
    return rest;
}

console.log(getUserInfo(user2));