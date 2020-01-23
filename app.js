const tableBody = document.getElementById('game-board');
const gameMaster = new GameMaster()




const tableCells = document.getElementsByTagName('td');
for (let i = 0; i < tableCells.length; i++) {
    tableCells[i].addEventListener('click', () => {
        gameMaster.fillCell(tableCells[i], i);
        gameMaster.updateBoard(tableCells);
        console.log(gameMaster.matrix);
    })
}

// const clearButton = document.getElementById('clear');
// clearButton.addEventListener('click', gameMaster.clearBoard(tableCells))
