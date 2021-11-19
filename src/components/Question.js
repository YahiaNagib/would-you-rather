import { connect } from "react-redux";

function Question({question}) {
  return <div className="question">
      <h4>{question.optionOne.text} OR {question.optionTwo.text}</h4>
  </div>;
}

function mapStateToProps({ authUser, questions }, { id }) {
  const question = questions[id];
  return {
    authUser,
    question,
  };
}
export default connect(mapStateToProps)(Question);
