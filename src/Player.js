class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.choice = null;
    this.totalWins = 0;
    this.isWinner = false;
  }
  saveToStorage() {
    localStorage.setItem(`${this.totalWins}`, JSON.stringify(this));
    console.log(this);
  }
  retreiveFromStorage() {
    // I need to show what the players selection/value of properties are. by retrieving from local storage
  }
  takeTurn() {

    // pass in another player instance into this function and compare their turn values. conditional if player one true other false and vice versa
    // reassign this.turn = true;
  }

}


// module.exports = Player;
