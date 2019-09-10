import React, { Component } from "react";
import Title from "./Title";
import ApiContext from "./ApiContext";
import AdminNav from "./AdminNav";
import ValidationError from "./ValidationError";
import config from "./config";
import { Link } from "react-router-dom";

export default class AdminAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      height: "",
      width: "",
      availability: "available",
      price: "",
      image: "",
      nameValid: true,
      validationMessages: {
        name: ""
      }
    };
  }

  static contextType = ApiContext;

  validateName(fieldValue) {
    const fieldErrors = { ...this.state.validationMessages };
    let hasError = false;
    if (fieldValue.trim().length === 0) {
      fieldErrors.name = "Title is required";
      hasError = true;
    } else {
      if (fieldValue.length < 3) {
        fieldErrors.name = "Title must be at least 3 characters long";
        hasError = true;
      } else {
        fieldErrors.name = "";
        hasError = false;
      }
    }

    this.setState({
      validationMessages: fieldErrors,
      nameValid: !hasError,
      title: fieldValue
    });
  }

  handleSubmitArt = e => {
    e.preventDefault();
    let title = this.state.title.trim();
    let description = this.state.description.trim();
    let height = this.state.height.trim();
    let width = this.state.width.trim();
    let availability = this.state.availability;
    let price = this.state.price.trim();
    let image = this.state.image.trim();
    const newArt = {
      title: title,
      description: description,
      height: height,
      width: width,
      availability: availability,
      price: price,
      image: image
    };

    fetch(`${config.API_ENDPOINT}/art`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newArt)
    })
      .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e));
        return res.json();
      })
      .then(data => {
        this.context.addArt(data);
      })
      .then(data => {
        this.props.history.push("/admin/art");
        return data;
      })

      .catch(error => {
        console.error({ error });
      });
  };

  handleChangeImage = event => {
    this.setState({ image: event.target.value });
  };
  handleChangeDescription = event => {
    this.setState({ description: event.target.value });
  };
  handleChangeHeight = event => {
    this.setState({ height: event.target.value });
  };
  handleChangeWidth = event => {
    this.setState({ width: event.target.value });
  };
  handleChangeAvailability = event => {
    this.setState({ availability: event.target.value });
  };
  handleChangeTitle = event => {
    this.setState({ title: event.target.value });
  };
  handleChangePrice = event => {
    this.setState({ price: event.target.value });
  };

  render() {
    let {
      image,
      description,
      height,
      width,
      availability,
      title,
      price
    } = this.state;
    return (
      <>
        <AdminNav />
        <Title />
        <div>
          <h2>Please edit your art here.</h2>
        </div>
        <form
          className="edit-art-form"
          id="edit-form"
          onSubmit={e => {
            this.handleSubmitArt(e);
          }}
        >
          <label htmlFor="image">Image Location:</label>
          <input
            id="image"
            name="image"
            className="artinput"
            value={image}
            type="text"
            onChange={this.handleChangeImage}
          />
          <br />
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            name="title"
            className="artinput"
            value={title}
            type="text"
            onChange={e => this.validateName(e.target.value)}
          />
          <ValidationError
            hasError={!this.state.nameValid}
            message={this.state.validationMessages.name}
          />
          <br />
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            name="description"
            className="artinput"
            value={description}
            type="text"
            onChange={this.handleChangeDescription}
          />
          <br />
          <p className="matchFont">Dimensions:</p>
          <label className="dimLabel" htmlFor="height">
            Height:
          </label>
          <input
            id="height"
            name="height"
            className="artinput dimInput"
            value={height}
            type="text"
            onChange={this.handleChangeHeight}
          />
          <span>inches</span>
          <br />
          <label className="dimLabel" htmlFor="width">
            Width:
          </label>
          <input
            id="width"
            name="width"
            className="artinput dimInput"
            value={width}
            type="text"
            onChange={this.handleChangeWidth}
          />
          <span>inches</span>
          <br />
          <label className="priceLabel" htmlFor="price">
            Price:
          </label>
          <span className="priceSpan">$</span>
          <input
            id="price"
            name="price"
            className="artinput priceInput"
            value={price}
            type="text"
            onChange={this.handleChangePrice}
          />
          <br />
          <label htmlFor="availability">Availability:</label>
          <select
            id="availability"
            name="availability"
            value={availability}
            onChange={this.handleChangeAvailability}
          >
            <option value="available">Available</option>
            <option value="pending">Sale Pending</option>
            <option value="sold">Sold</option>
          </select>
          <button
            type="submit"
            className="submitBtn"
            disabled={!this.state.nameValid}
          >
            Submit
          </button>
        </form>

        <Link
          to={{
            pathname: "/admin/art"
          }}
        >
          <button type="button" className="cancel-btn-add">
            Cancel
          </button>
        </Link>
      </>
    );
  }
}
