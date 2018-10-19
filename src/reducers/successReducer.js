import { actionTypes } from '../actions'

/**
 * @function successReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be redcue.
 * @returns {boolean} - new success state.
 */
export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true
    default:
      return state
  }
}
