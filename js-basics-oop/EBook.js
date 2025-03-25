import Book from './Book.js'; 

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }


    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        const validFormats = ['PDF', 'EPUB', 'DOCX'];
        if (validFormats.includes(value)) {
            this._fileFormat = value;
        } else {
            console.error('File format must be one of the following: PDF, EPUB, DOCX');
        }
    }

    printInfo() {
        super.printInfo();
        console.log(`File Format: ${this._fileFormat}`);
    }

    static createFromBook(book, fileFormat) {
        if (book instanceof Book && typeof fileFormat === 'string') {
            return new EBook(book.title, book.author, book.year, fileFormat);
        } else {
            console.error('Invalid arguments passed to create EBook');
            return null;
        }
    }
}

export default EBook;

