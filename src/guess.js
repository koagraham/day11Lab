const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function setupGuesses(element, handleGuess) {
  //iterates over the alphabet
  alphabet.split('').forEach((letter) => {
    //creates a button element
    const btn = document.createElement('button');
    //sets the buttons text to the right letter of the alphabet
    btn.innerText = letter;
    //handles a guess if you click a button
    btn.addEventListener('click', (e) => handleGuess(e, letter));
    //appends the buttons to the html element
    element.append(btn);
  });
}

export default setupGuesses;
