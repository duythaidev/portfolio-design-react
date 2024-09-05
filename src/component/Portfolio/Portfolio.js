import React from 'react'
import '../../styles/Portfolio/Portfolio.scss'
import PortfolioNavBar from './PortfolioNavBar';
import Applications from './Applications';
import WebDevelopment from './WebDevelopment';
import All from './All';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebDesign from './WebDesign';
class Portfolio extends React.Component {
    render() {
        return (
            <div className='portfolio-container'>

                <h1 className='page-title'>
                    Portfolio
                </h1>
                <div className="br-line"></div>
                <PortfolioNavBar></PortfolioNavBar>
                <Routes>
                    <Route path="All" element={<All />} />
                    <Route path="Web-design" element={<WebDesign />} />
                    <Route path="Applications" element={<Applications />} />
                    <Route path="Web-development" element={<WebDevelopment />} />
                    
                </Routes>

            </div>
        )
    }
}
export default Portfolio