import React from "react";
import "../../styles/About/AboutCard.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface AboutCardProps {
  iconName: IconProp;
  title: string;
  text: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ iconName, title, text }) => {
  return (
    <div className="about-card flex">
      <div className="about-card-content">
        <div className="icon-container flex">
          <FontAwesomeIcon icon={iconName} />
        </div>
        <div className="about-card-text">
          <p className="title">{title}</p>
          <p className="text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
