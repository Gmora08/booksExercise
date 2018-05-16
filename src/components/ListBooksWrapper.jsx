import React, { Component } from 'react';
import Bookshelf from './Bookshelf'

const ListBooksWrapper = () => {
  return (
    <div className="list-books-content">
      <div>
        <Bookshelf />
        <Bookshelf />
        <Bookshelf />
      </div>
    </div>
  )
}

export default ListBooksWrapper;
