import Book from './Book.js';
import EBook from './EBook.js';

try {
	const book1 = new Book('Arch of Triumph', 'Erich Maria Remarque', 1945);
	const book2 = new Book('Murder on the Orient Express', 'Agatha Christie', 1934);
	const book3 = new Book('The Diary of a Young Girl', 'Anne Frank', 1947);

	const eBook1 = new EBook('Digital Fortress', 'Dan Brown', 1998, 'PDF');
	const eBook2 = new EBook('The Hobbit', 'J.R.R. Tolkien', 1937, 'EPUB');
	const eBook3 = new EBook('1984', 'George Orwell', 1949, 'DOCX');

	book1.printInfo();
	book2.printInfo();
	book3.printInfo();
	eBook1.printInfo();
	eBook2.printInfo();
	eBook3.printInfo();

	const booksArray = [book1, book2, book3, eBook1, eBook2, eBook3];

	const oldestBook = Book.getOldestBook(booksArray);
	console.log('The oldest book is:');
	oldestBook.printInfo();

	const eBookFromBook = EBook.createFromBook(book1, 'EPUB');
	if (eBookFromBook) {
		eBookFromBook.printInfo();
	}
} catch {
	console.log('Something went wrong');
}
