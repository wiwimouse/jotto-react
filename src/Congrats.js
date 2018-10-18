import React from 'react'

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

export default Congrats
