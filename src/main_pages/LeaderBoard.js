import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function LeaderBoard({ users, authUser }) {
  let usersCount = [];

  if (!authUser)
    return (
      <div>
        <Redirect to="/login" />
      </div>
    );

  for (const id in users) {
    usersCount.push({
      id,
      questions: users[id].questions.length,
      answers: Object.keys(users[id].answers).length,
      count: users[id].questions.length + Object.keys(users[id].answers).length,
    });
  }

  return (
    <div>
      <h1> LeaderBoard Page </h1>
      {usersCount &&
        usersCount
          .sort((a, b) => b.count - a.count)
          .map((user) => (
            <div key={user.id} className="user-data">
              <div style={{ flex: "1" }}>
                <img
                  style={{ width: "50%", marginRight: "10px" }}
                  src={users[user.id].avatarURL}
                  alt="pic"
                />
                <h3>{users[user.id].name}</h3>
              </div>
              <div style={{ flex: "3" }}>
                <h3>Answered Questions: {user.questions}</h3>
                <h3>Created Questions: {user.answers}</h3>
                <h3>Total Score: {user.questions + user.answers}</h3>
              </div>
            </div>
          ))}
    </div>
  );
}

function mapStateToProps({ users, authUser }) {
  return {
    users,
    authUser
  };
}
export default connect(mapStateToProps)(LeaderBoard);
