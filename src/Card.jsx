import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDiv: this.props.id
    };
  }
  componentDidMount() {
    let showhide = () => {
      let divID = "div" + this.props.id;
      let divToToggle = document.getElementById(divID);
      divToToggle.classList.toggle("mobile-hidden");
    };
    document.getElementById(this.props.id).addEventListener("click", showhide);
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
        <img src={image} alt={title} className="art-image" />
        <div id={"div" + this.props.id} className="mobile-hidden art-div">
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
