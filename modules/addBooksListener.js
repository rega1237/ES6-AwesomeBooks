import { Book } from './book.js';
import { titleInput, authorInput, addBookBtn } from './domElements.js';
import displayBooks from './displayBooks.js';

export default () => {
  addBookBtn.addEventListener('click', () => {
  const book = new Book(titleInput.value, authorInput.value);
  book.add(book);
  displayBooks();
  });
}