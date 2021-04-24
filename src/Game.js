
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


  // chooseGame() {
  //   // which game type is chosen 'classic' or 'difficult'
    // might NOT NEED THIS METHOD IF I HAVE thhis.type property.
  //
  // }
  //
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
  //pass in the token choice's for computer for both classic and difficult game. this.frigher = ['haku',]
  //
  // fight(event) {
  //   this.humanWeapon = (event.target.id)
  //
  //   // var fighters = this.fighter;
  //   // var humanWeapon = this.humanWeapon;
  //   //
  //   // humanWeapon = fighter(event.target.id);
  //
  //   // if (event.target.id === 'calcifer') {
  //   //   this.humanWeapon
  //   // } else if (event.target.id === 'haku') {
  //   //   this.humanWeapon
  //   // } else if (event.target.id === 'spritz') {
  //   //   this.humanWeapon
  //   // }
  //
  // }

  // make a method which checks gametype if its difficult you get all five if its classic you get 3


  playClassicGame() {
      if (this.human.choice === 'haku' && this.computer.choice === 'calcifer') {
        this.human.isWinner = true;
        console.log('1st',this.human);
      } else if (this.human.chocie === 'spritz' && this.computer.choice === 'haku') {
        this.human.isWinner = true;
        console.log('2nd',this.human);
      } else if (this.humanWeapon === 'calcifer' && this.computerWeapon === 'spritz') {
        this.human.isWinner = true;
        console.log('3rd',this.human);
      }

    // /calciferFighter
    // pass in the players instance since they're choosing a game token.
    // which game token is being chosen.
  //   function results (choice) {

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
