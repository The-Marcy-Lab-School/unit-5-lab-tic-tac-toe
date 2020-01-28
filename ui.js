class UI {
    constuctor() {
        this.board;
        this.player1 = "X";
        this.player2 = "O";
        this.winningCombos = [
                            [0, 1, 2], 
                            [3, 4, 5],
                        	[6, 7, 8],
                        	[0, 3, 6],
                        	[1, 4, 7],
                        	[2, 5, 8],
                        	[0, 4, 8],
                        	[6, 4, 2]
	];
	this.turnClick = turnClick();
	this.turn = turn();
	this.cells = document.querySelectorAll('.cell');
    }
    
    
    startGame() {
    	document.querySelector(".endgame").style.display = "none";
    	let origBoard = Array.from(Array(9).keys());
    	for (var i = 0; i < this.cells.length; i++) {
    		this.cells[i].innerText = '';
    		this.cells[i].style.removeProperty('background-color');
    		this.cells[i].addEventListener('click', this.turnClick, false);
    	    
    	}
    }
    
    turnClick(square) {
        this.turn(square.target.id, this.player1);
    }
    
    turn(squareId, player) {
	origBoard[squareId] = player;
	document.getElementById(squareId).innerText = player;
}
}
