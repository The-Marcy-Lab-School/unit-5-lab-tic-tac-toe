/*----- constants -----*/
/*----- app's state (variables) -----*/

let board;
let turn = 'X'

/*----- cached element references -----*/

const tiles = Array.from(document.querySelectorAll('#board section')); // Section tag HTMLColletion to array

const messages = document.querySelector('h2');

/*----- event listeners -----*/

board.addEventListener('click', handleTurn);

/*----- functions -----*/

function init() {
    board = ['', '', '', '', '', '', '', '', ''];
    render();
    // Clears the board and logs tiles
};
init();

function render() {
    board.forEach(function(mark, index) { // mark = tile selected
        tiles[index].textContent = mark;
    })
    messages.textContent = `It's ${turn}'s turn!`;
}

function handleTurn() {
    let idx = tiles.findIndex(function(tile) {
        return tile === event.target;
    });
    board[idx] = turn;
    
    if (turn === 'X') turn = 'O' 
     else { 
         turn = 'X' 
    };
    render();
};