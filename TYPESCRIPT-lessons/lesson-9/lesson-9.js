// 1. У тебя есть интерфейс `Task`, который имеет обязательные поля `title` и `deadline`, 
// а также опциональные поля `priority` и `description`. Напиши функцию `createTask`, которая принимает объект `Task`,
//  но все поля в нем должны быть обязательными;
function createTask(task) {
    return task;
}
var newTask = createTask({
    title: "Finish TypeScript lesson",
    deadline: new Date("2024-12-31"),
    priority: "high",
    description: "Complete all exercises and review the material."
});
console.log(newTask);
var products = {
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
function getBookSummary(book) {
    return "".concat(book.title, ", \u0430\u0432\u0442\u043E\u0440 - ").concat(book.author, ", \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u0430 \u0432 ").concat(book.publishedYear);
}
function sanitizeBookData(book) {
    return book;
}
var myBook = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    publishedYear: 1925,
    genres: ["Fiction", "Classic"]
};
var summary = getBookSummary({
    title: myBook.title,
    author: myBook.author,
    publishedYear: myBook.publishedYear
});
console.log(summary);
var sanitizedBook = sanitizeBookData(myBook);
console.log(sanitizedBook);
function handleApiStatus(status) {
    if (status === 'success') {
        return "Данные получены.";
    }
    else {
        return "Произошла ошибка....";
    }
}
console.log(handleApiStatus('success'));
console.log(handleApiStatus('error'));
