import { getLetterMatchCount } from '../helpers'

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESSED_WORD: 'GUESSED_WORD'
}

export const guessWord = guessedWord => {
  return function(dispatch, getState) {
    const { secretWord } = getState()
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord)

    dispatch({
      type: actionTypes.GUESSED_WORD,
      payload: {
        guessedWord,
        letterMatchCount
      }
    })

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS })
    }
  }
}
