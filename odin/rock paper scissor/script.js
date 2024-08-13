function playGame(){

    const options = ["rock", "paper", "scissor"];
    let humanScore = 0, computerScore = 0;
    
    function getComputerChoice(){
        return options[Math.floor(Math.random()*3)];
    }
    
    function getHumanChoice(){
        const choice = +prompt("Enter a choice 0 = rock, 1 = paper, 2 = scissor");
        // Assuming the user enters a valid choice
        return options[choice];
    }
    
    function playRound(humanChoice, computerChoice){
        switch(humanChoice){
            case 'rock':
                if(computerChoice === 'scissor') humanScore++
                else if(computerChoice === 'paper') computerScore++
                break;
            
            case 'paper':
                if(computerChoice === 'scissor') computerScore++
                else if(computerChoice === 'rock') humanScore++
                break;
            
            case 'scissor':
                if(computerChoice === 'paper') humanScore++
                else if(computerChoice === 'rock') computerScore++
        }
    }

    for(let i = 1; i<= 5; i++){
        
        console.log('Round ' + i)

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice)

        console.log(`Human's choice = ${humanChoice}, computer's choice = ${computerChoice}`)
        console.log(`Human's score = ${humanScore}, computer's score = ${computerScore}`)

    }

    if(humanScore > computerScore) console.log('human wins')
    else if(humanScore < computerScore) console.log('computer wins')
    else console.log('draw')
}

playGame();
