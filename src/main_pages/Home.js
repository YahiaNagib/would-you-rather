import Question from "../components/Question";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { useState } from "react";

function Home({ ids, authUser, questions }) {
  const [displayAnswered, setDisplayAnswered] = useState(false);

  const handleClick = () => {
    setDisplayAnswered((prev) => !prev);
  };

  const isAnswered = (id) => {
    return (
      (questions[id].optionOne.votes.includes(authUser) ||
      questions[id].optionTwo.votes.includes(authUser)) === displayAnswered
    );
  };

  return (
    <div>
      {!authUser ? (
        <Redirect to="/login" />
      ) : (
        <div>
          <h1> Main Questions Page </h1>
          <div>
            <button onClick={handleClick}>{displayAnswered ? "Answered Questions":"Unanswered Questions"}</button>
          </div>
          <h4>Would you rather?</h4>
          {ids.map((id) => (
            <Question
              showQuestion={(id) => isAnswered(id)}
              key={id}
              id={id}
              displayAnswered={displayAnswered}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function mapStateToProps({ questions, authUser }) {
  return {
    ids: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    authUser,
    questions,
  };
}
export default connect(mapStateToProps)(Home);
