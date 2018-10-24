import { actionTypes } from '../actions'

/**
 * @function guessedWordsReducer
 * @param {array} - Array of guessed words.
 * @param {obejct} - action to be reduced.
 * @returns {array} - new guessed words state.
 */
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESSED_WORD:
      return [...state, action.payload]
    default:
      return state
  }
}
