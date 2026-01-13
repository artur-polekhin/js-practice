import { Book } from "./Book.js";
import { EBook } from "./EBook.js";


const book1 = new Book('Book1', 'Some Author', 2000);
const ebook1 = new EBook('EBook1', 'Some Author', 2000, 'pdf');

book1.setTitle = 'NewBook';
console.log(book1.title);
book1.setAuthor = 'New Author';
console.log(book1.author);
book1.setYear = 2005;
console.log(book1.year);

ebook1.setTitle = 'New EBookTitle';
console.log(ebook1.title)
ebook1.setAuthor = 'New EBookAuthor';
console.log(ebook1.author)
ebook1.setYear = 701;
console.log(ebook1.year);
ebook1.setFormat = 'epub'
console.log(ebook1.format);

book1.printInfo();
ebook1.printInfo();

const book2 = new Book('Book2', 'Some Author2', 1998);
const book3 = new Book('Book3', 'Some Author2', 691);
const books = [];
books.push(book1);
books.push(book2);
books.push(book3);


const ebook2 = new EBook('EBook2', 'Some Author2', 2003, 'pdf');
const ebook3 = new EBook('EBook3', 'Some Author3', 505, 'pdf');

books.push(ebook1);
books.push(ebook2);
books.push(ebook3);

console.log(Book.getTheOldestBook(books));

const ebook4 = EBook.convertBookToEBook(book1, 'pdf');
console.log(ebook4);
