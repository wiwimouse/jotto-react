import { actionTypes } from '../actions'
import reducer from './guessedWordsReducer'

it('returns `[]` when no action is passed', () => {
  const state = reducer(undefined, { type: undefined })
  expect(state).toEqual([])
})

// describe('no guessed words', () => {
//   const initialState = []

//   it('returns expected state when `GUESSED_WORD` action is passed', () => {
//     const payload = {
//       guessedWord: 'party',
//       letterMatchCount: 3
//     }
//     const state = reducer(initialState, {
//       type: actionTypes.GUESSED_WORD,
//       payload
//     })
//     const expectedState = [{ ...initialState, ...payload }]

//     expect(state).toEqual(expectedState)
//   })

//   it('returns expected state when `RESET_GAME` action is passed', () => {
//     const state = reducer(initialState, { type: actionTypes.RESET_GAME })
//     expect(state).toEqual([])
//   })
// })

// describe('some guessed words', () => {

// })

const initialStateWithNoGuessed = []
const initialStateWithSomeGuessed = [
  {
    guessedWord: 'brain',
    letterMatchCount: 3
  }
]

it.each([
  ['no guessed words', initialStateWithNoGuessed],
  ['some guessed words', initialStateWithSomeGuessed]
])(
  'returns expected state when `GUESSED_WORD` action is passed with %s',
  (placeholder, initialState) => {
    const payload = {
      guessedWord: 'party',
      letterMatchCount: 3
    }
    const state = reducer(initialState, {
      type: actionTypes.GUESSED_WORD,
      payload
    })
    const expectedState = [...initialState, ...[payload]]

    expect(state).toEqual(expectedState)
  }
)

it.each([
  ['no guessed words', initialStateWithNoGuessed],
  ['some guessed words', initialStateWithSomeGuessed]
])(
  'returns expected state when `RESET_GAME` action is passed with %s',
  (placeholder, initialState) => {
    const state = reducer(initialState, { type: actionTypes.RESET_GAME })
    expect(state).toEqual([])
  }
)
