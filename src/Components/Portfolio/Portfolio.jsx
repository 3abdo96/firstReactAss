import React, { Component } from "react";
import Card from "../Card/Card";
import "./portfolio.css"

export default class Portfolio extends Component {
  allImages = [
    {
      source:
        "https://routeegy.github.io/startFramework/assets/images/poert1.png",
    },
    {
      source:
        "https://routeegy.github.io/startFramework/assets/images/port2.png",
    },
    {
      source:
        "https://routeegy.github.io/startFramework/assets/images/port3.png",
    },
    {
      source:
        "https://routeegy.github.io/startFramework/assets/images/poert1.png",
    },
    {
      source:
        "https://routeegy.github.io/startFramework/assets/images/port2.png",
    },
    {
      source:
        "https://routeegy.github.io/startFramework/assets/images/port3.png",
    },
  ];

  render() {
    return (
      <>
      <div className="mb-4 ">
        <div className="content pt-4">
 <div
           
            className="text-center pt-4 title"
          >
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
              portfolio component
            </h2>
            <div
             
              className="d-flex align-items-center justify-content-center mb-3"
            >
              <div
               
                className="line me-3"
              ></div>
              <i className="fa-solid fa-star"></i>
              <div
               
                className="line ms-3"
              ></div>
            </div>
          </div>
        <div className="container">
          <div className="row g-5">
            {this.allImages.map((image, index) => {
              return <Card key={index} img={image} />;
            })}
          </div>
        </div>
        </div>
        </div>
      </>
    );
  }
}
