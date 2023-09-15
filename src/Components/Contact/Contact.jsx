import React, { Component } from 'react'
import "./contact.css"
export default class Contact extends Component {

  inputHandler(){
    console.log("input");
  }
  render() {
    return (
      <div className='mb-4'>
        <div className="container pt-3">

                <div
           
            className="text-center pt-4 title"
          >
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
              contact component
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

          <form  className="w-50 p-3 mx-auto mt-5">
            <label  for="userName" className="position-relative top-0 top">userName : </label>
            <input onInput={this.inputHandler} id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched"/>
            <label  for="userAge" className="position-relative top-0 top">userAge : </label>
            <input  id="userAge" type="text" placeholder="userAge" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched"/>
            <label  for="userEmail" className="position-relative top-0 top">userEmail : </label>
            <input  id="userEmail" type="text" placeholder="userEmail" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched"/>
            <label  for="userPassword" className="position-relative top-0 top">userPassword : </label>
            <input  id="userPassword" type="text" placeholder="userPassword" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched"/>
            <button type='button' className="btn mt-4 text-white sbtn"> send Message </button>
          </form>
        </div>

      </div>
    )
  }
}
