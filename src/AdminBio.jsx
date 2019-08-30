import React, { Component } from "react";
// import ApiContext from "./ApiContext";
import Title from "./Title";
import AdminNav from "./AdminNav";
// import ValidationError from "./ValidationError";
// import config from "./config";

export default class AdminBio extends Component {
  render() {
    return (
      <>
        <AdminNav />
        <Title />
        <div>
          <h2>Please edit your bio here.</h2>
        </div>

        <form
        // onSubmit={e => {
        //   this.handleSubmitMeal(e);
        // }}
        >
          <div id="bio-div" className="bio-container">
            <textarea
              // type="text"
              className="bio-input"
              id="bio"
              name="bio"
              // placeholder="Meal Name"
              defaultValue="Art makes me happy, hopefully it makes you happy too! I am a Colorado
          based artist specializing in depicting landscapes on found pieces of
          sandstone and granite, as well as on traditional canvas. I do
          commission work as well upon request. Happy adventures! -Grace"
              // onChange={e => this.validateName(e.target.value)}
              required
            />
            {/* <ValidationError
              hasError={!this.state.nameValid}
              message={this.state.validationMessages.name}
            /> */}
          </div>

          <button
            type="submit"
            className="submitBtn"
            // disabled={!this.state.nameValid}
          >
            Submit Changes
          </button>
        </form>
      </>
    );
  }
}
