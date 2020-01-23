class GameMaster {
    constructor() {
        this.moveCount = 0;
        this.moves = '';
    }

    fillCell(cell, cellNum) {
        // if (this.matrix[cellNum == undefined]) {
        cell.innerHTML = (this.moveCount % 2 === 0) ? `<i class="fas fa-times fa-2x"></i>` : `<i class="far fa-circle fa-2x"></i>`;
        this.moveCount += 1;

        this.matrix[cellNum] = (this.moveCount % 2 === 0) ? 'o' : 'x';
        // }
    }

    updateBoard() {
        //minimum number of moves to win
        const cells = this.matrix
        if (cells.length >= 5) {
            if (cells[0] === cells[1] && cells[1] === cells[2]) {
                console.log(`Player ${cells[0].toUpperCase()} wins!`)
            }
        }
    }

    clearBoard(cells) {
        for (let cell = 0; cell < cells.length; cell++) {
            cells[cell].innerHTML = '';
        }
    }
}
