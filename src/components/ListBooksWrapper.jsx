import React, { Component } from 'react';
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'

const ListBooksWrapper = () => {
  return (
    <div className="list-books-content">
      <div>
        <CurrentlyReading />
        <WantToRead />
        <Read />
      </div>
    </div>
  )
}

export default ListBooksWrapper;
