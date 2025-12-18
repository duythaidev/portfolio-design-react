import React, { useState } from "react";
import "../../styles/Profile/Profile.scss";
import chadPicture from "../../assets/Gigachad-Transparent.png";
import Contact from "./Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagramSquare,
  faFacebookSquare,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faHome,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

interface ContactItem {
  id: number;
  iconName: IconProp;
  title: string;
  text: string;
}

const Profile: React.FC = () => {
  const [contact] = useState<ContactItem[]>([
    {
      id: 1,
      iconName: faHome,
      title: "Email",
      text: "...@gmail.com",
    },
    {
      id: 2,
      title: "Phone",
      iconName: faPhone,
      text: "123456789",
    },
    {
      id: 3,
      iconName: faCalendar,
      title: "Birthday",
      text: "MM DD, YYY",
    },
    {
      id: 4,
      iconName: faLocation,
      title: "Location",
      text: "VN",
    },
  ]);

  return (
    <aside className="aside-content flex-column-center">
      <div className="img-container">
        <img src={chadPicture} alt="" />
      </div>
      <h1>Nguyen D. Thai</h1>
      <div className="job">
        <p>Web developer</p>
      </div>
      <div className="br-line"></div>
      {contact &&
        contact.length > 0 &&
        contact.map((e) => (
          <Contact
            key={e.id}
            iconName={e.iconName}
            title={e.title}
            text={e.text}
          />
        ))}
      <div className="icons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/"
        >
          <FontAwesomeIcon icon={faFacebookSquare as IconProp} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.x.com/">
          <FontAwesomeIcon icon={faSquareXTwitter as IconProp} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/"
          style={{
            color: "yellow",
          }}
        >
          <FontAwesomeIcon icon={faInstagramSquare as IconProp} />
        </a>
      </div>
    </aside>
  );
};

export default Profile;
