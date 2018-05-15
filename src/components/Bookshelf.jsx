import React, {Component} from 'react'
import BookshelfTitle from './Bookshelf-title.jsx'
import BookshelfBooks from './Bookshelf-books.jsx'

class Bookshelf extends React.Component {
    render() {
        return(
            <div className="bookshelf">
              <BookshelfTitle/>
              <BookshelfBooks/>
            </div>
        )
    }
}

export default Bookshelf