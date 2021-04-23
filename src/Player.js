class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.turn = false;
    this.wins = 0;
  }
  saveToStorage() {
    // I need to have the players information/properties saved to local storage
  }
  retreiveFromStorage() {
    // I need to show what the players selection/value of properties are. by retrieving from local storage
  }
  takeTurn() {
    // pass in another player instance into this function and compare their turn values. conditional if player one true other false and vice versa
    // reassign this.turn = true;
  }

}
