import moxios from 'moxios'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

// import { storeFactory } from '../../test/utils'
import { actionTypes, getSecretWord, resetGame } from './'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  describe('`resetGame` action creator', () => {
    it('create GET_SECRET_WORD when resetGame has been called', () => {
      const store = mockStore()
      const secretWord = 'brain'
      const expectedActions = [
        { type: actionTypes.SET_SECRET_WORD, payload: secretWord },
        { type: actionTypes.RESET_GAME }
      ]

      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: secretWord
        })
      })

      return store.dispatch(resetGame()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })

  describe('`getSecretWord` action creator', () => {
    it('create SET_SECRET_WORD with correctly payload', () => {
      const store = mockStore()
      const secretWord = 'party'
      const expectedActions = [
        { type: actionTypes.SET_SECRET_WORD, payload: secretWord }
      ]
  
      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: secretWord
        })
      })
  
      return store.dispatch(getSecretWord()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})

// describe('getSecretWord action creator', () => {
//   test('adds response word to state', () => {
//     const secretWord = 'party'
//     const store = storeFactory()

//     moxios.withMock(() => {
//       moxios.wait(() => {
//         const request = moxios.requests.mostRecent()
//         request.respondWith({
//           status: 200,
//           response: secretWord
//         })
//       })
//     })

//     return store.dispatch(getSecretWord()).then(() => {
//       const newState = store.getState()
//       expect(newState.secretWord).toBe(secretWord)
//     })
//   })
// })
