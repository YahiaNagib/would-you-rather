import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/questions"> Questions </Link>
        </li>
        <li>
          <Link to="/board"> Leader Board </Link>
        </li>
      </ul>
      <div className="profile">
        <div> Image </div>
        <Link to="/logout"> Logout </Link>
      </div>
    </div>
  );
}

export default NavBar;
