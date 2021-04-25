
class Game {
  constructor(gameType) {
    this.human = new Player('Princess Mononoke', '👸🏽');
    this.computer = new Player('Turnip head', '🥚')
    this.gameType = gameType;
    // this property whenever game is started will be assigned
    this.fighter = ['calcifer', 'spritz', 'haku', 'noFace', 'totoro'];


  }

  chooseRandomIndex() {

    var randomIndex = Math.floor(Math.random() * this.fighter.length);
    this.computer.choice = this.fighter[randomIndex];
    // console.log(this.fighter);
    return this.computer.choice;

  }
  chooseGameType() {
    if (gameType === 'Classic') {
      this.fighter = ['calcifer', 'spritz', 'haku'];
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
    console.log("hello World");
  }

  checkWinner() {
    //check for winner based on conditionals from chooseToken()
    // have condition for DRAW in game

  }
  resetBoard() {

    // setTimeOut or setInterval is DOM it will need to be in main.js
  }

}
