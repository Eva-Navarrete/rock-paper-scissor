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

  }
  
  retreiveFromStorage() {
  var result = JSON.parse(localStorage.getItem(`${this.name}`));
  return result;

  }
}
