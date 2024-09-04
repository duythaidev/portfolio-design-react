import React from 'react'
import PortfolioCard from './PortfolioCard';
import '../../styles/Portfolio/PortfolioBody.scss'
import myPortfolio from '../../assets/Portfolio.png'
class WebDesign extends React.Component {
    state = {
        image: [
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
            },

        ]
    }
    render() {
        const { image } = this.state
        return (
            <div className='portfolio-body-container' >
                {image && image.length > 0 && image.map((item, index) => {
                    return (
                        <PortfolioCard
                            key={item.id}
                            imgsrc={item.imgsrc}
                            title={item.title}
                            content={item.content}
                            link={item.link}>
                        </PortfolioCard>
                    )
                })}
            </div>
        )
    }
}
export default WebDesign;