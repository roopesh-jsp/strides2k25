import React, { useState } from "react";

export default function Navbar() {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  return (
    <nav>
      <div className="navbar">
        <h1 className="logo">LOGO.</h1>
        <ul className={`navbar_menu ${hamburgerActive ? "active" : ""}`}>
          <li>
            <a href="#">home</a>
          </li>

          <li>
            <a href="#">events</a>
          </li>

          <li>
            <a href="#">gallery</a>
          </li>

          <li>
            <a href="#">about us</a>
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
