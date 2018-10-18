import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/utils'
import GuessedWords from './GuessedWords'

const testAttrValue = {
  component: 'cpn-guessed-words',
  instructions: 'elm-instructions',
  guessedWords: 'elm-guessed-words',
  guessedWord: 'elm-guessed-word'
}
const defaultProps = {
  guessedWords: [
    {
      guessedWord: 'lottery',
      letterMatchCount: 4
    }
  ]
}

/**
 * Factory function to create a ShallowWrapper for component GuessedWords.
 * @function setup
 * @param {object} props Component Props specific to GuessedWords.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessedWords {...setupProps} />)
}

it('does not throw warning wit expected props', () => {
  checkProps(GuessedWords, defaultProps)
})

describe('if there are no words guessed', () => {
  let wrapper

  beforeEach(() => {
    wrapper = setup({ guessedWords: [] })
  })

  it('renders without error', () => {
    const component = findByTestAttr(wrapper, testAttrValue.component)
    expect(component.length).toBe(1)
  })

  it('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, testAttrValue.instructions)
    expect(instructions.text().length).not.toBe(0)
  })
})

describe('if there are words guessed', () => {
  const guessedWords = [
    {
      guessedWord: 'lottery',
      letterMatchCount: 4
    },
    {
      guessedWord: 'play',
      letterMatchCount: 2
    },
    {
      guessedWord: 'apple',
      letterMatchCount: 5
    }
  ]
  let wrapper

  beforeEach(() => {
    wrapper = setup({ guessedWords })
  })

  it('renders without error', () => {
    const component = findByTestAttr(wrapper, testAttrValue.component)
    expect(component.length).toBe(1)
  })

  it('renders "guessed words" section', () => {
    const guessedWordNodes = findByTestAttr(wrapper, testAttrValue.guessedWords)
    expect(guessedWordNodes.length).toBe(1)
  })

  it('correct number of guessed words', () => {
    const guessedWordNodes = findByTestAttr(wrapper, testAttrValue.guessedWord)
    expect(guessedWordNodes.length).toBe(guessedWords.length)
  })
})
