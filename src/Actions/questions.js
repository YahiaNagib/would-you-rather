import { saveQuestion, saveQuestionAnswer } from "../utils/api.js";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOne, optionTwo, author) {
  return (dispatch) => {
    return saveQuestion(optionOne, optionTwo, author).then((question) => {
      console.log(question);
      dispatch(addQuestion(question));
    });
  };
}

export function handleQuestionAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    return saveQuestionAnswer(authedUser, qid, answer)
    // .then(() => {
    //   dispatch(addQuestion());
    // });
  };
}
