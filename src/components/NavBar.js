import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthUser } from "../Actions/authUser";

function NavBar({ authUser, dispatch }) {
  const handleLogout = () => {
    dispatch(setAuthUser(""));
  };
  return (
    <div className="nav-bar">
      <ul>
        <li>
          <Link className="text-link" to="/">
            {" "}
            Home{" "}
          </Link>
        </li>
        <li>
          <Link className="text-link" to="/new">
            {" "}
            New Question{" "}
          </Link>
        </li>
        <li>
          <Link className="text-link" to="/board">
            {" "}
            Leader Board{" "}
          </Link>
        </li>
      </ul>
      {authUser ? (
        <div className="profile">
          <img src={authUser.avatarURL} alt="pic" />
          <span> Hello {authUser.name} </span>
          <Link to="/login" onClick={handleLogout}>
            {" "}
            Logout{" "}
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login"> Login </Link>
        </div>
      )}
    </div>
  );
}

function mapStateToProps({ users, authUser }) {
  return {
    authUser: users[authUser],
  };
}
export default connect(mapStateToProps)(NavBar);
