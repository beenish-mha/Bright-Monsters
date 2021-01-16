import React from "react";

import "../App.css";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="sideNav">
      <nav className="sideNavbar">
        <ul className="navMain">
          <Link to="/">
            <h4 style={{ color: "rgba(0, 0, 0, 0.54)" }}>Our Story</h4>
            <br />
          </Link>

          <Link to="/LoginSignin">
            <h4 style={{ color: "rgba(0, 0, 0, 0.54)" }} className="navLogin">
              Login / Join
            </h4>
            <br />
          </Link>

          <h4 className="curriculum">
            <a
              className="green"
              // style={{ color: "rgba(0, 0, 0, 0.54)" }}
              href="https://www.gov.uk/national-curriculum"
            >
              Curriculum
            </a>
          </h4>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
