import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

export default class Nav extends Component {
  render() {
    return (
      <nav className="page-nav">
        <Hamburger />
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
