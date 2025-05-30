import React, { useState } from 'react'
import PortfolioCard from './PortfolioCard';
import '../../styles/Portfolio/PortfolioBody.scss'
import myPortfolio from '../../assets/Portfolio.png'

const WebDevelopment = () => {
    const [image] = useState([
        {
            id: 1,
            imgsrc: myPortfolio,
            title: 'My Portfolio',
            content: 'Use pure css',
            link: 'https://x.com'
        },
        {
            id: 2,
            imgsrc: myPortfolio,
            title: 'My Portfolio',
            content: 'Use pure css',
            link: 'https://x.com'
        }
    ]);

    return (
        <div className='portfolio-body-container'>
            {image && image.length > 0 && image.map((item) => (
                <PortfolioCard
                    key={item.id}
                    imgsrc={item.imgsrc}
                    title={item.title}
                    content={item.content}
                    link={item.link}
                />
            ))}
        </div>
    )
}

export default WebDevelopment;