import React, { Component } from "react";
import ApiContext from "./ApiContext";
import Title from "./Title";
import AdminNav from "./AdminNav";
import config from "./config";

export default class AdminBio extends Component {
  static contextType = ApiContext;

  handleChangeBio = value => {
    this.context.editBio(value);
  };

  handleSubmitBio = e => {
    e.preventDefault();
    let bio = this.context.bio.trim();

    const newBio = {
      bio: bio
    };
    fetch(`${config.API_ENDPOINT}/users/1`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newBio)
    })
      .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e));
        return res.json();
      })
      .then(data => {
        this.context.editBio(data);
      })
      .then(data => {
        this.props.history.push("/admin/art");
        return data;
      })

      .catch(error => {
        console.error({ error });
      });
  };

  render() {
    return (
      <>
        <AdminNav />
        <Title />
        <div>
          <h2>Please edit your bio here.</h2>
        </div>

        <form
          onSubmit={e => {
            this.handleSubmitBio(e);
          }}
        >
          <div id="bio-div" className="bio-container">
            <textarea
              className="bio-input"
              id="bio"
              name="bio"
              defaultValue={this.context.bio}
              onChange={e => this.handleChangeBio(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submitBtn">
            Submit Changes
          </button>
        </form>
      </>
    );
  }
}
