
  class Game {
  constructor(gameType) {
    this.human = new Player('Princess Mononoke', '👸🏽');
    this.computer = new Player('Turnip head', '🥚')
    this.gameType = gameType;
    this.fighter = ['calcifer', 'spritz', 'haku', 'face', 'totoro'];


  }

  chooseRandomIndex() {

    var randomIndex = Math.floor(Math.random() * this.fighter.length);
    this.computer.choice = this.fighter[randomIndex];
    return this.computer.choice;

  }
  
  chooseGameType(gType) {
    if (gType === 'Difficult') {
      this.fighter = ['calcifer', 'spritz', 'haku', 'face', 'totoro'];
    } else if (gType === 'Classic') {
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
    if ((this.human.choice === 'haku' && this.computer.choice === 'calcifer') || (this.human.choice === 'haku' && this.computer.choice === 'face')) {
    this.human.isWinner = true;
    this.human.totalWins +=1;
  }
  // second condition
  else if ((this.human.choice === 'spritz' && this.computer.choice === 'haku') || (this.human.choice === 'spritz' && this.computer.choice === 'totoro')) {
    this.human.isWinner = true;
    this.human.totalWins +=1;
  }
  //third condition
  else if ((this.human.choice === 'calcifer' && this.computer.choice === 'spritz') || (this.human.choice === 'calcifer' && this.computer.choice === 'face')) {
    this.human.isWinner = true;
    this.human.totalWins +=1;
  }
  //fourth condition
  else if ((this.human.choice === 'face' && this.computer.choice === 'spritz') || (this.human.choice === 'face' && this.computer.choice === 'totoro')){
    this.human.isWinner = true;
    this.human.totalWins +=1;
  }
  //fifth condition
  else if ((this.human.choice === 'totoro' && this.computer.choice === 'calcifer') || (this.human.choice === 'totoro' && this.computer.choice === 'haku')){
    this.human.isWinner =true;
    this.human.totalWins += 1;
  }
  //sixth condition
  else if ((this.computer.choice === 'haku' && this.human.choice === 'calcifer') || (this.computer.choice === 'haku' && this.human.choice === 'face')){
  this.computer.isWinner = true;
  this.computer.totalWins +=1;
}
//seventh condition ****************
else if ((this.computer.choice === 'spritz' && this.human.choice === 'haku') || (this.computer.choice === 'spritz' && this.human.choice === 'totoro')) {
  this.computer.isWinner = true;
  this.computer.totalWins +=1;
}
//eigth condition **************
else if ((this.computer.choice === 'calcifer' && this.human.choice === 'spritz' ) || (this.computer.choice === 'calcifer' && this.human.choice === 'face')){
  this.computer.isWinner = true;
  this.computer.totalWins +=1;
}
//ninth condition ********************
else if ((this.computer.choice === 'face' && this.human.choice === 'spritz') || (this.computer.choice === 'face' && this.human.choice === 'totoro')){
  this.computer.isWinner = true;
  this.computer.totalWins +=1;
} //tenth condition *******************
else if ((this.computer.choice === 'totoro' && this.human.choice === 'calcifer') || (this.computer.choice === 'totoro' && this.human.choice === 'haku')){
  this.computer.isWinner =true;
  this.computer.totalWins += 1;
  }
// last CONDITION BAYBAY!
  else if (this.human.choice === this.computer.choice) {
  this.isWinner = null;
}
  }


  resetBoard(resetFunk) {

    this.human.isWinner = false;
    this.computer.isWinner = false;
    this.human.choice = null;
    this.computer.choice = null;
    setTimeout(resetFunk, 1000);

    // setTimeOut or setInterval is DOM it will need to be in main.js
  }

}
