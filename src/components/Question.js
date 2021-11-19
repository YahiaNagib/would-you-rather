import { connect } from "react-redux";

function Question({ question, users, authUser }) {
  const questionAuthor = users[question.author];

  const getStyle = () => {

    if (question.author === authUser) return {backgroundColor: 'yellow'}
    const isAnswered =
      question.optionOne.votes.includes(authUser) ||
      question.optionTwo.votes.includes(authUser);
    return {
      backgroundColor: isAnswered ? "green" : "red",
    };
  };
  return (
    <div style={getStyle()} className="question">
      <h3>{questionAuthor && questionAuthor.name} asked</h3>
      <h4>
        {question.optionOne.text} OR {question.optionTwo.text}
      </h4>
    </div>
  );
}

function mapStateToProps({ authUser, questions, users }, { id }) {
  const question = questions[id];
  return {
    authUser,
    question,
    users,
  };
}
export default connect(mapStateToProps)(Question);
