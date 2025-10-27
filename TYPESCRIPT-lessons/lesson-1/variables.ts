// 1.

let userName: string = "John";
let userAge: number = 25;
let isOnline: boolean = true;

// 2.

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(5, 10));

// 3.

type Book = {
    title: string;
    author: string;
    pages: number;
};

const myBook: Book = {
    title: "Дубровский",
    author: "Александр Пушкин",
    pages: 86
};
