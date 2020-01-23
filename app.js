const tableBody = document.getElementById('game-board');


const tableCells = document.getElementsByTagName('td');
for (let i = 0; i < tableCells.length; i++) {
    tableCells[i].addEventListener('click', () => {
        console.log(`Clicked ${tableCells[i].innerHTML}`)
        // gameMaster.fillCell()
        // gameMaster.updateBoard
    })
}
