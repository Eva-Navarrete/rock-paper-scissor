class Game {
  constructor(humanPlayer, compPlayer) {
    this.human = new Player(humanPlayer);
    this.computer = new Player(compPlayer);
    this.type = 'Classic' || 'Difficult';
  }

  chooseGame() {
    // which game type is chosen 'classic' or 'difficult'
  }
  chooseToken() {
    // pass in the players instance since they're choosing a game token.
    // which game token is being chosen.
    // will need conditionals of which game token beats the other
  }

  checkWinner() {
    //check for winner based on conditionals from chooseToken()
  }

}
