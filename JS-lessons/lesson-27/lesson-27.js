// Задание 1. Напиши функцию, которая использует setTimeout для создания таймера обратного отсчета. 
// Таймер должен выводить оставшееся время каждую секунду и останавливаться, когда время закончится. 

function timer() {
    for (let i = 10; i >= 0; i--) {
        setTimeout(() => {
            if (i > 0) {
                console.log(i);
            } else {
                console.log('Время вышло!');
            }
        }, (10 - i) * 1000);
    }
}

function timer(sec) {
    if (sec > 0) {
        console.log(sec);
        setTimeout(() => timer (sec - 1), 1000);
    } else {
        console.log('Время вышло!');
    }
}

timer(5);

// Задание 2. Напишите функцию, которая использует setInerval для вывода сообщения "Не забудь выпить воды!" каждые 30 минут.

function needWater() {
    setInterval(() => {
        console.log('Не забудь выпить воды!');
    }, 1800000); // 30 минут
}

needWater();

// Задание 3. При клике на кнопку текст выводится в консоль через указанную задержку до тех пор, пока пользовтель снова не нажмет кнопку.
// Если пользователь снова нажмет кнопку, то опять текст выводится сразу же и т.д.


let intervalId = null; // чтобы хранить ID таймера

document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault(); // чтобы не перезагружалась страница

    // Получаем значения из инпутов
    const delayInput = document.getElementById('time-delay');
    const textInput = document.getElementById('text');
    const delay = Number(delayInput.value);

    // Если пользователь ввёл не число или число меньше 1 — игнорируем
    if (isNaN(delay) || delay < 1) {
        console.log('Укажите корректную задержку в секундах');
        return;
    }

    // Очищаем предыдущий интервал, если есть
    if (intervalId !== null) {
        clearInterval(intervalId);
    }

    // Сразу выводим текст
    console.log(textInput.value);

    // Запускаем новый интервал
    intervalId = setInterval(() => {
        console.log(textInput.value);
    }, delay * 1000);
});
