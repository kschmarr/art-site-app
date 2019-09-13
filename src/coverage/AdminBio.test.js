import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AdminBio from "../AdminBio";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <AdminBio />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
