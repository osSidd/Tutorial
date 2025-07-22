"use strict"

import { checkMove, getGameStatus, getMarker, incrementMoveCounter, markSpot, playRound, resetBoard, setSpot } from "./script.js"

const tiles = document.querySelectorAll('.tiles')
const resetBtn = document.querySelector('.reset-btn')

function tileHandler(e){
    const index = +e.target.dataset.index
    
    if(checkMove(index)){
        const marker = getMarker()
        setSpot(index)
        markSpot(index, marker)
        incrementMoveCounter()

        e.target.textContent = marker

        playRound()
        
        const gameover = getGameStatus()
        if(gameover) removeHandler()
    }
    else alert('spot unavailable')
    
}

function addTilesHandler(){
    tiles.forEach(tile => {
        tile.textContent = ''
        tile.addEventListener('click', tileHandler)
    })
}

function removeHandler(){
    tiles.forEach(tile => tile.removeEventListener('click', tileHandler))
}

function resetGame(){
    resetBoard()
    addTilesHandler()
}

resetBtn.addEventListener('click', resetGame)

addTilesHandler()