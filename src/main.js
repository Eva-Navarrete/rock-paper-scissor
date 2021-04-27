
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
// var humanPlayer = document.getElementById('humanPlayer')
// var compPlayer = document.getElementById('humanPlayer');
var calciferFighter = document.getElementById('calcifer');
// var spritzFighter = document.getElementById('spritz');
// var hakuFighter = document.getElementById('haku');
var noFaceFighter = document.getElementById('face');
var totoroFighter = document.getElementById('totoro')



// // EVENT LISTENERS
classicGame.addEventListener('click', displayClassicGame);
difficultGame.addEventListener('click', displayDifficultGame);
gameboard.addEventListener('click', playGame);
changeGameBtn.addEventListener('click', displayHomeView);


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
  // game.gameType = 'Classic';
  humanWinner.classList = 'fighter';
  computerWinner.classList = 'fighter';
  gameChosen.innerText = 'Choose your FIGHTER!!';
  show(changeGameBtn);
  hide(totoroFighter);
  hide(noFaceFighter);
  hide(winnersSection);
  hide(gameSection);
  show(gameboard);
  game.chooseGameType('Classic')

}

function displayDifficultGame() {
  // game.gameType = 'Difficult';
  humanWinner.classList = 'fighter';
  computerWinner.classList = 'fighter';
  gameChosen.innerText = 'Choose your FIGHTER!!';
  show(changeGameBtn);
  hide(winnersSection);
  hide(gameSection);
  show(gameboard);
  game.chooseGameType('Difficult');
}



function playGame(event) {
  fight(event);
  game.playClassicGame();
  displayWinnerAndScore();
  // show(changeGameBtn);
  console.log(game.human);
  console.log(game.computer);
  displayEndOfGameCharacter();
  game.human.saveToStorage();
  // game.computer.saveToStorage();
  if (game.gameType === 'Classic') {
    game.resetBoard(displayClassicGame);

  } else {
  game.resetBoard(displayDifficultGame);
  }
  console.log(localStorage.getItem('totalWins'));
  let obj = JSON.parse(localStorage.getItem('totalWins'));
  console.log(obj.princessWins);

}


 function displayHomeView() {

   show(gameSection);
   hide(gameboard);
   // hide(playGameSection);
   // hide(winnersSection);
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




  function displayEndOfGameCharacter() {

    humanWinner.classList.add(game.human.choice);
    computerWinner.classList.add(game.computer.choice);


    hide(gameboard);
    show(winnersSection);



  }
