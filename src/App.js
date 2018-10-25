import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'

import { getSecretWord } from './actions'
import Congrets from './Congrats'
import GuessedWords from './GuessedWords'
import GuessInput from './GuessInput'

class App extends Component {
  static propTypes = {
    success: PropTypes.bool.isRequired,
    secretWord: PropTypes.string,
    guessedWords: PropTypes.array.isRequired,
    getSecretWord: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="app container">
        <h1>Jotto</h1>
        <Congrets success={this.props.success} />
        <GuessInput />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { success, secretWord, guessedWords } = state
  return { success, secretWord, guessedWords }
}

export default connect(
  mapStateToProps,
  { getSecretWord }
)(App)
