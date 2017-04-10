import React, { Component } from 'react';
import './Body.css';

export default class Body extends Component {
  render() {
    return(
      <div>
        <div className="body-section">
          <h1>My React Body Section</h1>
          <div className="body-content">
            <p>Here is a link to my GitHub profile.</p>
            <a href="https://github.com/szkallias">github.com/szkallias</a>
          </div>
        </div>
      </div>
    )
  }
}
