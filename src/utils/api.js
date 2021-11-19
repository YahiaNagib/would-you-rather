import {
    _getUsers,
    _getQuestions,
    _saveQuestion
  } from './_DATA.js'
  
  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
  }

  export function saveQuestion(optionOne, optionTwo, author) {
    return _saveQuestion({optionOne, optionTwo, author});
  }
  