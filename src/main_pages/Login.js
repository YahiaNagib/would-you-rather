import { useEffect, useState } from "react";
import { _getUsers } from "../_DATA";

function Login() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    _getUsers().then((res) => {
      const usersArray = modifyUsers(res);
      setUsers(usersArray);
    });
  }, []);

  // To change the object to an array
  const modifyUsers = (users) => {
    let usersArray = [];
    for (let id in users) {
      usersArray.push({ id, name: users[id].name });
    }
    return usersArray;
  };

  return (
    <div>
      <h1> Login Page </h1>
      <h4>Username</h4>
      <select>
        {users &&
          users.map((user) => <option key={user.id}>{user.name}</option>)}
      </select>
    </div>
  );
}

export default Login;
