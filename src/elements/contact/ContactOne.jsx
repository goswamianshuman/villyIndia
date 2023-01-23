import React, { Component } from "react";
import FormStyle from "./FormStyle";

class ContactOne extends Component {
  render() {
    return (
      <div className="contact-form--1 pt--120">
        <div className="container">
          <div className="mainContainer">
            <div className="contactFormLeft">
              <FormStyle />
            </div>
            <div className="contactFormRight section-title">
              <span className="subtitle ">For Our Honorabel Clients</span>
              <h2 className="title">Free Consulting</h2>
              <p className="color-5">
                Call us 24/7 at (888)123-4567 or fill out the form.
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                able English.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactOne;
