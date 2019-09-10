import React, { Component } from "react";
import ApiContext from "./ApiContext";
import Title from "./Title";
import Nav from "./Nav";

export default class Bio extends Component {
  static contextType = ApiContext;

  render() {
    return (
      <>
        <Nav />
        <Title />
        <section id="bio-section">{this.context.bio}</section>
      </>
    );
  }
}
