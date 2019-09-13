import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AdminArt from "../AdminArt";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <AdminArt />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
