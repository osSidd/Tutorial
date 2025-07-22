"use strict"
console.log('Tic tac toe game')

const Player = function(name, marker){
    return {name, marker} 
}

const Gameboard = (function(){
    const gameboard = generateGameboard()

    const player1 = Player('Sam', 'x')
    const player2 = Player('John', 'o')

    let moveCounter = 0

    return {gameboard, moveCounter, player1, player2}
})()

const Gameover = (function(){
    const status = false
    return {status}
})()

function playRound(){
    
    togglePlayerTurn()

    if(Gameboard.moveCounter >= 5){
        const {result, marker} = checkWin(Gameboard.gameboard)

        if(Gameboard.moveCounter >= 9 && !result){
            alert('Game tied')
            Gameover.status = true
            return
        }
        
        if(result){
            if(Gameboard.player1.marker === marker) alert('Player 1 wins')
            else alert('Player 2 wins')
            Gameover.status = true
            return
        }
    }
}

function checkWin(gameArr){

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
    
    let result = false
    let marker = undefined

    winCombination.forEach(arr => {
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

const playerMove = (function(){
    const marker = Gameboard.player1.marker
    const spot = null
    const playerOneTurn = true

    return {marker, spot, playerOneTurn}
})()

function generateGameboard(){
    return Array.from(new Array(9), () => undefined)
}

function togglePlayerTurn(){
    let marker
    let turn
    
    if (playerMove.playerOneTurn){
        marker = Gameboard.player2.marker
        turn = false
    }else{
        marker = Gameboard.player1.marker
        turn = true
    }

    playerMove.marker = marker
    playerMove.playerOneTurn = turn
}

function checkMove(spot){
    if(Gameboard.gameboard[spot])
        return false
    return true
}

function markSpot(spot, marker){
    Gameboard.gameboard[spot] = marker
}

function setSpot(spot){
    playerMove.spot = spot
}

function getMarker(){
    return playerMove.marker
}

function incrementMoveCounter(){
    Gameboard.moveCounter++
}

function getGameStatus(){
    return Gameover.status
}

function resetBoard(){
    Gameover.status = false
    Gameboard.moveCounter = 0
    Gameboard.gameboard = generateGameboard()

    playerMove.marker = Gameboard.player1.marker
    playerMove.spot = null
    playerMove.playerOneTurn = true
}

export {
    playerMove,
    checkMove,
    markSpot,
    setSpot,
    getMarker,
    incrementMoveCounter,
    playRound,
    getGameStatus,
    resetBoard,
}
