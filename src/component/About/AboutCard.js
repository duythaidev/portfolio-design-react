import React from 'react'
import '../../styles/About/AboutCard.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCamera, faMobileScreenButton, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faFigma } from '@fortawesome/free-brands-svg-icons';
library.add(faFigma, faCamera, faMobileScreenButton, faLaptopCode);

const AboutCard = ({ iconName, title, text }) => {
  return (
    <div className="about-card flex">
      <div className="about-card-content">
        <div className="icon-container flex">
          <FontAwesomeIcon icon={iconName} />
        </div>
        <div className="about-card-text">
          <p className='title'>{title}</p>
          <p className='text'>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCard

