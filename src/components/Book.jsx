import React, { Component } from 'react';
import BookTop from './BookTop';
import BookTitle from './BookTitle';
import BookAuthor from './BookAuthor';

const Book = () => {
  return (
    <li>
      <div className="book">
        <BookTop />
        <BookTitle />
        <BookAuthor />
      </div>
    </li>
  )
}

export default Book;
