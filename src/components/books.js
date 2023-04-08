import { React, useEffect } from 'react';
import '../styles/books.css';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, delBook } from '../redux/books/bookSlice';
import Input from './input';

const Books = () => {
  const { books } = useSelector((store) => store.books);
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
                <li className="category">{book.category}</li>
                <li><strong>{book.title}</strong></li>
                <li className="author">{book.author}</li>
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
              <div className="flex-wrapper">
                <div className="single-chart">
                  <svg viewBox="0 0 36 36" className="circular-chart blue">
                    <path
                      className="circle-bg"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray="90, 100"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" className="percentage">70%</text>
                  </svg>
                </div>
              </div>
              <div className="status-container">

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
