import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, storeFactory } from '../test/utils'
import GuessInput from './GuessInput'

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
