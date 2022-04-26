import { Book } from './modules/book.js';
import { bookContainer, titleInput, authorInput, addBookBtn, bookListLink, addNewBookLink, contactInfoLink, 
  bookList, addNewBook, contactInfo, dateText} from './modules/domElements.js';
import booksArr from './modules/booksArr.js';
import displayBooks from './modules/displayBooks.js';
import displayNav from './modules/displayNav.js';
import addBooksListener from './modules/addBooksListener.js';
import initialDisplay from './modules/initialDisplay.js';
import date from './modules/date.js';

date();
initialDisplay();
displayBooks();
displayNav();
addBooksListener();





