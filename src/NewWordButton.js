import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { resetGame } from './actions'

export const UnconnectedNewWordButton = ({ resetGame }) => {

  return (
    <button
      data-test="cpn-new-word-btn"
      className="btn btn-primary"
      onClick={resetGame}
    >
      New Word
    </button>
  )
}

UnconnectedNewWordButton.propTypes = {
  resetGame: PropTypes.func.isRequired
}

export const mapDispatchToProps = { resetGame }

export default connect(
  null,
  mapDispatchToProps
)(UnconnectedNewWordButton)
