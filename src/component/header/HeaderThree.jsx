/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */

import React, { Component } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiX, FiMenu } from "react-icons/fi";
import Scrollspy from "react-scrollspy";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaTwitter />, link: "https://twitter.com/" },
];
class HeaderThree extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.stickyHeader = this.stickyHeader.bind(this);

    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }
  menuTrigger() {
    window.document
      .querySelector(".header-wrapper")
      .classList.toggle("menu-open");
  }

  CLoseMenuTrigger() {
    window.document
      .querySelector(".header-wrapper")
      .classList.remove("menu-open");
  }

  stickyHeader() {}
  render() {
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 100) {
        this.window.document
          .querySelector(".header--fixed")
          .classList.add("sticky");
        this.window.document.querySelector(".closeTrigger").style.top =
          "top: 15px";
        this.window.document.querySelector(".mainmenu").style.color = "white";
      } else {
        this.window.document
          .querySelector(".header--fixed")
          .classList.remove("sticky");
        this.window.document.querySelector(".closeTrigger").style.top =
          "top: 30px";
      }
    });
    var elements = window.document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
    const { logo, color = "default-color" } = this.props;
    let logoUrl;
    if (logo === "light") {
      logoUrl = (
        <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />
      );
    } else if (logo === "dark") {
      logoUrl = (
        <img src="/assets/images/logo/villy.png" alt="Digital Agency" />
      );
    } else if (logo === "symbol-dark") {
      logoUrl = (
        <img
          src="/assets/images/logo/logo-symbol-dark.png"
          alt="Digital Agency"
        />
      );
    } else if (logo === "symbol-light") {
      logoUrl = (
        <img
          src="/assets/images/logo/logo-symbol-light.png"
          alt="Digital Agency"
        />
      );
    } else {
      logoUrl = <img src="/assets/images/logo/villy.png" alt="villy" />;
    }

    return (
      <header className={`header-area header-style-two header--fixed ${color}`}>
        <div className="header-wrapper">
          <div className="header-left d-flex align-items-center">
            <div className="logo">
              <a href={this.props.homeLink}>
                <img src="/assets/images/logo/villy.png" alt="villy" />
              </a>
            </div>
            <nav className="mainmenunav d-lg-block ml--50">
              <Scrollspy
                className="mainmenu"
                items={["home", "about", "service", "price", "contact"]}
                currentClassName="is-current"
                offset={-200}
              >
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#service">Service</a>
                </li>
                <li>
                  <a href="#price">Price</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </Scrollspy>
            </nav>
          </div>
          <div className="header-right ">
            {/* <div className="social-share-inner d-none d-sm-block">
              <ul className="social-share social-style--2 d-flex color-theme justify-content-start liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`}>{val.Social}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="header-btn">
              <a className="btn-default btn-normal " target="_blank" href="#">
                <span>get started</span>
              </a>
            </div> */}
            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
              <a onClick={this.menuTrigger} className="menutrigger text-white">
                <FiMenu />
              </a>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <a
                onClick={this.CLoseMenuTrigger}
                className="closeTrigger text-close"
              >
                <FiX />
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default HeaderThree;
