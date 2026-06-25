import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-tag">
            🚀 Find Your Dream Career
          </span>

          <h1>
            Discover Your Next
            <span> Opportunity</span>
          </h1>

          <p>
            Search thousands of jobs from top companies.
            Save your favorite jobs, explore company details,
            and take the next step in your career.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Explore Jobs
            </button>

            <button className="secondary-btn">
              Learn More
            </button>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700"
            alt="CareerFinder"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;