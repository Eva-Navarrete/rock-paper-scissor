// QUERY SELECTORS
var classicGame = document.getElementById('classicGame');
var difficultGame = document.getElementById('difficultGame');
var gameboard = document.getElementById('gameboard1');
var humanPlayer = document.getElementById('humanPlayer')
var compPlayer = document.getElementById('humanPlayer');
var calciferToken = document.getElementById('calcifer');
var spritzToken = document.getElementById('spritz');
var hakuToken = document.getElementById('haku');

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
