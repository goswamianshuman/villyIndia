import React from "react";
import { FaCheck, FaMinus, FaRupeeSign } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";

function Pricing() {
  return (
    <>
      <div className="pricing_container">
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
                  <span className="color5">199 /-</span> <span>only</span>
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
                    <FaRupeeSign /> 199 /-
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
      </div>
    </>
  );
}

export default Pricing;
