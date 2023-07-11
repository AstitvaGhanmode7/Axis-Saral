import React from "react";
import Navbar from "./Navbar";
import { Element } from "react-scroll";
import "../homepage.css";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <section className="section1"></section>
      <section className="section2">
        <h1 className="qoute1">Delivering excellence through our services,</h1>
        <h1 className="qoute2">
          Empowering your business to thrive in the digital world.
        </h1>
        <button className="section1-btn">
          view products <i className="fa-solid fa-arrow-right"></i>
        </button>
        <button className="section1-btn">See our Customers</button>
      </section>

      <section className="section4">
        <h1 className="news">Latest News & more</h1>
      </section>
      <Element name="about-us">
        <section id="about-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="heading-aboutus">About Our Company</h2>
                <p className="p-1">
                  We are a service-based company specializing in developing
                  projects for our clients. With years of experience and a
                  dedicated team of professionals, we strive to deliver
                  high-quality solutions that meet the unique requirements of
                  each client.
                </p>
                <p className="p-2">
                  Our goal is to provide innovative and customized solutions
                  that help businesses succeed in the digital world. We work
                  closely with our clients to understand their needs, goals, and
                  vision, and then leverage our expertise to turn their ideas
                  into reality.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Element>
      <div>
        <div className="footer">
          <div className="footer-container">
            <div className="service">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Web design</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="#">Hosting</a>
                </li>
              </ul>
            </div>
            <div className="about">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Legacy</a>
                </li>
              </ul>
            </div>
            <div className="careers">
              <h3>Careers</h3>
              <ul>
                <li>
                  <a href="#">Job openings</a>
                </li>
                <li>
                  <a href="#">Employee success</a>
                </li>
                <li>
                  <a href="#">Benefits</a>
                </li>
              </ul>
            </div>
            <div className="copywrite">
              <p className="copyright"> Axis Saral Portal © 2023</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
