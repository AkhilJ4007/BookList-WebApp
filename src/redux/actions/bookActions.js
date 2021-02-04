export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK';

export function addBook(book) {
  return { type: ADD_BOOK, payload: book };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, payload: id };
}

export function updateBook(book,key) {
  return { type:UPDATE_BOOK , payload: book, key: key };
}

