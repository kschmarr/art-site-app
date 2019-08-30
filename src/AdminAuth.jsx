import React, { Component } from "react";
// import ApiContext from "./ApiContext";
import Title from "./Title";
import { Link } from "react-router-dom";

// import TokenService from "./token-service";
// import ValidationError from "./ValidationError";
// import config from "./config";

export default class SignIn extends Component {
  render() {
    // handleSignIn = () => {};
    return (
      <>
        <Title />
        <div className="page-message">
          <h1 className="page-message">
            Please sign in here to add and edit your art.
          </h1>
        </div>
        <form
        // onSubmit={e => {
        //   this.handleSignIn(e);
        // }}
        >
          <div id="usernameDiv" className="label-container">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="Username" />
          </div>

          <div id="passwordDiv" className="label-container">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <Link to="/admin/art">
            <button type="button">Sign-In</button>
          </Link>
        </form>
      </>
    );
  }
}
