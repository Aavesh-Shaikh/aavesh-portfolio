import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
function Navbar() {
  const [mobile, setMobile] = useState(false);

  return (
    <nav className="navbar">
      {/* <h3 className="logo">Portfolio</h3> */}

      <ul
        className={mobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setMobile(false)}
      >
        <NavLink exact to="/" activeClassName="active-tab">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about-me" activeClassName="active-tab">
          <li>About Me</li>
        </NavLink>
        <NavLink to="/skills" activeClassName="active-tab">
          <li>Skills</li>
        </NavLink>
        <NavLink to="/projects" activeClassName="active-tab">
          <li>Projects</li>
        </NavLink>
        <NavLink to="/certifications" activeClassName="active-tab">
          <li>Certifications</li>
        </NavLink>
        {/* <NavLink to="/portfolio" activeClassName="active-tab">
          <li>Portfolio</li>
        </NavLink> */}
        <NavLink to="/contact" activeClassName="active-tab">
          <li>Contact</li>
        </NavLink>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
        {mobile ? (
          <span className="hmbgr_icon">
            <ImCross />
          </span>
        ) : (
          <span className="hmbgr_icon">
            <FaBars />
          </span>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
