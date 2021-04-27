class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.choice = null;
    this.totalWins = 0;
    this.isWinner = false;
  }

  calculateWins() {
    this.totalWins ++;
  }

  saveToStorage() {
    localStorage.setItem(`${this.totalWins}`, JSON.stringify(this));
    // var result = {
    //   princessWins: 0,
    //   compWins: 0,
    // }
    // if (this.name === 'Princess Mononoke') {
    //   result.princessWins = this.totalWins;
    // } else {
    //   result.compWins = this.totalWins;
    // }
    // console.log(result);
    // localStorage.setItem('totalWins',JSON.stringify(result));
    // console.log()
  }
  retreiveFromStorage() {
  var result = JSON.parse(localStorage.getItem(`${this.name}`));
  return result;

    // I need to show what the players selection/value of properties are. by retrieving from local storage
  }

  // takeTurn() {
  //
  //   // pass in another player instance into this function and compare their turn values. conditional if player one true other false and vice versa
  //   // reassign this.turn = true;
  // }

}


// module.exports = Player;
