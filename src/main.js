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

var game = new Game();
// game.chooseRandomIndex(this.fighter);
// game.playClassicGame();
// console.log(game.computerWeapon);


// FUNCTIONS


function show(element) {
  element.classList.toggle('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function displayClassicGame() {
  if (event.target === classicGame) {
    hide(gameSection);
    show(gameboard);
    hide(totoroFighter);
    hide(noFaceFighter);

  }
  // this will hide the 'container' and display the game classic game board chosen with classic tokens
}

function playClassic(){
  game.playClassicGame();
  game.fight();

}

// function fight(event) {
//   // var fighters = ['calcifer', 'spritz', 'haku', 'noFace', 'totoro']
//   if (event.target === calciferFighter) {
//     this.humanWeapon = calciferFighter;
//   } else if (event.target === hakuFighter) {
//     this.humanWeapon = hakuFighter;
//   } else if (event.target === spritzFighter) {
//     this.humanWeapon = spritzFighter
//   }
//
//   game.playClassicGame();
//   console.log("YOLO");
// }

function displayDifficultGame(event) {
  if (event.target === difficultGame){
    hide(gameSection);
    show(gameboard);


    // show()
  }
  // this will hide the 'container' and display the game difficult game board choosen with difficult tokens
}
