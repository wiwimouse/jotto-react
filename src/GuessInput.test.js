import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, storeFactory } from '../test/utils'
import GuessInput from './GuessInput'

const setup = (state = {}) => {
  const store = storeFactory(state)
  const wrapper = shallow(<GuessInput store={store} />).dive()
  return wrapper
}

describe('render', () => {
  describe('wrod has not been guessed', () => {
    it('renders component without error', () => {})
    it('renders input box', () => {})
    it('renders submit button', () => {})
  })
  describe('wrod has been guessed', () => {
    it('renders component without error', () => {})
    it('does not renders input box', () => {})
    it('does not renders submit button', () => {})
  })
})

