import React, { Component } from 'react';
import BookshelfTitle from './BookshelfTitle'
import BookshelfBooks from './BookshelfBooks'

const Bookshelf = () => {
  return (
    <div className="bookshelf">
      <BookshelfTitle />
      <BookshelfBooks />
    </div>
  );
}

export default Bookshelf;
