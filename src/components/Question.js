import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Question({ question, users, showQuestion, id }) {
  const questionAuthor = users[question.author];

  // const getStyle = () => {
  //   // if (question.author === authUser) return {backgroundColor: 'yellow'}

  //   const isAnswered =
  //     question.optionOne.votes.includes(authUser) ||
  //     question.optionTwo.votes.includes(authUser);
  //   return {
  //     display: isAnswered === displayAnswered ? "relative" : "none",
  //     backgroundColor: isAnswered ? "green" : "red"
  //   };
  // };

  return (
    <div
      style={{ display: showQuestion(id) ? "block" : "none" }}
      className="question"
    >
      <h3>{questionAuthor && questionAuthor.name} asked</h3>
      <Link to={`/questions/${id}`} className="text-link">
        <h4 className="question-text">
          {question.optionOne.text} OR {question.optionTwo.text}
        </h4>
      </Link>
    </div>
  );
}

function mapStateToProps({ authUser, questions, users }, { id, showQuestion }) {
  const question = questions[id];
  return {
    authUser,
    question,
    users,
  };
}
export default connect(mapStateToProps)(Question);
