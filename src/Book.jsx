import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ShelfChanger from './ShelChanger'

export default class Book extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
  }

  render(){
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.cover})` }}></div>
          <ShelfChanger />
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.author}</div>
      </div>
    );
  }
}

Book.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}
