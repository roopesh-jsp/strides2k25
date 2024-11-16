import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  return (
    <nav>
      <div className="navbar">
        <h1 className="logo">LOGO.</h1>
        {hamburgerActive && (
          <div
            className="overlay"
            onClick={() => setHamburgerActive(false)}
          ></div>
        )}
        <ul
          className={`navbar_menu ${hamburgerActive ? "active" : ""}`}
          onClick={() => setHamburgerActive(false)}
        >
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/events">
            <li>Events</li>
          </Link>
          <Link to="/gallery">
            <li>gallery</li>
          </Link>
          <Link to="/about">
            <li>about us</li>
          </Link>
        </ul>
        <div
          className={`hamburger ${hamburgerActive ? "ham-active" : ""}`}
          onClick={() => setHamburgerActive((prev) => !prev)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
}
