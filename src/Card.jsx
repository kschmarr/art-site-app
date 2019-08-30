import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { image, description, dims, title, price } = this.props.art;
    return (
      <section className="card">
        <img
          src={require(`${image}`)}
          alt={title}
          onClick={() => {
            // document.getElementById("mobile-hidden").toggleClass("mobile-hidden");
          }}
          className="art-image"
        />
        <div id="mobile-hidden" className="mobile-hidden">
          <h3>{title}</h3>
          <p className="description">{description}</p>
          <p>{dims}</p>
          <p>${price}</p>
        </div>
      </section>
    );
  }
}
