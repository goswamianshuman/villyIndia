import React, { useState } from "react";
import { FaCheck, FaMinus, FaRupeeSign, FaArrowDown } from "react-icons/fa";
import { FiCheck, FiX } from "react-icons/fi";

function Pricing() {
  const [open, setOpen] = useState(false);

  const opendetails = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <>
      {/* <div className="pricing_container">
        <table className="pricing_table">
          <thead>
            <tr>
              <th></th>
              <th>
                <p>personal conceltency</p>
                <p>
                  <span className="rupee">
                    <FaRupeeSign />
                  </span>
                  <span className="color5">299 /-</span> <span>only</span>
                </p>
                <button className="select_price">select</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="service_name">
                <p>service one</p>
              </td>
              <td className="service_avt">
                <p className="check_right">
                  <FaCheck />
                </p>
              </td>
            </tr>
            <tr>
              <td className="service_name">
                <p>service two</p>
              </td>
              <td className="service_avt">
                <p className="check_right">
                  <FaCheck />
                </p>
              </td>
            </tr>
            <tr>
              <td className="service_name">
                <p>service three</p>
              </td>
              <td className="service_avt">
                <p className="check_right">
                  <FaCheck />
                </p>
              </td>
            </tr>
            <tr>
              <td className="service_name">
                <p>service four</p>
              </td>
              <td className="service_avt">
                <p className="check_wrong">
                  <FaMinus />
                </p>
              </td>
            </tr>
            <tr>
              <td className="service_name">
                <p>service four</p>
              </td>
              <td className="service_avt">
                <p className="check_wrong">
                  <FaMinus />
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pricing_container_two">
        <div className="col-lg-4 col-md-6 col-12 mt--30">
          <div className="rn-pricing active">
            <div className="pricing-table-inner">
              <div className="pricing-header">
                <h4 className="title">personal conceltency</h4>
                <div className="pricing">
                  <span className="pricing_detail">
                    <FaRupeeSign /> 299 /-
                  </span>
                  <span className="subtitle">only</span>
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
      </div> */}

      {/* <div className="price_container_three">
        <div className="container">
          <div className="detail-block">
            <div className="detail-container">
              <div className="leftblock">
                <h2>personal conceltency</h2>
                <p>
                  <span>299 /-</span> <span>only</span>
                </p>
              </div>

              <div className="rightblock">
                <button className="btn-default btn-border size-sm">
                  select
                </button>
              </div>
            </div>
            <div className="bottom-block">
              {open && (
                <ul>
                  <li>service 1</li>
                  <li>service 2</li>
                  <li>service 3</li>
                  <li>service 4</li>
                  <li>service 5</li>
                </ul>
              )}
              <p onClick={opendetails}>{open ? <FiX /> : <FaArrowDown />}</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="price_container_four">
        <div className="container">
          <div className="detailFour">
            <div className="upperContainer">
              <p className="heading">Personal Conceltency</p>
              <h4 className="color-5">
                <span>300 /-</span> <span>Only</span>
              </h4>
            </div>

            <div className="bottomContainer">
              <div className="bottomwrap">
                <p>our offerings :</p>
                <ul>
                  <li>talk in your language (english / hindi)</li>
                  <li>Secure & Confidential</li>
                  <li>On Call / Chat / Email Support</li>
                  <li>Dedicated Lawyer</li>
                </ul>
              </div>
              <div className="bottomRight">
                <button className="btn-default btn-border size-md">
                  select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="price_container_five">
        <div className="container">
          <div className="detailFive">
            <div className="upperContainer2">
              <p className="heading">Personal Conceltency</p>
              <h4 className="color-5">
                <span>300 /-</span> <span>Only</span>
              </h4>
            </div>

            <div className="bottomContainer2">
              <div className="bottomwrap">
                <p>our offerings :</p>
                <ul>
                  <li>
                    talk in your language (english / hindi) <FaCheck />
                  </li>
                  <li>
                    Secure & Confidential <FaCheck />
                  </li>
                  <li>
                    On Call / Chat / Email Support <FaCheck />
                  </li>
                  <li>
                    Dedicated Lawyer <FaCheck />
                  </li>
                </ul>
              </div>
              <div className="bottomRight">
                <button className="btn-default btn-border size-md">
                  select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
