// QUERY SELECTORS
var classicGame = document.getElementById('classicGame');
var difficultGame = document.getElementById('difficultGame');
var gameSection = document.getElementById('gameSection');
var gameChoices = document.getElementById('gameChoices');
var gameboard = document.getElementById('gameboard');
var changeGameBtn = document.getElementById('changeGameButton');
var princessWins = document.getElementById('princessWins');
var turnipWins = document.getElementById('turnipWins');
var winnersSection = document.getElementById('winners');
// var humanPlayer = document.getElementById('humanPlayer')
// var compPlayer = document.getElementById('humanPlayer');
var calciferFighter = document.getElementById('calcifer');
// var spritzFighter = document.getElementById('spritz');
// var hakuFighter = document.getElementById('haku');
var noFaceFighter = document.getElementById('noFace');
var totoroFighter = document.getElementById('totoro')


// var turnipImg = document.getElementById('turnipImg');
// var princessImg = document.getElementById('princessImg');

// // EVENT LISTENERS
classicGame.addEventListener('click', displayClassicGame);
difficultGame.addEventListener('click', displayDifficultGame);
gameboard.addEventListener('click', playClassic);

// var game = {};
// var gameType = '';
var game = new Game();

// FUNCTIONS


function show(element) {
  element.classList.toggle('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

var gameChosen = document.getElementById('gameChosen');

function displayClassicGame() {
  game.gameType = 'Classic';
  humanWinner.classList = 'fighter';
  computerWinner.classList = 'fighter';
  // game = new Game(gameType);
  gameChosen.innerText = 'Choose your FIGHTER!!';
  hide(totoroFighter);
  hide(noFaceFighter)
  hide(winnersSection);
  hide(gameSection);
  show(gameboard);
  game.chooseGameType()

}

function displayDifficultGame() {
  game.gameType = 'Difficult';
  humanWinner.classList = 'fighter';
  computerWinner.classList = 'fighter';
  // game = new Game(gameType);
  gameChosen.innerText = 'Choose your FIGHTER!!';
  hide(winnersSection)
  hide(gameSection);
  show(gameboard);
}

function playClassic(event) {;
  fight(event);
  game.playClassicGame();
  show(changeGameBtn);
  displayWinnerAndScore();
  console.log(game.human);
  console.log(game.computer);
  displayEndOfGameCharacter();
  game.human.saveToStorage();
  game.computer.saveToStorage();
  game.resetBoard(displayClassicGame);

}

function playDifficult(event) {
  fight(event);
  game.playDifficultGame();
  show(changeGameBtn);
  displayWinnerAndScore();
  console.log(game.human);
  console.log(game.computer);
  displayEndOfGameCharacter();
  game.human.saveToStorage();
  game.computer.saveToStorage();
  game.resetBoard(displayDifficultGame);


}

function fight(event) {
  game.chooseRandomIndex();

  if (event.target.id === 'calcifer') {
    game.human.choice = 'calcifer';
  } else if (event.target.id === 'haku') {
    game.human.choice = 'haku';
  } else if (event.target.id === 'spritz') {
    game.human.choice = 'spritz';
  } else if (event.target.id === 'noFace') {
    game.human.choice = 'noFace';
  } else if (event.target.id === 'totoro') {
    game.human.choice = 'totoro';
  }
}

function displayWinnerAndScore() {
  turnipWins.textContent = `Wins: ${game.computer.totalWins}`;
  princessWins.textContent = `Wins: ${game.human.totalWins}`;
  if (game.human.isWinner === true) {
    gameChosen.innerText = "Princess Mononoke is the Winner!!";
  } else if (game.computer.isWinner === true) {
    gameChosen.innerText = "Turnip Head is the Winner!!";
  } else {
    gameChosen.innerText = "It's a Draw!!";
  }

  }


var humanWinner = document.getElementById('humanWinner');
var computerWinner = document.getElementById('computerWinner');

  function displayEndOfGameCharacter() {

    humanWinner.classList.add(game.human.choice);
    computerWinner.classList.add(game.computer.choice);


    hide(gameboard);
    show(winnersSection);



  }




//  I need a a function that changes the inner Text of the h2 tag "choose your game" to "choose your fighter" then i need to add that to the display game function.

//  I need a function that displays the players selected fighter and hides the others. withing this function i need to manipulate the h2 tag to display game results. "princess/human is winner" "turnip/comp is winner" "It's a draw"

//  need to add and event listener to the changeGameBtn which will take us back to home page.
