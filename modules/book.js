import booksArr from './booksArr.js';
import { bookContainer } from './domElements.js';

export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  removeBook = (index) => {
    booksArr.splice(index, 1);
    this.booksData = JSON.stringify(booksArr);
    localStorage.setItem('books', this.booksData);
  }

  add = () => {
    booksArr.push({ author: this.author, title: this.title });
    this.booksData = JSON.stringify(booksArr);
    localStorage.setItem('books', this.booksData);
  }

  displayBooks = () => {
    if (localStorage.getItem('books')) {
      this.booksData = JSON.parse(localStorage.getItem('books'));
    } else {
      this.booksData = [];
    }
    const book = new Book();
    bookContainer.innerHTML = null;
    for (let i = 0; i < this.booksData.length; i += 1) {
      const bookDiv = document.createElement('div');
      const bookWraper = document.createElement('div');
      const bookText = document.createElement('div');
      const bookTitle = document.createElement('p');
      const bookBy = document.createElement('p');
      const bookAuthor = document.createElement('p');
      const removeBookBtn = document.createElement('button');
      bookDiv.className = 'book-div';
      bookWraper.className = 'book-wraper';
      bookText.className = 'book-text';
      removeBookBtn.className = 'remove-btn';
      bookTitle.textContent = `"${this.booksData[i].title}"`;
      bookBy.textContent = 'by';
      bookAuthor.textContent = this.booksData[i].author;
      removeBookBtn.textContent = 'Remove';
      bookText.append(bookTitle, bookBy, bookAuthor);
      bookWraper.append(bookText, removeBookBtn);
      bookDiv.append(bookWraper);
      bookContainer.appendChild(bookDiv);
      removeBookBtn.addEventListener('click', () => {
        bookDiv.remove();
        book.removeBook(i);
      });
    }
  }
}