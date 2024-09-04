import React from 'react'
import myPortfolio from '../../assets/Portfolio.png'
import '../../styles/Portfolio/PortfolioCard.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from '@fortawesome/free-solid-svg-icons';
library.add(faEye);
class PortfolioCard extends React.Component {
    render() {
        const { imgsrc, title, content,link } = this.props

        return (
            <div className='portfolio-card-container'>
                <div className='p-card-img-container'>
                    <img className='p-card-img' src={imgsrc} alt="my-portfolio" />
                </div>
                <h1 className='p-card-h1'>{title}</h1>
                <p className='p-card-p'>{content}</p>
                <div className="p-view">
                    <div><a href={link}>
                        <FontAwesomeIcon icon={faEye} />
                    </a></div>
                </div>
            </div>
        )
    }
}
export default PortfolioCard