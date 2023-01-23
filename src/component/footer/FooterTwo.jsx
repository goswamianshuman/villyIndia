import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaTwitter />, link: "https://twitter.com/" },
];

const FooterTwo = () => {
  return (
    <div className="footer-style-2 ptb--30 bg_color--6">
      <div className="container">
        <div className="footerWrapper">
          <div className="topFooter">
            <div className="infofooter">
              <img
                src="/assets/images/logo/villyName.png"
                alt=""
                className="logo"
              />
              <p className="infodetail">
                We are a team of interesting, creative, hard-working people that
                believe in going all out to fulfill your dreams and make sure
                that quality should be tight and experience should be stellar.
                overtime we have ventured into increasingly challenging products
                and services, upgrading ourselves to stay ahead in the game.
              </p>
            </div>
            <div className="infoWrap">
              <div className="practise-area">
                <h2 className="practise-head">Practice Area</h2>
                <ul>
                  <li>
                    <a href="#">family law</a>
                  </li>
                  <li>
                    <a href="#">criminal law</a>
                  </li>
                  <li>
                    <a href="#">personal injury</a>
                  </li>
                  <li>
                    <a href="#">real estate law</a>
                  </li>
                  <li>
                    <a href="#">business law</a>
                  </li>
                </ul>
              </div>
              <div className="contact-us-info">
                <h2 className="contact-head">contact us</h2>
                <p>
                  Head Office Address Incuspaze, Unit 408, 4th Floor, Apollo
                  Premier Building, Vijay Nagar Square, Indore, India
                </p>
                <p>Phone: +917022249728</p>
                <p>Email: villyindia5@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="bottomFooter">
            <div className="privacy">
              <span>Privacy Policy | © 2023 Villy. All rights reserved</span>
            </div>
            {/* <div className="social">
              <div className="socialwrap">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterTwo;
