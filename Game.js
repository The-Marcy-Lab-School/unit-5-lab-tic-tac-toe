class Square {
  constructor(state) {
    this.state = "";
  }

  playerTurn() {
    if (counter === 0) {
      return this.state = "X";
    }
    else {
      return this.state = "O";
    }
  }
}

class Board {
	  constructor(board = [new Square(), new Square(), new Square(), new Square(), new Square(), new Square(), new Square(), new Square(), new Square()]) {
      this.board = board;
    }

    isFull() {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (this.board[i].state != "") {
        count += 1;
      }
    }
    if (count == 9) {
      return true;
    }
    else {
      return false;
    }
  }

  winningConditions() {
    //Horizontal
    if(this.board[0].state == this.board[1].state && this.board[0].state == this.board[2].state && this.board[0].state) {
    	winner();
    }
    if(this.board[3].state == this.board[4].state && this.board[3].state == this.board[5].state && this.board[3].state) {
    	winner();
    }
    if(this.board[6].state == this.board[7].state && this.board[6].state == this.board[8].state && this.board[6].state) {
    	winner();
    }

    //Vertical
    if(this.board[0].state == this.board[3].state && this.board[0].state == this.board[6].state && this.board[0].state) {
    	winner();
    }
    if(this.board[1].state == this.board[4].state && this.board[1].state == this.board[7].state && this.board[1].state) {
    	winner();
    }
    if(this.board[2].state == this.board[5].state && this.board[2].state == this.board[8].state && this.board[2].state) {
    	winner();
    }

    //Diagonal
    if(this.board[0].state == this.board[4].state && this.board[0].state == this.board[8].state && this.board[0].state) {
    	winner();
    }
    if(this.board[2].state == this.board[4].state && this.board[2].state == this.board[6].state && this.board[2].state) {
    	winner();
    }
    if(this.isFull()) {
      tie();
    }
  }
}

class Player {
  constructor(symbol) {
    this.symbol = symbol;
  }
}

class Game {
  constructor() {
    this.board = new Board();
    this.players = [
      new Player("X"),
      new Player("O")
    ];
  }
}