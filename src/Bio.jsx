import React, { Component } from "react";
import Title from "./Title";
import Nav from "./Nav";

export default class Bio extends Component {
  render() {
    return (
      <>
        <Nav />
        <Title />
        <p>
          Art makes me happy, hopefully it makes you happy too! I am a Colorado
          based artist specializing in depicting landscapes on found pieces of
          sandstone and granite, as well as on traditional canvas. I do
          commission work as well upon request. Happy adventures! -Grace
        </p>
        <p>
          Purchase requests can be sent to{" "}
          <a href="mailto:name@email.com">the artist's agent</a>. Please include
          the title of the piece you are interested in. You will be contacted
          shortly for payment and shipping details.
        </p>
      </>
    );
  }
}
