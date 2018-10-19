import { actionTypes } from '../actions'
import successReducer from './successReducer'

it('returns default initial state of `false` when no action is passed', () => {
  const state = successReducer(undefined, {})
  expect(state).toBe(false)
})

it('returns state of `true` upon recieving an action of type `CORRECT_GUESS`', () => {
  const state = successReducer(undefined, { type: actionTypes.CORRECT_GUESS })
  expect(state).toBe(true)
})
