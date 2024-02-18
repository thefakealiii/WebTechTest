const words = ['javascript', 'hangman', 'programming', 'computer', 'developer', 'code'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let remainingGuesses = 6;
let hangmanImages = [
  'hangman1.png',
  'hangman2.png',
  'hangman3.png',
  'hangman4.png',
  'hangman5.png',
  'hangman6.png'
];
function displayWord() {
  const wordContainer = document.getElementById('word');
  wordContainer.innerHTML = selectedWord.split('').map(letter => (guessedLetters.includes(letter) ? letter : '_')).join(' ');
}

function displayGuesses() {
  const guessesContainer = document.getElementById('guesses');
  guessesContainer.textContent = `Remaining guesses: ${remainingGuesses}`;
}

function displayMessage(message) {
  const messageContainer = document.getElementById('message');
  messageContainer.textContent = message;
}

function checkWin() {
  if (selectedWord.split('').every(letter => guessedLetters.includes(letter))) {
    displayMessage('Congratulations! You guessed the word!');
    document.removeEventListener('keydown', handleGuess);
  }
}

function checkLose() {
  if (remainingGuesses === 0) {
    displayMessage(`Game over! The word was: ${selectedWord}`);
    document.removeEventListener('keydown', handleGuess);
  }
}

function handleGuess(event) {
  const guess = event.key.toLowerCase();
  if (/^[a-z]$/.test(guess)) {
    if (!guessedLetters.includes(guess)) {
      guessedLetters.push(guess);
      if (!selectedWord.includes(guess)) {
        remainingGuesses--;
      }
      displayWord();
      displayGuesses();
      checkWin();
      checkLose();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  displayWord();
  displayGuesses();
  document.addEventListener('keydown', handleGuess);
});
