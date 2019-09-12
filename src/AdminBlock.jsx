import React, { Component } from "react";
import ApiContext from "./ApiContext";
import Title from "./Title";
import { Link } from "react-router-dom";

export default class SignIn extends Component {
  static contextType = ApiContext;

  render() {
    return (
      <>
        <Title />
        <div className="block-message">
          <h2>Sorry, studio closed.</h2>
          <h3>Please sign in to edit your art.</h3>
        </div>
        <Link
          to={{
            pathname: "/admin"
          }}
        >
          <button type="button" className="cancel-btn-auth">
            Sign-In Page
          </button>
        </Link>
        <Link
          to={{
            pathname: "/main"
          }}
        >
          <button type="button" className="cancel-btn-auth">
            Main Page
          </button>
        </Link>
      </>
    );
  }
}
