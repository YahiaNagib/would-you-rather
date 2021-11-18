import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./main_pages/Home";
import NewQuestion from "./main_pages/NewQuestion";
import LeaderBoard from "./main_pages/LeaderBoard";
import Login from "./main_pages/Login";
import React, { Component } from "react";
import { _getUsers } from "./utils/_DATA";

import { connect } from "react-redux";
import { handleInitialData } from "./Actions/shared";

class App extends Component {
  state = {
    users: [],
    authUser: null,
  };

  componentDidMount() {
    this.props.dispatch(handleInitialData());
    _getUsers().then((res) => {
      this.setState({ users: res });
    });
  }

  // const [users, setUsers] = useState({});
  // const [authUser, setAuthUser] = useState(null);

  // useEffect(() => {
  //   props.dispatch(handleInitialData());
  //   console.log(props);
  //   _getUsers().then((res) => {
  //     setUsers(res);
  //   });
  // }, []);

  render() {
    const { authUser, users } = this.props;
    console.log(this.props);
    
    const changeAuthUser = (e) => {
      if (e.target.value === "no_user") return;
      const id = e.target.value;
      this.setState({ authUser: users[id] });
    };

    return (
      <div className="App">
        <NavBar authUser={users[authUser]} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/login"
            element={
              <Login users={users} changeAuthUser={changeAuthUser} />
            }
          />
          <Route exact path="/new" element={<NewQuestion />} />
          <Route exact path="/board" element={<LeaderBoard />} />
        </Routes>
      </div>
    );
  }
}

function mapStateToProps({ users, authUser }) {
  return {
    users,
    authUser,
  };
}

export default connect(mapStateToProps)(App);
