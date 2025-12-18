import React from "react";
import "../../styles/Profile/Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ContactProps {
  iconName: IconProp;
  title: string;
  text: string;
}

const Contact: React.FC<ContactProps> = ({ iconName, title, text }) => {
  return (
    <div className="contact flex">
      <div className="icon-container flex">
        <FontAwesomeIcon icon={iconName} />
      </div>
      <div className="contact-content">
        <p className="title">{title}</p>
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default Contact;
