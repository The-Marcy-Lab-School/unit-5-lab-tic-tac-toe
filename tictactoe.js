class Player{
    constructor(username, player, charm){
        this.username = username;
        this.player = player;
        this.charm = charm;
        let board = [[],[],[]];
    }
    
    markSpot(row, col){
        for(let i = 0; i < 3; i++){
            for (let j =0; j < 3; j++){
                if(typeof this.board[i][j] === 'undefined'){
                return "This place is taken";
                }
                this.board.i.push(this.charm);
            }
        }
    }
}