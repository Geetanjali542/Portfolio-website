import React from "react";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#home">
            GEETANJALI KUSHWAHA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul
              className="navbar-nav mb-2 mb-lg-0"
              style={{ gap: "25px", paddingRight: "3rem" }}
            >
              <li className="nav-item">
                <a className="nav-link active text-light" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#resume">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Navbar;
