import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AdminEdit from "../AdminEdit";
it("renders without crashing", () => {
  const div = document.createElement("div");
  let location = {
    state: {
      art: { title: "" }
    }
  };
  ReactDOM.render(
    <BrowserRouter>
      <AdminEdit location={location} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
