let word;

function setupWord(element, initWord) {
    word = initWord
    word.split('').forEach(() => {
        element.insertAdjacentHTML('beforeend', `<div class="letter-box"></div>`);
      });
}

function isLetterInWord(letter) {
    return word.includes(letter)
}

function revealLetterInWord(letter) {
    const arr = document.querySelectorAll('.letter-box')
    word.split('').forEach((element, idx) => element === letter ? arr[idx].innerHTML = letter : null)
}

export { setupWord, isLetterInWord, revealLetterInWord}