import Book from './book.js';
import { titleInput, authorInput, addBookBtn } from './domElements.js';
import displayBooks from './displayBooks.js';

export default () => {
  addBookBtn.addEventListener('click', () => {
    const form = document.querySelector('.add-book-form');
    const addBookText = document.querySelector('.new-book-title')
    const book = new Book(titleInput.value, authorInput.value);
    book.add(book);
    displayBooks();
    form.reset();
    addBookText.textContent = 'New Book Added';
    setTimeout(() => {
      addBookText.textContent = 'Add a new book';
    }, 2000);
  });
};