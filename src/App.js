import React from 'react'
import * as BooksAPI from './BooksAPI'
import Header from './Header';
import BookShelf from './BookShelf';
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }

  render() {
    return (
      <div className="app">
        {
          <div className="list-books">
            <Header title="MyReads" />
            <div className="list-books-content">
              <div>
                <BookShelf shelfTitle="Currently Reading" />
                <BookShelf shelfTitle="Want to Read" />
                <BookShelf shelfTitle="Read" />
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default BooksApp
