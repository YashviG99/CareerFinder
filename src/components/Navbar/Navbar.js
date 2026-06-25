import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="cf-navbar">

      <div className="cf-container">

        <div className="cf-logo">

          <span className="logo-blue">Career</span>

          <span className="logo-dark">Finder</span>

        </div>

        <ul className="cf-nav-links">

          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/">Jobs</a>
          </li>

          <li>
            <a href="/">Companies</a>
          </li>

          <li>
            <a href="/">Favorites</a>
          </li>

          <li>
            <a href="/">Recent</a>
          </li>

        </ul>

        <div className="cf-buttons">

          <button className="login-btn">
            Login
          </button>

          <button className="signup-btn">
            Sign Up
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;