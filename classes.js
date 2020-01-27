class Game{
    constructor(playerOneName, playerTwoName){
        this.playerOne = new Player(playerOneName)
        this.playerTwo = new Player(playerTwoName)
        this.playerOne.move = 'x.png'
        this.playerTwo.move = 'o.png'
        this.board = ['', '', '', '', '', '', '', '', '']
        this.posTracker = {}
        this.winner = null
    }
    checkBoard(candidate){

        for(let position in this.board){
            this.posTracker[position] = this.board[position] 
        }
        //Checks each row to see if a player won
        if(this.posTracker['0'] === this.posTracker['1'] && this.posTracker['0'] === this.posTracker['2'] && this.posTracker['0'] !== ''){
            candidate % 2 === 0 ? game.playerOne.score += 1 : game.playerTwo.score += 1
            this.gameOver() 
        }
        if(this.posTracker['3'] === this.posTracker['4'] && this.posTracker['3'] === this.posTracker['5'] && this.posTracker['3'] !== ''){
            candidate % 2 === 0 ? game.playerOne.score += 1 : game.playerTwo.score += 1
            this.gameOver()
        }
        if(this.posTracker['6'] === this.posTracker['7'] && this.posTracker['6'] === this.posTracker['8'] && this.posTracker['6'] !== ''){
            candidate % 2 === 0 ? game.playerOne.score += 1 : game.playerTwo.score += 1
            this.gameOver()
        }
        //Checks each diagonal row to see if a player won
        if(this.posTracker['0'] === this.posTracker['4'] && this.posTracker['0'] === this.posTracker['8'] && this.posTracker['0'] !== ''){
            candidate % 2 === 0 ? game.playerOne.score += 1 : game.playerTwo.score += 1
            this.gameOver()
        }
        if(this.posTracker['2'] === this.posTracker['4'] && this.posTracker['2'] === this.posTracker['6'] && this.posTracker['2'] !== ''){
            candidate % 2 === 0 ? game.playerOne.score += 1 : game.playerTwo.score += 1
            this.gameOver()
        }
        //Checks each column to see if a player won
        if(this.posTracker['0'] === this.posTracker['3'] && this.posTracker['0'] === this.posTracker['6'] && this.posTracker['0'] !== ''){
            candidate % 2 === 0 ? game.playerOne.score += 1 : game.playerTwo.score += 1
            this.gameOver()
        }
        if(this.posTracker['1'] === this.posTracker['4'] && this.posTracker['1'] === this.posTracker['7'] && this.posTracker['1'] !== ''){
            candidate % 2 === 0 ? game.playerOne.score += 1 : game.playerTwo.score += 1
            this.gameOver()
        }
        if(this.posTracker['2'] === this.posTracker['5'] && this.posTracker['2'] === this.posTracker['8'] && this.posTracker['2'] !== ''){
            candidate % 2 === 0 ? game.playerOne.score += 1 : game.playerTwo.score += 1
            this.gameOver()
        }
        //Checks to see if there is a draw
        if(candidate >= 8){
            console.log('Draw game')
            this.gameOver()
        } 
        
    }
    
    gameOver(){
        this.board = ['', '', '', '', '', '', '', '', '']
        for(let i = 0; i < 10; i += 1){
            let element = document.getElementById(i)
             p1Title.innerText = `${game.playerOne.name}: ${game.playerOne.score}`
            p2Title.innerText =`${game.playerTwo.name}: ${game.playerTwo.score}`
            player = 0
            element.innerHTML = ''
            if(game.playerOne.score >= 3){
                document.body.innerHTML = '<h1>GAME</h1>'
            }   
        }
    }
    
}

class Player{
    constructor(name){
        this.name = name
        this.score = 0
    }
    makeMove(index){
        game.board.splice(index, 1, this.move)
    }
}





