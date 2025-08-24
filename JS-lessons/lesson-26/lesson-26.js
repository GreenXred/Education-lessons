// 1. Напиши функцию, которая использует `setTimeout` для создания таймера обратного отсчета. 
// Таймер должен выводить оставшееся время каждую секунду и остановиться, когда время истечет;
//
// function countdown(time) {
//     for (let i = time; i > 0; i--) {
//         setTimeout(() => {
//             console.log(i);
//         }, (time - i) * 1000);
//     }
// }
//
// countdown(5);
//
// 2. Напиши функцию, которая использует `setInterval` для вывода сообщения "Не забудь выпить воды!" каждые 30 минут;

// function reminder() {
//     setInterval(() => {
//         console.log('Не забудь выпить воды!');
//     }, 1800000);
// }

// reminder();

// 3. Создай HTML-форму, где есть три элемента:
// - поле "Задержка"
// - поле "Текст"
// - кнопка "Начать".
// При клике на кнопку текст выводится в консоль через указанную задержку до тех пор, пока пользователь снова не нажмет начать. 
// Если пользователь снова нажмет на кнопку - текст снова начнет выводится в консоль, нажмет еще раз - прекратит и т. д.

const delayInput = document.getElementById('delay');
const textInput = document.getElementById('text-input');
const submitButton = document.getElementById('submit');

let timerId = null; // id setInterval
let isRunning = false; // переключатель (запущен ли интервал)

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
});

submitButton.addEventListener('click', () => {
    const delayTime = Number(delayInput.value);
    const text = textInput.value;

    if (!isRunning) {
        if (delayTime > 0) {
            timerId = setInterval(()=> {
                console.log(text);
            }, delayTime * 1000);
            submitButton.textContent = 'Стоп';
        }
        isRunning = true;
    } else {
        clearInterval(timerId);
        timerId = null;
        isRunning = false;
        submitButton.textContent = 'Старт';
    }
});


