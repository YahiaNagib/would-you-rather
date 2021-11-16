import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./main_pages/Home";
import NewQuestions from "./main_pages/NewQuestions";
import LeaderBoard from "./main_pages/LeaderBoard";
import Login from "./main_pages/Login";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/questions" element={<NewQuestions/>} />
        <Route exact path="/board" element={<LeaderBoard/>} />
      </Routes>
    </div>
  );
}

export default App;
