import React from "react";
import { FiCheck } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import Helmet from "../component/common/Helmet";
import ContactOne from "../elements/contact/ContactOne";
import ServiceList from "../elements/service/ServiceList";
import Slider from "react-slick";

const heroSliders = [
  {
    images: "/herobg/bg1.jpg",
    title: "Law made Easier",
    // subTitle: "As Like A Friend.",
    text: [
      "Get connected to best lawyer based on your needs.",
      "Schedule when it works for you - as early as today.",
      "Chat, pay, meet and resolve all through one platform.",
    ],
    button: "Contact us now",
  },
  {
    images: "/herobg/bg2.jpg",
    title: "Best laywers at your fingertip",
    // subTitle: "As Like A Friend.",
    text: [
      "Ability to be anonymous.",
      "Describe, convert and resolve all at your convenience.",
      "Save time and money that is precious to you.",
    ],
    button: "Contact us now",
  },
  {
    images: "/herobg/bg3.jpg",
    title: "Get problem resolved before ",
    subTitle: "the next sunrise.",
    text: [
      "Digitaly enter your problem and get connect to the best one.",
      "Save your fuel, time, money and brain.",
      "Easy access to top qualified lawyers.",
    ],
    button: "Contact us now",
  },
];

function PortfolioLanding() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // nextArrow: <SlickArrowRight />,
    // prevArrow: <SlickArrowLeft />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  let title = "Why you should choose me",
    description = "I am Villy";
  return (
    <div>
      <Helmet pageTitle="villy" />
      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

      {/* Start Slider Area   */}

      {/* <div id="home" className="fix">
        <div
          style={{
            backgroundImage: `url("/herobg/bg1.jpg")`,
            backgroundRepeat: "no-repeat",
          }}
          className="hero_container"
        >
          <div className="content_container">
            <div className="detail_wrap">
              <h1 className="hero_heading">
                Get <span>problem resolved</span> before the next sunrise.
              </h1>
              <p className="hero_subdetails">
                <span>
                  Digitally enter your problem and get connect to the best one.{" "}
                </span>
                <span> Easy access to top qualified lawyers. </span>
                <span> Save your fuel, time, money and brain. </span>
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div id="home" className="fix">
        <div className="hero_section">
          <Slider {...settings}>
            {heroSliders.map((slider, i) => (
              <div key={i}>
                <div
                  style={{
                    backgroundImage: `url("${slider.images}")`,
                    backgroundRepeat: "no-repeat",
                  }}
                  className="slide-wrapper"
                >
                  <div className="slide_container">
                    <h2>
                      <span>{slider.title}</span> <span>{slider.subTitle}</span>
                    </h2>

                    <p>
                      {slider.text.map((data) => (
                        <>
                          <span className="text">{data}</span>
                          <br />
                        </>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* End Slider Area   */}

      {/* Start About Area */}
      <div id="about" className="fix">
        <div className="about-area ptb--120 bg_color--5">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/about/lawyer.jpg"
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <span className="subtitle">{description}</span>
                      <h2 className="title">{title}</h2>
                      {/* <p className="description mt_dec--20">{description}</p> */}
                    </div>

                    <div className="about_details">
                      <div className="details_wrap">
                        <h4>transport pricing</h4>
                        <p>
                          see fixed price before you pay a rupee. no hidden
                          charges
                        </p>
                      </div>
                      <div className="details_wrap">
                        <h4>exports only</h4>
                        <p>
                          Our lawyers are well versed and experts in their jobs.
                        </p>
                      </div>
                      <div className="details_wrap">
                        <h4>24 X 7 at your service</h4>
                        <p>
                          Whether it is 5 in morning or in noon, our doors are
                          always open for you
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End About Area */}

      {/* Start Service Area  */}
      <div id="service" className="fix">
        <div className="service-area creative-service-wrapper pb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30 mb_sm--0">
                  <span className="subtitle">Area of Practice</span>
                  <h2 className="title textWhite">How Can We Help You</h2>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceList
                  item="6"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Area  */}

      {/* Start Pricing Tbale Area  */}
      <div
        id="price"
        className="rn-pricing-table-area pt--120 pb--120 bg_color--5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title service-style--3 text-center mb--25 mb_sm--0">
                <span className="subtitle">My Budget Plan</span>
                <h2 className="title">Pricing Plan</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, <br /> but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12 mt--30">
              <div className="rn-pricing">
                <div className="pricing-table-inner">
                  <div className="pricing-header">
                    <h4 className="title">Free</h4>
                    <div className="pricing">
                      <span className="price">$45</span>
                      <span className="subtitle">USD Per Month</span>
                    </div>
                  </div>
                  <div className="pricing-body">
                    <ul className="list-style--1">
                      <li>
                        <FiCheck /> 5 PPC Campaigns
                      </li>
                      <li>
                        <FiCheck /> Digital Marketing
                      </li>
                      <li>
                        <FiCheck /> Marketing Agency
                      </li>
                      <li>
                        <FiCheck /> Seo Friendly
                      </li>
                      <li>
                        <FiCheck /> UI/UX designs
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <a className="rn-btn" href="#pricing">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12 mt--30">
              <div className="rn-pricing active">
                <div className="pricing-table-inner">
                  <div className="pricing-header">
                    <h4 className="title">Business</h4>
                    <div className="pricing">
                      <span className="price">$45</span>
                      <span className="subtitle">USD Per Month</span>
                    </div>
                  </div>
                  <div className="pricing-body">
                    <ul className="list-style--1">
                      <li>
                        <FiCheck /> 5 PPC Campaigns
                      </li>
                      <li>
                        <FiCheck /> Digital Marketing
                      </li>
                      <li>
                        <FiCheck /> Marketing Agency
                      </li>
                      <li>
                        <FiCheck /> Seo Friendly
                      </li>
                      <li>
                        <FiCheck /> UI/UX designs
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <a className="rn-btn" href="#pricing">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12 mt--30">
              <div className="rn-pricing">
                <div className="pricing-table-inner">
                  <div className="pricing-header">
                    <h4 className="title">Advanced</h4>
                    <div className="pricing">
                      <span className="price">$99</span>
                      <span className="subtitle">USD Per Month</span>
                    </div>
                  </div>
                  <div className="pricing-body">
                    <ul className="list-style--1">
                      <li>
                        <FiCheck /> 5 PPC Campaigns
                      </li>
                      <li>
                        <FiCheck /> Digital Marketing
                      </li>
                      <li>
                        <FiCheck /> Marketing Agency
                      </li>
                      <li>
                        <FiCheck /> Seo Friendly
                      </li>
                      <li>
                        <FiCheck /> UI/UX designs
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <a className="rn-btn" href="#pricing">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End PRicing Table Area  */}
          </div>
        </div>
      </div>
      {/* End Pricing Tbale Area  */}

      {/* Start Contact Area */}
      <div id="contact" className="fix">
        <div className="rn-contact-area pb--120">
          <ContactOne />
        </div>
      </div>
      {/* End Contact Area */}

      <FooterTwo />
    </div>
  );
}

export default PortfolioLanding;
