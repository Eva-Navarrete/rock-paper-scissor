class Game {
  constructor(humanPlayer, compPlayer, type) {
    this.human = new Player(humanPlayer);
    this.computer = new Player(compPlayer);
    this.type = type;
    // this property whenever game is started will be assigned
    // this.possibleToken = [add all five tokens in here first put the 3 easy tokens then the last two that make it difficult if a game .typ = doffcicult use all 5 if its classic use first 3];
  }

  // chooseGame() {
  //   // which game type is chosen 'classic' or 'difficult'
    // might NOT NEED THIS METHOD IF I HAVE thhis.type property.
  //
  // }

  chooseToken() {
    console.log('hello');
    // pass in the players instance since they're choosing a game token.
    // which game token is being chosen.
    // will need conditionals of which game token beats the other
  }

  checkWinner() {
    //check for winner based on conditionals from chooseToken()
    // have condition for DRAW in game

  }
  resetBoard() {

    // setTimeOut or setInterval is DOM it will need to be in main.js
  }

}
