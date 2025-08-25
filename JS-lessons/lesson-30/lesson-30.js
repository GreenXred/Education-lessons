// 1. Создай три вложенных элемента (например, `div` внутри `div` внутри `div`). 
// Назначь обработчики событий для каждого из них и проследи за последовательностью вызовов при клике на внутренний элемент с помощью console.log();

document.getElementById('div1').addEventListener('click', () => {
    console.log('div1 clicked');
});
document.getElementById('div2').addEventListener('click', () => {
    console.log('div2 clicked');
});
document.getElementById('div3').addEventListener('click', () => {
    console.log('div3 clicked');
});

//2. Напиши код, который останавливает всплытие события на среднем элементе из предыдущего задания;

document.getElementById('div2').addEventListener('click', (event) => {
    event.stopPropagation();
});

//3. Создай форму с несколькими полями ввода и кнопкой отправки. 
// Реализуй делегирование события, например, валидации каждого поля ввода при его изменении.
// Пусть это будет простое условие, например, длина строки не более 20 символов.

const form = document.getElementById('validationForm')
const maxInputLength = 20;

form.addEventListener('input', (event) => {
  const currentInput = event.target;
  if (currentInput.classList.contains('validate')) {
    if (currentInput.value.length > maxInputLength) {
        currentInput.value = currentInput.value.slice(0, maxInputLength); //принимает только первые 20 символов
    }
  }
});
