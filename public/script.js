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
  checkForWinner();
  declareWinner();
  console.log(cell);
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

function checkForWinner(){
  let cell = document.querySelectorAll('.cell');
  let cellClick = cell.forEach((cell,id)=>{
    return board.splice(id,1,cell.innerText);
  });
  console.log(board);
}
  
function declareWinner(){
  let results = winningConditions.find(function(combo){
    if (board[combo[0]] !== "" && board[combo[1]] !== "" && board[combo[2]] !== "" && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]){
      return true
    } else{
      return false
    }
  });
  return results;
}  


function makeWinner(){
  let results = winningConditions.find(function(combo){
    // if(movesMade >= 4 && movesMade !== 9) {
    if(board[combo[0]] !== '' && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]){
      winner.innerText = winner.innerText === playerTurn ? playerOne : playerTwo; 
    }
    if(board[combo[3]] !== '' && board[combo[3]] === board[combo[4]] && board[combo[3]] === board[combo[5]]){
      winner.innerText = winner.innerText === playerTurn ? playerOne : playerTwo; 
    }
    if(board[combo[6]] !== '' && board[combo[6]] === board[combo[7]] && board[combo[6]] === board[combo[8]]){
      winner.innerText = winner.innerText === playerTurn ? playerOne : playerTwo; 
    }
    if(board[combo[0]] !== '' && board[combo[0]] === board[combo[4]] && board[combo[0]] === board[combo[8]]){
      winner.innerText = winner.innerText === playerTurn ? playerOne : playerTwo; 
    }
    if(board[combo[2]] !== '' && board[combo[2]] === board[combo[4]] && board[combo[2]] === board[combo[6]]){
      winner.innerText = winner.innerText === playerTurn ? playerOne : playerTwo; 
    }
    if(board[combo[0]] !== '' && board[combo[0]] === board[combo[3]] && board[combo[0]] === board[combo[6]]){
      winner.innerText = winner.innerText === playerTurn ? playerOne : playerTwo; 
    }
    if(board[combo[1]] !== '' && board[combo[4]] === board[combo[1]] && board[combo[7]] === board[combo[7]]){
      winner.innerText = winner.innerText === playerTurn ? playerOne : playerTwo; 
    }
    if(board[combo[2]] !== '' && board[combo[2]] === board[combo[5]] && board[combo[2]] === board[combo[8]]){
      winner.innerText = winner.innerText === playerTurn ? playerOne : playerTwo; 
    }
  // }
  });
    return results;
}

function swapTurn(){
  playerTurn = !playerTurn;
}

let restart = document.querySelector('.restart');
