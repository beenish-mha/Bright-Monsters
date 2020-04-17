import React from "react";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="sideNav">
      <nav className="sideNavbar">
        <ul className="navMain">
          <Link to="/">
            <li>Home</li>
            <br />
          </Link>

          <Link to="/LoginSignin">
            <li className="navLogin">Login</li>
            <br />
          </Link>

          <li className="curriculum">
            <a href="https://www.gov.uk/national-curriculum">Curriculum</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
