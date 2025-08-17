// 1. Напиши функцию, которая принимает строку и проверяет, является ли она палиндромом. Если да - функция возвращает true, если нет - false;

function isPalindrome(string) {

    string = string.toLowerCase().replace(/\s/g, '');

    const reversed = string.split("").reverse().join("");

    return string === reversed;
}

console.log(isPalindrome("Аргентина манит негра"));


// 2. Напиши функцию, которая принимает строку (предложение) и находит первое самое короткое слово в ней и возвращает его;

function shortestWord(string2) {

    string2 = string2.split(" ");

    let shortest = string2[0];

    for (let i = 0; i < string2.length; i++) {

        if (string2[i].length < shortest.length) {
            shortest = string2[i];
        }
    }
    return shortest;
}

console.log(shortestWord("В лесу родилась ёлочка"));

// 3. Напиши функцию, которая форматирует строку с цифрами в телефонный номер. Пример: createPhoneNumber(123456789) → 8 (123) 456-789;

function createPhoneNumber(phoneNumber) {

    const area = phoneNumber.slice(0, 3)
    const mid = phoneNumber.slice(3, 6)
    const tail = phoneNumber.slice(6, 10)

    const correctPhone = `8 (${area}) ${mid}-${tail}`;
    return correctPhone;
}

console.log(createPhoneNumber("9041454545"));

// 4. Напиши функцию, которая ищет минимальное и максимальное значение в массиве;

const numberValue = [3, 7, -2, 10, 5, -9];

function findMinMax(arr) {
    let findMin = arr[0];
    let findMax = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < findMin) {
            findMin = arr[i];
        } else if (arr[i] > findMax) {
            findMax = arr[i];
        }
    }
    return [findMin, findMax];
}

console.log(findMinMax(numberValue));


// 5. *Напиши функцию, которая на вход принимает массив, а на выходе возвращает новый, отсортированный в порядке возрастания, массив.
//  Попробуй реализовать алгоритм сортировки самостоятельно. Если не получается - почитай про bubble sort и попробуй реализовать её.

const arr = [-11, 23, 5, -43, 9, -12, -19, 17, -4, 47, 0, 31, 25, -1];

function sortArr(arr) {
    for (let i = 0; i < arr.length; i++) { // // Внешний цикл for (повторяем вложенный цикл для каждого элемента массива)
        for (let j = 0; j < arr.length; j++) { //// Внутренний цикл for (находим наибольший элемент из неотсортированных)
            if (arr[j] > arr[j + 1]) { // Если элемент больше следующего, то меняем их местами
                let el = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = el;
            }
        }
    }
    return arr;
}

console.log(sortArr(arr));