import React, { Component } from "react";
import Nav from "./Nav";
import Title from "./Title";
import Card from "./Card";
// import ApiContext from "./ApiContext";
import store from "./store";
class Main extends Component {
  // static contextType = ApiContext;
  // componentDidMount() {
  //   this.context.getMeal();
  // }
  render() {
    return (
      <div className="main">
        <Nav />
        <Title />
        {store.map((art, i) => (
          <Card art={art} key={i} />
        ))}
      </div>
    );
  }
}

export default Main;
