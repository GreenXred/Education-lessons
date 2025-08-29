// 1. Создай класс Car с конструктором, который принимает марку и модель автомобиля. 
// Добавь метод для вывода информации об автомобиле. Создай несколько экземпляров класса и выведи их информацию;

class Car {
    constructor(brend, model) {
        this.brend = brend;
        this.model = model;
    }

    show() {
        console.log(`Марка: ${this.brend}, модель: ${this.model}`);
    }
}

const car1 = new Car('Mercedes', 'GLE 450');
const car2 = new Car('BMW', 'M3');
const car3 = new Car('Audi', 'A8');

car1.show();
car2.show();
car3.show();

// 2. Создай класс ElectricCar, который наследует класс Car и добавь дополнительное свойство для емкости батареи. 
// Переопредели метод вывода информации, чтобы включить информацию о батарее;

class ElectricCar extends Car {
    constructor(brend, model, battery) {
        super(brend, model);
        this.battery = battery;
    }

    show() {
        super.show(),
            console.log(`Емкость батареи: ${this.battery}`);
    }
}

const electricCar1 = new ElectricCar('Tesla', 'Model S', '100 кВт');
const electricCar2 = new ElectricCar('Tesla', 'Model X', '150 кВт');
const electricCar3 = new ElectricCar('Tesla', 'Model Y', '200 кВт');

electricCar1.show();
electricCar2.show();
electricCar3.show();

// 3. Напиши пример использования полиморфизма, создав несколько классов, наследующих общий базовый класс, и вызывая общий метод для всех объектов.

class Tribe {
    constructor(quantity, color) {
        this.quantity = quantity;
        this.color = color;
    }

    getInfo() {
        return 'Tribe: Base | People: ' + this.quantity + ' | Color: ' + this.color;
    }

    info() {
        console.log(this.getInfo());
    }
}

class Mohawks extends Tribe {
    constructor(quantity, color) {
        super(quantity, color);
    }

    getInfo() {
        return 'Tribe: Mohawks | People: ' + this.quantity + ' | Color: ' + this.color;
    }
}

class Hurons extends Tribe {
    constructor(quantity, color) {
        super(quantity, color);
    }

    getInfo() {
        return 'Tribe: Hurons | People: ' + this.quantity + ' | Color: ' + this.color;
    }
}

class Cherokee extends Tribe {
    constructor(quantity, color) {
        super(quantity, color);
    }

    getInfo() {
        return 'Tribe: Cherokee | People: ' + this.quantity + ' | Color: ' + this.color;
    }
}

const tribes = [
    new Mohawks(120, 'red'),
    new Hurons(90, 'blue'),
    new Cherokee(150, 'green')
];

tribes.forEach(tribe => tribe.info());