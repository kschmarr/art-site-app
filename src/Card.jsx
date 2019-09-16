import React, { Component } from "react";

export default class Card extends Component {
  componentDidMount() {
    let divID = "div" + this.props.id;

    let showhide = () => {
      document.getElementById(divID).classList.toggle("hidden");
    };
    document.getElementById(this.props.id).addEventListener("click", showhide);
    if (this.props.id % 2 === 0) {
      document.getElementById(divID).classList.add("art-div-right");
    } else {
      document.getElementById(divID).classList.toggle("art-div-left");
    }
  }

  render() {
    const {
      image,
      description,
      height,
      width,
      availability,
      title,
      price
    } = this.props.art;

    return (
      <section id={this.props.id} className="card">
        <p>{title}</p>
        <img src={image} alt={title} className="art-image" />
        <div id={"div" + this.props.id} className="hidden art-div">
          <h3>{title}</h3>
          <p className="description">{description}</p>
          <p>
            {availability.charAt(0).toUpperCase() + availability.substring(1)}
          </p>
          <p>Height: {height}"</p>
          <p>Width: {width}"</p>
          <p>${price}</p>
        </div>
      </section>
    );
  }
}
