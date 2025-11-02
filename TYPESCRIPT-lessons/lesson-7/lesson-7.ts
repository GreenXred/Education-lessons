// 1. Напиши функцию `printDetails`, которая принимает `Person | Organization`. 
// У `Person` есть свойства `name` и `age`, а у `Organization` — свойства `name` и `employees`. 
// Используя операторы `in` и `typeof`, определи тип объекта и выведи соответствующую информацию о нём.

function printDetails(orderFor: Person | Organization): void {
    if ('age' in orderFor) {
        console.log(`Person Name: ${orderFor.name}, Age: ${orderFor.age}`);
    } else if ('employees' in orderFor) {
        console.log(`Organization Name: ${orderFor.name}, Employees: ${orderFor.employees}`);
    }
}

interface Person {
    name: string;
    age: number;
}

interface Organization {
    name: string;
    employees: number;
}

const Alice: Person = { name: "Alice", age: 30 };
const MyCorp: Organization = { name: "MyCorp", employees: 100 };

printDetails(Alice);
printDetails(MyCorp);

// 2. Реализуй функцию `processInput`, которая принимает `string | number | null`. Если значение — это `string`, 
// выведи его в верхнем регистре. Если `number` — умножьте на 10. Если `null`, выведи сообщение о пустом значении.

function processInput(input: string | number | null): void {
    if (typeof input === 'string') {
        console.log(input.toUpperCase());
    } else if (typeof input === 'number') {
        console.log(input * 10);
    } else if (input === null) {
        console.log("The value is null.");
    }
}

processInput("hello");
processInput(5);
processInput(null);


// 3. Создай интерфейсы `Car` и `Bicycle` с разными методами, и напиши предикат типа для каждого из них.
// Затем реализуй функцию `identifyVehicle`, которая принимает `Car | Bicycle` и вызывает методы,
// соответствующие определённому типу объекта.

interface Car {
    drive(): void;
}

interface Bicycle {
    pedal(): void;
}

function isCar(vehicle: Car | Bicycle): vehicle is Car {
    return (vehicle as Car).drive !== undefined;
}

function identifyVehicle(vehicle: Car | Bicycle): void {
    if (isCar(vehicle)) {
        vehicle.drive();
    } else {
        vehicle.pedal();
    }
}

const myCar: Car = {
    drive: () => console.log("Driving a car!")
};

const myBicycle: Bicycle = {
    pedal: () => console.log("Pedaling a bicycle!")
};

identifyVehicle(myCar);
identifyVehicle(myBicycle);