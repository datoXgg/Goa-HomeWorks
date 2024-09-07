let book = { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 };

book.genre = "Fiction";

delete book.year;

console.log(book.title);

console.log("author" in book);

for (let key in book) {
    console.log(book[key]);
}

let people = [
    { name: "daviti", age: 30 },
    { name: "giorgi", age: 25 },
    { name: "levani", age: 40 }
];

console.log(Object.keys(book).length);

let library = { section: { shelf: { bookTitle: "1984" } } };
console.log(library.section.shelf.bookTitle);

let bookValues = Object.values(book);
console.log(bookValues);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.push(11);

numbers.unshift(0);

numbers.pop();

numbers.shift();
