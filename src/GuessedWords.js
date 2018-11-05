import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = ({ guessedWords }) => {
  return (
    <div data-test="cpn-guessed-words">
      {!guessedWords.length ? (
        <h3 data-test="elm-instructions">Try to guess the secret word!</h3>
      ) : (
        <div data-test="elm-guessed-words">
          <h3>Guessed Words</h3>
          <p data-test="elm-guessed-word-count">Total Guesses: {guessedWords.length}</p>
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th>#</th>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {guessedWords.map((word, idx) => (
                <tr key={idx} data-test="elm-guessed-word">
                  <td>{idx + 1}</td>
                  <td>{word.guessedWord}</td>
                  <td>{word.letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
}

export default GuessedWords
