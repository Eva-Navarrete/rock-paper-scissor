
class Game {
  constructor(gameType) {
    this.human = new Player('Princess Mononoke', '👸🏽');
    this.computer = new Player('Turnip head', '🥚')
    this.gameType = gameType;
    this.fighter = ['calcifer', 'spritz', 'haku', 'noFace', 'totoro'];


  }

  chooseRandomIndex() {

    var randomIndex = Math.floor(Math.random() * this.fighter.length);
    this.computer.choice = this.fighter[randomIndex];
    return this.computer.choice;

  }
  chooseGameType() {
    if (this.gameType === 'Classic') {
      this.fighter = ['calcifer', 'spritz', 'haku'];
      console.log(this.fighter);
    } else if (this.gameType === 'Difficult') {
      this.fighter;
    }
  }

  playClassicGame() {
    if (this.human.choice === 'haku' && this.computer.choice === 'calcifer') {
      this.human.isWinner = true;
      this.human.totalWins +=1;
    } else if (this.human.choice === 'spritz' && this.computer.choice === 'haku') {
      this.human.isWinner = true;
      this.human.totalWins +=1;
    } else if (this.human.choice === 'calcifer' && this.computer.choice === 'spritz') {
      this.human.isWinner = true;
      this.human.totalWins +=1;
    } else if (this.computer.choice === 'haku' && this.human.choice === 'calcifer'){
      this.computer.isWinner = true;
      this.computer.totalWins +=1;
    }else if (this.computer.choice === 'spritz' && this.human.choice === 'haku'){
      this.computer.isWinner =true;
      this.computer.totalWins += 1;
    }else if (this.computer.choice === 'calcifer' && this.human.choice === 'spritz') {
      this.computer.isWinner = true;
      this.computer.totalWins += 1;
    } else if (this.human.choice === this.computer.choice){
      this.isWinner = null;
    }
// console.log(this.computer);
// console.log(this.human);
  }



  playDifficultGame() {
    if (this.human.choice === 'haku' && this.computer.choice === 'calcifer' || this.computer.choice === 'noFace') {
    this.human.isWinner = true;
    this.human.totalWins +=1;
  } else if (this.human.choice === 'spritz' && this.computer.choice === 'haku' || this.computer.choice === 'totoro') {
    this.human.isWinner = true;
    this.human.totalWins +=1;
  } else if (this.human.choice === 'calcifer' && this.computer.choice === 'spritz' || this.computer.choice === 'noFace') {
    this.human.isWinner = true;
    this.human.totalWins +=1;
  } else if (this.human.choice === 'noFace' && this.computer.choice === 'spritz' || this.computer.choice === 'totoro'){
    this.human.isWinner = true;
    this.human.totalWins +=1;
  }else if (this.human.choice === 'totoro' && this.computer.choice === 'calcifer' || this.computer.choice === 'haku'){
    this.human.isWinner =true;
    this.human.totalWins += 1;
  } else if (this.computer.choice === 'haku' && this.human.choice === 'calcifer' || this.human.choice === 'noFace') {
  this.computer.isWinner = true;
  this.computer.totalWins +=1;
} else if (this.computer.choice === 'spritz' && this.human.choice === 'haku' || this.human.choice === 'totoro') {
  this.computer.isWinner = true;
  this.computer.totalWins +=1;
} else if (this.computer.choice === 'calcifer' && this.human.choice === 'spritz' || this.human.choice === 'noFace') {
  this.computer.isWinner = true;
  this.computer.totalWins +=1;
} else if (this.computer.choice === 'noFace' && this.human.choice === 'spritz' || this.human.choice === 'totoro'){
  this.computer.isWinner = true;
  this.computer.totalWins +=1;
}else if (this.computer.choice === 'totoro' && this.human.choice === 'calcifer' || this.human.choice === 'haku'){
  this.computer.isWinner =true;
  this.computer.totalWins += 1;
  } else if (this.human.choice === this.computer.choice) {
  this.isWinner = null;
}
  }

  checkWinner() {
    //check for winner based on conditionals from chooseToken()
    // have condition for DRAW in game

  }
  resetBoard(resetFunk) {
    this.human.isWinner = false;
    this.computer.isWinner = false;
    this.human.choice = null;
    this.computer.choice = null;
    setTimeout(resetFunk, 3000);

    // setTimeOut or setInterval is DOM it will need to be in main.js
  }

}
