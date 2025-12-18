import React from "react";
import "../../styles/Main/NavBar.scss";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className="navBar">
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Resume"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Portfolio/All"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Blog"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
