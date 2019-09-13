import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AdminAdd from "../AdminAdd";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <AdminAdd />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
