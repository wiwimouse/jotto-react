import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, storeFactory } from '../test/utils'
import GuessInput, { UnconnectedGuessInput } from './GuessInput'

const ELMENTS = {
  component: 'cpn-guess-input',
  input: 'elm-input',
  submitButton: 'elm-submit-btn'
}

const setup = (state = {}) => {
  const store = storeFactory(state)
  const wrapper = shallow(<GuessInput store={store} />).dive()
  return wrapper
}

describe('render', () => {
  describe('wrod has not been guessed', () => {
    let wrapper

    beforeEach(() => {
      const initialState = { success: false }
      wrapper = setup(initialState)
    })

    it('renders component without error', () => {
      const component = findByTestAttr(wrapper, ELMENTS.component)
      expect(component.length).toBe(1)
    })
    it('renders input', () => {
      const input = findByTestAttr(wrapper, ELMENTS.input)
      expect(input.length).toBe(1)
    })
    it('renders submit button', () => {
      const button = findByTestAttr(wrapper, ELMENTS.submitButton)
      expect(button.length).toBe(1)
    })
  })
  describe('wrod has been guessed', () => {
    let wrapper

    beforeEach(() => {
      const initialState = { success: true }
      wrapper = setup(initialState)
    })

    it('renders component without error', () => {
      const component = findByTestAttr(wrapper, ELMENTS.component)
      expect(component.length).toBe(1)
    })
    it('does not renders input', () => {
      const input = findByTestAttr(wrapper, ELMENTS.input)
      expect(input.length).toBe(0)
    })
    it('does not renders submit button', () => {
      const button = findByTestAttr(wrapper, ELMENTS.submitButton)
      expect(button.length).toBe(0)
    })
  })
})

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true
    const wrapper = setup({ success })
    const successProp = wrapper.instance().props.success
    expect(successProp).toBe(success)
  })
  test('`guessWord` action creator is function prop', () => {
    const wrapper = setup()
    const guessWordProp = wrapper.instance().props.guessWord
    expect(guessWordProp).toBeInstanceOf(Function)
  })
})

describe('`guessWrod` action creator call', () => {
  let guessedWord
  let guessWordMock
  let wrapper

  beforeEach(() => {
    guessedWord = 'train'
    guessWordMock = jest.fn()
    const props = {
      success: false,
      guessWord: guessWordMock
    }

    // set up component with guessWordMock as guessWord prop
    wrapper = shallow(<UnconnectedGuessInput {...props} />)

    // add value to input
    // wrapper.instance().state.inputRef.current = { value: guessedWord }
    wrapper.setState({ guessInputValue: guessedWord })

    // simulate click
    const button = findByTestAttr(wrapper, ELMENTS.submitButton)
    button.simulate('click', { preventDefault() {} })
  })

  test('calls `guessWord` when button clicked', () => {
    // check to see if mock run
    const guessWordCallCount = guessWordMock.mock.calls.length
    expect(guessWordCallCount).toBe(1)
  })

  test('calls `guessWord` with input value as argument', () => {
    const [[guessWordArg]] = guessWordMock.mock.calls
    expect(guessWordArg).toBe(guessedWord)
  })
  
  test('input clears on submit', () => {
    expect(wrapper.instance().state.guessInputValue).toBe('')
  })
})
