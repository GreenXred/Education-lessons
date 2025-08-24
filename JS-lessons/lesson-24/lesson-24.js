//1. Напиши рекурсивную функцию для вычисления суммы всех элементов в массиве;

const numbers = [1, 2, 3, 4, 5];

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(sum(numbers));

function sumRec(arr, i = 0) {
    if (i >= arr.length) {
        return 0;
    }
    return arr[i] + sumRec(arr, i + 1);
}

console.log(sumRec(numbers));



//2. Реализуй функцию для нахождения максимального элемента в массиве с использованием рекурсии;

const maxN = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function maxValue(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(maxValue(maxN));

function maxRec(arr, i = 0) {
    if (i === arr.length - 1) {
        return arr[i];
    }
    const max = maxRec(arr, i + 1);
    return Math.max(arr[i], max);
}

console.log(maxRec(maxN));

//3. Помнишь функцию глубоко копирования объектов? Там использовалась рекурсия. 
// Вернись к ней и проанализируй её еще раз, чтобы усвоить информацию ещё лучше! 
// Это задание на самостоятельную работу - ничего присылать не нужно!


//4. А вот теперь нужно реализовать функцию для вычисления чисел Фибоначчи с кэшированием через рекурсию! Требования те же, что и в предыдущем уроке.

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
console.log(fibonacci(50));

function createFibonacciCalculatorRec() {
    const cache = { 0: 0, 1: 1 }; // базовые значения

    function fibonacciRec(n) {
        if (n in cache) {
            return cache[n];  
        }    
        // 2) считаем рекурсивно и запоминаем
        const value = fibonacciRec(n - 1) + fibonacciRec(n - 2);               
        cache[n] = value;                  
        return value;
    }
    return fibonacciRec;
}

const fibonacciRec = createFibonacciCalculatorRec();
console.log(fibonacciRec(50));
