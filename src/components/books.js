import React from 'react';
import '../styles/books.css';

const Books = () => {
  const books = [
    {
      id: 1,
      title: 'The Iron Heel',
      author: 'Jack London',
    },
    {
      id: 2,
      title: 'Lord Of The Rings',
      author: 'R.R Tolkien',
    },
  ];
  return (
    <div className="main-container">
      <div className="books-container">
        {books.map((book) => (
          <ul key={book.id} className="book-list">
            <li><strong>{book.title}</strong></li>
            <li>{book.author}</li>
            <div className="btns">
              <button type="button" className="cmBtn">Comments</button>
              <button type="button" className="rmBtn">Remove</button>
              <button type="button" className="edBtn">Edit</button>
            </div>
          </ul>
        ))}
      </div>
      <div>
        <form>
          <input type="text" placeholder="title" className="title-input" />
          <input type="text" placeholder="author" className="author-input" />
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default Books;
