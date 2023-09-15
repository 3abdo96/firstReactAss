import React, { Component } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
export default class Navbar extends Component {

    render() {
        return (
            
        
      <>
      <nav className="navbar navbar-expand-lg  py-4 bg-nav text-white">
  <div className="container">
    <Link className="navbar-brand text-white fs-2 fw-bolder text-uppercase" to="/startFramework">Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white fw-bold mt-3 mt-md-0 px-2" aria-current="page" to="about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fw-bold mt-3 mt-md-0 px-2" to="portfolio">PORTFOLIO</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link text-white fw-bold mt-3 mt-md-0 px-2" to="contact">CONTACT</Link>
        </li>
      
       
      </ul>
     
    </div>
  </div>
</nav>
      </>
    )
  }
}
