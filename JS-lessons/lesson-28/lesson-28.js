// Задание 1. НАпишите функция getUserData, которая возвращает промис с данными пользователя через 2 секунды. 
// Затем создай цепочку промисов, которая обрабатывает эти данные и выводит результат в консоль.

const getUserData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Данные загружены!');
    }, 2000);
    setTimeout(() => {
        reject('Ошибка загрузки данных!');
    }, 2000);
})

getUserData
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

// Задание 2. Напиши две функции, каждая из которых возвращает промис с данными через 3 и 5 секунд соответственно.
// Используй такой метод промисов, чтобы дождаться выполения обоих промисов и вывести результаты в консоль.

const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 'Промис 1 выполнен!'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 5000, 'Промис 2 выполнен!'));

Promise.allSettled([promise1, promise2])
    .then((result) => {
        result.forEach((result) => {
            if (result.status === 'fulfilled') {
                console.log('Выполено:', result.value);
            } else {
                console.log('Отклонено:', result.reason);
            }
        });
    });


// Задание 3. Напиши две функции, каждая из которых возвращает промис через слуйчайное время (от 1 до 5 секунд).
// Используй такой метод промисов, чтолбы вывести результат первого выполненного промиса в консоль.

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('Промис 1 выполнен!');
    }, Math.random() * 5000);
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('Промис 2 выполнен!');
    }, Math.random() * 5000);
});

Promise.race([promise3, promise4])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log('Ошибка!', error);
    });