let amountOfDifferentActions = 3; // Rock, Paper, Scissors
let roundsInAGame = 5;

function computerPlay(){
    let move = Math.floor(Math.random() * amountOfDifferentActions);
    switch(move){
        case 0: 
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2: 
            return "Scissors";
            break;
        default:
            return "Error in random number generation";
    }
}

function playRound(playerSelection, computerSelection){
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return `It's a draw! ${playerSelection} equals ${computerSelection}`
    }
    else if (playerSelection == "rock"){
        if (computerSelection == "scissors"){
            return `You won! Rock beats Scissors!`;
        }
        else if (computerSelection == "paper"){
            return `You lost... Rock loses to Paper.`;
        }   
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            return `You won! Paper beats Rock!`;
        }   
        else if (computerSelection == "scissors"){
            return `You lost... Paper loses to Scissors`;
        }
     }
     else if (playerSelection == "scissors"){
         if (computerSelection == "paper"){
             return `You won! Scissors beat paper!`;
         }
         else if (computerSelection == "rock"){
             return `Ỳou lost... Scissors lose to Rock`;
         }
     }
    return "Error, this line should never be reached.";
}

function game(){
    let currentRound = 1;
    while (currentRound <= roundsInAGame){
        let playerSelection = prompt(`Rock Paper or Scissors? ${roundsInAGame - currentRound} rounds left.`);
        if (validateInput(playerSelection)){
            let computerSelection = computerPlay();
            console.log(playRound(playerSelection, computerSelection));
            currentRound++;
        }
    }
}

function validateInput(input){
    if (input === null) {
        return false;
    }
    input = input.toLowerCase();
    if (input == "rock" || input == "paper" || input == "scissors"){
        return true;
    }
    else {
        console.log("Please input Rock Paper or Scissors");
        return false;
    }
}

game();