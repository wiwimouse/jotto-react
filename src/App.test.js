import React from 'react'
import { shallow } from 'enzyme'

import { storeFactory } from '../test/utils'
import App, { UnconnectedApp } from './App'

/**
 * @function setup
 * @param {*} state - Store state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (state = {}) => {
  const store = storeFactory(state)
  const wrapper = shallow(<App store={store} />).dive()
  return wrapper
}

describe('redux props', () => {
  test('has access to `success` state', () => {
    const success = true
    const wrapper = setup({ success })
    const successProp = wrapper.instance().props.success
    expect(successProp).toBe(success)
  })
  test('has access to `secretWord` state', () => {
    const secretWord = 'party'
    const wrapper = setup({ secretWord })
    const secretWordProp = wrapper.instance().props.secretWord
    expect(secretWordProp).toBe(secretWord)
  })
  test('has access to `guessedWords` state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }]
    const wrapper = setup({ guessedWords })
    const guessedWordsProp = wrapper.instance().props.guessedWords
    expect(guessedWordsProp).toEqual(guessedWords)
  })
  test('`getSecretWord` action creator is function on the props', () => {
    const wrapper = setup()
    const getSecretWordProp = wrapper.instance().props.getSecretWord
    expect(getSecretWordProp).toBeInstanceOf(Function)
  })
})

test('`getSecretWord` run on App Mount', () => {
  const getSecretWordMock = jest.fn()
  const props = {
    success: false,
    guessedWords: [],
    getSecretWord: getSecretWordMock
  }

  // set up app component with getSecretWordMock as getSecretWord prop
  const wrapper = shallow(<UnconnectedApp {...props} />)

  // run lifecycle method
  wrapper.instance().componentDidMount()

  // check to see if mock run
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length

  expect(getSecretWordCallCount).toBe(1)
})
