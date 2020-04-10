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

          <Link to="/Login">
            <li className="navLogin">Login</li>
            <br />
          </Link>
          <Link to="/AddChild">
            <li className="navAddChild">
              <a href="something">Add your Child</a>
            </li>
            <br />
          </Link>
          <li className="curriculum">Curriculum</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
