/**
 * @function getLetterMatchCount
 * @param {*} guessedWord - Guessed word.
 * @param {*} SecretWord - Secret word.
 * @returns {number} Number of letters matched between guessed word and secret word.
 */
export const getLetterMatchCount = (guessedWord, secretWord) => {
    const secretLetterSet = new Set(secretWord.split(''))
    const guessedLetterSet = new Set(guessedWord.split(''))
    return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length
}