// 1. Реализуй класс `Employee` с приватными свойствами `name`, `position` и защищённым свойством `salary`.
//  Добавь метод для отображения информации о сотруднике. Затем создай класс-наследник `Manager`, 
// который добавит публичное свойство `department` и метод для отображения информации о зарплате только для менеджеров.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    Employee.prototype.employeeInfo = function () {
        console.log("Name: ".concat(this.name, ", Position: ").concat(this.position));
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, position, salary, department) {
        var _this = _super.call(this, name, position, salary) || this;
        _this.department = department;
        return _this;
    }
    Manager.prototype.displaySalaryForManagers = function () {
        console.log("Salary: ".concat(this.salary));
    };
    return Manager;
}(Employee));
// 2. Создай абстрактный класс `Employee` с абстрактным методом `calculateSalary()`. 
// Затем реализуй два подкласса `FullTimeEmployee` и `Freelancer`. У каждого из них метод `calculateSalary()` должен работать по-разному: 
// для `FullTimeEmployee` учитывать фиксированную месячную зарплату, а для `Freelancer` — почасовую ставку и количество отработанных часов.
var AbstractEmployee = /** @class */ (function () {
    function AbstractEmployee() {
    }
    return AbstractEmployee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(monthlySalary) {
        var _this = _super.call(this) || this;
        _this.monthlySalary = monthlySalary;
        return _this;
    }
    FullTimeEmployee.prototype.calculateSalary = function () {
        return this.monthlySalary;
    };
    return FullTimeEmployee;
}(AbstractEmployee));
var Freelancer = /** @class */ (function (_super) {
    __extends(Freelancer, _super);
    function Freelancer(hourlyRate, hoursWorked) {
        var _this = _super.call(this) || this;
        _this.hourlyRate = hourlyRate;
        _this.hoursWorked = hoursWorked;
        return _this;
    }
    Freelancer.prototype.calculateSalary = function () {
        return this.hourlyRate * this.hoursWorked;
    };
    return Freelancer;
}(AbstractEmployee));
var fullTimeEmp = new FullTimeEmployee(3000);
console.log("Full Time Employee Salary: ".concat(fullTimeEmp.calculateSalary()));
var freelancerEmp = new Freelancer(50, 120);
console.log("Freelancer Salary: ".concat(freelancerEmp.calculateSalary()));
var MultiLanguageDictionary = /** @class */ (function () {
    function MultiLanguageDictionary(data) {
        if (data === void 0) { data = {}; }
        this.data = data;
    }
    MultiLanguageDictionary.prototype.add = function (language, word, translation) {
        if (!this.data[language]) {
            this.data[language] = {};
        }
        this.data[language][word] = translation;
    };
    MultiLanguageDictionary.prototype.translate = function (language, word) {
        var langDict = this.data[language];
        if (langDict && langDict[word]) {
            return langDict[word];
        }
        else {
            return "Translation for \"".concat(word, "\" in \"").concat(language, "\" not found.");
        }
    };
    return MultiLanguageDictionary;
}());
var dict = new MultiLanguageDictionary();
dict.add("en", "кот", "cat");
dict.add("es", "кот", "gato");
console.log(dict.translate("en", "кот"));
console.log(dict.translate("es", "кот"));
console.log(dict.translate("de", "кот"));
