import React, { Component } from "react";
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import AccessibilityTwoToneIcon from "@mui/icons-material/AccessibilityTwoTone";
import AssignmentIndTwoToneIcon from "@mui/icons-material/AssignmentIndTwoTone";
import HomeWorkTwoToneIcon from "@mui/icons-material/HomeWorkTwoTone";
import CastForEducationTwoToneIcon from "@mui/icons-material/CastForEducationTwoTone";

const ServiceList = [
  {
    icon: <PeopleAltTwoToneIcon className="serviceIcons" />,
    title: "Family Law",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of",
  },
  {
    icon: <PermIdentityTwoToneIcon className="serviceIcons" />,
    title: "Personal Injury",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of",
  },
  {
    icon: <AccessibilityTwoToneIcon className="serviceIcons" />,
    title: "Business Law",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of",
  },
  {
    icon: <AssignmentIndTwoToneIcon className="serviceIcons" />,
    title: "Criminal Law",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of",
  },
  {
    icon: <HomeWorkTwoToneIcon className="serviceIcons" />,
    title: "Education Law",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of",
  },
  {
    icon: <CastForEducationTwoToneIcon className="serviceIcons" />,
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
