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
    return (optionOne * 100) / (optionOne + optionTwo);
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
          <h2>
            {question.optionOne.text} ({getResults()}%)
          </h2>
          <h2>{question.optionTwo.text} ({100 - getResults()}%)</h2>
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
