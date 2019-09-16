import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class CancelBtn extends Component {
  render() {
    return (
      <Link
        to={{
          pathname: "/admin/art"
        }}
      >
        <button type="button" className="cancel-btn-auth">
          Cancel
        </button>
      </Link>
    );
  }
}
