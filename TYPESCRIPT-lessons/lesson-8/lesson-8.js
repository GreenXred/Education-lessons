// 1. Реализуй и типизируй функцию `merge`,которая будет объединять два объекта, возвращая объект с объединёнными свойствами обоих объектов.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var objA = { name: "John", age: 25 };
var objB = { city: "Wessex", country: "United Kingdom" };
var mergedObj = merge(objA, objB);
console.log(mergedObj);
function addToDictionary(dict, key, value) {
    dict[key] = value;
}
function removeFromDictionary(dict, key) {
    delete dict[key];
}
var myDict = {};
addToDictionary(myDict, "one", 1);
addToDictionary(myDict, "two", 2);
console.log(myDict);
removeFromDictionary(myDict, "one");
console.log(myDict);
// 3. Напиши и типизируй функцию `filterArray`, которая будет фильтровать массив на основе переданного условия. 
// Проверь её работу на массивах разных типов данных.
function filterArray(arr, predicate) {
    return arr.filter(predicate);
}
var numbers = [1, 2, 3, 4, 5, 6];
var filteredNumbers = filterArray(numbers, function (num) { return num > 3; });
console.log(filteredNumbers);
var strings = ["apple", "banana", "cherry", "date"];
var filteredStrings = filterArray(strings, function (str) { return str.includes("a"); });
console.log(filteredStrings);
var users = [
    { name: "John", age: 17 },
    { name: "Anna", age: 25 },
    { name: "Mike", age: 30 }
];
var adults = filterArray(users, function (user) { return user.age >= 18; });
console.log(adults);
