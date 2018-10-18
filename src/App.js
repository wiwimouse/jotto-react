import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Congrets from './Congrats'
import GuessedWords from './GuessedWords'

class App extends Component {
  render() {
    return (
      <div className="app container">
        <h1>Jotto</h1>
        <Congrets success />
        <GuessedWords
          guessedWords={[
            {
              guessedWord: 'lottery',
              letterMatchCount: 3
            }
          ]}
        />
      </div>
    )
  }
}

export default App
