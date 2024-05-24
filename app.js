let player_one = prompt('Player one, what is your name?')
let player_two = prompt('Player two, what is your name?')
let game = new Game(player_one, player_two)
let p1Title = document.getElementById('playerOne')
let p2Title = document.getElementById('playerTwo')
p1Title.innerText = `${game.playerOne.name}: ${game.playerOne.score}`
p2Title.innerText =`${game.playerTwo.name}: ${game.playerTwo.score}`
let player = 0
for(let i = 0; i < 10; i += 1){
    let element = document.getElementById(i)
    element.addEventListener('click', function(){
        if(player % 2 === 0 && element.innerHTML === ''){
            element.innerHTML = `<img src='${game.playerOne.move}'>`
            game.playerOne.makeMove(element.id)
            game.checkBoard(player)
            player += 1
            console.log(player)
        }
        if(player % 2 !== 0 && element.innerHTML === ''){
            element.innerHTML = `<img src='${game.playerTwo.move}'>`
            game.playerTwo.makeMove(element.id)
            game.checkBoard(player)
            player += 1
            console.log(player)
        }
    })
}

