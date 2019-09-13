import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AdminAuth from "../AdminAuth";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <AdminAuth />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
