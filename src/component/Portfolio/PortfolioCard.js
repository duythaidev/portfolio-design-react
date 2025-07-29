import React from 'react'
import '../../styles/Portfolio/PortfolioCard.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from '@fortawesome/free-solid-svg-icons';
library.add(faEye);

const PortfolioCard = ({ imgsrc, title, content, link }) => {
    const handleOpen = () => {
        console.log("doing something");
        window.open(link, "_blank");
    }
    return (
        <div className='portfolio-card-container' onClick={handleOpen}>
            <div className='p-card-img-container'>
                <img className='p-card-img' src={imgsrc} alt="my-portfolio" />
                <div className="p-view">
                    <div>
                        <a href={link}>
                            <FontAwesomeIcon icon={faEye} />
                        </a>
                    </div>
                </div>
            </div>
            <h1 className='p-card-h1'>{title}</h1>
            <p className='p-card-p'>{content}</p>
        </div>
    )
}

export default PortfolioCard