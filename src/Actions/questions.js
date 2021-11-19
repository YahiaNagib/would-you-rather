
import {saveQuestion} from '../utils/api.js'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestions(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion (optionOne, optionTwo, author) {
    return (dispatch) => {
      return saveQuestion(optionOne, optionTwo, author)
        .then((todo) => {
          dispatch(addQuestions({optionOne, optionTwo, author}))
        })
        .catch(() => {
          alert('There was an error. Try again.')
        })
    }
  }