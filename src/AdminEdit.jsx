import React, { Component } from "react";
import "./style.css";
import Title from "./Title";
import ApiContext from "./ApiContext";
import AdminNav from "./AdminNav";
import ValidationError from "./ValidationError";
import config from "./config";
import { Link } from "react-router-dom";

export default class AdminEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artid: "",
      title: "",
      description: "",
      height: "",
      width: "",
      availability: "",
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
    let image = this.state.image.trim();
    let description = this.state.description.trim();
    let height = this.state.height.trim();
    let width = this.state.width.trim();
    let availability = this.state.availability;
    let price = this.state.price.trim();
    const newArt = {
      title: title,
      image: image,
      description: description,
      height: height,
      width: width,
      availability: availability,
      price: price
    };
    let { artid } = this.state;
    fetch(`${config.API_ENDPOINT}/art/${artid}`, {
      method: "PATCH",
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
        this.context.editArt(data);
      })
      .then(data => {
        this.props.history.push("/admin/art");
        return data;
      })

      .catch(error => {
        console.error({ error });
      });
  };

  handleDeleteArt = artid => {
    fetch(`${config.API_ENDPOINT}/art/${artid}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e));
        return res.json();
      })
      .then(data => {
        this.context.deleteArt(artid);
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

  componentDidMount() {
    let {
      artid,
      image,
      description,
      height,
      width,
      availability,
      title,
      price
    } = this.props.location.state.art;
    this.setState({
      artid,
      image,
      description,
      height,
      width,
      availability,
      title,
      price
    });
  }

  uploadFile = (file, i) => {
    var url = "https://api.imgur.com/3/upload";
    var formData = new FormData();

    formData.append("upload_preset", "ujpu6gyk");
    formData.append("file", file);
    let clientid = "0dce484c6ed452c";

    fetch(`${url}`, {
      method: "POST",
      headers: {
        Authorization: "Client-ID " + clientid,
        "content-type": "formdata"
      },
      body: formData
    })
      .then(res => {
        console.log(res);
      })

      .catch(error => {
        console.error({ error });
      });
  };
  render() {
    let {
      artid,
      image,
      description,
      height,
      width,
      availability,
      title,
      price
    } = this.state;
    let dropArea = document.getElementById("drop-area");

    if (dropArea) {
      ["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
        dropArea.addEventListener(eventName, this.preventDefaults, false);
        document.body.addEventListener(eventName, this.preventDefaults, false);
      });

      // Highlight drop area when item is dragged over it
      ["dragenter", "dragover"].forEach(eventName => {
        dropArea.addEventListener(eventName, this.highlight, false);
      });
      ["dragleave", "drop"].forEach(eventName => {
        dropArea.addEventListener(eventName, this.unhighlight, false);
      });

      // Handle dropped files
      dropArea.addEventListener("drop", this.handleDrop, false);

      // ************************ Drag and drop ***************** //

      this.preventDefaults = e => {
        console.log("default area found", e);

        e.preventDefault();
        e.stopPropagation();
      };

      this.highlight = e => {
        console.log("highlighting");
        dropArea.classList.add("highlight");
      };

      this.unhighlight = e => {
        dropArea.classList.remove("highlight");
      };

      this.handleDrop = e => {
        var dt = e.dataTransfer;
        var files = dt.files;

        this.handleFiles(files);
      };

      this.handleFiles = files => {
        this.uploadFile(files);
      };
    }
    return (
      <>
        <AdminNav />
        <Title />
        <div>
          <h2>Please edit your art here.</h2>
        </div>
        <div id="drop-area">
          <form className="my-form">
            <p>
              Upload image file with the button or by dragging and dropping
              images onto the dashed region
            </p>
            <input
              type="file"
              id="fileElem"
              multiple
              accept="image/*"
              onChange={this.handleFiles}
            />
            <label className="button" htmlFor="fileElem">
              Select image file
            </label>
          </form>
          <progress id="progress-bar" max="100" value="0" />
          <div id="gallery"></div>
        </div>
        <br />
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
            Submit Changes
          </button>
        </form>

        <button
          type="delete"
          id="bigDeleteBtn"
          className=""
          onClick={() => {
            this.handleDeleteArt(artid);
          }}
        >
          Delete
        </button>
        <Link
          to={{
            pathname: "/admin/art"
          }}
        >
          <button type="button" className="cancel-btn">
            Cancel
          </button>
        </Link>
      </>
    );
  }
}
