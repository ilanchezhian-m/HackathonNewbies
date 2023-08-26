const jumbleElement = document.getElementById('jumble');
const guessInput = document.getElementById('guess-input');
const checkButton = document.getElementById('check-button');
const resetButton = document.getElementById('reset-button');
const resultMessage = document.getElementById('result-message');

const words = ['HELLO', 'WORLD', 'PUZZLE', 'JUMBLE', 'CIPHER'];
let currentWord = '';

function jumbleWord(word) {
  return word.split('').sort(() => Math.random() - 0.5).join('');
}

function resetPuzzle() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  jumbleElement.textContent = jumbleWord(currentWord);
  guessInput.value = '';
  resultMessage.textContent = '';
}

resetButton.addEventListener('click', resetPuzzle);

checkButton.addEventListener('click', () => {
  const guess = guessInput.value.toUpperCase();

  if (guess === currentWord) {
    resultMessage.textContent = 'Correct! You solved the jumble.';
    window.location.href = "page3.html";
  } else {
    resultMessage.textContent = 'Try again.';
  }
});
