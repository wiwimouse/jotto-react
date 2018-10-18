import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, checkProps } from '../test/utils'
import Congrats from './Congrats'

const ELEMENTS = {
  component: 'cpn-congrats',
  message: 'elm-message'
}
const defaultProps = {
  success: false
}

/**
 * Factory function to create ShallowWrapper for component Congrats.
 * @function setup
 * @param {object} props
 * @param {object} state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Congrats {...setupProps} />)
}

it('renders without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, ELEMENTS.component)
  expect(component.length).toBe(1)
})

it('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false })
  const component = findByTestAttr(wrapper, ELEMENTS.component)
  expect(component.text()).toBe('')
})

it('renders non-empty congrats message ehen `success` prop is true', () => {
  const wrapper = setup({ success: true })
  const message = findByTestAttr(wrapper, ELEMENTS.message)
  expect(message.text().length).not.toBe(0)
})

it('does not throw warning with expected props', () => {
  checkProps(Congrats, defaultProps)
})