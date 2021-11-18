import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./main_pages/Home";
import NewQuestion from "./main_pages/NewQuestion";
import LeaderBoard from "./main_pages/LeaderBoard";
import Login from "./main_pages/Login";
import { useEffect, useState } from "react";
import { _getUsers } from "./utils/_DATA";

function App() {

  const [users, setUsers] = useState({});
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    _getUsers().then((res) => {
      setUsers(res);
    })
  }, []);

  const changeAuthUser = (e) => {
    if (e.target.value === "no_user") return
    const id = e.target.value;
    setAuthUser(users[id])
  };

  return (
    <div className="App">
      <NavBar authUser={authUser} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/login"
          element={<Login users={users} changeAuthUser={changeAuthUser} />}
        />
        <Route exact path="/new" element={<NewQuestion />} />
        <Route exact path="/board" element={<LeaderBoard />} />
      </Routes>
    </div>
  );
}

export default App;
