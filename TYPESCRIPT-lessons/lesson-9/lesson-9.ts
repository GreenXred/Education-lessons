// 1. У тебя есть интерфейс `Task`, который имеет обязательные поля `title` и `deadline`, 
// а также опциональные поля `priority` и `description`. Напиши функцию `createTask`, которая принимает объект `Task`,
//  но все поля в нем должны быть обязательными;

interface Task {
    title: string;
    deadline: Date;
    priority?: "low" | "medium" | "high";
    description?: string;
}

function createTask(task: Required<Task>): Task {
    return task;
}

const newTask = createTask({
    title: "Finish TypeScript lesson",
    deadline: new Date("2024-12-31"),
    priority: "high",
    description: "Complete all exercises and review the material."
});

console.log(newTask);


// 2. Создай тип `ProductCategory`, который будет включать три категории продуктов: `electronics`, `clothing`, и `food`. 
// Затем создай тип `ProductInfo`, который содержит поля `name`, `price`, и `stock`. 
// Используя подходящий utility type, создай объект `products`, который будет связывать каждую категорию с массивом продуктов;

type ProductCategory = 'electronics' | 'clothing' | 'food';

type ProductInfo = {
    name: string;
    price: number;
    stock: number;
};

type Products = {
    [key in ProductCategory]: ProductInfo[];
};

const products: Products = {
    electronics: [
        { name: "Laptop", price: 1900, stock: 10 },
        { name: "Smartphone", price: 1000, stock: 25 }
    ],
    clothing: [
        { name: "T-Shirt", price: 20, stock: 100 },
        { name: "Jeans", price: 45, stock: 50 }
    ],
    food: [
        { name: "Apple", price: 1, stock: 200 },
        { name: "Bread", price: 2.5, stock: 150 }
    ]
};

console.log(products);


// 3. Создай интерфейс `Book` с полями `title`, `author`, `isbn`, `publishedYear`, и `genres`. Напиши функцию `getBookSummary`, 
// которая должна принимать объект книги, используя подходящий utility type, чтобы взять только `title`, `author`, и `publishedYear`.
//  Напиши вторую функцию `sanitizeBookData`, которая удаляет поле `isbn` с помощью подходящего utility type;

interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genres: string[];
}

function getBookSummary(book: Pick<Book, 'title' | 'author' | 'publishedYear'>): string {
    return `${book.title}, автор - ${book.author}, написанна в ${book.publishedYear}`;
}

function sanitizeBookData(book: Omit<Book, 'isbn'>): Omit<Book, 'isbn'> {
    return book;
}

const myBook: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    publishedYear: 1925,
    genres: ["Fiction", "Classic"]
};

const summary = getBookSummary({
    title: myBook.title,
    author: myBook.author,
    publishedYear: myBook.publishedYear
});

console.log(summary);

const sanitizedBook = sanitizeBookData(myBook);
console.log(sanitizedBook);


// 4. Создай тип для статуса запроса API, который может быть `'loading'`, `'success'`, `'error'`. 
// Напиши функцию, которая принимает тип статуса, исключая `'loading'`.

type ApiStatus = 'loading' | 'success' | 'error';

function handleApiStatus(status: Exclude<ApiStatus, 'loading'>): string {
    if (status === 'success') {
        return "Данные получены.";
    } else {
        return "Произошла ошибка....";
    }
}

console.log(handleApiStatus('success'));
console.log(handleApiStatus('error'));