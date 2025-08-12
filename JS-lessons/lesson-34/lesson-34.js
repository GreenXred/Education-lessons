// Задание 1. Напиши класс Book, который имеет поля title, author, pages. Добавь метод для вывода краткой информации о книге.


class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    shortBookInfo() {
        console.log(`Название: ${this.title}, Автор: ${this.author}, Страниц: ${this.pages}`);
    }
}

const griboedov = new Book('Горе от ума', 'А.С. Грибоедов','104');
griboedov.shortBookInfo();

// Задание 2. Созда класс User с полями name и email, методом displayInfo, который выводит информацию о пользователе.
// Создай несколько экземпляров и вызови метод displayInfo.

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    displayInfo() {
        console.log(`Имя: ${this.name}, Email: ${this.email}`);
    }
}

const user1 = new User('Иван','1@1.com');
const user2 = new User('Александр','2@2.com');
const user3 = new User('Сергей','3@3.com');

user1.displayInfo();
user2.displayInfo();
user3.displayInfo();

// Задание 3. В классе Rectangle добавь геттер perimetr, который вычисляет и возвращает периметр прямоугольника.
// Добавь сеттер height. Он должен проверять, что установленное значение height больше 0.
// Если значение не положительное, то выводится сообщение об ошибке в консоль, а высота остается неизменной.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get perimetr() {
        return (this.width + this.height) * 2;
    }

    set height(value) {
        if (value <= 0) {
            console.log('Высота не может быть меньше или равна 0');
        } else {
            this._height = value;
        }
    }

    set width(value) {
        if (value <= 0) {
            console.log('Ширина не может быть меньше или равна 0');
        } else {
            this._width = value;
        }
    }

    get width() {
        return this._width; 
    }

    get height() {
        return this._height;
    }
}

const myRectangle = new Rectangle(10, 5);
console.log(myRectangle.perimetr); // 30
myRectangle.height = -2;
console.log(myRectangle.height); // 5

