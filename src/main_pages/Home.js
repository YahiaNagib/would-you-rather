import Question from "../components/Question";
import { connect } from "react-redux";

function Home({ ids }) {
  return (
    <div>
      <h1> Main Questions Page </h1>
      <h4>Would you rather?</h4>
      {ids.map((id) => (
        <Question id={id} />
      ))}
    </div>
  );
}

function mapStateToProps({ questions }) {
  return {
    ids: Object.keys(questions),
  };
}
export default connect(mapStateToProps)(Home);
