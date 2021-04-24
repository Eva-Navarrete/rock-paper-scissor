// QUERY SELECTORS
var classicGame = document.getElementById('classicGame');
var difficultGame = document.getElementById('difficultGame');
var gameChoices = document.getElementById('gameChoices');
var gameboard = document.getElementById('gameboard');
var humanPlayer = document.getElementById('humanPlayer')
var compPlayer = document.getElementById('humanPlayer');
var calciferFighter = document.getElementById('calcifer');
var spritzFighter = document.getElementById('spritz');
var hakuFighter = document.getElementById('haku');
var noFaceFighter = document.getElementById('noFace');
var totoroFighter = document.getElementById('totoro')


// var turnipImg = document.getElementById('turnipImg');
// var princessImg = document.getElementById('princessImg');

// // EVENT LISTENERS
// classicGame.addEventListener('click', displayClassicGame);
difficultGame.addEventListener('click', displayDifficultGame);


var game = new Game();
game.chooseRandomIndex(this.fighter);
console.log(game.computerWeapon);


// FUNCTIONS


function show(element) {
  element.classList.toggle('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function displayClassicGame() {
  // this will hide the 'container' and display the game classic game board chosen with classic tokens
}

function displayDifficultGame(event) {
  if (event.target === difficultGame){
    hide(gameChoices);
    show(gameboard);
    show(calciferFighter)
    show(spritzFighter)
    shoW()
  }
  // this will hide the 'container' and display the game difficult game board choosen with difficult tokens
}
