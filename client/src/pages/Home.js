import React from "react";

import {
  FaMobileAlt,
  FaLaptop,
  FaCar,
  FaCouch,
  FaRobot,
} from "react-icons/fa";

function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">

        <div className="hero-left">

          <h1>
            Buy & Sell Used Products
            Smarter with AI
          </h1>

          <p>
            ReCart is a modern AI-powered
            marketplace where users can
            securely buy and sell second-hand
            products with smart suggestions
            and WhatsApp integration.
          </p>

          <div className="hero-buttons">

            <button className="explore-btn">
              Explore Products
            </button>

            <button className="sell-btn">
              Sell Product
            </button>

            <button className="ai-btn">
              AI Assistant
            </button>

          </div>

        </div>


        <div className="hero-right">

          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt="hero"
          />

        </div>

      </section>


      {/* CATEGORY SECTION */}
      <section className="category-section">

        <h2>Top Categories</h2>

        <div className="category-grid">

          <div className="category-card">
            <FaMobileAlt />
            <h3>Mobiles</h3>
          </div>

          <div className="category-card">
            <FaLaptop />
            <h3>Laptops</h3>
          </div>

          <div className="category-card">
            <FaCar />
            <h3>Cars</h3>
          </div>

          <div className="category-card">
            <FaCouch />
            <h3>Furniture</h3>
          </div>

          <div className="category-card">
            <FaRobot />
            <h3>AI Suggestions</h3>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;