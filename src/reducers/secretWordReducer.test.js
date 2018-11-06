import { actionTypes } from '../actions'
import reducer from './secretWordReducer'

it('returns `null` when no action is passed', () => {
  const state = reducer(undefined, {})
  expect(state).toBe(null)
})

it('returns expected word when action `SET_SECRET_WORD` is passed', () => {
  const secretWord = 'bloom'
  const state = reducer(undefined, { type: actionTypes.SET_SECRET_WORD, payload: secretWord })
  expect(state).toBe(secretWord)
})
