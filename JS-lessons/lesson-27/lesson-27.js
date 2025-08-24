// 1. Напиши функцию `getUserData`, которая возвращает промис с данными пользователя через 2 секунды. 
// Затем создай цепочку промисов, которая обрабатывает эти данные и выводит результат в консоль;

const getUserData = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Данные загружены');
    }, 2000);
});

getUserData
    .then((data) => {
        console.log(data);
        return 'Данные обработаны';
    })
    .then((processed) => {
        console.log(processed);
    })
    .catch((error) => {
        console.log('Ошибка', error);
    });

// 2. Напиши две функции, каждая из которых возвращает промис с данными через 3 и 5 секунд соответственно. 
// Используй такой метод промисов, чтобы дождаться выполнения обоих промисов и вывести результаты в консоль;

const promise1 = new Promise((resolve) => setTimeout(resolve, 3000, 'Промис 1 выполнен!'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 5000, 'Промис 2 выполнен!'));

Promise.allSettled([promise1, promise2])
    .then((results) => {
        results.forEach((result) => {
            if (result.status === 'fulfilled') {
                console.log('Выполнен:', result.value);
            } else {
                console.log('Отклонено:', result.reason);
            }
        });
    });

// 3. Напиши две функции, каждая из которых возвращает промис через случайное время (от 1 до 5 секунд). 
// Используй такой метод промисов, чтобы вывести результат первого выполненного промиса в консоль.

const promise3 = new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 5 + 1) * 1000, 'Промис 3 выполнен!'));
const promise4 = new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 5 + 1) * 1000, 'Промис 3 выполнен!'));

Promise.race([promise3, promise4])
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log('Ошибка!', error);
    });

