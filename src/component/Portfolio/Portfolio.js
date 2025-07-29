import React, { useState } from 'react'
import '../../styles/Portfolio/Portfolio.scss'
import PortfolioNavBar from './PortfolioNavBar';
import Applications from './Applications';
import WebDevelopment from './WebDevelopment';
import All from './All';
import { Routes, Route, NavLink } from 'react-router-dom';
import WebDesign from './WebDesign';
import PortfolioCard from './PortfolioCard';
import '../../styles/Portfolio/PortfolioBody.scss'
import { hms, kitchen, kitchenapp, myPortfolio, restaurantmanagement } from '../../assets'

const Portfolio = () => {
    const [selected, setSelected] = useState('All');
    const [renderKey, setRenderKey] = useState(0);

    const [image, setImage] = useState([
        {
            id: 1,
            imgsrc: kitchen,
            title: 'Kitchen utentils',
            content: 'Fullstack web app with NextJS, TailwindCSS, ShadcnUI, NestJS',
            link: 'https://github.com/duythaidev/kitchen-utensils',
            category: 'web'
        },
        {
            id: 2,
            imgsrc: kitchenapp,
            title: 'Kitchen utentils app',
            content: 'Use React Native, Expo, Nativewind',
            link: 'https://github.com/duythaidev/kitchen-utensils-app-nativewind',
            category: 'app'
        },
        {
            id: 3,
            imgsrc: hms,
            title: 'Hospital Management System',
            content: 'Fullstack web app with ReactJS, Ant Design, TailwindCSS, ExpressJS, PrismaORM',
            link: 'https://gitlab.com/theorng1/swp391-hms',
            category: 'web'
        },
        {
            id: 4,
            imgsrc: myPortfolio,
            title: 'My old portfolio',
            content: 'Use pure css',
            link: 'https://kerkzek.github.io/Portfolio/',
            category: 'web'
        },
        {
            id: 5,
            imgsrc: restaurantmanagement,
            title: 'Restaurant Management System',
            content: 'Frontend web with ReactJS, Bootstrap, Axios, with backend Json-server',
            link: 'https://github.com/l22lvip/Restaurant_SeaFood_-Management/',
            category: 'web'
        }
    ]);
    const handleSelect = (category) => {
        setSelected(category);
        setRenderKey(prev => prev + 1);
    };



    return (
        <div className='portfolio-container'>
            <h1 className='page-title'>
                Portfolio
            </h1>
            <div className="br-line"></div>
            <div className="portfolio-navBar">
                <ul>
                    <div className="portfolio-navBar">
                        <ul>
                            <li>
                                <a
                                    className={`cursor-pointer ${selected === 'All' ? 'active' : ''}`}
                                    onClick={() => handleSelect('All')}
                                >All</a>
                            </li>
                            <li>
                                <a
                                    className={`cursor-pointer ${selected === 'web' ? 'active' : ''}`}
                                    onClick={() => handleSelect('web')}
                                >Web development
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`cursor-pointer ${selected === 'app' ? 'active' : ''}`}
                                    onClick={() => handleSelect('app')}
                                >Applications</a>
                            </li>

                        </ul>
                    </div>
                </ul>
            </div>
            <div className='portfolio-body-container' key={renderKey}>
                {image.map((item) => {
                    if (selected === 'All' || item.category === selected) {
                        return (

                            <PortfolioCard
                                key={item.id}
                                imgsrc={item.imgsrc}
                                title={item.title}
                                content={item.content}
                                link={item.link}
                            />
                        );
                    }
                })}
            </div>

        </div>
    )
}

export default Portfolio