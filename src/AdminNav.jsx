import React, { Component } from "react";
import { Link } from "react-router-dom";
// import ApiContext from "./ApiContext";
// import TokenService from "./token-service";

export default class Nav extends Component {
  // static contextType = ApiContext;

  // showLink = (path, linkText) => {
  // if (window.location.pathname !== path) {
  //   return (
  //     <li className="currentPage">
  //       <Link to={path}>{linkText}</Link>
  //     </li>
  //   );
  // } else {
  //   return (
  //     <li>
  //       <Link to={path}>{linkText}</Link>
  //     </li>
  //   );
  //   // }
  // };
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <Link to="/admin/art">Edit The Art.</Link>
          </li>
          <li>
            <Link to="/admin/bio">Edit The Bio.</Link>
          </li>
          <li>
            <Link to="/">Sign Out.</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
