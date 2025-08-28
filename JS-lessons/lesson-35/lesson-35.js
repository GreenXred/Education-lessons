// 1. Создай класс Person и класс-наследник Student . 
// Класс Person должен иметь свойства name и метод introduce, который выводит строку вида "Привет, меня зовут (имя)". 
// Класс Student должен наследовать Person и добавлять свойство course и переопределенный метод introduce, который выводит строку вида 
// "Привет, меня зовут (имя), и я учусь на (курсе) курсе". 
// Используй console.log(Student.prototype) и исследуй, как JavaScript создает цепочку прототипов;

class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Привет, меня зовут ${this.name}.`);
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    introduce() {
        console.log(`Привет, меня зовут ${this.name}, и я учусь на ${this.course} курсе.`);
    }
}

const Ivan = new Student('Иван', 3);
Ivan.introduce();

console.log(Student.prototype);

// ---Можно реализовать через геттер метод---

// для Person
// getIntro() {                           
//     return 'Привет, меня зовут ' ${this.name};
//   }
//   introduce() {                          
//     console.log(this.getIntro());
//   }
// }

// для Student
//   getIntro() {                          
//      return super.getIntro() + ', и я учусь на ${this.course} курсе';
//  }

// const ivan = new Student('Иван', 3);
// ivan.introduce();

// ---но как будто бы реализованный способ выглядит более понятным!?---

// 2. Создай класс Employee, наследующий Person. 
// Класс должен добавлять свойство position и метод work, который выводит строку "Я работаю на позиции (должность)". 
// Переопредели метод introduce так, чтобы он также включал информацию о должности;

class Employee extends Student {
    constructor(name, course, position) {
        super(name, course); 
        this.position = position;
    }

    work() {
        console.log(`Я работаю на позиции - ${this.position}.`);
    }

    introduce() {
        super.introduce() + this.work();
    }
}

const Alice = new Employee('Alice', 2, 'Стажер');
Alice.introduce();

// ---'Я работаю на позиции - Стажер.' выводится на отдельной строке. Чтобы он выводился в одну строку, нужно использовать геттер метод, как писал выше---
// или introduce для Employee можно прописать так:
//
// introduce() {
//     console.log(
//       'Привет, меня зовут ' + this.name +
//       ', и я учусь на ' + this.course + ' курсе' +
//       '. Я работаю на позиции ' + this.position
//     );
//  }
// ---

// 3. Создай объектное наследование без использования классов.
// Создай объект Vehicle с методом move. Создай объект Car, который наследует от Vehicle, добавив свой метод drive. 
// Используй Object.create для наследования.

function Vehicle(brend, model) {
    this.brend = brend,
    this.model = model
}

Vehicle.prototype.move = function() {
    return `${this.brend} ${this.model} уже едет.`;
}

function Car(brend, model, destination) {
    Vehicle.call(this, brend, model);
    this.destination = destination
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.drive = function() {
    return `Назначение: ${this.destination}`
}

const car = new Car('Ментовской', 'пазик', 'за тобой');

console.log(car.move());
console.log(car.drive());