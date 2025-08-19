// 1. Найди элемент на странице по его ID и измени его текстовое содержимое на что-то новое;

document.getElementById("myId").innerHTML = "Hello World!";


// 2. Используй JavaScript, чтобы изменить фон и цвет текста элемента с определенным классом;

document.querySelector(".myClass").style.background = "red";
document.querySelector(".myClass").style.color = "white";


// 3. Напиши код, который создает новый параграф с текстом и добавляет его в конец документа;

function createParagraph() {
    const newP = document.createElement("p");
    newP.textContent = "Новый парагораф";
    document.body.appendChild(newP);
}

// 4. Напиши функцию, которая удаляет элемент с указанным ID из документа;

function deleteElement() {
    const elementToRemove = document.getElementById('removeMe');
    elementToRemove.parentNode.removeChild(elementToRemove);
}

// 5. Измени атрибут ссылки на новый URL и выведи его значение в консоль;

const link = document.querySelector('a');
link.setAttribute('href', 'https://newurl.com');
console.log(link.getAttribute('href'));


// 6. Создай новый элемент, добавь к нему класс и добавь его в DOM;

const newElement = document.createElement('div');
newElement.classList.add('newElement');
document.body.appendChild(newElement);

// 7. Переключи класс у существующего элемента и проверьте его наличие в консоли.

// <div class="element">Нажать, чтобы изменить класс</div>
//
// .element {
//     color: red;
// }
// 
// .newElement {
//     color: blue;
// }

const elem = document.querySelector('.element');
elem.addEventListener('click', () => {
    elem.classList.toggle('newElement');
    console.log(elem.classList.contains('newElement'));
});
