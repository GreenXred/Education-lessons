// 1. Назначь для кнопки обработчик события click, который будет изменять текст этой кнопки при нажатии;

const button = document.querySelector('.myButton');

button.addEventListener('click', () => {
    button.textContent = 'Шалун!';
});

// 2. Назначь для любого элемента обработчик события mouseover, который будет изменять размер элемента при наведении;

button.addEventListener('mouseover', () => {
    button.style.fontSize = '20px';
});

button.addEventListener('mouseout', () => {
    button.style.fontSize = '';
});


// 3. Назначь для инпута обработчик события keyup, который будет выводить отпущенную клавишу в консоль;

const inputValue = document.getElementById('myInput');

inputValue.addEventListener('keyup', (event) => {
    console.log(`Нажата клавиша: ${event.key}`);
});

// 4. Создай форму и добавь обработчик события submit, который будет показывать сообщение об успешной отправке;

const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    alert('Форма успешно отправлена!');
});


// 5. Пусть на странице есть кнопка с надписью 'Изменить тему', которая позволяет переключать тему страницы. 
// Например, по умолчанию тема светлая: задний фон - белый, текст - черный. 
// Нажимаем на кнопку -> тема меняется на темную: цвет фона - черный, текст - белый. Еще раз нажимаем на кнопку -> тема снова светлая и т. д.


const changeButton = document.querySelector('.button-change');
const allButtons = document.querySelectorAll('button');
const changeBackground = document.querySelector('body');


changeButton.addEventListener('click', () => {
    allButtons.forEach(button => {
        button.classList.toggle('all-change-button');
    });
    changeBackground.classList.toggle('changeBody');
});

