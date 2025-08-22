// // 1. Создай объект со свойствами и методом, который использует `this` для доступа к этим свойствам. 
// // Затем присвой этот метод другой переменной и вызовите её. Объясни своими словами, что произошло;

// const person = {
//     name: 'John',
//     age: 25,
//     greet() {
//         console.log(`Hello, ${this.name}!`);
//     }
// };

// person.greet();

// const greet2 = person.greet;
// greet2(); // Hello, undefined! - у новой функции нет привязки к объекту. Получается из-за того, что функция greet2 не имеет своего контекста.

// // 2. Объясни, почему в примере ниже в первом случае выводится имя, а во втором - undefined. 
// // Как сделать так, чтобы в методе delayedGreet тоже выводилось имя (без использования call, apply или bind)?

// const student = {
//     name: 'Alice',
//     greet: function () {
//         console.log(`Hello, ${this.name}!`);
//     },
//     delayedGreet: function () {
//         setTimeout(this.greet, 1000);
//     }
// };

// student.greet() // Hello, Alice - вызывается как метод объекта, this внутри указывает на сам объект student. Поэтому this.name = "Alice".
// student.delayedGreet() // Hello, undefined - здесь мы передаем саму функцию greet, но не объект вместе с ней. Когда setTimeout вызывает функцию, 
// // она не имеет своего контекста, поэтому this внутри функции будет undefined. Исправить это можно с помощью стрелочной функции, так как она
// // не имеет своего this, она берет его из внешнего окружения.

// const student2 = {
//     name: 'Alice',
//     greet: function () {
//         console.log(`Hello, ${this.name}!`);
//     },
//     delayedGreet: function () {
//         setTimeout(() => {
//             this.greet();
//         }, 1000);
//     }
// };

// student2.delayedGreet()


// 3. Напиши функцию и вызови её с разными контекстами, используя `call`, `apply` и `bind`;

function greet(hello, bye) {
    console.log(`${hello}, ${this.name}! ${bye}.`);
};

const user = {
    name: 'John'
};

greet.call(user, 'Hello', 'Bye');
greet.apply(user, ['Hello', 'Bye']);

const boundGreet = greet.bind(user);
boundGreet('Hello', 'Bye');

// 4. Что будет в консоли в результате выполнения функций sayHelloToAdmin() и sayHelloToUser()? Объясни, почему так произошло. Как это можно изменить?

function sayHello() {
    console.log('Hello, ' + this.name)
};

const admin = {
    name: 'Bob'
};

const user4 = {
    name: 'John'
};

const sayHelloToAdmin = sayHello.bind(admin)
sayHelloToAdmin();

const sayHelloToUser = sayHelloToAdmin.bind(user) // тоже будет Bob, так sayHelloToAdmin уже привязана к объекту admin.
// Bind дважды нельзя привязать к одному объекту.
sayHelloToUser();

const sayHelloToUser4 = sayHello.bind(user4);
sayHelloToUser4(); // Hello, John
