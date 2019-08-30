import React, { Component } from "react";
import AdminNav from "./AdminNav";
import Title from "./Title";
import { Link } from "react-router-dom";
import Card from "./Card";
// import ApiContext from "./ApiContext";
import store from "./store";
class AdminArt extends Component {
  // static contextType = ApiContext;
  // componentDidMount() {
  //   this.context.getMeal();
  // }

  render() {
    return (
      <div className="main">
        <AdminNav />
        <Title />
        {store.map((art, i) => (
          <Link
            to={{
              pathname: "/admin/edit",
              state: { art: art }
            }}
            key={i}
          >
            <Card art={art} key={i} />
          </Link>
        ))}
      </div>
    );
  }
}

export default AdminArt;
