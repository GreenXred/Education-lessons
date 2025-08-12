// Задание 1. Создай форму для ввода контактной информации (имя, телефон, email). Сохрани данные в localStorage в виде объекта. 
// Затем извлеки данные из localStorage, преобразуй их обратно в объект и отобрази контактную информацию на странице.

const submitData = document.getElementById('submitButton');
const inputName = document.getElementById('name');
const inputPhone = document.getElementById('phoneNumber');
const inputEmail = document.getElementById('email');

submitData.addEventListener('click', (event) => {
    event.preventDefault();

    const saveData = { // объект с данными
        name: inputName.value, // получаем значения из инпутов
        phoneNumber: inputPhone.value,
        email: inputEmail.value
    };
    localStorage.setItem('saveData', JSON.stringify(saveData)); // сохраняем данные в localStorage 
    console.log(saveData);
    getData(); 
});

function getData() {
    const outputData = JSON.parse(localStorage.getItem('saveData')); // получаем данные из localStorage

    document.querySelector('.clientName').textContent = `${outputData.name}`;
    document.querySelector('.clientPhoneNumber').textContent = `${outputData.phoneNumber}`;
    document.querySelector('.clientEmail').textContent = `${outputData.email}`;

};

window.addEventListener('DOMContentLoaded', getData); // при загрузке страницы получаем данные из localStorage


// Задание 2. Создай приложение для учета расходов. Сохрани каждую запись расхода (описание, сумма, дата) в localStorage
// в виде массива объектов json. Затем извлеки данные из localStorage и отобрази список расходов контактную информацию на странице.

const submitData = document.getElementById('submitButton');
const inputDate = document.getElementById('date');
const inputValue = document.getElementById('value');
const inputDescription = document.getElementById('description');

function getData() {
    return JSON.parse(localStorage.getItem('saveData')) || []; // получаем данные из localStorage
};

submitData.addEventListener('click', (event) => {
    event.preventDefault();

    const newExpense = { // объект с данными
        date: inputDate.value, // получаем значения из инпутов
        value: inputValue.value,
        description: inputDescription.value
    };

    const expenses = getData(); // достаём массив
    expenses.push(newExpense); // добавляем новую запись
    localStorage.setItem('saveData', JSON.stringify(expenses)); // сохраняем массив

    renderData(); // перерисовываем список
    document.getElementById('expansesForm').reset(); // очистить форму
});


function renderData() {
    const output = document.querySelector('.displayArea');
    output.innerHTML = '';

    const expenses = getData();

    expenses.forEach((expense, index) => {
        const div = document.createElement('div');
        div.textContent = `${expense.date} — ${expense.value} ₽ — ${expense.description} `;

        // Создаём кнопку удаления
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Удалить';
        deleteBtn.style.marginLeft = '10px';

        // Обработчик удаления
        deleteBtn.addEventListener('click', () => {
            const updatedExpenses = getData().filter((_, i) => i !== index);
            localStorage.setItem('saveData', JSON.stringify(updatedExpenses));
            renderData();
        });

        div.appendChild(deleteBtn);
        output.appendChild(div);
    });
}




// window.addEventListener('DOMContentLoaded', renderData); // при загрузке страницы получаем данные из localStorage

// Задание 3. Создай счетчик, который отображает время пользователя на странице. Время должно обновляться каждую секунду и сохраняться в sessionStorage.

// Задание 3
const counterEl = document.querySelector('.time-counter');

// 1) Берём текущее значение из sessionStorage или 0
let seconds = Number(sessionStorage.getItem('time-counter')) || 0;

// Функция форматирования в 00:00:00
function formatTime(sec) {
  const h = String(Math.floor(sec / 3600)).padStart(2, '0');
  const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

// Функция рендера
function renderTime() {
  counterEl.textContent = formatTime(seconds);
}

// Первичный рендер
renderTime();

// Тик раз в секунду
setInterval(() => {
  seconds += 1;
  sessionStorage.setItem('time-counter', String(seconds));
  renderTime();
}, 1000);
