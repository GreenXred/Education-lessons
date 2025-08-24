// 1. Напиши функцию, которая создает и возвращает другую функцию. 
// Внутренняя функция должна иметь доступ к переменной, объявленной во внешней функции, даже после завершения внешней функции;

function greet(name) {
    const greeting = "Hello";
    function greetOutput() {
        console.log(`${greeting}, ${name}!`);
    }
    return greetOutput;
}


const greetAlice = greet("Alice");
const greetBob = greet("Bob");

greetAlice();
greetBob();



//2. Реализуй пример с несколькими вложенными функциями, где каждая функция использует переменные из своего собственного и внешних лексических окружений;

function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    function log() {
        let message = `Count is ${count}`;
        console.log(message);
    }
    return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
increment();
increment();
log();


//3*. Тебе нужно написать функцию для вычисления чисел Фибоначчи с использованием цикла и кэширования.


// Числа Фибоначчи — это последовательность, в которой каждое число является суммой двух предыдущих чисел. 
// Кэширование необходимо для того, чтобы избежать повторных вычислений одних и тех же значений, что значительно ускорит работу функции.
//  Кэширование реализуем с помощью только что изученных замыканий :)



// Функция должна возвращать другую функцию, которая принимает число `n` и возвращает `n`-е число Фибоначчи. 

// Внутренняя функция должна использовать кэширование для хранения уже вычисленных значений чисел Фибоначчи.



// Реализация должна быть через цикл, НЕ через рекурсию!


function createFibonacciCalculator() {
    let cache = { 0: 0, 1: 1 }; 


    function fibonacci(n) {
        if (n in cache) {
            return cache[n];
        }

        let prev = cache[0];
        let next = cache[1];

        for (let i = 2; i <= n; i++) { // Если F(i) ещё не записан в кэш 
            if (!(i in cache)) {
                cache[i] = prev + next;
            }
            prev = next;
            next = cache[i];
        }

        return cache[n];
    }

    return fibonacci; // возвращаем саму функцию fibonacci
}

const fibonacci = createFibonacciCalculator();

console.log(fibonacci(5));  
console.log(fibonacci(10)); 
console.log(fibonacci(50)); 

// Пример:

// const fibonacci = createFibonacciCalculator();

// console.log(fibonacci(0)); // 0

// console.log(fibonacci(1)); // 1

// console.log(fibonacci(5)); // 5

// console.log(fibonacci(10)); // 55

// console.log(fibonacci(50)); // 12586269025 (очень быстро за счет кэширования)