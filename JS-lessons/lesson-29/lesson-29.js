// 1. Напиши асинхронную функцию `delay`, которая принимает один аргумент - количество миллисекунд, и возвращает промис, 
// который разрешается (резолвится) через заданное количество времени. Используй `async/await` 
// для ожидания этого промиса и выведите сообщение "Задержка завершена" после завершения ожидания;


async function delay(ms) {
    const data = await new Promise ((resolve) => {
        setTimeout(resolve, ms, 'Задержка завершена!');
    });
}

delay(1000);


// 2. Напиши асинхронную функцию `fetchUserData`, которая делает запрос к фейковому API (любому) и возвращает данные пользователя. 
// Используй функцию fetch (подробнее о fetch - тут.).


const url = 'https://jsonplaceholder.typicode.com/todos';
async function fetchUserData() {
    console.log('Fetch todo started...');
    try {
        await delay(2000);
        const response = await fetch(url);
        const data = await response.json();
        console.log('Data:', data);
    } catch (error) {
        console.error('Ошибка получения данных:', error);
    }
}

fetchUserData();