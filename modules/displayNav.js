import { bookListLink, addNewBookLink, contactInfoLink, bookList, addNewBook, contactInfo } from './domElements.js';

  export default () => {
  bookListLink.addEventListener('click', () => {
    bookList.classList.remove('hidden');
    addNewBook.classList.add('hidden');
    contactInfo.classList.add('hidden');
  });
  
  addNewBookLink.addEventListener('click', () => {
    addNewBook.classList.remove('hidden');
    bookList.classList.add('hidden');
    contactInfo.classList.add('hidden');
  });
  
  contactInfoLink.addEventListener('click', () => {
    bookList.classList.add('hidden');
    addNewBook.classList.add('hidden');
    contactInfo.classList.remove('hidden');
  });
}