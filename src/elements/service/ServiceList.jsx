import React, { Component } from "react";
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";

const ServiceList = [
  {
    icon: <FiCast />,
    title: "Family Law",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of",
  },
  {
    icon: <FiLayers />,
    title: "Personal Injury",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of",
  },
  {
    icon: <FiUsers />,
    title: "Business Law",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of",
  },
  {
    icon: <FiMonitor />,
    title: "Criminal Law",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of",
  },
  {
    icon: <FiUsers />,
    title: "Education Law",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of",
  },
  {
    icon: <FiMonitor />,
    title: "Real Estate Law",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of",
  },
];

class ServiceThree extends Component {
  render() {
    const { column } = this.props;
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="row service-main-wrapper">
          {ServiceContent.map((val, i) => (
            <div className={`${column}`} key={i}>
              <a href="/service-details">
                <div className="service service__style--2 text-left bg-gray">
                  <div className="icon">{val.icon}</div>
                  <div className="content">
                    <h3 className="title">{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceThree;
