import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  return (
    <nav>
      <div className="navbar">
        <h1 className="logo">LOGO.</h1>
        <ul className={`navbar_menu ${hamburgerActive ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/events">Events</Link>
          </li>

          <li>
            <Link to="/gallery">gallery</Link>
          </li>

          <li>
            <Link to="/about">about us</Link>
          </li>
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
