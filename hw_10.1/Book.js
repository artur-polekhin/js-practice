export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }

    set setTitle(newTitle) {
        if (newTitle.length <= 30)
            this.title = newTitle;
        else
            throw new Error('Invalid value');
    }

    get getTitle() {
        return this.title;
    }

    set setAuthor(newAuthor) {
        if (typeof newAuthor === 'string')
            this.author = newAuthor;
        else
            throw new Error('Invalid value');
    }

    get getAuthor() {
        return this.author;
    }

    set setYear(newYear) {
        if (newYear > 500 && newYear < 2027)
            this.year = newYear;
        else
            throw new Error('Invalid value');
    }

    static getTheOldestBook(books) {
        let oldestBook = books[0];
        for (let book of books) {
            if (book.year < oldestBook.year)
                oldestBook = book;
        }
        return oldestBook;
    }
}