import React, { Component } from "react";

export default class ShoesDetail extends Component {
  render() {
    console.log(this.props)
    const {image, name, shortDescription} = this.props.detailGiay
    return (
      <div>
        <div className="card text-start">
          <img className="card-img-top" src={image} alt="Title" />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{shortDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}
