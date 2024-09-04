import React from "react";
import image from "../images/Geetanjali.png";
import { Link } from "react-router-dom";
import "./Home.css"; // Create a CSS file to handle the styles

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-container">
        <p>HELLO!</p>
        <h1>I'm Geetanjali Kushwaha</h1>
        <p className="sub-heading">Engineer</p>
        <p className="sub-heading">A Full Stack Developer</p>
        <Link to={"https://github.com/Geetanjali542"} target="_blank">
          <button type="button" className="btn btn-warning rounded-pill px-3 py-3">
            MY WORKS
          </button>
        </Link>
      </div>
      <div className="image-container">
        <div className="image-wrapper">
          <img src={image} className="rounded" alt="Geetanjali Kushwaha" />
        </div>
      </div>
    </div>
  );
};

export default Home;
