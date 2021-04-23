// QUERY SELECTORS
var classicGame = document.querySelector('classicGame');
var difficultGame = document.querySelector('difficultGame');
var gameboard = document.querySelector('gameboard1');

// // EVENT LISTENERS
// classicGame.addEventListener('click', displayClassicGame);
// difficultGame.addEventListener('click', displayDifficultGame);

console.log(Game);
console.log(Player);

var game = new Game();
game.chooseToken();


// FUNCTIONS
function pickRandomToken() {
  // return Math.floor(Math.random() *  );
  //pass in the token choice's for computer for both classic and difficult game.
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function displayClassicGame() {
  // this will hide the 'container' and display the game classic game board chosen with classic tokens
}

function displayDifficultGame() {
  // this will hide the 'container' and display the game difficult game board choosen with difficult tokens
}
