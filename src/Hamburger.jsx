import React, { Component } from "react";

export default class Hamburger extends Component {
  render() {
    return (
      <>
        <label htmlFor="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger" />
      </>
    );
  }
}
