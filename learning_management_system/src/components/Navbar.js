import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";
//import { Link } from "react-router-dom";
import "../homepage.css";

export default function Navbar() {
  const scrollToAbout = () => {
    scroll.scrollTo("#about-us", {
      smooth: true,
      duration: 500,
    });
  };
  return (
    <div>
      <header>
        <div className="navbar">
          <div className="logo">
            <a href="/" className="logo1">
              Axis Saral Portal
            </a>
          </div>
          <ul className="links">
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <Link
                to="about-us"
                smooth={true}
                duration={500}
                onClick={scrollToAbout}
                style={{ color: "black" }}
              >
                About Us
              </Link>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <a href="/login" className="action_btn">
            Login
          </a>
          <div className="toggle_btn">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </header>
    </div>
  );
}
