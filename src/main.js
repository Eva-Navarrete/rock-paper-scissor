// QUERY SELECTORS
var classicGame = document.getElementById('classicGame');
var difficultGame = document.getElementById('difficultGame');
var gameSection = document.getElementById('gameSection');
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
classicGame.addEventListener('click', displayClassicGame);
difficultGame.addEventListener('click', displayDifficultGame);
gameboard.addEventListener('click', playClassic);

var game = {};
var gameType = '';

// FUNCTIONS


function show(element) {
  element.classList.toggle('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function displayClassicGame() {
  gameType = 'Classic';
  game = new Game(gameType);
    hide(gameSection);
    show(gameboard);
    hide(totoroFighter);
    hide(noFaceFighter);

}

function displayDifficultGame(event) {
  gameType = 'Difficult';
  game = new Game(gameType);
  fight(event);
    hide(gameSection);
    show(gameboard);


    // show()

  // this will hide the 'container' and display the game difficult game board choosen with difficult tokens
}

function playClassic(event) {
  game.chooseGameType();
  fight(event);
  game.playClassicGame();
  console.log(game.human);
  console.log(game.computer);
}

function playDifficult() {
  game.playDifficultGame();
  game.chooseGameType();
  fight(event);

}



function fight(event) {
  game.chooseRandomIndex();

  if (event.target.id === 'calcifer') {
    game.human.choice = 'calcifer';
  } else if (event.target.id === 'haku') {
    game.human.choice = 'haku';
  } else if (event.target.id === 'spritz') {
    game.human.choice = 'spritz';
  }else if (event.target.id === 'noFace') {
    game.human.choice = 'noFace';
  } else if(event.target.id === 'totoro'){
    game.human.choice = 'totoro';
  }
}
