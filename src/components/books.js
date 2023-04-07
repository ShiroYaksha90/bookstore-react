import React from 'react';
import '../styles/books.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';
import Input from './input';

const Books = () => {
  const { books } = useSelector((store) => store.books);
  const dispatch = useDispatch();
  return (
    <div className="main-container">
      <div className="books-container">
        {books.map((book) => (
          <ul key={book.id} className="book-list">
            <li key={book.id}><strong>{book.title}</strong></li>
            <li key={book.id}>{book.author}</li>
            <div className="btns">
              <button type="button" className="cmBtn">Comments</button>
              <button
                type="button"
                className="rmBtn"
                onClick={() => dispatch(removeBook(book.id))}
              >
                Remove
              </button>
              <button type="button" className="edBtn">Edit</button>
            </div>
          </ul>
        ))}
      </div>
      <div>
        <Input />
      </div>
    </div>
  );
};

export default Books;
