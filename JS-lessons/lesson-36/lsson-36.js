// 1. Создай класс Counter, который будет иметь приватное свойство count. 
// Напиши публичные методы для увеличения, уменьшения и отображения значения счетчика;

class Counter {
    #count = 0;

    increase() {
        this.#count++;
    }

    decrease() {
        if (this.#count > 0) {
            this.#count--;
        } else {
            console.log( "Значение счеткика - 0, уменшить невозможно!");
        }
    }

    show() {
        console.log(`Текущее значение счетчика: ${this.#count}`);
    }

    reset() {
        if (this.#count === 0) {
            console.log("Счетчик уже равен 0!");
        } else {
            this.#count = 0;
            console.log(`Счетчик обнулен! Текущее значение счетчика: ${this.#count}`);
        }
    }
}

const counter = new Counter();
counter.show(); 
counter.increase(); 
counter.increase(); 
counter.decrease(); 
counter.show(); 
counter.reset(); 


// 2. Создай класс EmailValidator со статическим методом isValid(email), 
// который будет проверять, является ли строка корректным email (достаточно простой проверки на наличие символа @);

class EmailValidator {
    static isValid(email) {
        if (email.includes('@')) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(EmailValidator.isValid('for@example.com'));

// 3. Создай класс Order с приватным методом #calculateTotal(), который будет рассчитывать общую стоимость заказа. 
// Сделай публичный метод, который возвращает результат этого расчета, и вызывай его через созданный экземпляр класса.

class Order {
    constructor(items) {
        this.items = items;
    }

    #calculateTotal() {
        let total = 0

        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            const price = Number(item.price);
            const quantity = Number(item.quantity);
            total += price * quantity;
        }
        return total;
    }

    get total() {
        return this.#calculateTotal();
    }
}

const order = new Order ([
   { price: 2300, quantity: 2 },
   { price: 4500, quantity: 1 },
   { price: 1750, quantity: 4 },
   { price: 12749, quantity: 1 }
]);

console.log(order.total);