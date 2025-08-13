// 1. Напиши программу, которая проверяет число и выводит сообщение, является ли оно положительным, отрицательным или нулем;

function checkNumber(number) {
    if (number > 0) {
        console.log("Число положительное");
    } else if (number < 0) {
        console.log("Число отрицательное");
    } else {
        console.log("Число равно нулю");
    }
};

checkNumber(0);

// 2. Напиши программу, которая запрашивает у пользователя его рост и вес, на основании этих данных вычисляет ИМТ, 
// и выводит сообщение о том, в каком диапазоне находится его ИМТ;



function bmi(weight, height) {
    let bmiValue = weight / (height * height);
    switch (true) {
        case bmiValue <= 16:
            console.log("Выраженный дефицит массы тела");
            break;
        case bmiValue >= 16.1 && bmiValue <= 17.9:
            console.log("Недостаточная масса тела");
            break;
        case bmiValue >= 18 && bmiValue <= 24.9:
            console.log("Нормальная масса тела");
            break;
        case bmiValue >= 25 && bmiValue <= 29.9:
            console.log("Избыточная масса тела");
            break;
        case bmiValue >= 30 && bmiValue <= 34.9:
            console.log("Ожирение 1 степени");
            break;
        case bmiValue >= 35 && bmiValue <= 39.9:
            console.log("Ожирение 2 степени");
            break;
        case bmiValue >= 40:
            console.log("Ожирение 3 степени");
            break;
    }
}

bmi(59, 1.72);

// 3. Используй оператор switch, чтобы вывести название месяца на основе введенного пользователем числа (1-12);

let monthNumber = 5;

switch (monthNumber) {
    case 1: 
        console.log("Январь");
        break;
    case 2: 
        console.log("Февраль");
        break;
    case 3: 
        console.log("Март");
        break;
    case 4: 
        console.log("Апрель");
        break;
    case 5: 
        console.log("Май");
        break;
    case 6: 
        console.log("Июнь");
        break;
    case 7: 
        console.log("Июль");
        break;
    case 8: 
        console.log("Август");
        break;
    case 9: 
        console.log("Сентябрь");
        break;
    case 10: 
        console.log("Октябрь");
        break;
    case 11: 
        console.log("Ноябрь");
        break;
    case 12: 
        console.log("Декабрь");
        break;
}

// 4. Придумай свое условие и опиши его в помощью оператора switch/case.

let hour = 18;

switch (true) {
    case hour >= 6 && hour <= 9:
        console.log("Завтрак — кашка, яйца, тосты");
        break;
    case hour >= 10 && hour <= 11:
        console.log("Второй завтрак — фрукты, йогурт");
        break;
    case hour >= 12 && hour <= 14:
        console.log("Обед — суп, второе, компот");
        break;
    case hour >= 15 && hour <= 17:
        console.log("Полдник — печеньки, чай");
        break;
    case hour >= 18 && hour <= 21:
        console.log("Ужин — что-то лёгкое");
        break;
    case hour >= 22 && hour <= 5:
        console.log("Поздний перекус или лучше спать");
        break;  
}