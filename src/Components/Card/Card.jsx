import React, { Component } from "react";
import "./card.css"

export default class Card extends Component {
  render() {

    let images=this.props.img;
    return (
      <div className="col-lg-4 col-md-6">
        <div className="rounded-3 overflow-hidden position-relative">
          <img
            alt=""
            className="w-100 rounded-3"
            src={images.source}
          />
          <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
      </div>
    );
  }
}
