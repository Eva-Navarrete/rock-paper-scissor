
class Game {
  constructor(gameType) {
    this.human = new Player('Princess Mononoke', '👸🏽');
    this.computer = new Player('Turnip head', '🥚')
    this.gameType = gameType;
    // this property whenever game is started will be assigned
    this.fighter = ['calcifer', 'spritz', 'haku', 'noFace', 'totoro'];
    // this.humanWeapon = null;
    // this.computerWeapon = null;


    // add all five tokens in here first put the 3 easy tokens then the last two that make it difficult if a game this.type = diffcicult use all 5 if its classic use first 3
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

  playClassicGame(chooseRandomIndex) {
    if (this.human.choice === 'haku' && this.computer.choice === 'calcifer') {
      this.human.isWinner = true;
    } else if (this.human.choice === 'spritz' && this.computer.choice === 'haku') {
      this.human.isWinner = true;
    } else if (this.human.choice === 'calcifer' && this.computer.choice === 'spritz') {
      this.human.isWinner = true;
    } else if (this.computer.choice === 'haku' && this.human.choice === 'calcifer'){
      this.computer.isWinner = true;
    }else if (this.computer.choice === 'spritz' && this.human.choice === 'haku'){
      this.computer.isWinner =true;
    }else if (this.computer.choice === 'calcifer' && this.human.choice === 'spritz') {
      this.computer.isWinner = true;
    } else if (this.human.choice === this.computer.choice){
      this.isWinner = null;
    }

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
