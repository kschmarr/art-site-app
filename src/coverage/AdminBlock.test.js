import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AdminBlock from "../AdminBlock";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <AdminBlock />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
