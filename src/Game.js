class Game {
  constructor(gameType) {
    this.human = new Player('Princess Mononoke', '👸🏽');
    this.computer = new Player('Turnip head', '🥚')
    this.gameType = gameType;
    this.fighter = ['calcifer', 'spritz', 'haku', 'face', 'totoro'];


  }


  chooseGameType() {
    var chooseGame = (this.gameType === 'Classic') ? this.fighter = ['calcifer', 'spritz', 'haku']: this.fighter = ['calcifer', 'spritz', 'haku', 'face', 'totoro'];

  }

  chooseRandomIndex() {
    var randomIndex = Math.floor(Math.random() * this.fighter.length);
    this.computer.choice = this.fighter[randomIndex];
    return this.computer.choice;
  }

  playClassicGame() {
    if ((this.human.choice === 'haku' && this.computer.choice === 'calcifer') || (this.human.choice === 'spritz' && this.computer.choice === 'haku') || (this.human.choice === 'calcifer' && this.computer.choice === 'spritz')) {
      this.human.isWinner = true;
      this.human.totalWins += 1
      this.human.saveToStorage();
    } else if ((this.computer.choice === 'haku' && this.human.choice === 'calcifer') || (this.computer.choice === 'spritz' && this.human.choice === 'haku') || (this.computer.choice === 'calcifer' && this.human.choice === 'spritz')) {
      this.computer.isWinner = true;
      this.computer.totalWins += 1;
      this.computer.saveToStorage();
    } else if (this.human.choice === this.computer.choice) {
      this.isWinner = null;
      // this.human.saveToStorage();
      // this.computer.saveToStorage();
    }
  }

  playDifficultGame() {
    if ((this.human.choice === 'haku' && this.computer.choice === 'calcifer') || (this.human.choice === 'haku' && this.computer.choice === 'face') || (this.human.choice === 'spritz' && this.computer.choice === 'haku') || (this.human.choice === 'spritz' && this.computer.choice === 'totoro') || (this.human.choice === 'calcifer' && this.computer.choice === 'spritz') || (this.human.choice === 'calcifer' && this.computer.choice === 'face') || (this.human.choice === 'face' && this.computer.choice === 'spritz') || (this.human.choice === 'face' && this.computer.choice === 'totoro') || (this.human.choice === 'totoro' && this.computer.choice === 'calcifer') || (this.human.choice === 'totoro' && this.computer.choice === 'haku')) {
      this.human.isWinner = true;
      this.human.totalWins += 1;
      this.human.saveToStorage();
    } else if ((this.computer.choice === 'haku' && this.human.choice === 'calcifer') || (this.computer.choice === 'haku' && this.human.choice === 'face') || (this.computer.choice === 'spritz' && this.human.choice === 'haku') || (this.computer.choice === 'spritz' && this.human.choice === 'totoro') || (this.computer.choice === 'calcifer' && this.human.choice === 'spritz') || (this.computer.choice === 'calcifer' && this.human.choice === 'face') || (this.computer.choice === 'face' && this.human.choice === 'spritz') || (this.computer.choice === 'face' && this.human.choice === 'totoro') || (this.computer.choice === 'totoro' && this.human.choice === 'calcifer') || (this.computer.choice === 'totoro' && this.human.choice === 'haku')) {
      this.computer.isWinner = true;
      this.computer.totalWins += 1;
      this.computer.saveToStorage();
    } else if (this.human.choice === this.computer.choice) {
      this.isWinner = null;
      // this.human.saveToStorage();
      // this.computer.saveToStorage();
    }
  }

  resetBoard(resetFunk) {
    this.human.isWinner = false;
    this.computer.isWinner = false;
    this.human.choice = null;
    this.computer.choice = null;
    setTimeout(resetFunk, 2000);
  }
}
