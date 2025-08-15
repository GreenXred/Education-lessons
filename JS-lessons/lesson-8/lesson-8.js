// 1. Проверь, содержится ли строка "fun" в строке "JavaScript is fun!";

const text = "JavaScript is fun!";

console.log(text.includes("fun"));


// 2. Попробуй написать условие, которое выполняется только в случае, если переменная имеет одно из falsy значений;

const x = 0;

if (!x) {
    console.log("x is falsy")
} else {
    console.log("x is truthy")
}



// 3. Напиши шаблонную строку, которая включает переменные 
// firstName, lastName и occupation, и выводит сообщение вроде "Hello, my name is John Doe. I am a software developer.";

const firstName = "John";
const lastName = "Doe";
const occupation = "software developer";

console.log(`Hello, my name is ${firstName} ${lastName}. I am a ${occupation}.`);


// 4. Сравни null и undefined строго (===) и не строго (==), выведи результаты в консоль. Объясни своими словами, почему получились такие результаты 🙂

const z = null;
const c = undefined; 

if (z === c) { // строгое сравнение. Помимо значения переменной сравнивает тип данных. null === undefined => false. Условие не выполняется.
    console.log("1")    
}

if (z == c) { // нестрогое сравнение: может приводить типы к одному перед сравнением. null == undefined => true. Условие выполняется.
    console.log("2")
}


// 5. Выведи в консоль результат выражения 1 + '1'. Да, этот удивительный JS... И снова попрошу тебя объяснить своими словами, что произошло🙂

const a = 1;
const b = "1";

const result = a + b;
console.log(result); // 11. при использовании + со строкой происходит конкатенация, а не арифметика.

// Когда один из операндов — строка, JS автоматически приводит другой операнд к строке, чтобы выполнить конкатенацию.

