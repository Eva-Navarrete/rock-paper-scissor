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
var playGameSection = document.getElementById('playGame');
var humanWinner = document.getElementById('humanWinner');
var computerWinner = document.getElementById('computerWinner');
var calciferFighter = document.getElementById('calcifer');
var noFaceFighter = document.getElementById('face');
var totoroFighter = document.getElementById('totoro')
var gameChosen = document.getElementById('gameChosen');

// // EVENT LISTENERS
classicGame.addEventListener('click', displayClassicGame);
difficultGame.addEventListener('click', displayDifficultGame);
gameboard.addEventListener('click', playGame);
changeGameBtn.addEventListener('click', displayHomeView);
window.addEventListener('load', displayScore);

// GLOBAL VARIABlES 🌎
var game = new Game();

// FUNCTIONS
function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function displayClassicGame() {
  game.gameType = 'Classic';
  game.chooseGameType('Classic')
  humanWinner.classList = 'fighter';
  computerWinner.classList = 'fighter';
  gameChosen.innerText = 'Choose your FIGHTER!!';
  show(changeGameBtn);
  hide(totoroFighter);
  hide(noFaceFighter);
  hide(winnersSection);
  hide(gameSection);
  show(gameboard);

}

function displayDifficultGame() {
  game.gameType = 'Difficult';
  game.chooseGameType('Difficult');
  humanWinner.classList = 'fighter';
  computerWinner.classList = 'fighter';
  gameChosen.innerText = 'Choose your FIGHTER!!';
  show(totoroFighter);
  show(noFaceFighter);
  show(changeGameBtn);
  hide(winnersSection);
  hide(gameSection);
  show(gameboard);
}

function playGame(event) {
  if (game.gameType === 'Classic') {
    fight(event);
    game.playClassicGame();
    displayWinnerAndScore();
    displayEndOfGameCharacter();
    game.resetBoard(displayClassicGame);
  } else {
    fight(event);
    game.playDifficultGame();
    displayWinnerAndScore();
    displayEndOfGameCharacter();
    game.resetBoard(displayDifficultGame);
  }
}

  function displayHomeView() {
    gameChosen.innerText = "Choose your Game!"
    show(gameSection);
    hide(gameboard);
    hide(changeGameBtn);
 }

function fight(event) {
  game.chooseRandomIndex();

  if (event.target.id === 'calcifer') {
    game.human.choice = 'calcifer';
  } else if (event.target.id === 'haku') {
    game.human.choice = 'haku';
  } else if (event.target.id === 'spritz') {
    game.human.choice = 'spritz';
  } else if (event.target.id === 'face') {
    game.human.choice = 'face';
  } else if (event.target.id === 'totoro') {
    game.human.choice = 'totoro';
  }

}

function displayScore() {
  turnipWins.textContent = `Wins: ${game.computer.retreiveFromStorage()}`;
  princessWins.textContent = `Wins: ${game.human.retreiveFromStorage()}`;
}

function displayWinnerAndScore() {
  displayScore();
  if (game.human.isWinner === true) {
    gameChosen.innerText = "Princess Mononoke is the Winner!!";
  } else if (game.computer.isWinner === true) {
    gameChosen.innerText = "Turnip Head is the Winner!!";
  } else {
    gameChosen.innerText = "It's a Draw!!";
  }

  }

  function displayEndOfGameCharacter() {
    humanWinner.classList.add(game.human.choice);
    computerWinner.classList.add(game.computer.choice);
    hide(gameboard);
    show(winnersSection);
  }
