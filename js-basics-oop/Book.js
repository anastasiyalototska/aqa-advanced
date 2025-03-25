class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value === 'string') {
            this._title = value;
        } else {
            console.error('Title must be a string');
        }
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value === 'string') {
            this._author = value;
        } else {
            console.error('Author must be a string');
        }
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (typeof value === 'number' && value > 0) {
            this._year = value;
        } else {
            console.error('Year must be a valid number');
        }
    }

    printInfo() {
        console.log(`Title: ${this._title}, Author: ${this._author}, Year: ${this._year}`);
    }


    static getOldestBook(booksArray) {
        return booksArray.reduce((oldest, currentBook) => {
            return currentBook.year < oldest.year ? currentBook : oldest;
        });
    }
}

export default Book;
