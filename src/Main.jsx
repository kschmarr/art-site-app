import React, { Component } from "react";
import Nav from "./Nav";
import Title from "./Title";
import Card from "./Card";
import ApiContext from "./ApiContext";

class Main extends Component {
  static contextType = ApiContext;

  render() {
    return (
      <div className="main">
        <Nav />
        <Title />
        <h3 className="main-header">
          Thank you for stopping by to see the art I've been creating. To see
          more details about a certain piece you can simply click on the
          picture. Clicking again will hide those details.
        </h3>
        {this.context.art.map((art, i) => (
          <Card art={art} key={i} id={i} />
        ))}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:kschmarr@gmail.com?subject=Purchase%20art&amp;body=I'm%20interested%20in%20purchasing%20the%20piece%20of%20art%20titled%20(fill%20in%20title%20of%20piece%20here)."
        >
          <button className="purchase-button">Send Purchase Request</button>
        </a>
      </div>
    );
  }
}

export default Main;
