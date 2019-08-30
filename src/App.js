import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import ApiContext from "./ApiContext";
// import TokenService from "./token-service";
import "./App.css";
import Main from "./Main";
import Splash from "./Splash";
import Bio from "./Bio";
import AdminAuth from "./AdminAuth";
import AdminArt from "./AdminArt";
import AdminEdit from "./AdminEdit";
import AdminBio from "./AdminBio";
// import config from "./config";

export default class App extends Component {
  render() {
    // const value = {};
    return (
      // <ApiContext.Provider value={}>
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
      // </ApiContext.Provider>
    );
  }
}
