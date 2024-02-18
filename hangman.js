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
  wordContainer.innerHTML = selectedWord.split('').map(letter => (
    guessedLetters.includes(letter) ? letter : '_')).join(' ');
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
    updateHangmanImage(remainingGuesses); // Show the complete hangman on final guess
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
        updateHangmanImage(remainingGuesses);
      }
      displayWord();
      displayGuesses();
      checkWin();
      checkLose();
    } else {
      displayMessage('You already guessed that letter!');
    }
  } else {
    displayMessage('Please enter a valid lowercase letter.');
  }
}

function updateHangmanImage(guessesRemaining) {
  const index = 6 - guessesRemaining; // Calculate index based on remaining guesses
  const imageContainer = document.getElementById('hangman-image'); // Get the container element
  imageContainer.innerHTML = ''; // Clear existing content
  const img = document.createElement('img'); // Create a new image element
  img.src = hangmanImages[index]; // Set image source
  imageContainer.appendChild(img); // Append image to container
}

document.addEventListener('DOMContentLoaded', () => {
  displayWord();
  displayGuesses();
  const imageContainer = document.getElementById('hangman-image'); // Get container on load
  updateHangmanImage(remainingGuesses); // Show initial hangman image
  document.addEventListener('keydown', handleGuess);
});
