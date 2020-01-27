// let spaces = document.querySelectorAll('.space');
// let board = new Board();
// let player1 = 'X';
// let player2 = 'O';

//  for(let i = 0; i < spaces.length; i++) {
//   spaces[i].addEventListener('click', () => {
//     board.markBoard();
//   });
// }

const game = new Game();
let spaces = document.querySelectorAll('.space');
let counter = 0;
let message = document.getElementById('message');

function play() {
  for(let i = 0; i < spaces.length; i++) {
    spaces[i].addEventListener('click', (e) => {
      e.target.innerHTML = game.players[counter].symbol;

      let squareNum = e.target.id;
      console.log(squareNum)

      game.board.board[squareNum].playerTurn();
      game.board.winningConditions();

      if (counter == 0) {
       counter = 1;
      }
      else {
       counter = 0;
      }
    });
  }
}


function winner() {
  let winner = game.players[counter].symbol;
  message.innerHTML = `${winner} wins!`;
}


function tie() {
  message.innerHTML = 'It\'s a tie!';
}


function playAgain() {
  let button = document.getElementById('restart');
  button.addEventListener('click', () => {
  for (let i = 0; i < 9; i++) {
    document.querySelectorAll('.space')[i].innerHTML = "";
  }
  message.innerHTML = "";
  game = new Game();
  });
}


play();
playAgain();