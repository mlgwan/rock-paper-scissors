let amountOfDifferentActions = 3; // Rock, Paper, Scissors
//let roundsInAGame = 5;
let currentRound = 0;
let playerScore = 0;
let computerScore = 0;
let playerInput = "";

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const display = document.getElementById("display");
const scoreBoard = document.getElementById("score-board");

changeDisplay("Welcome to Rock Paper Scissors! Make a selection to begin.");

rockButton.addEventListener("click", prepareRound);
paperButton.addEventListener("click", prepareRound);
scissorsButton.addEventListener("click", prepareRound);

function prepareRound(e){
    playerInput = e.srcElement.id;
    let computerSelection = computerPlay();
    if (currentRound === 0) {
        currentRound = 1;
        changeDisplay(playRound(playerInput, computerSelection));
        currentRound++;
    }
    else  {
        changeDisplay(playRound(playerInput, computerSelection));
        currentRound++;
    }

    if (playerScore === 5 || computerScore === 5){
        endGame();
    }
    else {
            updateScoreBoard();
    }

}

function computerPlay(){
    let move = Math.floor(Math.random() * amountOfDifferentActions);
    switch(move){
        case 0: 
            return "Rock";
        case 1:
            return "Paper";
        case 2: 
            return "Scissors";
        default:
            return "Error in random number generation";
    }
}

function playRound(playerSelection, computerSelection){
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        playerSelection = playerSelection.replace(playerSelection.charAt(0), playerSelection.charAt(0).toUpperCase());
        computerSelection = computerSelection.replace(computerSelection.charAt(0), computerSelection.charAt(0).toUpperCase());
        return `It's a draw! ${playerSelection} equals ${computerSelection}`
    }
    else if (playerSelection == "rock"){
        if (computerSelection == "scissors"){
            playerScore++;
            return `You won! Rock beats Scissors!`;
        }
        else if (computerSelection == "paper"){
            computerScore++;
            return `You lost... Rock loses to Paper.`;
        }   
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            playerScore++;
            return `You won! Paper beats Rock!`;
        }   
        else if (computerSelection == "scissors"){
            computerScore++;
            return `You lost... Paper loses to Scissors`;
        }
     }
     else if (playerSelection == "scissors"){
         if (computerSelection == "paper"){
            playerScore++;
            return `You won! Scissors beat paper!`;
         }
         else if (computerSelection == "rock"){
            computerScore++;
            return `You lost... Scissors lose to Rock`;
         }
     }
    return "Error, this line should never be reached.";
}



function changeDisplay(message){
    display.innerText = message;
}

function updateScoreBoard(){
    scoreBoard.innerText = `Player: ${playerScore} \n Computer: ${computerScore}`;
}

function endGame(){
    playerScore > computerScore ? changeDisplay("You won!") : changeDisplay("You lost...");
    updateScoreBoard();
    playerScore = 0;
    computerScore = 0;
}

// The folllowing functions were in use when the game was console based 

// function game(){
//     let currentRound = 1;
//     while (currentRound <= roundsInAGame){
//         let playerSelection = prompt(`Rock Paper or Scissors? ${roundsInAGame - currentRound} rounds left.`);
//         if (validateInput(playerSelection)){
//             let computerSelection = computerPlay();
//             console.log(playRound(playerSelection, computerSelection));
//             currentRound++;
//         }
//     }
// }

// function validateInput(input){
//     if (input === null) {
//         return false;
//     }
//     input = input.toLowerCase();
//     if (input == "rock" || input == "paper" || input == "scissors"){
//         return true;
//     }
//     else {
//         console.log("Please input Rock Paper or Scissors");
//         return false;
//     }
// }