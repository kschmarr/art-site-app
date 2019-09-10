import React, { Component } from "react";
import AdminNav from "./AdminNav";
import Title from "./Title";
import { Link } from "react-router-dom";
import Card from "./Card";
import ApiContext from "./ApiContext";

class AdminArt extends Component {
  static contextType = ApiContext;

  render() {
    let { username, art } = this.context;
    let currentUser = username.charAt(0).toUpperCase() + username.substring(1);
    return (
      <div className="main">
        <AdminNav />
        <Title />
        <h3 className="main-header">
          Welcome&nbsp;{currentUser}, <br />
          Click on a picture to see and edit the details or delete it from the
          public site.
        </h3>
        {art.map((art, i) => (
          <Link
            to={{
              pathname: "/admin/edit",
              state: { art: art }
            }}
            key={i}
          >
            <Card art={art} key={i} id={i} />
          </Link>
        ))}
      </div>
    );
  }
}

export default AdminArt;
