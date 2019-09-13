import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Hamburger from "../Hamburger";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Hamburger />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
