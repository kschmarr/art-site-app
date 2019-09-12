import React, { Component } from "react";
import ApiContext from "./ApiContext";
import Title from "./Title";
import TokenService from "./token-service";
import config from "./config";
import { Link } from "react-router-dom";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pass: ""
    };
  }

  static contextType = ApiContext;

  handleSignIn = ev => {
    ev.preventDefault();
    const username = this.state.name.toLowerCase();
    const password = this.state.pass;
    const token = TokenService.makeBasicAuthToken(username, password);
    fetch(`${config.API_ENDPOINT}/users/${token}`, {})
      .then(res => {
        console.log(res);
        if (!res.ok) return res.json().then(e => Promise.reject(e));
        return res.json();
      })
      .then(user => {
        if (!user) {
          alert(
            "We can't find your brush. No painting today!! (Bad credentials)"
          );
        }
        return user;
      })
      .then(user => {
        this.context.setUser(user);
        TokenService.saveAuthToken(token);
        return user;
      })

      .then(user => {
        this.props.history.push("/admin/art");
        return user;
      })
      .catch(error => {
        console.error({ error });
      });
  };
  render() {
    return (
      <>
        <Title />
        <div className="page-message">
          <h2 className="page-message">
            Please sign in here to edit your art.
          </h2>
        </div>
        <form
          onSubmit={e => {
            this.handleSignIn(e);
          }}
        >
          <div id="usernameDiv" className="label-container">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={this.state.name}
              onChange={e => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>

          <div id="passwordDiv" className="label-container">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={this.state.pass}
              onChange={e => this.setState({ pass: e.target.value })}
            />
          </div>
          <button type="submit">Sign-In</button>
        </form>
        <Link
          to={{
            pathname: "/main"
          }}
        >
          <button type="button" className="cancel-btn-auth">
            Cancel
          </button>
        </Link>
      </>
    );
  }
}
