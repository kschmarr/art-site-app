import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Bio from "../Bio";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Bio />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
