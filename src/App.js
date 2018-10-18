import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Congrets from './Congrats'

class App extends Component {
  render() {
    return (
      <div className="app container">
        <Congrets success />
      </div>
    )
  }
}

export default App
