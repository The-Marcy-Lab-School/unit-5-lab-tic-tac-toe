class GameMaster {
    constructor() {
        this.moveCount = 0;
        this.moves = ['', '', '', '', '', '', '', '', ''];
        this.xSym = `<i class="fas fa-times fa-2x"></i>`
        this.oSym = `<i class="far fa-circle fa-2x"></i>`
        this.winner = ''
    }

    markMove(cell, cellNum) {
        if (this.moves[cellNum] == '') {
            this.moveCount += 1;
            this.moves[cellNum] = (this.moveCount % 2 === 0) ? 'o' : 'x';
        }
    }

    updateBoard(cells) {
        for (let cell = 0; cell < cells.length; cell++) {
            if (this.moves[cell] === 'x') {
                cells[cell].innerHTML = this.xSym
            }
            else if (this.moves[cell] === 'o') {
                cells[cell].innerHTML = this.oSym
            }
        }
        this.findWinner()
    }

    findWinner() {
        const board = this.moves
        if (this.moveCount >= 5 && this.moveCount !== 9) {
            // horizontal wins
            if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
                this.winner = board[0];
                this.declareWinner();
            }

            if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
                this.winner = board[3];
                this.declareWinner();
            }

            if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
                this.winner = board[6];
                this.declareWinner();
            }

            // diagonal wins
            if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
                this.winner = board[0];
                this.declareWinner();
            }

            if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
                this.winner = board[2];
                this.declareWinner();
            }
            // vertical wins
            if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
                this.winner = board[0];
                this.declareWinner();
            }

            if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
                this.winner = board[1];
                this.declareWinner();
            }

            if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
                this.winner = board[2];
                this.declareWinner();
            }
        }
        if (this.moveCount === 9) {
            this.winner = 'draw'
            this.declareWinner();
        }
    }

    declareWinner() {
        winner.innerHTML += `${this.winner.toUpperCase()}!!`;
    }

    clearBoard(cells) {
        for (let cell = 0; cell < cells.length; cell++) {
            cells[cell].innerHTML = '';
            this.moves[cell] = ''
        }
        this.moveCount = 0;
        this.winner = ''
        winner.innerHTML = `Winner: `;
    }
}
