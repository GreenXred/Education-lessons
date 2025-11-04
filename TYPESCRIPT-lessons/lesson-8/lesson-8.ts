// 1. Реализуй и типизируй функцию `merge`,которая будет объединять два объекта, возвращая объект с объединёнными свойствами обоих объектов.

function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const objA = { name: "John", age: 25 };
const objB = { city: "Wessex", country: "United Kingdom" };

const mergedObj = merge(objA, objB);
console.log(mergedObj);

// 2. Создай интерфейс `Dictionary`, который будет хранить пары ключ-значение. 
// Напиши функцию для добавления и удаления элементов из `Dictionary`.

interface Dictionary<T> {
    [key: string]: T;
}

function addToDictionary<T>(dict: Dictionary<T>, key: string, value: T): void {
    dict[key] = value;
}

function removeFromDictionary<T>(dict: Dictionary<T>, key: string): void {
    delete dict[key];
}

const myDict: Dictionary<number> = {};
addToDictionary(myDict, "one", 1);
addToDictionary(myDict, "two", 2);
console.log(myDict);

removeFromDictionary(myDict, "one");
console.log(myDict);

// 3. Напиши и типизируй функцию `filterArray`, которая будет фильтровать массив на основе переданного условия. 
// Проверь её работу на массивах разных типов данных.

function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
    return arr.filter(predicate);
}

const numbers = [1, 2, 3, 4, 5, 6];
const filteredNumbers = filterArray(numbers, num => num > 3);
console.log(filteredNumbers);

const strings = ["apple", "banana", "cherry", "date"];
const filteredStrings = filterArray(strings, str => str.includes("a"));
console.log(filteredStrings);

const users = [
    { name: "John", age: 17 },
    { name: "Anna", age: 25 },
    { name: "Mike", age: 30 }
];

const adults = filterArray(users, user => user.age >= 18);
console.log(adults);