import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav" id="page-nav">
        <label htmlFor="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger" />
        <ul>
          <li>
            <Link to="/main">The Art.</Link>
          </li>
          <li>
            <Link to="/bio">The Artist.</Link>
          </li>
          <li>
            <Link to="/">The Instructions.</Link>
          </li>
          <li>
            <Link to="/admin">The Admin Site.</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
