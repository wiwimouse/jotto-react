import { storeFactory } from '../test/utils'
import { guessWord } from './actions'

describe('guessWord action dispatcher', () => {
  const secretWord = 'party'
  const unsuccessfulWord = 'train'
  const successfulWord = secretWord

  describe('no guessed words', () => {
    let store
    const initialState = { secretWord }

    beforeEach(() => {
      store = storeFactory(initialState)
    })

    it('update state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulWord))
      const newState = store.getState()
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulWord,
            letterMatchCount: 3
          }
        ]
      }
      expect(newState).toEqual(expectedState)
    })

    it('update state correctly for successful guess', () => {
      store.dispatch(guessWord(successfulWord))
      const newState = store.getState()
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          {
            guessedWord: successfulWord,
            letterMatchCount: 5
          }
        ]
      }
      expect(newState).toEqual(expectedState)
    })
  })

  describe('some guessed words', () => {
    const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }]
    const initialState = { secretWord, guessedWords }
    let store

    beforeEach(() => {
      store = storeFactory(initialState)
    })

    it('update state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulWord))
      const newState = store.getState()
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccessfulWord, letterMatchCount: 3 }
        ]
      }
      expect(newState).toEqual(expectedState)
    })
    it('update state correctly for successful guess', () => {
      store.dispatch(guessWord(successfulWord))
      const newSate = store.getState()
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: successfulWord, letterMatchCount: 5 }
        ]
      }
      expect(newSate).toEqual(expectedState)
    })
  })
})
