import React from "react";
import { FaCheck, FaMinus, FaRupeeSign } from "react-icons/fa";

function Pricing() {
  return (
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
  );
}

export default Pricing;
