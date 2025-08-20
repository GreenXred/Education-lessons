//1. Создай объект student с вложенными объектами и массивами. 
// Затем создай поверхностную копию этого объекта (разными способами!) и измени вложенные структуры (массивы, объекты) у копии, распечатай их. 
// Затем распечатай те же свойства у оригинала, чтобы увидеть, как на нем отразились изменения. Объясни своими словами, что произошло;

const student = {
    name: 'John',
    age: 25,
    hobbies: ['reading', 'swimming', 'coding'],
    address: {
        city: 'New York',
        street: 'Main Street',
    }
};

const studentCopy  = Object.assign({}, student);
console.log(studentCopy);
studentCopy.age = 30;
studentCopy.address.city = 'London';
console.log(studentCopy.age);
console.log(studentCopy.address.city);
console.log(student.age);
console.log(student.address.city);

const studentCopy2 = { ...student };
console.log(studentCopy2);
studentCopy2.name = 'Jorge';
studentCopy2.hobbies.push('music');
console.log(studentCopy2.name);
console.log(studentCopy2.hobbies);
console.log(student.name);
console.log(student.hobbies);


// Сделаны две копии через Object.assign и через spread. В первом случае мы изменили объект, а во втором мы изменили массив, 
// а так же age и name соответственно. 
// При вызове оригинала видно, что данные во вложенных объектах изменились, не смотря на то, что мы меняли значения только в копиях. 
// Это на практике подтверждает, что вложенные объекты и массивы копируются по ссылке, а не по значению. 


// 2. Создать копию объекта, внутри которого есть методы (функции), с помощью использовать JSON методов. 
// Затем попробуй вызывать метод у копии объекта. Объясни своими словами, что произошло;


// Пример объекта с методом: 

const user = {
    name: "Alice",
    age: 30,
    address: {
       city: "Wonderland",
       zip: "12345"
    },
    sayHi: () => console.log('Hello, Alice!')
};

const userCopy = JSON.parse(JSON.stringify(user));
console.log(userCopy);
userCopy.sayHi(); // Ошибка!

// При копировании объекта методом JSON.stringify() мы получаем копию объекта, но при вызове метода sayHi() мы получаем ошибку.
// Это связано с тем, что метод sayHi() является функцией. При копировании методом JSON.stringify() функции не копируются, а получается, что
// просто пропадают)



//3*. Проанализируй и разбери функцию глубокого копирования из урока (function deepCopy).
//  Покрой каждую строчку кода комментариями, которые объясняют, что делает этот кусок кода и зачем. 
// То есть после этого задания у тебя должно сложиться полное понимание того, как работает эта функция, чтобы в дальнейшем ты смог ее применить!
//* - задание требует самостоятельного изучения темы, которую мы еще не проходили - рекурсии + гуглинг незнакомых методов.

// Structured Clone

const originalObject = {
    string: "Hello, world!",
    number: 123,
    bool: true,
    date: new Date(),
    array: [1, 2, 3],
    nested: {
        moreData: "This is nested",
    },
};

const copiedObject = structuredClone(originalObject); // Используем метод глубокого копирования (все вложенные объекты успешно будут копированы)
console.log(copiedObject);

// JSON.stringify() 

const original = { a: 1, b: { c: 2 } };
const deepCopyObj = JSON.parse(JSON.stringify(original)); // Копирование методом JSON.stringify() 
deepCopyObj.b.c = 3;                                      // сначала объект превращается в строку, потом строка парсится обратно в объект (parse)
console.log(original.b.c); // 2                           // получается новый объект, полностью независимый от исходного

// Ограничения метода

// 1. Теряются функции, undefined, Symbol.
// 2. Даты (Date) превращаются в строки.
// 3. Специальные объекты (например, Map, Set) не копируются правильно.

// Recursion

function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') { // если obj === null или obj не объект (например, число, строка, boolean)
    
        return obj; // то просто возвращаем это значение.
    }
    const copy = Array.isArray(obj) ? [] : {}; // // если obj — массив, создаём новый массив []; если obj — объект, создаём новый объект {}.
    for (let key in obj) { // Запускаем цикл по всем ключам объекта
        if (obj.hasOwnProperty(key)) { // проверяет, что ключ принадлежит самому объекту, а не унаследован от прототипа.
    
            copy[key] = deepCopy(obj[key]); // Рекурсивный вызов: если значение obj[key] — объект, функция снова вызовет deepCopy, пока не "дойдёт" до примитивов.

        }
    }
    return copy; // Возвращаем полностью собранную копию объекта или массива
}

const original = { a: 1, b: { c: 2 } };
const deepCopyObj = deepCopy(original);
deepCopyObj.b.c = 3;

console.log(original.b.c); // 2

// Метод рекурсивного копирования хорош тем, что является гибким кастомным вариантом. Полезен, когда нужны особые правила. 