import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list-books-title">
        <h1>{this.props.title}</h1>
      </div>
    );
  }

}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
