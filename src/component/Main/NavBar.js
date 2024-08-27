import React from 'react'
import '../../styles/Main/NavBar.scss'
import {
    Link, NavLink
} from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <div className="navBar">
                <ul>
                    <li>
                        <NavLink to="/" exact='true' activeclassname="active">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Resume" exact='true' activeclassname="active">Resume</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portfolio" exact='true' activeclassname="active">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Blog" exact='true' activeclassname="active">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact" exact='true' activeclassname="active">Contact</NavLink>
                    </li>


                </ul>
            </div>
        )
    }
}
export default NavBar