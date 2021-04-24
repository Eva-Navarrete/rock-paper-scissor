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
// game.chooseRandomIndex(this.fighter);
// game.playClassicGame();
// console.log(game.computerWeapon);
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
    hide(gameSection);
    show(gameboard);


    // show()

  // this will hide the 'container' and display the game difficult game board choosen with difficult tokens
}

function playClassic(){
  console.log('hello');
  game.playClassicGame();
  fight(event);

}

function fight(event) {
  // var fighters = ['calcifer', 'spritz', 'haku', 'noFace', 'totoro']
  game.chooseRandomIndex();
console.log(game.computer);
// console.log();
  if (event.target.id === 'calcifer') {
    game.human.choice = 'calcifer'
    console.log(game.human);
    // this.humanWeapon = calciferFighter;
  } else if (event.target.id === 'haku') {
    console.log(event.target.id)
    // this.humanWeapon = hakuFighter;
  } else if (event.target.id === 'spritz') {
    console.log(event.target.id)
    // this.humanWeapon = spritzFighter
  }else if (event.target.id === 'noFace') {
    console.log(event.target.id);
  } else if(event.target.id === 'totoro'){
    console.log(event.target.id);
  }



  console.log("YOLO");
}
