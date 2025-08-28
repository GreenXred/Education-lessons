// 1. Напиши класс Book, который имеет поля title, author и pages. Добавь метод для вывода краткой информации о книге;

class Book {
    constructor(title, author, pages) {
        this.title = title,
        this.author = author,
        this.pages = pages
    }

    aboutBook() {
        console.log(`Название: ${this.title}, Автор: ${this.author}, Страниц: ${this.pages}`)
    }
}

const GeorgeOrwell = new Book('1984', 'George Orwell', 328);

GeorgeOrwell.aboutBook();

// 2. Создай класс User с полями name и email, методом displayInfo, который выводит информацию о пользователе. 
// Создай несколько экземпляров и вызови метод displayInfo;

class User {
    constructor(name, email) {
        this.name = name,
        this.email = email
    }

    displayInfo() {
        console.log(`Имя: ${this.name}, Email: ${this.email}`)
    }
}

const John = new User('John', 'john@gmail.com');
const Alice = new User('Alice', 'alice@gmail.com');
const Bob = new User('Bob', 'bob@gmail.com');

John.displayInfo();
Alice.displayInfo();
Bob.displayInfo();

// 3. В классе Rectangle из примера добавь геттер perimeter, который вычисляет и возвращает периметр прямоугольника. 
// Добавь сеттер height. Он должен проверять, что устанавливаемое значение высоты height больше 0. 
// Если значение не положительное, то выводится сообщение об ошибке в консоль, а высота остается неизменной.

class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    get width() {
        return this._width;
    }

    set width(value) {
        if (value <= 0) {
            console.log('Ширина не может быть меньше или равна 0');
            return;
        }
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        if (value <= 0) {
            console.log('Высота не может быть меньше или равна 0');
            return;
        }
        this._height = value;
    }

    get area() {
        return this._width * this._height;
    }

    get perimeter() {
        return (this._width + this._height) * 2;
    }
}

const calculateRec = new Rectangle(10, 20);
console.log(calculateRec.area); 
console.log(calculateRec.perimeter);
