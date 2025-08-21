// 1. Напиши функцию, которая принимает массив чисел, совершает над ними любую математическую операцию и возвращает новый массив, 
// содержащий результаты этих операций, используя стрелочные функции;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrowFunction = numbers.filter(n =>{
    if (n % 2 === 0) {
        return true;
    }
    return false;
});

console.log(arrowFunction);



// 2. Создай объект с методом, который использует стрелочную функцию внутри метода `setTimeout` для вывода значения свойства объекта через 1 секунду;

const user = {
    name : "John",
    greet: function() {
        setTimeout(() =>{
            console.log(`Hello, ${this.name}`);
        }, 1000)
    }
}

user.greet();

// 3. Реализуй функцию высшего порядка*, которая принимает функцию и массив, и применяет эту функцию ко всем элементам массива, 
// используя стрелочные функции.

const highOrderFunction = (func, arr) => {
    return arr.map(func);
}

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const square = n => n ** 2;

console.log(highOrderFunction(square, arrayNumbers));