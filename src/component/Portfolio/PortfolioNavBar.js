import React from 'react'
import '../../styles/Portfolio/PortfolioNavBar.scss'
import { NavLink } from "react-router-dom";

const PortfolioNavBar = () => {
    return (
        <div className="portfolio-navBar">
            <ul>
                <div className="portfolio-navBar">
                    <ul>
                        <li>
                            <NavLink to="All" activeclassname="active">All</NavLink>
                        </li>
                        <li>
                            <NavLink to="Web-design" activeclassname="active">Web design</NavLink>
                        </li>
                        <li>
                            <NavLink to="Applications" activeclassname="active">Applications</NavLink>
                        </li>
                        <li>
                            <NavLink to="Web-development" activeclassname="active">Web development</NavLink>
                        </li>
                    </ul>
                </div>
            </ul>
        </div>
    )
}

export default PortfolioNavBar