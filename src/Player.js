class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.choice = null;
    this.totalWins = 0;
    this.isWinner = false;
  }

  saveToStorage() {
    localStorage.setItem(`${this.name}`, JSON.stringify(this.totalWins));

  }

  retreiveFromStorage() {
    if (JSON.parse(localStorage.getItem(`${this.name}`))) {
      this.totalWins = JSON.parse(localStorage.getItem(`${this.name}`));
    } else {
      this.totalWins = 0;

      }
      return this.totalWins;
    }



}
