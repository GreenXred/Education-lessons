// 1. Напиши функцию `printDetails`, которая принимает `Person | Organization`. 
// У `Person` есть свойства `name` и `age`, а у `Organization` — свойства `name` и `employees`. 
// Используя операторы `in` и `typeof`, определи тип объекта и выведи соответствующую информацию о нём.
function printDetails(orderFor) {
    if ('age' in orderFor) {
        console.log("Person Name: ".concat(orderFor.name, ", Age: ").concat(orderFor.age));
    }
    else if ('employees' in orderFor) {
        console.log("Organization Name: ".concat(orderFor.name, ", Employees: ").concat(orderFor.employees));
    }
}
var Alice = { name: "Alice", age: 30 };
var MyCorp = { name: "MyCorp", employees: 100 };
printDetails(Alice);
printDetails(MyCorp);
// 2. Реализуй функцию `processInput`, которая принимает `string | number | null`. Если значение — это `string`, 
// выведи его в верхнем регистре. Если `number` — умножьте на 10. Если `null`, выведи сообщение о пустом значении.
function processInput(input) {
    if (typeof input === 'string') {
        console.log(input.toUpperCase());
    }
    else if (typeof input === 'number') {
        console.log(input * 10);
    }
    else if (input === null) {
        console.log("The value is null.");
    }
}
processInput("hello");
processInput(5);
processInput(null);
function isCar(vehicle) {
    return vehicle.drive !== undefined;
}
function identifyVehicle(vehicle) {
    if (isCar(vehicle)) {
        vehicle.drive();
    }
    else {
        vehicle.pedal();
    }
}
var myCar = {
    drive: function () { return console.log("Driving a car!"); }
};
var myBicycle = {
    pedal: function () { return console.log("Pedaling a bicycle!"); }
};
identifyVehicle(myCar);
identifyVehicle(myBicycle);
