import React from 'react'
import PropTypes from 'prop-types'

const Congrats = ({ success }) => {
  return (
    <div className="cpn-congrets" data-test="cpn-congrats">
      {success && (
        <div className="alert alert-success" data-test="elm-message">
          A simple success alert—check it out!
        </div>
      )}
    </div>
  )
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

export default Congrats
