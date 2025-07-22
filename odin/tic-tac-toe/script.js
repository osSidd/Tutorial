"use strict"
console.log('Tic tac toe game')

const Player = function(name, marker){
    return {name, marker} 
}

const Gameboard = (function(){
    const gameboard = Array.from(new Array(9), () => undefined)

    const player1 = Player('Sam', 'x')
    const player2 = Player('John', 'o')

    return {gameboard, player1, player2}
})()

function playGame(){
    const winCombination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    let playerTurn = 1
    let moveCounter = 0

    while (true){

        if(moveCounter >= 5){
            const {result, marker} = checkWin(winCombination, Gameboard.gameboard)

            if(moveCounter >= 9 && !result){
                console.log('Game tied')
                return
            }
            
            if(result){
                if(Gameboard.player1.marker === marker) console.log('Player 1 wins')
                else console.log('Player 2 wins')
                return
            }
            
        }

        const {spot, move} = playRound(playerTurn)

        if(!Gameboard.gameboard[spot] && 0 <= spot && spot < 9){
            Gameboard.gameboard[spot] = move
            playerTurn = playerTurn > 1 ? 1 : 2
    
            moveCounter++

        }
        else{
            alert('Spot unavailable, re-enter')
        }

        console.log(Gameboard.gameboard)
    }
}

function checkWin(winArr, gameArr){
    
    let result = false
    let marker = undefined

    winArr.forEach(arr => {
        const marker1 = gameArr[arr[0]]
        const marker2 = gameArr[arr[1]]
        const marker3 = gameArr[arr[2]]
        
        if(marker1 && marker2 && marker3){
            if((marker1 == marker2) && (marker2 == marker3)){
                    result = true
                    marker = marker1
                    return
            }
        }
    })
    return {result, marker}
}

function playRound(player){
    const spot = +prompt("Select spot")
    const move = prompt(`player ${player} enter your move`)
    return {spot, move}
}

playGame()
