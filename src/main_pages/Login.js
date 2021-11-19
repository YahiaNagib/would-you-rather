import { connect } from "react-redux";
import { setAuthUser } from "../Actions/authUser";
import { Navigate } from "react-router-dom";

function Login({ users, authUser, dispatch }) {
  // To change the object to an array
  const modifyUsers = () => {
    let usersArray = [];
    for (let id in users) {
      usersArray.push({ id, name: users[id].name });
    }
    return usersArray;
  };

  const changeAuthUser = (e) => {
    dispatch(setAuthUser(e.target.value));
  };

  return (
    <div>
      {authUser ? (
        <Navigate to="/" />
      ) : (
        <div>
          <h1> Login Page </h1>
          <h4>Username</h4>
          <select onChange={(e) => changeAuthUser(e)}>
            <option value="no_user" defaultValue>
              ...
            </option>
            {users &&
              modifyUsers().map((user) => (
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              ))}
          </select>
        </div>
      )}
    </div>
  );
}

function mapStateToProps({ authUser, users }) {
  return {
    authUser,
    users,
  };
}
export default connect(mapStateToProps)(Login);
