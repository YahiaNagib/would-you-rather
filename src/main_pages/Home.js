import Question from "../components/Question";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

function Home({ ids, authUser }) {
  return (
    <div>
      {!authUser ? (
        <Navigate to="/login"/>
      ) : (
        <div>
          <h1> Main Questions Page </h1>
          <h4>Would you rather?</h4>
          {ids.map((id) => (
            <Question key={id} id={id} />
          ))}
        </div>
      )}
    </div>
  );
}

function mapStateToProps({ questions, authUser }) {
  return {
    ids: Object.keys(questions),
    authUser,
  };
}
export default connect(mapStateToProps)(Home);
