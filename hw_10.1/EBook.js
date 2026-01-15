import { Book } from "./Book.js";

export class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year);
        this.format = format;
    }

    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Format: ${this.format}`);
    }

    set setFormat(newFormat) {
        if (this.format === 'pdf' || this.format === 'epub')
            this.format = newFormat;
        else
            throw new Error('Invalid value');
    }

    get getTitle() {
        return this.format;
    }

    static convertBookToEBook(book, format) {
        return new EBook(book.title, book.author, book.year, format);
    }
}

