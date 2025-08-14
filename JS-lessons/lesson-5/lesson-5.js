// 1.

const equation1 = (a,b,c) => a * b + c;
console.log(equation1(2, 2, 2));

const equation2 = (a,b) => ((Math.sin(a) * Math.cos(b)) ** 2);
console.log(Number(equation2(54, 16).toFixed(2)));

function equation3 () {
    const result = (16 * Math.sqrt(13.2 * 71.90) / (2.4 / 7 ** 4) + 3 * Math.sqrt(49)) * 2 ** 7;
    console.log(Number(result).toFixed());
};

equation3()

// 2. Есть несколько числовых переменных (задай их самостоятельно). 
// С помощью арифметических операторов и операторов сравнения определи, четное это число или нет;


function evenNumber (n) {
    if (arguments.length === 0) {
        console.log("Введите число")
        return
    } 
    if (n === "") {
        console.log("Вы ввели пустую строку");
        return;
    }    
    if (isNaN(Number(n))) {
        console.log("Вы ввели не число")
        return
    }
    if (n % 2 === 0) {
        console.log("Число четное!");
    } else {
        console.log("Число нечетное!");
    };
};

evenNumber("")

// 3. Напиши программу, которая проверяет, если переменная name пуста или не задана, то в консоль должно выводиться сообщение "Hello, Guest!". 
// Если переменная name содержит значение, то программа должна вывести сообщение "Hello, [name]!", где [name] — это значение переменной.

function check (name) {
    if (!name) {
        console.log("Hello, Guest!")
    } else {
        console.log(`Hello, ${name}!`)
    }
};

check("")