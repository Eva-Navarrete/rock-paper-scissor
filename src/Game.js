
class Game {
  constructor(gameType) {
    this.human = new Player('Princess Mononoke', '👸🏽');
    this.computer = new Player('Turnip head', '🥚')
    this.gameType = gameType;
    // this property whenever game is started will be assigned
    this.fighter = ['calcifer', 'spritz', 'haku', 'noFace', 'totoro'];
    this.humanWeapon = null;
    this.computerWeapon = null;


    // add all five tokens in here first put the 3 easy tokens then the last two that make it difficult if a game this.type = diffcicult use all 5 if its classic use first 3
  }


  // chooseGame() {
  //   // which game type is chosen 'classic' or 'difficult'
    // might NOT NEED THIS METHOD IF I HAVE thhis.type property.
  //
  // }
  //
  chooseRandomIndex(fighter) {

    var randomIndex = Math.floor(Math.random() * this.fighter.length);
    this.computerWeapon = this.fighter[randomIndex];
    console.log(this.fighter);
    return this.computerWeapon;
  
      //pass in the token choice's for computer for both classic and difficult game.
  }

  playClassicGame(choice) {
    // console.log(this.fighter);
    // console.log(this.human);
    // console.log(this.computer);
    choice = this.fighter;
    // /calciferFighter
    // pass in the players instance since they're choosing a game token.
    // which game token is being chosen.
  //   function results (choice) {
  // if ( == choice){
  //   //console.log('inside IF', choice)
  //   return console.log("It's a DRAW!");
  // } else if (choices[randomIndex] == "haku" && choice == "calcifer") {
  //   //console.log('inside ELSE IF #1', choice)
  //   return console.log("You lost!");
  // } else if (choices[randomIndex] == "calcifer" && choice == "spritz") {
  //   //console.log('inside ELSE IF #2', choice)
  //   return console.log("You lost!");
  // } else if (choices[randomIndex] == "spritz" && choice == "haku") {
  //   //console.log('inside ELSE IF #3', choice)
  //   return console.log("You lost!");
  // } else if (choices[randomIndex] == "calcifer" && choice == "haku") {
  //   //console.log('inside ELSE IF #4', choice)
  //   return console.log("Congratulations! You won!");
  // } else if (choices[randomIndex] == "spritz" && choice == "calcifer") {
  //   //console.log('inside ELSE IF #5', choice)
  //   return console.log("Congratulations! You won!");
  // } else if (choices[randomIndex] == "haku" && choice == "spritz") {
  //   //console.log('inside ELSE IF #6', choice)
  //   return console.log("Congratulations! You won!");
  // }
  //
  //
  //   // will need conditionals of which game token beats the other
  }

  displayDifficultGame() {

  }

  checkWinner() {
    //check for winner based on conditionals from chooseToken()
    // have condition for DRAW in game

  }
  resetBoard() {

    // setTimeOut or setInterval is DOM it will need to be in main.js
  }

}
