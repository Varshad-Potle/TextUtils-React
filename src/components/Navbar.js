import React from "react";
import PropTypes from "prop-types";
// import { a } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg ${props.mode === "dark" ? "bg-dark navbar-dark" : "bg-light navbar-light"}`}>
      <div className="container-fluid">
        <a className={`navbar-brand ${props.mode === "dark" ? "text-white" : "text-dark"}`} href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={`nav-a ${props.mode === "dark" ? "text-white" : "text-dark"}`} href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-a ${props.mode === "dark" ? "text-white" : "text-dark"}`} href="/About">
                {props.aboutText}
              </a>
            </li>
          </ul>
        </div>
        {/* Dark Mode Toggle */}
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            onClick={props.toggleMode}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className={`form-check-label ${props.mode === "dark" ? "text-white" : "text-dark"}`} htmlFor="flexSwitchCheckDefault">
            {props.mode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}
          </label>
        </div>
        {/* Green Mode Toggle */}
        {/* <div className="form-check form-switch mx-3">
          <input
            className="form-check-input"
            onClick={props.greenMode}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckGreen"
          />
          <label 
            className={`form-check-label ${props.mode === "dark" || props.green === "green" ? "text-white" : "text-dark"}`} 
            htmlFor="flexSwitchCheckGreen"
          >
            {props.green === "light" ? "Enable Green Mode" : "Disable Green Mode"}
          </label>
        </div> */}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  // green: PropTypes.string.isRequired,
  // greenMode: PropTypes.func.isRequired,
};
