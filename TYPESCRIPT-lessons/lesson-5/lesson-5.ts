// 1. Реализуй класс `Employee` с приватными свойствами `name`, `position` и защищённым свойством `salary`.
//  Добавь метод для отображения информации о сотруднике. Затем создай класс-наследник `Manager`, 
// который добавит публичное свойство `department` и метод для отображения информации о зарплате только для менеджеров.

class Employee {
    private name: string;
    private position: string;
    protected salary: number;

    constructor(name: string, position: string, salary: number) {
        this.name = name;
        this.position = position;
        this.salary = salary;

    }

    public employeeInfo(): void {
        console.log(`Name: ${this.name}, Position: ${this.position}`);
    }
}

class Manager extends Employee {
    public department: string;

    constructor(name: string, position: string, salary: number, department: string) {
        super(name, position, salary);
        this.department = department;
    }
    public displaySalaryForManagers(): void {
        console.log(`Salary: ${this.salary}`);
    }
}


// 2. Создай абстрактный класс `Employee` с абстрактным методом `calculateSalary()`. 
// Затем реализуй два подкласса `FullTimeEmployee` и `Freelancer`. У каждого из них метод `calculateSalary()` должен работать по-разному: 
// для `FullTimeEmployee` учитывать фиксированную месячную зарплату, а для `Freelancer` — почасовую ставку и количество отработанных часов.


abstract class AbstractEmployee {
    abstract calculateSalary(): number;
}

class FullTimeEmployee extends AbstractEmployee {
    private monthlySalary: number;

    constructor(monthlySalary: number) {
        super();
        this.monthlySalary = monthlySalary;
    }

    calculateSalary(): number {
        return this.monthlySalary;
    }
}

class Freelancer extends AbstractEmployee {
    private hourlyRate: number;
    private hoursWorked: number;

    constructor(hourlyRate: number, hoursWorked: number) {
        super();
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const fullTimeEmp = new FullTimeEmployee(3000);
console.log(`Full Time Employee Salary: ${fullTimeEmp.calculateSalary()}`);

const freelancerEmp = new Freelancer(50, 120);
console.log(`Freelancer Salary: ${freelancerEmp.calculateSalary()}`);

// 3. Создай интерфейс `Dictionary`, представляющий собой словарь, в котором ключами являются строки, а значениями – любые типы данных. 
// Реализуй класс `MultiLanguageDictionary` с методом для добавления слов и переводов на разных языках. 
// Добавь метод для поиска перевода по языку и слову.

interface Dictionary {
    [key: string]: unknown;
}

class MultiLanguageDictionary {
    private data: Dictionary; 

    constructor(data: Dictionary = {}) { // Инициализация с пустым объектом по умолчанию
        this.data = data;
    }

    add(language: string, word: string, translation: string): void {
        if (!this.data[language]) {
            this.data[language] = {};
        }
        (this.data[language] as Dictionary)[word] = translation;
    }
    translate(language: string, word: string): string {
        const langDict = this.data[language] as Dictionary;
        if (langDict && langDict[word]) {
            return langDict[word] as string;
        } else {
            return `Translation for "${word}" in "${language}" not found.`;
        }
    }
}

const dict = new MultiLanguageDictionary();
dict.add("en", "кот", "cat");
dict.add("es", "кот", "gato");

console.log(dict.translate("en", "кот")); 
console.log(dict.translate("es", "кот"));
console.log(dict.translate("de", "кот")); 
