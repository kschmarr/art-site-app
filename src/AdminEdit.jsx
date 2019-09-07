import React, { Component } from "react";
// import ApiContext from "./ApiContext";
import Title from "./Title";
import AdminNav from "./AdminNav";
// import ValidationError from "./ValidationError";
// import config from "./config";

export default class AdminEdit extends Component {
  render() {
    let {
      image,
      description,
      height,
      width,
      availability,
      title,
      price
    } = this.props.location.state.art;

    return (
      <>
        <AdminNav />
        <Title />
        <div>
          <h2>Please edit your art here.</h2>
        </div>
        <form
          className="edit-art-form"
          onSubmit={e => {
            this.handleSubmitMeal(e);
          }}
        >
          <label htmlFor="image">Image Location:</label>
          <input
            id="image"
            className="artinput"
            defaultValue={image}
            type="text"
          />
          <br />
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            className="artinput"
            defaultValue={title}
            type="text"
          />
          <br />
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            className="artinput"
            defaultValue={description}
            type="text"
          />
          <br />
          <p className="matchFont">Dimensions:</p>
          <label className="dimLabel" htmlFor="height">
            Height:
          </label>
          <input
            id="height"
            className="artinput dimInput"
            defaultValue={height}
            type="text"
          />
          <span>inches</span>
          <br />
          <label className="dimLabel" htmlFor="width">
            Width:
          </label>
          <input
            id="width"
            className="artinput dimInput"
            defaultValue={width}
            type="text"
          />
          <span>inches</span>
          <br />
          <label className="priceLabel" htmlFor="price">
            Price:
          </label>
          <span className="priceSpan">$</span>
          <input
            id="image"
            className="artinput priceInput"
            defaultValue={price}
            type="text"
          />
          <br />
          <label htmlFor="availability">Availability:</label>
          <select
            id="availability"
            name="availability"
            defaultValue={availability}
          >
            <option value="available">Available</option>
            <option value="pending">Sale Pending</option>
            <option value="sold">Sold</option>
          </select>
        </form>

        <button
          type="submit"
          className="submitBtn"
          // disabled={!this.state.nameValid}
        >
          Submit Changes
        </button>

        <button
          type="delete"
          id="bigDeleteBtn"
          className="submitBtn"
          // onClick={() => {
          //   this.handleDeleteMeal(mealid, rotation);
          // }}
        >
          Delete
        </button>
        <button
          type="button"
          className="cancel-btn"
          // onClick={() => {
          //   this.handleDeleteMeal(mealid, rotation);
          // }}
        >
          Cancel
        </button>
      </>
    );
  }
}
