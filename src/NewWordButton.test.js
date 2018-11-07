import React from 'react'
import { shallow } from 'enzyme'

import { resetGame } from './actions'
import { UnconnectedNewWordButton, mapDispatchToProps } from './NewWordButton'

const ELEMENT = {
  component: 'cpn-new-word-btn'
}

describe('component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<UnconnectedNewWordButton resetGame={() => {}} />)
    const component = wrapper.find(`[data-test="${ELEMENT.component}"]`)
    expect(component.length).toBe(1)
  })
  it('call `resetGame` when button clicked', () => {
    const resetGameMock = jest.fn()
    const wrapper = shallow(
      <UnconnectedNewWordButton resetGame={resetGameMock} />
    )
    const button = wrapper.find(`[data-test="${ELEMENT.component}"]`)
    button.simulate('click')
    expect(resetGameMock.mock.calls.length).toBe(1)
  })
})

describe('store', () => {
  it('maps store to props correctly', () => {
    expect(mapDispatchToProps.resetGame).toBe(resetGame)
  })
})

