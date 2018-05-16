import React, { Component } from 'react';
import Book from './Book'

const BookshelfBooks = () => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        <Book />
        <Book />
      </ol>
    </div>
  )
}

export default BookshelfBooks;
