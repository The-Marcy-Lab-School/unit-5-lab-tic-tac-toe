const tableBody = document.getElementById('game-board');
const winner = document.getElementById('winner')
const gameMaster = new GameMaster()

const tableCells = document.getElementsByTagName('td');
for (let i = 0; i < tableCells.length; i++) {
    tableCells[i].addEventListener('click', () => {
        gameMaster.markMove(tableCells[i], i);
        gameMaster.updateBoard(tableCells);

        console.log(gameMaster.moves);
    })
}


// const clearButton = document.getElementById('clear');
// clearButton.addEventListener('click', gameMaster.clearBoard(tableCells))
