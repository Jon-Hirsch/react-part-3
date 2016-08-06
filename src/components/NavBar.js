import React from 'react';
import {Component} from 'react';
import './css/navbar.css'

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
  			<a className="navbar--link" href="/">Home</a>
  			<a className="navbar--link" href="/experiments">Experiments</a>
  			<a className="navbar--link" href="/articles">Articles</a>
  			<a className="navbar--link" href="/search">Search</a>
		  </div>
    );
  }
}
