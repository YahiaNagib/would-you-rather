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
          <Link to="/new"> New Question </Link>
        </li>
        <li>
          <Link to="/board"> Leader Board </Link>
        </li>
      </ul>
      <div className="profile">
        <div> Image </div>
        <Link to="/login"> Logout </Link>
      </div>
    </div>
  );
}

export default NavBar;
