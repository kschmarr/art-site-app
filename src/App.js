import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApiContext from "./ApiContext";
// import TokenService from "./token-service";
import "./App.css";
import Main from "./Main";
import Splash from "./Splash";
import Bio from "./Bio";
import AdminAuth from "./AdminAuth";
import AdminArt from "./AdminArt";
import AdminEdit from "./AdminEdit";
import AdminBio from "./AdminBio";
import config from "./config";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      art: [],
      bio: ""
    };
  }
  //   {
  //   headers: { authorization: `basic ${TokenService.getAuthToken()}` }
  // }
  componentDidMount() {
    this.getAllArt();
    this.getAllUsers();
  }

  getAllArt = () => {
    fetch(`${config.API_ENDPOINT}/art`)
      .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e));
        return res.json();
      })
      .then(arts => {
        arts.forEach(art => {
          this.setState({ art: [...this.state.art, art] });
        });
      })
      .catch(error => {
        console.error({ error });
      });
  };
  getAllUsers = () => {
    fetch(`${config.API_ENDPOINT}/users`)
      .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e));
        return res.json();
      })
      .then(users => {
        users.forEach(user => {
          this.setState({ bio: user.bio });
        });
      })
      .catch(error => {
        console.error({ error });
      });
  };
  render() {
    const value = {
      art: this.state.art,
      bio: this.state.bio
    };
    return (
      <ApiContext.Provider value={value}>
        <Router>
          <main className="App">
            <Route exact path="/" component={Splash} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/bio" component={Bio} />
            <Route exact path="/admin" component={AdminAuth} />
            <Route exact path="/admin/art" component={AdminArt} />
            <Route exact path="/admin/edit" component={AdminEdit} />
            <Route exact path="/admin/bio" component={AdminBio} />
          </main>
        </Router>
      </ApiContext.Provider>
    );
  }
}
