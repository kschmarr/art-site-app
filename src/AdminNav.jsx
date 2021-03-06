import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import TokenService from "./token-service";

export default class Nav extends Component {
  render() {
    return (
      <nav className="page-nav">
        <Hamburger />
        <ul>
          <li>
            <Link to="/admin/art">See/Edit The Art.</Link>
          </li>
          <li>
            <Link to={"/admin/add"}>Add New Art.</Link>
          </li>
          <li>
            <Link to="/admin/bio">Edit The Bio.</Link>
          </li>
          <li>
            {TokenService.hasAuthToken() ? (
              <Link
                to="/admin"
                onClick={() => {
                  TokenService.clearAuthToken();
                }}
              >
                Sign-Out
              </Link>
            ) : (
              <Link to="/admin">Sign-In</Link>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}
