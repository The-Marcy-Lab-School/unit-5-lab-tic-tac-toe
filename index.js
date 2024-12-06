let turn = true;
let squares
let playerTurn
let winnerFound = false;

document.addEventListener('DOMContentLoaded', loadGame);

function loadGame() {
    squares = document.getElementsByClassName("square");
    playerTurn = document.getElementById("playerTurn");
 
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
      playerMove(squares[i])
    });
  }
  document.getElementById("clear").addEventListener("click", clearBoard);
  displayTurn();
  
}



function clearBoard() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = '';
    squares[i].classList.remove('playerMoved');
  }
  turn = true;
  winnerFound = false;
  displayTurn();
}



function displayTurn() {
  if (turn) {
    playerTurn.textContent = "X's turn";
  } else {
    playerTurn.textContent = "O's turn";
  }

}



function playerMove(square) {
  if (winnerFound) {
    return
  }
  if (square.childElementCount !== 0) {
    return
  }
  const playerMark = document.createElement('div');
  if (turn) {
    playerMark.textContent = 'X'
  } else {
    playerMark.textContent = 'O'
  }
  square.appendChild(playerMark);
  square.classList.add('playerMoved');
  turn = !turn;
  checkWinner();
  displayTurn();
      console.log('loaded');

}



function checkWinner() {
  for (let x = 0; x < 9; x += 3) {
    if (getPos(x) === getPos(x + 1) && getPos(x) === getPos(x + 2)) {
      alert(getPos(x) + " won!");
      winnerFound = true;
    }
  }
  for (let x = 0; x < 3; x += 1) {
    if (getPos(x) === getPos(x + 3) && getPos(x) === getPos(x + 6)) {
      alert(getPos(x) + " won!");
      winnerFound = true;
    }
  }
  if (getPos(0) === getPos(4) && getPos(0) === getPos(8)) {
    alert(getPos(0) + " won!");
    winnerFound = true;
  }
  if (getPos(2) === getPos(4) && getPos(2) === getPos(6)) {
    alert(getPos(2) + " won!");
    winnerFound = true;
  }
}



function getPos(index) {
  if (squares[index].childElementCount === 0) {
    return index
  }
  return squares[index].textContent;
}