import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function QuestionPage({ questionId, authUser, users, question }) {
  if (!authUser)
    return (
      <div>
        <Redirect to="/login" />
      </div>
    );

  if (!question) {
    return (
      <div>
        <Redirect to="/notfound" />
      </div>
    );
  }

  const questionAuthor = users[question.author];

  const getResults = () => {
    const optionOne = question.optionOne.votes.length;
    const optionTwo = question.optionTwo.votes.length;
    return {
      count: optionOne + optionTwo,
      percentage: (optionOne * 100) / (optionOne + optionTwo),
    };
  };

  return (
    <div>
      {!authUser ? (
        <Redirect to="/login" />
      ) : (
        <div>
          <h1> Question Asked by: {questionAuthor.name} </h1>
          <img
            style={{ width: "5%" }}
            src={questionAuthor.avatarURL}
            alt="pic"
          />

          <h4>Would you rather?</h4>
          <h4>
            {" "}
            Total {getResults().count} polls,
            {question.optionOne.votes.includes(authUser) ||
            question.optionTwo.votes.includes(authUser) ? (
              <div>your answer is in green!</div>
            ) : (
              <div>Click on one of the answers to submit!</div>
            )}
            
          </h4>
          <h2
            style={{
              color: question.optionOne.votes.includes(authUser)
                ? "green"
                : "black",
            }}
          >
            {question.optionOne.text} ({getResults().percentage}%)
          </h2>
          <h2
            style={{
              color: question.optionTwo.votes.includes(authUser)
                ? "green"
                : "black",
            }}
          >
            {question.optionTwo.text} ({100 - getResults().percentage}%)
          </h2>
        </div>
      )}
    </div>
  );
}

function mapStateToProps({ authUser, questions, users }, { props }) {
  const questionId = props.match.params.id;
  const question = questions[questionId];
  return {
    authUser,
    question,
    users,
    questionId,
  };
}
export default connect(mapStateToProps)(QuestionPage);
