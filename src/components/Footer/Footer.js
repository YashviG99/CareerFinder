import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h2>
            Career<span>Finder</span>
          </h2>

          <p>
            Helping students and professionals discover
            better career opportunities around the world.
          </p>

        </div>

        <div className="footer-links">

          <h4>Quick Links</h4>

          <ul>

            <li>Home</li>

            <li>Jobs</li>

            <li>Companies</li>

            <li>Favorites</li>

            <li>Contact</li>

          </ul>

        </div>

        <div className="footer-contact">

          <h4>Contact</h4>

          <p>Email : careerfinder@gmail.com</p>

          <p>Phone : +91 XXXXX XXXXX</p>

          <p>India</p>

        </div>

      </div>

      <hr />

      <div className="copyright">

        © 2026 CareerFinder | Developed by Yashvi Gheewala

      </div>

    </footer>
  );
}

export default Footer;