// 1. Определи два типа: `Admin` и `User`, где у `Admin` есть поле `privileges` (массив строк), 
// а у `User` — поля `name` (строка) и `age` (число). Создай пересечение этих типов в типе `AdminUser` 
// и определи объект на основе этого типа;

type Admin = {
    privileges: string[];
};

type User = {
    name: string;
    age: number;
};

type AdminUser = Admin & User;

const adminUser: AdminUser = {
    privileges: ['manage-users', 'edit-content'],
    name: 'Alice',
    age: 30
};


// 2. Создайте тип `Color` как объединение литеральных значений: `"red" | "green" | "blue"`. 
// Затем создайте функцию `setColor`, которая возвращает строку, в зависимости от переданного цвета;

type Color = "red" | "green" | "blue";

function setColor(color: Color): string {
    switch (color) {
        case "red":
            return "You selected red color.";
        case "green":
            return "You selected green color.";
        case "blue":
            return "You selected blue color.";
        default:
            return "Unknown color.";
    }
}

console.log(setColor("green"));

// 3. Создай два интерфейса: `Car` и `ElectricCar`. Поля придумайте сами. 
// Пусть `ElectricCar` расширяет `Car` и добавляет поле `batteryCapacity`. 
// Создайте объект электромобиля, типизируя его полученным интерфейсом.

interface Car {
    model: string;
    year: number;
}

interface ElectricCar extends Car {
    batteryCapacity: number;
}

const myElectricCar: ElectricCar = {
    model: 'Tesla Model 3',
    year: 2021,
    batteryCapacity: 75
};