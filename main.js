import './style.css';
import getRandomWord from './src/randomWord';
import { setSharkImage } from './src/sharkImage';
import { setupWord, isLetterInWord, revealLetterInWord } from './src/word';
import setupGuesses from './src/guess';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord();

  setSharkImage(document.querySelector('#shark-img'), numWrong);
  setupWord(document.querySelector('#word-container'), word);
  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
  const handleGuess = (guessEvent, letter) => {
    const button = guessEvent.target
    let status = document.querySelector('#game-status')
    let letterBoxes = document.querySelectorAll('.letter-box')
    let empty = false
    let allButtons = document.querySelectorAll('button')
    button.disabled = true
    if (word.includes(letter)) {
      revealLetterInWord(letter)
    }
    else {
      numWrong++
      setSharkImage(document.querySelector('#shark-img'), numWrong)
    }
    for (const el of letterBoxes) {
      if (el.innerText === '') {
        empty = false
        break
      }
      empty = true
    }
    if (empty === true) {
      status.innerText = "You win!"
      allButtons.forEach((element) => element.disabled = true)
    }
    if (numWrong === 5) {
      status.innerText = "You lose!"
      allButtons.forEach((element) => element.disabled = true)
    }
  };
  
  setupGuesses(document.querySelector('#letter-buttons'), handleGuess);
};

initSharkwords();
