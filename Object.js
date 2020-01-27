class Board {
  constructor(onWinner, onTie) {
    this.print_winner = onWinner;
    this.print_tie = onTie;
    this.grid = [
      [new Square(), new Square(), new Square()],
      [new Square(), new Square(), new Square()],
      [new Square(), new Square(), new Square()]
    ];
  }

  isFull() {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.grid[i][j].state != "") { count++ }
      }
    }
    if (count == 9) {
      return true;
    }
    else {
      return false;
    }
  }

  getAdjacentCooords(x, y, direction){
    switch(direction){
      case "v": x++; break;
      case "h": y++; break;
      case "dd": x++; y++; break;
      case "da": x++; y--; break;
    }
    return {x:x, y:y};
  }

  getAdjacentSquareState(x, y, direction){
    var coords = this.getAdjacentCooords(x, y, direction);
    if(!this.grid[coords.x] || 
      !this.grid[coords.x][coords.y] || 
      this.grid[coords.x][coords.y].state === "") return false;
    return this.grid[coords.x][coords.y].state;
  }

  getSquenceCountStartingAt(x, y, direction){
    var sequence = 1;
    var state = this.grid[x][y].state;
    while(true){
      var nextState = this.getAdjacentSquareState(x, y, direction);
      if(state === nextState && nextState !== false) sequence++;
      else break;
      var coords = this.getAdjacentCooords(x, y, direction);
      x = coords.x; y = coords.y;
    }
    return sequence;
  }

  check_win() {

    var total_squares = 3;

    // vertical
    for (let i = 0; i < total_squares; i++) {
      if(this.getSquenceCountStartingAt(0, i, 'v') === total_squares) return this.print_winner();
    }

    // horizontal
    for (let i = 0; i < total_squares; i++) {
      if(this.getSquenceCountStartingAt(i, 0, 'h') === total_squares) return this.print_winner();
    }

    // diagonal ascending
    if(this.getSquenceCountStartingAt(0, 0, 'da') === total_squares) return this.print_winner();
    
    // diagonal descending
    if(this.getSquenceCountStartingAt(0, total_squares-1, 'dd') === total_squares) return this.print_winner();

    if (this.isFull()) {
      return this.print_tie();
    }

  }
}


class Square {
  constructor(state) {
    this.state = "";
  }

  whoseTurn() {
    if (counter == 0) {
      return this.state = "x";
    }
    else {
      return this.state = "o";
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
    this.board = new Board(function () {
      let winner = g.players[counter].symbol;
      console.log(`${winner} wins`);
    }, function () {
      console.log("It's a tie");
    });
    this.players = [
      new Player("x"),
      new Player("o")
    ];
  }
}