import { connect } from "react-redux";

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

  console.log(showQuestion(id));

  return (
    <div style={{display: showQuestion(id) ? 'block' : 'none'}} className="question">
      <h3>{questionAuthor && questionAuthor.name} asked</h3>
      <h4>
        {question.optionOne.text} OR {question.optionTwo.text}
      </h4>
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
