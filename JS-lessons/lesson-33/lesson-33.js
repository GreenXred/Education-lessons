// 1. Напиши функцию, которая добавляет два числа. Включи строгий режим и попробуй создать переменную внутри функции без использования ключевого слова.
//  Исправь код, чтобы он работал в строгом режиме;

function add1(a, b) {
    'use strict';

    return a + b;
}

console.log(add1(10, 5));



// 2. Создай функцию, которая принимает два параметра с одинаковыми именами. Включи строгий режим и исправь ошибку, чтобы функция работала корректно;

// function add2(a, a) {
//     'use strict';

//     const sum = a + a;
//     return sum;
// }

// console.log(add2(7, 3));

function add2(a, b) {
    'use strict';

    const sum = a + b;
    return sum;
}

console.log(add2(7, 3));


// 3. Напиши код, в котором функция выводит значение this в консоль. Включи строгий режим и проанализируй, как изменилось значение this;

// function showThis() {
//     if (this) {
//         console.log(this);
//     }
// }

// console.log(showThis());
function showThis() {
    'use strict';

    if (this) {
        console.log(this);
    }
}

console.log(showThis());

// 4. Попробуй удалить встроенное свойство объекта (например, метод toString у объекта) в строгом режиме. 
// Объясни, почему это не работает, и что нужно сделать, чтобы избежать подобных ошибок.

'use strict';
delete Math.PI;

// В строгом режиме попытка удалить встроенное свойство у атрибута вызовет ошибку.
// Операция delete может удалять только configurable-свойства
// В нестрогом режиме delete Math.PI просто вернёт false

// Как избежать подобных ошибок?
// 1. Не трогать встроенные объекты
// 2. Если необходимо изменить поведение, можно преопределить его у своего объекта, не у прототипа.

const user = { 
    name: 'Ann' 
};

user.toString = function () {
  return '[User ' + this.name + ']';
};

// Собственное свойство — можно удалить
console.log(delete user.toString); // true
console.log(String(user));         

// Встроенное свойство — удалить нельзя
console.log(delete Object.prototype.toString); // false (


// Проверитъ свойство на configurable можно с помощью дексриптора:

const d = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(d.configurable); // false, т.к. это встроенный объект. Удалить не получится.



