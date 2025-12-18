import React from "react";
import "../../styles/Portfolio/PortfolioNavBar.scss";
import { NavLink } from "react-router-dom";

const PortfolioNavBar: React.FC = () => {
  return (
    <div className="portfolio-navBar">
      <ul>
        <div className="portfolio-navBar">
          <ul>
            <li>
              <NavLink
                to="All"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Web-design"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Web design
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Applications"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Applications
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Web-development"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Web development
              </NavLink>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default PortfolioNavBar;
