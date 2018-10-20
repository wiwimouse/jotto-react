import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const GuessInput = class extends Component {
  propTypes = {
    success: PropTypes.bool.isRequired
  }

  render() {
    return (
      <div data-test="cpn-guess-input">
        {this.props.success ? null : (
          <form className="form-inline">
            <div className="form-group">
              <input
                data-test="elm-input"
                id="word-guess-input"
                type="text"
                className="form-control"
                placeholder="enter guess here."
              />
              <button
                data-test="elm-submit-btn"
                type="submit"
                className="btn btn-primary"
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

export default connect(mapStateToProps)(GuessInput)
