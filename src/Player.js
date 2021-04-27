class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.choice = null;
    this.totalWins = 0;
    this.isWinner = false;
  }
  saveToStorage() {
    var saveHumanWins = game.human.totalWins;
    var saveComputerWins = game.computer.totalWins;
    localStorage.setItem('princessWins', JSON.stringify(saveHumanWins));
    localStorage.setItem('turnipWIns', JSON.stringify(savedComputerWins));
    localStorage.setItem('princessWins', saveHumanWins);
    localStorage.setItem('turnipWins', saveComputerWins);
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
    var storedHumanWins = localStorage.getItem('princessWins');
    var storedComputerWins = localStorage.getItem('turnipWins');
    var humanWins = JSON.parse(storedHumanWins);
    var computerWins = JSON.parse(storedComputerWins);
    this.totalWins = humanWins;
    console.log(storedHumanWins);
    console.log(storedComputerWins);
    return humanWins;

    // I need to show what the players selection/value of properties are. by retrieving from local storage
  }
  // takeTurn() {
  //
  //   // pass in another player instance into this function and compare their turn values. conditional if player one true other false and vice versa
  //   // reassign this.turn = true;
  // }

}


// module.exports = Player;
