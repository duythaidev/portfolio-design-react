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
                        <NavLink to="/" exact activeClassName="selected">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Resume" exact activeClassName="selected">Resume</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portfolio" exact activeClassName="selected">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Blog" exact activeClassName="selected">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact" exact activeClassName="selected">Contact</NavLink>
                    </li>


                </ul>
            </div>
        )
    }
}
export default NavBar