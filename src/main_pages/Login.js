import { connect } from "react-redux";

function Login({users, authUser}) {
  
  // To change the object to an array
  const modifyUsers = () => {
    let usersArray = [];
    for (let id in users) {
      usersArray.push({ id, name: users[id].name });
    }
    return usersArray;
  };

  const setAuthUser = (e) => {

  }

  return (
    <div>
      <h1> Login Page </h1>
      <h4>Username</h4>
      <select onChange={(e) => setAuthUser(e)}>
        <option value="no_user" defaultValue>...</option>
        {users &&
          modifyUsers().map((user) => <option value={user.id} key={user.id}>{user.name}</option>)}
      </select>
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
