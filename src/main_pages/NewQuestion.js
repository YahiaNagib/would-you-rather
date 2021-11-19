import { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../Actions/questions.js";

function NewQuestion({ dispatch, authUser }) {
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");
  const [toHome, setToHome] = useState(false);

  if (toHome === true) {
    return <Redirect to='/' />
  }

  const handleOptionChange = (e, option) => {
    if (option === 1) setFirstOption(e.target.value);
    if (option === 2) setSecondOption(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(firstOption, secondOption, authUser));
    setToHome(true);
  }

  if (!authUser)
    return (
      <div>
        <Redirect to="/login" />
      </div>
    );
  return (
    <div>
      <h1> Create New Question </h1>
      <h2> Would you rather... </h2>
      <input
        onChange={(e) => handleOptionChange(e, 1)}
        placeholder="First Option"
      ></input>
      <input
        onChange={(e) => handleOptionChange(e, 2)}
        placeholder="Second Option"
      ></input>
      <br />
      <button onClick={(e) => handleClick(e)}> Submit! </button>
    </div>
  );
}

function mapStateToProps({ users, authUser }) {
  return {
    users,
    authUser,
  };
}
export default connect(mapStateToProps)(NewQuestion);
