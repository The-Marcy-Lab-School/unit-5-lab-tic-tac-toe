const playerOne = 'X';
const playerTwo = 'O';
let playerTurn;
let movesMade = 0;
// Grabs the div elements and add event listener for each click
const cell = document.querySelectorAll('.cell');
cell.forEach((cell)=>{
  cell.addEventListener('click', handleClick, {once: true});
});

//Place Mark,Check for Win, Check For Draw, Switch Turn
function handleClick(e){
  const cell = e.target;
  cell.innerText = playerTurn ? playerTwo : playerOne;
  swapTurn();
  if(movesMade >= 4 && movesMade !== 9){
    cellClick();
    declareWinner();
    checkForWinner();
  }
  movesMade += 1
}

const board = ['', '', '', '', '', '', '', '', ''];
const winningConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];



let winner = document.querySelector('.winner');
let cellClick = () => {cell.forEach((cell,id)=>{
  return board.splice(id,1,cell.innerText);
  });
}
function checkForWinner(){
  winner.innerText = ` Winner: ${board[declareWinner()[0]]} wins`;
}
  
function declareWinner(){
  return winningConditions.find(function(combo){
    if (board[combo[0]] !== "" && board[combo[1]] !== "" && board[combo[2]] !== "" && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]){
      return board[combo[0]];
    } else{
      return false
    }
  });
}  

function swapTurn(){
  playerTurn = !playerTurn;
}
