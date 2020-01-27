let g = new Game();

let counter = 0;

function play() {
  let bd = document.getElementById('board');
  bd.addEventListener('click', (event) => {
    // console.log(event.target);
    event.target.innerHTML = g.players[counter].symbol;

    let squareNum = event.target.id.split('');
    let row = squareNum[0];
    let col = squareNum[1];

    g.board.grid[row][col].whoseTurn();
    g.board.check_win();

    if (counter == 0) { counter = 1 }
    else { counter = 0 }
  });
}

function play_again() {
  let bt = document.getElementById('new-game');
  bt.addEventListener('click', () => {
    for (let i = 0; i < 9; i++) {
      document.querySelectorAll('.square')[i].innerHTML = "";
    }
    g = new Game();
  });
}


play();
play_again();