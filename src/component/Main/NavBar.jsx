import React from 'react'
import '../../styles/Main/NavBar.scss'
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBar">
            <ul>
                <li>
                    <NavLink to="/" exact='true' activeclassname="active">About</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" exact='true' activeclassname="active">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/resume" exact='true' activeclassname="active">Resume</NavLink>
                </li>
                <li>
                    <NavLink to="/blog" exact='true' activeclassname="active">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" exact='true' activeclassname="active">Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar