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
      dims,
      title,
      price
    } = this.props.location.state.art;

    return (
      <>
        <AdminNav />
        <Title />
        <div>
          <h1>Please edit your art here.</h1>
        </div>
        <form className="edit-art-form">
          <label htmlFor="image">Image Location:</label>
          <input className="artinput" defaultValue={image} type="text" />
          <br />
          <label htmlFor="title">Title:</label>
          <input className="artinput" defaultValue={title} type="text" />
          <br />
          <label htmlFor="description">Description:</label>
          <input className="artinput" defaultValue={description} type="text" />
          <br />
          <label htmlFor="dimensions">Dimensions:</label>
          <input className="artinput" defaultValue={dims} type="text" />
          <br />
          <label htmlFor="price">Price:</label>
          <input className="artinput" defaultValue={price} type="text" />
          <br />
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
          Sold! (Delete forever)
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
