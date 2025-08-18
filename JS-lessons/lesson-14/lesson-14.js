// 1. Создай объект, ключи в котором будут описывать тебя. Например, твое имя, возраст, увлечения и т.д. 
// Обязательно используй разные типы данных: имя - строка, возраст - число, хобби - массив и  т.д. 
// Затем выведи все свои свойства/свойства объекта в консоль(разными способами!);   

const user = {
    name: 'John',
    age: 25,
    hobbies: ['sport', 'music', 'art'],
    isMarried: false,
    car: 'BMW'
}

console.log(user.name);

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}

console.log(Object.keys(user)); 
console.log(Object.values(user));
console.log(Object.entries(user));



// 2. В объект из предыдущего пункта:

// - добавь новое свойство;

// - измени значение существующего свойства;
// - удали любое свойство.
// И снова выведи все свойства объекта в консоль разными способами!

const person = {
    name: 'John',
    age: 25,
    hobbies: ['sport', 'music', 'art'],
    isMarried: false,
    car: 'BMW'
}

person.name = 'Andrew';
console.log(person.name);

person.country = 'USA';
console.log(person.country);

delete person.isMarried;
console.log(person.isMarried);

for (let key in person) {
    console.log(`${key}: ${person[key]}`)
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

