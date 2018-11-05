import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { guessWord } from './actions'

const UnconnectedGuessInput = class extends Component {
  static propTypes = {
    success: PropTypes.bool.isRequired,
    guessWord: PropTypes.func.isRequired
  }

  state = {
    inputRef: React.createRef()
  }

  onSubmit = e => {
    e.preventDefault()
    const guessedWord = this.state.inputRef.current.value
    if (guessedWord && guessedWord.length) this.props.guessWord(guessedWord)

    this.state.inputRef.current.value = ''
  }

  render() {
    return (
      <div data-test="cpn-guess-input">
        {this.props.success ? null : (
          <form className="form-inline">
            <div className="form-group">
              <input
                data-test="elm-input"
                ref={this.state.inputRef}
                id="word-guess-input"
                type="text"
                className="form-control"
                placeholder="enter guess here."
              />
              <button
                data-test="elm-submit-btn"
                type="submit"
                className="btn btn-primary"
                onClick={this.onSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return {
    success
  }
}

export { UnconnectedGuessInput }
export default connect(
  mapStateToProps,
  { guessWord }
)(UnconnectedGuessInput)
