import React, { Component } from 'react';
import './NavBar.css';
import logo from './logo.svg';


export default class NavBar extends Component {
  render() {
    return(
      <div className="navbar">
        <div className="logo-wrapper">
          <img src={logo} className="logo" alt="logo"/>
        </div>
        <div className="title">
          My React Page
        </div>
      </div>
    )
  }
}
