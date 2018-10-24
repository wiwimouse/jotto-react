import { combineReducers } from 'redux'
import successReducer from './successReducer'
import secretWordReducer from './secretWordReducer'
import guessedWordsReducer from './guessedWordsReducer'

export default combineReducers({
  success: successReducer,
  secretWord: secretWordReducer,
  guessedWords: guessedWordsReducer
})
