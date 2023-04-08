import { React, useEffect } from 'react';
import '../styles/books.css';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, delBook } from '../redux/books/bookSlice';
import Input from './input';

const Books = () => {
  const { books } = useSelector((store) => store.books);
  const precentage = Math.floor(Math.random() * 100);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <div className="main-container">
      <div className="books-container">
        {books.map((book) => (
          <ul key={book.item_id} className="book-list">
            <div className="content-container">
              <div className="book-card">
                <li><strong>{book.title}</strong></li>
                <li>{book.author}</li>
                <div className="btns">
                  <button type="button" className="cmBtn">Comments</button>
                  <button
                    type="button"
                    className="rmBtn"
                    onClick={() => dispatch(delBook(book.item_id))}
                  >
                    Remove
                  </button>
                  <button type="button" className="edBtn">Edit</button>
                </div>
              </div>
              <div className="status-container">
                <div className="precentage">

                  {precentage}
                  %
                  <p>
                    Completed
                  </p>
                </div>
                <div className="status">
                  <h2 className="current-chapter">CURRENT CHAPTER</h2>
                  <h3 className="current-lesson">Chapter 17</h3>
                  <button type="button">UPDATE PROGRESS</button>
                </div>
              </div>
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
